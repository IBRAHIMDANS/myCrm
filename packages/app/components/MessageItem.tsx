import React from "react";
import styled from "styled-components";
import { Divider, Grid, ListItem, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DraftsIcon from "@material-ui/icons/Drafts";
import { format } from "date-fns";
import { MessageIcon } from "./MessageIcon";

const Root = styled(Grid)`
  margin: 1em;
`;
export const NameTypography: any = styled(Typography)`
  font-weight: ${({ isread }: any) => isread && "bold"};
  font-size: 18px;
  line-height: 21px;
  margin: 0 10px;
`;
const ContentTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 300px;
  font-size: 14px;
  line-height: 16px;
  color: #777777;
  text-overflow: ellipsis;
  word-wrap: break-word;
  max-height: 3.6em;
`;



const MessageItem = (props: any) => {
  const {
    isMessage = true,
    firstName = "Mike",
    lastName = "Hatfield",
    content = "J'aimerais connaitre le suivi de ma commande 124324 , pouvez vous m'en dire plus ?J'aimerais connaitre le suivi de ma commande 124324 , pouvez vous m'en dire plus ?J'aimerais connaitre le suivi de ma commande 124324 , pouvez vous m'en dire plus ?",
    createdAt = "12/04/2022 11:15",
    isRead = false,
  } = props;
  return (
    <ListItem {...props} divider>
      <Root container direction={"row"}>
        <Grid item>
          <Grid container alignItems={"center"}>
            <MessageIcon isMessage={isMessage} isRead={isRead}/>
            {(firstName || lastName) &&
            <NameTypography isread={isRead}> {firstName || ""} {lastName || ""} </NameTypography>}
          </Grid>
          {content && <ContentTypography>{content}</ContentTypography>}
        </Grid>
        <Grid item>
          <Typography>{format(new Date(), "HH : mm")}</Typography>
        </Grid>
        <Divider/>
      </Root>
    </ListItem>
  );
};

export default MessageItem;
