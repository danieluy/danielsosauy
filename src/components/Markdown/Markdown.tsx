import React, { useMemo } from 'react';
import useStyles from './styles';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  xhtmlOut: true,
  breaks: true,
});

const test = `
  Aunque la tecnología no fue lo último en lo que pensé, es la última en mencionarse porque no debe estar a la vista.
  Dicho esto, estas son las tecnologías más relevantes usadas en esta página:
  [HTML5](https://es.wikipedia.org/wiki/HTML5), estructuración de la página y articulación de las otras tecnologías involucradas.
  [JavaScript](https://es.wikipedia.org/wiki/JavaScript), utilizado principalmente para construir la interfaz de usuario en el lado del cliente, también hace posible la interacción de los usuarios con la página.
  [CSS](https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada), define y aplica los estilos y animaciones que enriquecen la interacción de los usuarios con el sitio.
  [React](https://es.reactjs.org/), librería JavaScript usada para construir la interfaz de usuario.
  [Redux](https://redux.js.org/), librería JavaScript usada para manejar el estado del idioma y la información general de la aplicación.
  [Webpack](https://webpack.js.org/), empaqueta y minifica los archivos JavaScript, así como otros recursos para optimizar la carga de recursos.
  [TypeScript](https://www.typescriptlang.org/), verificación de tipado y transpilación de código JavaScript
`;

function Markdown() {
  const classes = useStyles();
  const html = useMemo(() => md.render(test), []);
  return (
    <div className={classes.root} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default Markdown;
