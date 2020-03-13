import color from './color';
import misc from './misc';

const hover = {
  boxShadow: misc.bumpBoxShadow,
  backgroundColor: color.lighterGrey,
  outline: 'none',
};

const active = {
  boxShadow: 'none',
};

const pressed = {
  borderRadius: misc.innerBorderRadius,
  boxShadow: misc.insetBoxShadow,
};

export default {
  all: 'unset',
  textDecoration: 'none',
  padding: '1rem 1.3rem',
  cursor: 'pointer',
  display: 'inline-block',
  borderRadius: misc.innerBorderRadius,
  transition: 'box-shadow 300ms ease-in-out, background-color 300ms ease-in-out',
  '&:hover': hover,
  '&:focus': hover,
  '&:active': active,
  '&.pressed': pressed,
};
