import { Field, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { useStore } from "../store/store";
import * as Yup from "yup";
import { Form, Input, SubmitButton, TextArea } from "formik-semantic-ui-react";

export default observer(function CityDetails() {
  const { dataStore } = useStore();
  const { editingCity, saveCity } = dataStore;

  const valSchema = Yup.object({
    name: Yup.string().required("Name is required."),
  });
  return (
    <Formik
      initialValues={editingCity}
      validationSchema={valSchema}
      onSubmit={(values, { setSubmitting }) => {
        saveCity({
          name: values.name,
          weather: values.weather,
          economy: values.economy,
          jobOpportunities: values.jobOpportunities,
        }).then(() => setSubmitting(false));
      }}
    >
      <Form>
        <Grid>
          <Grid.Column width="11">
            <h1>{editingCity.name} details</h1>
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
        <Input name="name" label="Name" placeholder="Name" />
        <TextArea name="weather" label="Weather" placeholder="Weather" />
        <TextArea name="economy" label="Economy" placeholder="Economy" />
        <TextArea
          name="jobOpportunities"
          label="Job Opportunities"
          placeholder="Job Opportunities"
        />
      </Form>
    </Formik>
  );
});
