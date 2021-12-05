import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Form, Grid, TextArea } from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function CountryDetails() {
  const { dataStore } = useStore();
  const { editingCountry } = dataStore;

  return (
    <>
      <Grid>
        <Grid.Column width="8">
          <h1>{editingCountry.name} details</h1>
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
          <input value={editingCountry?.name} />
        </Form.Field>
        <Form.Field>
          <label>Weather</label>
          <TextArea value={editingCountry?.weather} />
        </Form.Field>
        <Form.Field>
          <label>Economy</label>
          <TextArea value={editingCountry?.economy} />
        </Form.Field>
        <Form.Field>
          <label>Job Opportunities</label>
          <TextArea value={editingCountry?.jobOpportunities} />
        </Form.Field>
        <Form.Field>
          <label>Special Notes</label>
          <TextArea value={editingCountry?.specialNotes} />
        </Form.Field>
      </Form>
    </>
  );
});
