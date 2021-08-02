import React from "react";
import {
  Button,
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
  Popover,
  TextField,
  Theme,
} from "@material-ui/core";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { messagesActions } from "../actions";
import { useDispatch } from "react-redux";
import { Messages } from "../dto";
import UserManager from "./userManager";

const Root = styled(Grid)`
  margin: 1em;
`;

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: "white",
      border: "2px solid #000",
      borderRadius: "1em",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const SendMessageBtn = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const MessageForm: Messages = {
    content: "",
    receiverId: "",
  };
  const dispatch = useDispatch();
  return (
    <Root container justifyContent={"flex-end"}>
      <Button
        variant="contained" color="primary"
        onClick={({ currentTarget }: any) => setAnchorEl(currentTarget)} {...props}> Send
        Message </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transitionDuration={1000}
      >
        <div>
          <h2 id="simple-modal-title">Envoyer un message</h2>
          <Formik
            initialValues={MessageForm}
            validationSchema={Yup.object().shape({
              content: Yup.string().required(),
              receiverId: Yup.string().required(),
            })}
            onSubmit={(values, actions) => {
              dispatch(messagesActions.post(values));
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
                <UserManager/>
                <TextField
                  label="Prénom"
                  value={values.content}
                  onBlur={handleBlur("content")}
                  onChange={handleChange("content")}
                />
                {errors.content && touched.content && (
                  <p
                    style={{ fontSize: 10, color: "red" }}
                  >
                    {errors.content}
                  </p>
                )}

                {true ?
                  <Button
                    disabled={!isValid}
                    variant={"outlined"}
                    onClick={() => handleSubmit()}
                  >
                    Register
                  </Button>
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
        </div>
      </Popover>
    </Root>
  );
};

export default SendMessageBtn;
