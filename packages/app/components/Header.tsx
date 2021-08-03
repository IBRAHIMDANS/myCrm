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
import UserManager from "./userManager";
import Logout from "./Logout";
import MessagesCounter from "./MessageCounter";
import isDesktop from "../hooks/isDesktop";

const Root = styled.div`
  .app-manager {
    border-left: 4px solid white;
  }
  .app-message-counter-mobile {
    margin-right: 5px;
  }
`;
const LinkCustom = styled(Link)`
  @media only screen and (max-width: 600px) {
    margin: 0 5px;
  }
  margin: 0 1em;

  & :hover {
    text-decoration: none;
    cursor: pointer;
  }
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
const isMobile= () => !isDesktop()
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
                  <Typography
                    variant={isMobile() ? "body1" :
                      "h6"} color={"inherit"}
                  >CRM APP </Typography>
                </LinkCustom>
                {!isMobile() && <MessagesCounter/> }
              </Grid>
            </Grid>
            <Grid item >
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item hidden={!isMobile()} className={"app-message-counter-mobile"}>
                  <MessagesCounter/>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    className={"app-manager"}
                  >
                    <UserManager/>
                    <Logout/>
                  </Grid>
                </Grid>
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
