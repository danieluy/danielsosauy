export default {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validator: value => {
      if (value.match(/.+@.+\..+/)) {
        return null;
      }
      return new Error('#Invalid email');
    },
  },
  message: {
    type: String,
    required: true,
  },
};
