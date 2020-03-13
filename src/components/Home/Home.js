import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useStyles from './styles';
// Components
import Article from '../Article/Article';
import StyleToggle from '../StyleToggle/StyleToggle';

function Home(props) {
  const { lang } = props;
  const classes = useStyles();
  const { whatWhy, accessibility } = lang.articles;

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <Article title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
        <Article title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
      </main>
      <aside className={classes.aside}>
        <StyleToggle />
      </aside>
    </div>
  );
}

Home.proptypes = {
  lang: PropTypes.object.isRequired,
};

const ConnectedHome = connect(mapStateToProps)(Home);
export default ConnectedHome;

function mapStateToProps(state) {
  return {
    lang: state.lang.home,
  };
}
