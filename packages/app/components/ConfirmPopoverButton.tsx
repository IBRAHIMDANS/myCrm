import React from "react";
import { Button, Grid, Popover } from "@material-ui/core";
import styled from "styled-components";

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
const ConfirmButton = styled(Button)`
  background-color: red;
  color: white;
  &:hover {
    color: black;
  }
`;
const PopoverButton = ({
  title = "Voulez vous supprimer ?",
  handleClick,
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
        variant="contained" color={"primary"}
        onClick={({ currentTarget }: any) => setAnchorEl(currentTarget)} {...props}> {title} </StyledButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transitionDuration={1000}
      >
        <Grid container>
          <Button
            color={"primary"}
            onClick={() => handleClose()}
          > Non</Button>
          <ConfirmButton
            color={"primary"}
            onClick={() => {
              handleClick();
              handleClose();
              window.location.reload()
            }}
          > Oui</ConfirmButton>
        </Grid>
      </Popover>
    </Root>
  );
};
export default PopoverButton;
