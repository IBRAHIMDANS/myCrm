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
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../actions";
import styled, { css } from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import Link from "next/link";
import { Users } from "../../dto";
import { phoneRegExp } from "../../utils/utils";
import { GlassMorphismPaper } from "../../styles/GlassMorphism";

const Root = styled(Grid)`
  display: grid;
  grid-template-rows: 100vh;
  background: url('https://images.unsplash.com/photo-1587653811080-d5e7cd08c093?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80') fixed no-repeat;
  background-size: cover;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const PaperStyled = styled(Paper)`
  padding: 1em;
  margin: 1em;
  ${GlassMorphismPaper}
`;

const ButtonStyled = styled(Button)`
  margin: 1em;
`;

const BlueLink = styled.a`
  font-weight: bold;
  color: blue;
  cursor: pointer;
`;

const Register: any = () => {
  const UsersForm: Users = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const dispatch = useDispatch();
  const { loggingIn = false } = useSelector((state: any) => state.authentication);

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
            initialValues={UsersForm}
            validationSchema={Yup.object().shape({
              email: Yup.string().email().required("Email  is required"),
              password: Yup.string().required("Mot de passe is required"),
              firstName: Yup.string().required("Prénom  is required"),
              lastName: Yup.string().required("Nom  is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
              phoneNumber: Yup.string()
                .matches(phoneRegExp, {
                  message: "Numero de téléphone  is required.",
                  excludeEmptyString: false,
                }),
            })}
            onSubmit={(values, actions) => {
              dispatch(usersActions.register(values));
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
                  label="Prénom"
                  value={values.firstName}
                  onBlur={handleBlur("firstName")}
                  onChange={handleChange("firstName")}
                />
                {errors.firstName && touched.firstName && (
                  <p
                    style={{ fontSize: 10, color: "red" }}
                  >
                    {errors.firstName}
                  </p>
                )}
                <TextField
                  label="Nom"
                  value={values.lastName}
                  onBlur={handleBlur("lastName")}
                  onChange={handleChange("lastName")}
                />
                {errors.lastName && touched.lastName && (
                  <p
                    style={{ fontSize: 10, color: "red" }}
                  >
                    {errors.lastName}
                  </p>
                )}
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
                  label="Numero de téléphone"
                  value={values.phoneNumber}
                  onBlur={handleBlur("phoneNumber")}
                  onChange={handleChange("phoneNumber")}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p
                    style={{ fontSize: 10, color: "red" }}
                  >
                    {errors.phoneNumber}
                  </p>
                )}
                <TextField
                  label="Password"
                  value={values.password}
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
                <TextField
                  label="Password Confirmation"
                  value={values.confirmPassword}
                  onBlur={handleBlur("confirmPassword")}
                  onChange={handleChange("confirmPassword")}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p
                    style={{ fontSize: 10, color: "red" }}
                  >
                    {errors.confirmPassword}
                  </p>
                )}
                {!loggingIn ?
                  <ButtonStyled
                    disabled={!isValid}
                    variant={"outlined"}
                    onClick={() => handleSubmit()}
                  >
                    Register
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

          <Link href="/login"><BlueLink>Login</BlueLink></Link>
        </Grid>
      </PaperStyled>
    </Root>
  );
};
Register.layout = null;
export default Register;
