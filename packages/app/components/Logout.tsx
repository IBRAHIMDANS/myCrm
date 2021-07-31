import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { useDispatch } from "react-redux";
import { usersActions } from "../actions";

const Logout = () => {
  const uDispatch = useDispatch()
  return (
    <Tooltip title="Se deconnecter" aria-label="Se deconnecter">
      <IconButton onClick={() =>{
        uDispatch(usersActions.logout())
      }}>
        <LockIcon color={"secondary"}/>
      </IconButton>
    </Tooltip>
  );
};

export default Logout;
