import React from "react";
import {
  Button,
  Grid,
  Popover,
  TextField,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Messages, Users } from "../dto";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { messagesActions } from "../actions";

const Root = styled(Grid)`
  margin: 1em;
`;
const FormGrid = styled(Grid)`
  padding: 1em;

  .submitBtn {
    margin-top: 1em;
  }
`;


const SendMessageBtn = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const MessageForm: Partial<Messages> = {
    content: "",
    receiverId: "",
  };
  const uDispatch = useDispatch();
  const { items: users } = useSelector((state: any) => state.users);
  const userConnectedID = useSelector((state: any) => state?.authentication?.user?.id);

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
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transitionDuration={1000}
      >
        <div className={"app-form"}>
          <Typography variant={"h6"}>Envoyer un message</Typography>
          <Formik
            initialValues={MessageForm}
            validationSchema={Yup.object().shape({
              content: Yup.string().required(),
              receiverId: Yup.string().required(),
            })}
            onSubmit={(values, actions) => {
              uDispatch(messagesActions.post(values));
              actions.setSubmitting(false);
              handleClose();
              window.location.reload();
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
              setFieldValue
            }) => (
              <FormGrid
                container
                justifyContent={"center"}
                direction={"column"}
              >
                <Autocomplete
                  id="receiverId"
                  options={ users.filter((user: Users) => userConnectedID !== user?.id) }
                  getOptionLabel={ (option: Users) => `${option.firstName} ${option.lastName} ` }
                  onChange={(e, value) => setFieldValue("receiverId", value?.id )}
                  onBlur={handleBlur("receiverId")}
                  onOpen={handleBlur}
                  includeInputInList
                  style={{ width: 300 }}
                  renderInput={params => (
                    <TextField
                      { ...params }
                      error={Boolean(touched.receiverId && errors.receiverId)}
                      helperText={touched.receiverId && errors.receiverId}
                      onBlur={handleBlur("receiverId")}
                      margin="normal"
                      label="Utilisateur"
                      fullWidth
                    />
                  )}
                />
                <TextField
                  label="Content"
                  value={values.content}
                  onBlur={handleBlur("content")}
                  onChange={handleChange("content")}
                  multiline
                />

                {errors.content && touched.content && (
                  <p style={{ fontSize: 10, color: "red" }}>
                    {errors.content}
                  </p>
                )}
                <Button
                  className={"submitBtn"}
                  disabled={!isValid}
                  variant={"outlined"}
                  onClick={() => handleSubmit()}
                >
                  Envoyer
                </Button>
              </FormGrid>
            )}
          </Formik>
        </div>
      </Popover>
    </Root>
  );
};

export default SendMessageBtn;
