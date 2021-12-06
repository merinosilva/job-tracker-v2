import { Field,  Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { useStore } from "../store/store";
import * as Yup from "yup";
import { Form, Input, SubmitButton, TextArea } from "formik-semantic-ui-react";

export default observer(function CountryDetails() {
  const { dataStore } = useStore();
  const { editingCountry, saveCountry } = dataStore;

  const valSchema = Yup.object({
    name: Yup.string().required("Name is required."),
  });
  return (
    <Formik
      initialValues={editingCountry}
      validationSchema={valSchema}
      onSubmit={(values, {setSubmitting}) => {
        saveCountry({
          name: values.name,
          weather: values.weather,
          economy: values.economy,
          jobOpportunities: values.jobOpportunities,
          specialNotes: values.specialNotes,
        }).then(() => {setSubmitting(false)});
      }}
    >
      <Form>
        <Grid>
          <Grid.Column width="11">
            <h1>{editingCountry.name} details</h1>
          </Grid.Column>
          <Grid.Column width="3">
          <SubmitButton primary >
              Save
            </SubmitButton>
            </Grid.Column>
          <Grid.Column width="2">
          <Button floated="right" negative>
              Delete
            </Button>
          </Grid.Column>
        </Grid>
        <Input name="name" label="Name" placeholder="Name" />
        <TextArea name="weather" label="Weather" placeholder="Weather" />
        <TextArea name="economy" label="Economy" placeholder="Economy" />
        <TextArea
          name="jobOpportunities"
          label="Job Opportunities"
          placeholder="Job Opportunities"
        />
        <TextArea
          name="specialNotes"
          label="Special Notes"
          placeholder="Special Notes"
          rows="5"
        />
      </Form>
    </Formik>
  );
});
