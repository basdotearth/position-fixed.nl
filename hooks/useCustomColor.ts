import { useEffect, useState } from 'react';

import { classMap, randomColor } from 'support';

const useCustomColor = (classes: string | string[]) => {
  const input = Array.isArray(classes) ? classes : [classes];
  const [className, setClassName] = useState<string>(classMap(input));
  useEffect(() => {
    setClassName(classMap([...input, randomColor()]));
  }, []);

  return className;
};

export default useCustomColor;