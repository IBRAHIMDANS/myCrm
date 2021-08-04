import React, { useEffect } from "react";
import {
  Avatar,
  Grid,
  Hidden,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../actions";
import { Users } from "../dto";

const Root = styled(Grid)`

  ul.MuiList-root.MuiMenu-list.MuiList-padding {
    padding: 0 !important;
  }

  @media only screen and (max-width: 600px) {
    .app-avatar {
      height: 20px;
      width: 20px;
      font-size: 12px;
    }
  }
`;
const StyledText = styled(Typography)`
  margin-left: 1em;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
const StyledSubTitle = styled(Typography)`
  font-size: 1rem;
  line-height: 12px;
  margin-left: 1em;
  color: #9b9696;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
const StyledSelect = styled(Select)`
  padding: 0 1em;

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


const UserManager = (props: any) => {
  const uDispatch = useDispatch();
  useEffect(() => {
    uDispatch(usersActions.getAll());
  }, []);
  const userConnectedID = useSelector((state: any) => state?.authentication?.user?.id);

  const [user, setUser] = React.useState(userConnectedID);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUser(event.target.value);
    uDispatch(usersActions.switchUser(event.target.value as string));
    window.location.reload();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const { items: users } = useSelector((state: any) => state.users);
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
          >
            <Grid container alignItems={"center"} alignContent={"center"}>
              <Hidden smDown={open}>
                <Avatar className={"app-avatar"}>{user?.firstName?.slice(0, 1)}</Avatar>
              </Hidden>
              <Hidden smDown={!open}>
                <Grid item>
                  <Grid container direction={"column"}>
                    <Grid item>
                      <StyledText color={"secondary"}>{`${user?.firstName} ${user?.lastName?.toUpperCase()}`}</StyledText>
                    </Grid>
                    {
                      user?.isAdmin && (
                        <Grid item><StyledSubTitle>Admin</StyledSubTitle></Grid>)
                    }
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </MenuItem>,
        )}
      </StyledSelect>
    </Root>
  );
};

export default UserManager;
