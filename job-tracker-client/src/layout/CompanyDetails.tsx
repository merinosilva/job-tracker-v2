import { observer } from "mobx-react-lite";
import React from "react";
import {
  Button,
  Form,
  Grid,
  TextArea,
} from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function CompanyDetails() {
  const { dataStore } = useStore();
  const { editingCompany } = dataStore;

  return (
    <>
      <Grid>
        <Grid.Column width="8">
          <h1>{editingCompany.name} details</h1>
        </Grid.Column>
        <Grid.Column width="6">
          <Button floated="right" negative>
            Delete
          </Button>
          <Button floated="right" positive>
            Save
          </Button>
        </Grid.Column>
      </Grid>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input value={editingCompany.name} />
        </Form.Field>
        <Form.Field>
          <label>Website</label>
          <TextArea value={editingCompany.website} />
        </Form.Field>
        <Form.Field>
          <label>Youtube Channel</label>
          <TextArea value={editingCompany.youtubeChnl} />
        </Form.Field>
        <Form.Field>
          <label>Business Area</label>
          <TextArea value={editingCompany.businessArea} />
        </Form.Field>
        <Form.Field>
          <label>Dev Practices</label>
          <TextArea value={editingCompany.devPractices} />
        </Form.Field>
        <Form.Field>
          <label>Key Technologies</label>
          <TextArea value={editingCompany.keyTechnologies} />
        </Form.Field>
        <Form.Field>
          <label>Key Notes</label>
          <TextArea value={editingCompany.keyNotes} />
        </Form.Field>
      </Form>
      <Button>Save</Button>
      <Button>Delete</Button>
      <Button>Add Company</Button>
    </>
  );
});
