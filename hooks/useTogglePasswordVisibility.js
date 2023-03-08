import { useState } from 'react';

const SHOW = 'show';
const HIDE = 'hide';
export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState(SHOW);

  const handlePasswordVisibility = () => {
    if (rightIcon === SHOW) {
      setRightIcon(HIDE);
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === HIDE) {
      setRightIcon(SHOW);
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
