import { observer } from "mobx-react-lite";
import { Button, Grid, Item } from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function ApplicationList() {
  const { dataStore } = useStore();
  const { applicationList, setEditingApplication, editingCompany } = dataStore;

  if(editingCompany._links === undefined)
  {
    return ( <h3>Save the company to add applications.</h3>);
  }

  return (
    <>
      <Grid>
        <Grid.Column width="8">
          <h1>Applications</h1>
        </Grid.Column>
        <Grid.Column width="6">
          <Button floated="right" positive onClick={() => setEditingApplication({position:'New application', jobUrl:'', requirements:'', salary:''})}>
            Add
          </Button>
        </Grid.Column>
      </Grid>
      <Item.Group divided>
        {applicationList.map((application) => (
          <Item key={application.position}>
            <Item.Content>
              <Item.Header
                as="a"
                onClick={() => setEditingApplication(application)}
              >
                {application.position}
              </Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
});
