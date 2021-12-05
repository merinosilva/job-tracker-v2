import { observer } from "mobx-react-lite";
import React from "react";
import {
  Button,
  Form,
  Grid,
  TextArea,
} from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function ApplicationDetails() {
  const { dataStore } = useStore();
  const { editingApplication } = dataStore;

  return (
    <>
      <Grid>
        <Grid.Column width="8">
          <h3>{editingApplication.position} details</h3>
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
          <label>Position</label>
          <input value={editingApplication.position} />
        </Form.Field>
        <Form.Field>
          <label>Website</label>
          <TextArea value={editingApplication.jobUrl} />
        </Form.Field>
        <Form.Field>
          <label>Youtube Channel</label>
          <TextArea value={editingApplication.requirements} />
        </Form.Field>
        <Form.Field>
          <label>Business Area</label>
          <TextArea value={editingApplication.salary} />
        </Form.Field>
      </Form>
    </>
  );
});
