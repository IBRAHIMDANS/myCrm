import React from "react";
import styled from "styled-components";
import { Grid, ListItem, Paper, Typography } from "@material-ui/core";
import { NameTypography } from "./MessageItem";
import { MessageIcon } from "./MessageIcon";
import { format } from "date-fns";
import FrenchLocale from "date-fns/locale/fr";
import Markdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";

const Root = styled(Grid)`
  padding: 0 0 1em 1em;

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
const MessageView = () => {
  return (
    <Root container direction={"column"}>
      <Paper className={"userInfo"}>
        <NameTypography isread> Mike Hatfield </NameTypography>
        <ListItem
          button
          key="Email"
          component="a"
          href="mailto:admin@yopmail.com"
        >admin@yopmail.com </ListItem>
        <Typography color={"textPrimary"}> </Typography>
        <ListItem
          className={"app-phoneNumber"}
          button
          key="NumberPhone"
          component="a"
          href="tel:06 62 60 46 46"
        >06 62 60 46 46 </ListItem>
      </Paper>
      <Paper className={"userInfo"}>
        <Grid container spacing={2}>
          <MessageIcon/>
          <NameTypography isread> Mike Hatfield </NameTypography>
        </Grid>
        <Grid>
          <Typography className={"app-email margin"}> admin@yopmail.com</Typography>
          <Typography className={"app-hour margin"}>{format(new Date(), "EEEE dd LLLL HH:mm", { locale: FrenchLocale })
            .toUpperCase()}</Typography>
        </Grid>
        <Markdown  className={"app-content"}>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Animi commodi consequuntur delectus
          deserunt dolorum eveniet, fugit iste magni maiores maxime minima
          mollitia recusandae reiciendis sapiente totam veniam voluptates.
          Adipisci, aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ad doloremque ducimus earum eius et ex, iure minus pariatur
          reiciendis. Dignissimos ex quas reprehenderit sint? Asperiores esse
          quas sequi veniam vitae!
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Animi commodi consequuntur delectus
          deserunt dolorum eveniet, fugit iste magni maiores maxime minima
          mollitia recusandae reiciendis sapiente totam veniam voluptates.
          Adipisci, aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ad doloremque ducimus earum eius et ex, iure minus pariatur
          reiciendis. Dignissimos ex quas reprehenderit sint? Asperiores esse
          quas sequi veniam vitae!
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Animi commodi consequuntur delectus
          deserunt dolorum eveniet, fugit iste magni maiores maxime minima
          mollitia recusandae reiciendis sapiente totam veniam voluptates.
          Adipisci, aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ad doloremque ducimus earum eius et ex, iure minus pariatur
          reiciendis. Dignissimos ex quas reprehenderit sint? Asperiores esse
          quas sequi veniam vitae!


          Merci !
        </Markdown>
      </Paper>
    </Root>
  );
};

export default MessageView;
