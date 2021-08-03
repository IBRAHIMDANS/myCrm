import React from "react";
import MessageItem from "./MessageItem";
import { Grid, List, Typography } from "@material-ui/core";
import { messagesActions } from "../actions";
import { Messages } from "../dto";
import { history } from "../utils/history";

const MessageList = ({ messages, uDispatch }: any) => {
  return (<List>
    {messages?.length === 0 &&
    <Grid container justify={"center"}>
      <Typography> Pas de Message pour l'instant 🥲 </Typography>
    </Grid>
    }
    {messages?.map((message: Messages) =>
      <MessageItem
        key={message.id}
        message={message}
        button
        onClick={() => {
          !message.isRead &&
          uDispatch(messagesActions.update({
            id: message.id,
            isRead: true,
          }));
          !message.isRead && window.location.reload();
          history.push(`?messageId=${message.id}`, undefined, { shallow: true });
        }}
      />,
    )}
  </List>);
};
export default MessageList;
