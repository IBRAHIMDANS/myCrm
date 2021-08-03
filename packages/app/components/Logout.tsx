import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { useDispatch } from "react-redux";
import { usersActions } from "../actions";
import styled from "styled-components";

const Root = styled.div`
  @media only screen and (max-width: 600px) {
   .app-logout {
     height: 20px;
     width: 20px;
   }
  }
`;
const Logout = () => {
  const uDispatch = useDispatch();
  return (<Root>
      <Tooltip
        title="Se deconnecter"
        aria-label="Se deconnecter"
      >
        <IconButton
          onClick={() => {
            uDispatch(usersActions.logout());
          }}
        >
          <LockIcon color={"secondary"}  className={"app-logout"}/>
        </IconButton>
      </Tooltip>
    </Root>
  );
};

export default Logout;
