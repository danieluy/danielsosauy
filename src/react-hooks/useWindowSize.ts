import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleChange = debounce(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 100);

  useEffect(() => {
    window.addEventListener('resize', handleChange);
    return () => window.removeEventListener('resize', handleChange);
  }, []);

  return [width, height];
}

export default useWindowSize;
