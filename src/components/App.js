import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import "../css/App.css";

import Landing from "./Landing";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Owen Carpenter" scroll>
            <Navigation>
              <a href="/">Landing</a>
              <a href="/Resume">Resume</a>
              <a href="/Projects">Projects</a>
              <a href="/About">About</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Explore">
            <Navigation>
              <a href="/">Landing</a>
              <a href="/Resume">Resume</a>
              <a href="/Projects">Projects</a>
              <a href="/About">About</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Landing}></Route>
                  <Route exact path="/Resume" component={Resume}></Route>
                  <Route exact path="/Projects" component={Project}></Route>
                  <Route exact path="/About" component={About}></Route>
                  <Route exact path="/Contact" component={Contact}></Route>
                </Switch>
              </BrowserRouter>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
