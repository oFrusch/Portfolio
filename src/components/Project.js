import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

import MembersOnlyCard from "./cards/MembersOnlyCard";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <MembersOnlyCard />;
    }

    if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>Pocket Synth</h1>
        </div>
      );
    }

    if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>UMass Projects</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
        >
          <Tab>Web Development</Tab>
          <Tab>Hardware & Software</Tab>
          <Tab>University</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()} </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
