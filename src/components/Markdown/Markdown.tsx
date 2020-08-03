import React, { useMemo } from 'react';
import useStyles from './styles';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  xhtmlOut: true,
  breaks: true,
});

interface Props {
  markdown: string,
}

function Markdown({ markdown }: Props) {
  const classes = useStyles();
  const html = useMemo(() => md.render(markdown), [markdown]);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default Markdown;
