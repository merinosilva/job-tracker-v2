import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { useStore } from "../store/store";
import * as Yup from "yup";
import { Form, Input, SubmitButton, TextArea } from "formik-semantic-ui-react";

export default observer(function ApplicationDetails() {
  const { dataStore } = useStore();
  const { editingApplication, saveApplication } = dataStore;

  const valSchema = Yup.object({
    position: Yup.string().required("Position is required."),
  });
  return (
    <Formik
      initialValues={editingApplication}
      validationSchema={valSchema}
      onSubmit={(values, { setSubmitting }) => {
        saveApplication({
          position: values.position,
          jobUrl: values.jobUrl,
          requirements: values.requirements,
          salary: values.salary
        }).then(() => setSubmitting(false));
      }}
    >
      <Form>
        <Grid>
          <Grid.Column width="11">
            <h1>{editingApplication.position}</h1>
          </Grid.Column>
          <Grid.Column width="3">
            <SubmitButton primary>Save</SubmitButton>
          </Grid.Column>
          <Grid.Column width="2">
            <Button floated="right" negative>
              Delete
            </Button>
          </Grid.Column>
        </Grid>
        <Input name="position" label="Position" placeholder="Position" />
        <Input name="jobUrl" label="Job Post" placeholder="Job Post URL" />
        <Input name="salary" label="Salary" placeholder="Salary" />
        <TextArea name="requirements" label="Qualifications" placeholder="Qualifications" />
      </Form>
    </Formik>
  );
});
