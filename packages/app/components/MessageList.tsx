import React from "react";
import MessageItem from "./MessageItem";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { List } from "@material-ui/core";

const Root = styled(List)`

`;
const MessageList = () => {
  const uDispatch = useDispatch();
  return (
    <Root>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
      <MessageItem button onClick={() => console.log("message click")}/>
    </Root>
  );
};

export default MessageList;
