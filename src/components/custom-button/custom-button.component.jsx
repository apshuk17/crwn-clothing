import React from "react";

import { CustomButtonContainer } from './custom-button.styles';

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  ...otherProps
}) => {
  return (
    // <button
    //   className={`${inverted ? "inverted" : ""} ${
    //     isGoogleSignIn ? "google-sign-in" : ""
    //   } custom-button`}
    //   {...otherProps}
    // >
    //   {children}
    // </button>
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
