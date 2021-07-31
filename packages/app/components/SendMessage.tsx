import React from "react";
import { Button, Grid } from "@material-ui/core";
import styled from "styled-components";

const Root = styled(Grid)`
  margin: 1em;
`;
const SendMessageBtn = (props: any) => {
  return (
    <Root container justifyContent={"flex-end"}>
      <Button variant={"outlined"} {...props}> Send Message </Button>
    </Root>
  );
};

export default SendMessageBtn;
