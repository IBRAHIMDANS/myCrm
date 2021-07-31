import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import DraftsIcon from "@material-ui/icons/Drafts";
import PhoneIcon from "@material-ui/icons/Phone";

export function MessageIcon({ isMessage = true, isRead = false }) {
  return <React.Fragment>{isMessage ? !isRead ? <EmailIcon/> : <DraftsIcon/> :
    <PhoneIcon/>}</React.Fragment>;
}
