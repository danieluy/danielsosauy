import { useState, useCallback, useMemo } from 'react';

function useForm(schema, _options) {
  const [values, setValues] = useState(getDefautlValues(schema));
  const [errors, setErrors] = useState(getDefautlErrors(schema));
  const validators = useMemo(() => getValidators(schema), [schema]);
  const options = { ..._options };

  const defaultValues = useMemo(() => getDefautlValues(schema), [schema]);

  const onChange = useCallback(evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setErrors({
      ...errors,
      [name]: options.validateOnSubmit ? validators[name](value, values) : null,
    });
    setValues({
      ...values,
      [name]: value,
    });
  }, [errors, validators, values]);

  const validate = useCallback(() => {
    let foundErrors = false;
    const _errors = {};
    Object.keys(values).forEach(key => {
      const error = validators[key](values[key]);
      foundErrors = foundErrors || !!error;
      _errors[key] = error;
    });
    setErrors({
      ...errors,
      ..._errors,
    });
    return { valid: !foundErrors, errors: _errors };
  }, [errors, setErrors, values, validators]);

  const reset = useCallback(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  return [values, errors, onChange, validate, reset];
}

export default useForm;

function getDefautlValues(schema) {
  const defaultValues = {};
  Object.keys(schema).forEach(key => {
    defaultValues[key] = getDefautlValue(schema[key]);
  });
  return defaultValues;
}

function getDefautlValue(schemaItem) {
  if (typeof schemaItem.default !== 'undefined') {
    return schemaItem.default;
  }
  return null;
}

function getDefautlErrors(schema) {
  const errors = {};
  Object.keys(schema).forEach(key => {
    errors[key] = null;
  });
  return errors;
}

function getValidators(schema) {
  const validators = {};
  Object.keys(schema).forEach(key => {
    validators[key] = getValidator(schema[key]);
  });
  return validators;
}

function getValidator(schemaItem) {
  let validator = () => null;
  if (typeof schemaItem === 'function') {
    // schemaItem: [String, Number, Boolean]
    switch (schemaItem) {
      case String:
        validator = value => {
          if (typeof value !== 'string') {
            return new Error('Expected type String');
          }
          return null;
        };
        break;
      case Number:
        validator = value => {
          if (typeof value !== 'number') {
            return new Error('Expected type Number');
          }
          return null;
        };
        break;
      case Boolean:
        validator = value => {
          if (typeof value !== 'boolean') {
            return new Error('Expected type Boolean');
          }
          return null;
        };
        break;
      default:
        throw new Error('Invalid type. Expected one of [String, Number, Boolean]');
    }
  }
  else if (typeof schemaItem.validator === 'function') {
    validator = schemaItem.validator;
  }
  else if (schemaItem.type) {
    validator = getValidator(schemaItem.type);
  }
  if (schemaItem.required === true) {
    return value => {
      if (!value && value !== 0) {
        return new Error('Required');
      }
      return validator(value);
    };
  }
  return validator;
}