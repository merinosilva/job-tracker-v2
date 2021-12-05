import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Form, Grid, TextArea } from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function CityDetails() {
  const { dataStore } = useStore();
  const { editingCity } = dataStore;

  return (
    <>
      <Grid>
        <Grid.Column width="8">
          <h1>{editingCity.name} details</h1>
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
          <input value={editingCity.name} />
        </Form.Field>
        <Form.Field>
          <label>Weather</label>
          <TextArea value={editingCity.weather} />
        </Form.Field>
        <Form.Field>
          <label>Economy</label>
          <TextArea value={editingCity.economy} />
        </Form.Field>
        <Form.Field>
          <label>Job Opportunities</label>
          <TextArea value={editingCity.jobOpportunities} />
        </Form.Field>
      </Form>
    </>
  );
});
