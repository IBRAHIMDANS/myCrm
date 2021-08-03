import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { alertActions, usersActions } from "../../actions";
import { Login as LoginPayload } from "../../dto";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import Link from "next/link";

const Root = styled(Grid)``;
const PaperStyled = styled(Paper)`
  min-width: 500px;
  padding: 1em;
  margin: 1em;

`;
const ButtonStyled = styled(Button)`
  margin: 1em;
`;
const BlueLink = styled.a`
  font-weight: bold;
  color: blue;
  cursor: pointer;
`;
const Login: any = () => {

  const LoginForm: LoginPayload = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const { loggingIn = false } = useSelector((state: any) => state.authentication);
  let { message } = useSelector(({ alert }: any) => alert);
  message && setTimeout(() => {
    dispatch(alertActions.clear());
  }, 1000);

  return (
    <Root
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <PaperStyled elevation={3} variant="outlined">
        <Grid container justifyContent={"center"}>
          <Avatar>
            <PersonIcon/>
          </Avatar>
          <Formik
            initialValues={LoginForm}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Email  is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values, actions) => {
              dispatch(usersActions.login({
                email: values.email,
                password: values.password,
              }));
              actions.setSubmitting(false);
              // actions.resetForm();
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <Grid container justifyContent={"center"} direction={"column"}>
                <TextField
                  label="Email"
                  value={values.email}
                  onBlur={handleBlur("email")}
                  onChange={handleChange("email")}
                />
                {errors.email && touched.email && (
                  <p
                    style={{ fontSize: 10, color: "red" }}
                  >
                    {errors.email}
                  </p>
                )}
                <TextField
                  label="Password"
                  value={values.password}
                  type="password"
                  autoComplete="current-password"
                  onBlur={handleBlur("password")}
                  onChange={handleChange("password")}
                />
                {errors.password && touched.password && (
                  <p
                    style={{ fontSize: 10, color: "red" }}
                  >
                    {errors.password}
                  </p>
                )}
                {!loggingIn ?
                  <ButtonStyled
                    disabled={!isValid}
                    variant={"outlined"}
                    onClick={() => handleSubmit()}
                  >
                    Login
                  </ButtonStyled>
                  :
                  <Grid
                    container
                    justifyContent={"center"}
                    style={{ padding: "1em" }}
                  >
                    <CircularProgress/>
                  </Grid>
                }
              </Grid>
            )}
          </Formik>
          <Grid container justifyContent={"center"}>
            <Typography color={"error"}>
              {message}
            </Typography>
          </Grid>
          <Link href="/register"><BlueLink>Register</BlueLink></Link>
        </Grid>
      </PaperStyled>
    </Root>
  );
};
Login.layout = null;
export default Login;
