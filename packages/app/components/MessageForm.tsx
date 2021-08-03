import React from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { messagesActions } from "../actions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Messages, Users } from "../dto";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GlassMorphismPaper } from "../styles/GlassMorphism";

const StyledPaperForm = styled(Paper)`
  padding: 1em;
  ${GlassMorphismPaper}
`;
const FormGrid = styled(Grid)`
  padding: 1em;

  .submitBtn {
    margin-top: 1em;
  }
`;


const MessageForm = ({
  label="Envoyer un message",
  handleClose = () => {
  }, message,
}: any) => {
  const MessageForm: Partial<Messages> = {
    content: message?.content,
    ...(message && { id: message?.id }),
    ...(!message && { receiverId: "" }),
  };
  const uDispatch = useDispatch();
  const { items: users } = useSelector((state: any) => state.users);
  const userConnectedID = useSelector((state: any) => state?.authentication?.user?.id);
  return (
    <StyledPaperForm className={"app-form"}>
      <Typography variant={"h6"}>{label}</Typography>
      <Formik
        initialValues={MessageForm}
        validationSchema={Yup.object().shape({
          content: Yup.string().required(),
          receiverId: Yup.string(),
        })}
        onSubmit={(values, actions) => {
          if (message) {
            uDispatch(messagesActions.update(values));
          } else {
            uDispatch(messagesActions.post(values));
          }
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
          setFieldValue,
        }) => (
          <FormGrid
            container
            justifyContent={"center"}
            direction={"column"}
          >
            {!message && <Autocomplete
              id="receiverId"
              options={users.filter((user: Users) => userConnectedID !== user?.id)}
              getOptionLabel={(option: Users) => `${option.firstName} ${option.lastName} `}
              onChange={(e,
                value) => {
                setFieldValue("receiverId", value?.id);
              }}
              onBlur={handleBlur("receiverId")}
              onOpen={handleBlur}
              includeInputInList
              style={{ width: 300 }}
              renderInput={params => (
                <TextField
                  {...params}
                  error={Boolean(touched.receiverId && errors.receiverId)}
                  helperText={touched.receiverId && errors.receiverId}
                  onBlur={handleBlur("receiverId")}
                  margin="normal"
                  label="Utilisateur"
                  fullWidth
                />
              )}
            />}
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
    </StyledPaperForm>
  );
};

export default MessageForm;
