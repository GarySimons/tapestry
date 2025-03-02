import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface ButtonComponentProps extends ButtonProps {
  onClick: () => void;
  label: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  label,
  ...props
}) => {
  return (
    <Button onClick={onClick} {...props}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
