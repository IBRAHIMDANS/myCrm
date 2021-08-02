import React, { useEffect } from "react";
import { Avatar, Grid, MenuItem, Select, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../actions";
import { Users } from "../dto";

const Root = styled(Grid)`

  ul.MuiList-root.MuiMenu-list.MuiList-padding {
    padding: 0 !important;
  }

`;
const StyledText = styled(Typography)`
  margin-left: 1em;
`;
const StyledSelect = styled(Select)`
  padding: 0 1em;
  border-left: 4px solid white;

  &.MuiInput-underline:before {
    border-bottom: none;
  }

  &.MuiInput-underline:hover:before {
    border-bottom: none;
  }

  &.MuiInput-underline:after {
    border-bottom: none;
  }


  .MuiSelect-icon {
    color: white;
  }

`;


const UserManager = (props:any) => {
  const uDispatch = useDispatch();
  useEffect(() => {
    uDispatch(usersActions.getAll());
  }, []);
  const userConnectedID = useSelector((state: any) => state?.authentication?.user?.id);

  const [user, setUser] = React.useState(userConnectedID || "");
  const [open, setOpen] = React.useState(false);


  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUser(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const { items: users } = useSelector((state: any) => state.users);
  console.log(user, "user selected");
  return (
    <Root item>
      <StyledSelect
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={user}
        onChange={handleChange}
        {...props}
      >
        {users && users.map((user: Users) => <MenuItem
            key={user?.id}
            value={user?.id}
            // disabled={userConnectedID !== user?.id}
          >
            <Grid container alignItems={"center"}>
              <Avatar><PersonIcon/></Avatar>
              <StyledText color={"secondary"}>{`${user.firstName} ${user?.lastName?.toUpperCase()}`}</StyledText>
            </Grid>
          </MenuItem>,
        )}
      </StyledSelect>
    </Root>
  );
};

export default UserManager;
