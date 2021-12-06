import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { useStore } from "../store/store";
import * as Yup from "yup";
import { Form, Input, SubmitButton, TextArea } from "formik-semantic-ui-react";

export default observer(function CompanyDetails() {
  const { dataStore } = useStore();
  const { editingCompany, saveCompany } = dataStore;

  const valSchema = Yup.object({
    name: Yup.string().required("Name is required."),
  });
  return (
    <Formik
      initialValues={editingCompany}
      validationSchema={valSchema}
      onSubmit={(values, { setSubmitting }) => {
        saveCompany({
          name: values.name,
          businessArea: values.businessArea,
          website: values.website,
          youtubeChnl: values.youtubeChnl,
          keyTechnologies: values.keyTechnologies,
          devPractices: values.devPractices,
          keyNotes: values.keyNotes
        }).then(() => setSubmitting(false));
      }}
    >
      <Form>
        <Grid>
          <Grid.Column width="11">
            <h1>{editingCompany.name} details</h1>
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
        <Input name="website" label="Website" placeholder="Website" />
        <Input name="youtubeChnl" label="Youtube Channel" placeholder="Youtube Channel" />
        <TextArea name="businessArea" label="Business Area" placeholder="Business Area" />
        <TextArea name="keyTechnologies" label="Key Technologies" placeholder="Key Technologies" />
        <TextArea name="devPractices" label="Dev Practices" placeholder="Dev Practices" />
        <TextArea name="keyNotes" label="Key Notes" placeholder="Key Notes" />
      </Form>
    </Formik>
  );
});
