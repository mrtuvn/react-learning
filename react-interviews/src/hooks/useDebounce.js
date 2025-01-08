import React from "react";

export const useDebounce = (text, delay = 1000) => {
  const [debounced, setDebounced] = React.useState(text);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return debounced;
};
