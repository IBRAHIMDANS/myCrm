import { Grid, Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Messages } from "../dto";

const NotificationText = styled(Typography)`
  margin: 0 0 0 1em;
  color: white;
  font-weight: bold;
`;
const CounterGrid = styled(Grid)`
  background-color: #21b3d3;
  padding: 3px 8px;

`;

const MessagesCounter = (props: any) => {
  const messages = useSelector(({ messagesReceive }: any) => messagesReceive?.messages);
  let [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setCounter(messages?.filter((message: Messages) => !message.isRead).length);
  }, [messages]);

  return <CounterGrid item>
    <Grid container alignItems={"center"}>
      <MailOutlineIcon color={"secondary"} htmlColor={"#fff"}/>
      <NotificationText> {counter} </NotificationText>
    </Grid>
  </CounterGrid>;
};
export default MessagesCounter;
