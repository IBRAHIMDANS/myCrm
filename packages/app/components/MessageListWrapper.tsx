import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { messagesActions } from "../actions";
import { TabPanelProps } from "@material-ui/lab";
import MessageList from "./MessageList";

function TabPanel(props: TabPanelProps | any) {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MessageListWrapper = () => {
  const uDispatch = useDispatch();
  const messagesSender = useSelector(({ messagesSender }: any) => messagesSender?.messages);
  const messagesReceive = useSelector(({ messagesReceive }: any) => messagesReceive?.messages);
  const [tabValues, setTabValues] = useState<number>(0);
  useEffect(() => {
    uDispatch(messagesActions.getAllReceive());
    uDispatch(messagesActions.getAllSender());
  }, []);
  return (
    <>
      <Tabs
        value={tabValues}
        indicatorColor="primary"
        textColor="primary"
        onChange={(_, newValues) => setTabValues(newValues)}
        centered
        variant="fullWidth"
      >
        <Tab label="Message Reçu"/>
        <Tab label="Message Envoyé"/>
      </Tabs>
      <TabPanel value={tabValues} index={0}>
        <MessageList messages={messagesReceive} uDispatch={uDispatch}/>
      </TabPanel>
      <TabPanel value={tabValues} index={1}>
        <MessageList messages={messagesSender} uDispatch={uDispatch}/>
      </TabPanel>

    </>
  );
};

export default MessageListWrapper;
