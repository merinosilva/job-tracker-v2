import { observer } from "mobx-react-lite";
import { Button, Grid, Item } from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function CityList() {
  const { dataStore } = useStore();
  const { cityList, setEditingCity, editingCountry } = dataStore;

  if(editingCountry._links != undefined)
  {
    return (
      <>
          <Grid>
          <Grid.Column width="8">
            <h1>Cities</h1>
          </Grid.Column>
          <Grid.Column width="6">
            <Button floated="right" positive onClick={() => setEditingCity({name:'New city', economy:'', jobOpportunities:'', weather:''})}>
              Add
            </Button>
          </Grid.Column>
        </Grid>
        <Item.Group divided>
          {cityList.map((city) => (
            <Item key={city.name}>
              <Item.Content>
                <Item.Header as="a" onClick={() => setEditingCity(city)}>
                  {city.name}
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
    }
    return ( <h3>Save the country to add cities.</h3>);
});
