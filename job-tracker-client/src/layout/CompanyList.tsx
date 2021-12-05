import { observer } from "mobx-react-lite";
import { Button, Grid, Item } from "semantic-ui-react";
import { useStore } from "../store/store";

export default observer(function CompanyList() {
  const { dataStore } = useStore();
  const { companyList, setEditingCompany } = dataStore;

  return (
    <>
      <Grid>
        <Grid.Column width="8">
          <h1>Companies</h1>
        </Grid.Column>
        <Grid.Column width="6">
          <Button floated="right" positive onClick={() => setEditingCompany({name:'New Company', businessArea:'', devPractices:'', keyNotes:'', keyTechnologies:'', website:'', youtubeChnl:''})}>
            Add
          </Button>
        </Grid.Column>
      </Grid>
      <Item.Group divided>
        {companyList.map((company) => (
          <Item key={company.name}>
            <Item.Content>
              <Item.Header as="a" onClick={() => setEditingCompany(company)}>
                {company.name}
              </Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
});
