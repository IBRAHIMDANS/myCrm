import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Grid,
  Hidden,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import { NameTypography } from "./MessageItem";
import { MessageIcon } from "./MessageIcon";
import { format } from "date-fns";
import FrenchLocale from "date-fns/locale/fr";
import Markdown from "react-markdown";
import { history } from "../utils/history";
import { useDispatch, useSelector } from "react-redux";
import { messagesActions } from "../actions";
import { GlassMorphismPaper } from "../styles/GlassMorphism";

const Root = styled(Grid)`
  padding: 0 0 1em 1em;
  @media only screen and (max-width: 600px) {
    padding: 1em;
  }

  .userInfo {
    padding: 2em;
    margin-bottom: 1em;
  }

  .MuiListItem-button {
    padding: 10px;
  }

  .app-phoneNumber {
    color: #21b3d3;
  }

  .app-hour {
    color: #8a8989;
    font-size: 12px;
    line-height: 14px;
  }

  .margin {
    margin: 10px 28px 10px;
  }

  .app-content {
    color: #777;
  }
`;
// const getMessage = (messages: (Messages[] | undefined)): any => messages?.find(item => item?.id === history?.query?.messageId);
const StyledButton = styled(Button)`
  width: 173px;
  height: 67px;
  background: #cef0ff;
  border: 1px solid #7bdef3;
  box-sizing: border-box;
  border-radius: 5px;
`;
const StyledPaper = styled(Paper)`
  ${GlassMorphismPaper}
`;
const MessageView = () => {
  const uDispatch = useDispatch();

  useEffect(() => {
    if (history.query.messageId) uDispatch(messagesActions.getById(history?.query?.messageId));
  }, [typeof window !== 'undefined' && history.query?.messageId]);

  const { message } = useSelector(({ message }: any) => message);
  if (!message) return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
    > <Typography variant={"h5"}> Veuillez selectionner un message
      ✉️ </Typography></Grid>);
  return (
    <Root container direction={"column"}>
      <StyledPaper className={"userInfo"}>
        <NameTypography isread={message?.isRead}> {message?.receiverUser?.firstName} {message?.receiverUser?.lastName} </NameTypography>
        <ListItem
          button
          key="Email"
          component="a"
          href={`mailto:${message?.receiverUser?.email}`}
        >{message?.receiverUser?.email} </ListItem>
        <Typography color={"textPrimary"}> </Typography>
        <ListItem
          className={"app-phoneNumber"}
          button
          key="NumberPhone"
          component="a"
          href={`tel:${message?.receiverUser?.phoneNumber}`}
        >{message?.receiverUser?.phoneNumber} </ListItem>
      </StyledPaper>
      <StyledPaper className={"userInfo"}>
        <Grid container spacing={2}>
          <MessageIcon isMessage={message?.isMessage} isRead={message?.isRead}/>
          <NameTypography isread={message?.isRead}> {message?.receiverUser?.firstName} {message?.receiverUser?.lastName} </NameTypography>
        </Grid>
        <Grid>
          <Typography className={"app-email margin"}> {message?.receiverUser?.email}</Typography>
          <Typography className={"app-hour margin"}>{format(new Date(), "EEEE dd LLLL HH:mm", { locale: FrenchLocale })
            .toUpperCase()}</Typography>
        </Grid>
        <Markdown className={"app-content"}>{message?.content}</Markdown>
      </StyledPaper>
      <Hidden smUp>
        <Grid container justifyContent={"flex-end"}>
          <StyledButton onClick={() => history.back()}>
            Revenir en arriere
          </StyledButton>
        </Grid>
      </Hidden>
    </Root>
  );
};

export default MessageView;
