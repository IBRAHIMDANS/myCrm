import React from "react";
import MessageList from "./MessageList";
import styled from "styled-components";
import { Button, Grid, Paper } from "@material-ui/core";
import MessageView from "./MessageView";

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
      <Grid item xs={3}>
        <PaperStyled>
          <MessageList/>
        </PaperStyled>
      </Grid>
      <Grid item xs>
        <MessageView/>
      </Grid>
    </Root>
  );
};

export default DesktopView;
