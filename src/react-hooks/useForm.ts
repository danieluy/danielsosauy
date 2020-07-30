import { useState, useCallback, useMemo } from 'react';

declare type FormValidator = (value: Value, values?: ValueHash) => Error | null;
declare type FormValidatorObject = { [name: string]: FormValidator };

declare type Value = string | number | boolean | null;
declare type ValueHash = { [name: string]: Value };

declare type ErrorHash = { [name: string]: Error | null };

interface IValidationResult {
  valid: boolean,
  errors: ErrorHash,
};

export interface IFormSchema {
  [name: string]: IFormSchemaProp,
}

interface IFormSchemaProp {
  type: StringConstructor | NumberConstructor | BooleanConstructor,
  required?: boolean
  default?: Value
  validator?: FormValidator,
}

interface IOptions {
  validateOnSubmit?: boolean
}

interface IFormEvent {
  target: {
    name: string,
    value: Value,
  }
}

function useForm(schema: IFormSchema, _options?: IOptions)
  : [ValueHash, ErrorHash, (event: IFormEvent) => void, () => IValidationResult, () => void] {
  const [values, setValues] = useState<ValueHash>(getDefautlValues(schema));
  const [errors, setErrors] = useState<ErrorHash>(getDefautlErrors(schema));
  const validators = useMemo<FormValidatorObject>(() => getValidators(schema), [schema]);
  const options = ({ ..._options } as IOptions);

  const defaultValues = useMemo(() => getDefautlValues(schema), [schema]);

  const onChange = useCallback((evt: IFormEvent): void => {
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

  const validate = useCallback((): IValidationResult => {
    let foundErrors = false;
    const _errors: ErrorHash = {};
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

function getDefautlValues(schema: IFormSchema): ValueHash {
  const defaultValues: ValueHash = {};
  Object.keys(schema).forEach(key => {
    defaultValues[key] = getDefautlValue(schema[key]);
  });
  return defaultValues;
}

function getDefautlValue(schemaItem: IFormSchemaProp): Value {
  if (typeof schemaItem.default !== 'undefined') {
    return schemaItem.default;
  }
  return null;
}

function getDefautlErrors(schema: IFormSchema): ErrorHash {
  const errors: ErrorHash = {};
  Object.keys(schema).forEach(key => {
    errors[key] = null;
  });
  return errors;
}

function getValidators(schema: IFormSchema): FormValidatorObject {
  const validators: FormValidatorObject = {};
  Object.keys(schema).forEach(key => {
    validators[key] = getValidator(schema[key]);
  });
  return validators;
}

function getValidator(schemaItem: IFormSchemaProp | StringConstructor | NumberConstructor | BooleanConstructor) {
  let validator: FormValidator = () => null;
  if (schemaItem === String) {
    validator = value => {
      if (typeof value !== 'string') {
        return new Error('Expected type String');
      }
      return null;
    };
  }
  else if (schemaItem === Number) {
    validator = value => {
      if (typeof value !== 'number') {
        return new Error('Expected type Number');
      }
      return null;
    };
  }
  else if (schemaItem === Boolean) {
    validator = value => {
      if (typeof value !== 'boolean') {
        return new Error('Expected type Boolean');
      }
      return null;
    };
  }
  else if (typeof (schemaItem as IFormSchemaProp).validator === 'function') {
    validator = (schemaItem as IFormSchemaProp).validator || (() => null);
  }
  else {
    validator = getValidator((schemaItem as IFormSchemaProp).type);
  }
  if ((schemaItem as IFormSchemaProp).required === true) {
    return (value: Value) => {
      if (!value && value !== 0) {
        return new Error('Required');
      }
      return validator(value);
    };
  }
  return validator;
}