import React, { useEffect } from "react";
import MessageItem from "./MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { Grid, List, Typography } from "@material-ui/core";
import { messagesActions } from "../actions";
import { Messages } from "../dto";
import { history } from "../utils/history";

const MessageList = () => {
  const uDispatch = useDispatch();
  const { messages } = useSelector(({ messages }: any) => messages);
  useEffect(() => {
    uDispatch(messagesActions.getAll());
  }, []);
  return (
    <List>
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
          onClick={() => history.push("", { query: { messageId: message.id } }, { shallow: true })}
        />,
      )}
    </List>
  );
};

export default MessageList;
