import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
// Material UI
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function Subject({ subject }) {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar variant="square">
          <Typography color="textPrimary">{subject.score}</Typography>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={subject.name}
        secondary={subject.techs.join(' | ')}
        primaryTypographyProps={{
          color: 'textPrimary',
        }}
        secondaryTypographyProps={{
          color: 'textSecondary',
          fontSize: 'textPrimary',
        }}
      />
    </ListItem>
    // <pre>{JSON.stringify(subject, null, 2)}</pre>
  );
}

Subject.propTypes = {
  score: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default Subject;
