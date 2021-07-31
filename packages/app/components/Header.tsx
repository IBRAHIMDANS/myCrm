import {
  AppBar,
  Grid,
  Link,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import styled from "styled-components";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useState } from "react";
import UserManager from "./userManager";
import Logout from "./Logout";

const Root = styled.div`
`;
const LinkCustom = styled(Link)`
  margin: 0 1em;

  & :hover {
    text-decoration: none;
    cursor: pointer;
  }
`;
const NotificationText = styled(Typography)`
  margin: 0 0 0 1em;
  color: white;
  font-weight: bold;
`;
const CounterGrid = styled(Grid)`
  background-color: #21b3d3;
  padding: 3px 8px;

`;

function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const Header = (props: unknown) => {
  const [counter, setCounter] = useState<number>(3);
  return (
    <Root>
      <HideOnScroll {...props}>
        <AppBar color={"primary"}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Grid container>
                <LinkCustom href={"/"} color={"inherit"}>
                  <Typography variant="h6" color={"inherit"}>CRM
                    APP </Typography>
                </LinkCustom>
                <CounterGrid item>
                  <Grid container alignItems={"center"}>
                    <MailOutlineIcon htmlColor={"#fff"}/>
                    <NotificationText> {counter} </NotificationText>
                  </Grid>
                </CounterGrid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <UserManager/>
                <Logout/>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </HideOnScroll>
      <Toolbar/>
    </Root>
  );
};

export default Header;
