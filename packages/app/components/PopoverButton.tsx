import React from "react";
import { Button, Grid, Popover } from "@material-ui/core";
import styled from "styled-components";
import MessageForm from "./MessageForm";

const Root = styled(Grid)`
  margin: 1em;
`;

;const StyledButton = styled(Button)`
  box-sizing: border-box;
  border-radius: 5px;

  &:hover {
    color: white;
  }
`;
const PopoverButton = ({
  title = "Envoyé un message",
  color,
  message,
  ...props
}: any) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


  return (
    <Root container justifyContent={"flex-end"}>
      <StyledButton
        variant="contained" color={color || "primary"}
        onClick={({ currentTarget }: any) => setAnchorEl(currentTarget)} {...props}> {title} </StyledButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transitionDuration={1000}
      >
        <MessageForm message={message} handleClose={() => handleClose()} />
      </Popover>
    </Root>
  );
};
export default PopoverButton;
