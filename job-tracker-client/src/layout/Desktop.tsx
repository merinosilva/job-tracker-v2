import { observer } from "mobx-react-lite";
import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { useStore } from "../store/store";
import ApplicationDetails from "./ApplicationDetails";
import ApplicationList from "./ApplicationList";
import CityDetails from "./CityDetails";
import CityList from "./CityList";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import CountryDetails from "./CountryDetails";
import CountryList from "./CountryList";

export default observer(function Desktop() {
  const { dataStore } = useStore();
  const { editingType } = dataStore;
  if (editingType === "") {
    return (
      <Grid>
        <Grid.Column width="8">
          <CountryList />
        </Grid.Column>
      </Grid>
    );
  }
  if (editingType === "A") {
    return (
      <Grid>
        <Grid.Column width="8">
          <ApplicationDetails />
        </Grid.Column>
      </Grid>
    );
  }
  return (
    <Grid>
      <Grid.Column width="9">
        {editingType === "C" && <CountryDetails />}
        {editingType === "T" && <CityDetails />}
        {editingType === "O" && <CompanyDetails />}
      </Grid.Column>
      <Grid.Column width="5" style={{ marginLeft: "2em" }}>
        {editingType === "C" && <CityList />}
        {editingType === "T" && <CompanyList />}
        {editingType === "O" && <ApplicationList />}
      </Grid.Column>
    </Grid>
  );
});
