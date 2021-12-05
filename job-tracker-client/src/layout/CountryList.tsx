import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Button, Card, Grid, Item, Segment } from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function CountryList() {
  const { dataStore } = useStore();
  const { loadCountryList, countryList, setEditingCountry } = dataStore;

  useEffect(() => {
    loadCountryList();
  }, []);

  return (
    <>
      <Grid>
        <Grid.Column width="8">
          <h1>Countries</h1>
        </Grid.Column>
        <Grid.Column width="6">
          <Button floated="right" positive onClick={() => setEditingCountry({name:'New Country', weather:'', jobOpportunities:'', economy:'', specialNotes:''})}>
            Add
          </Button>
        </Grid.Column>
      </Grid>

      <Item.Group divided>
        {countryList.map((country) => (
          <Item key={country.name}>
            <Item.Content>
              <Item.Header as="a" onClick={() => setEditingCountry(country)}>
                {country.name}
              </Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
});
