export default {
  name: {
    type: String,
    required: true,
    default: process.env.NODE_ENV === 'development' ? 'Daniel Sosa' : undefined,
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
    default: process.env.NODE_ENV === 'development' ? 'danielsosa.uy@gmail.com' : undefined,
  },
  message: {
    type: String,
    required: true,
    default: process.env.NODE_ENV === 'development' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper orci eu fermentum convallis. Nullam sodales quis orci ut aliquam.' : undefined,
  },
};
