import React from "react";
import { Button, Container, Grid, Menu } from "semantic-ui-react";
import Desktop from "./Desktop";

function App() {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Applications" />
          <Menu.Item>
            <Button positive content="Stats" />
          </Menu.Item>
          <Menu.Item>
            <Button positive content="Create" />
          </Menu.Item>
        </Container>
      </Menu>
      <Container style={{ marginTop: "7em" }}>
        <Desktop />
      </Container>
    </>
  );
}

export default App;
