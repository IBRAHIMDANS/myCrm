import React from "react";
import MessageListWrapper from "./MessageListWrapper";
import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core";
import MessageView from "./MessageView";
import SendMessageBtn from "./SendMessage";

const Root = styled(Grid)`

`;
const PaperStyled = styled(Paper)`
  max-height: 100vh;
  overflow: auto;
  padding: 1em;
`;
const DesktopView = () => {
  return (
    <Root container>
      <SendMessageBtn/>
      <Grid item>
        <PaperStyled>
          <MessageListWrapper/>
        </PaperStyled>
      </Grid>
      <Grid item xs>
        <MessageView/>
      </Grid>
    </Root>
  );
};

export default DesktopView;
