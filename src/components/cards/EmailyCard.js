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

const EmailyCard = () => {
  return (
    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
      <CardTitle
        style={{
          color: "#fff",
          height: "176px",
          background:
            "url(https://www.northeastern.edu/graduate/blog/wp-content/uploads/2017/10/Code-on-Computer-Screen-Hero.gif) center / cover"
        }}
      >
        Emaily
      </CardTitle>
      <CardText>Get Your Feedback</CardText>
      <CardActions border>
        <Button colored>GitHub</Button>
        <Button colored>Deployment</Button>
      </CardActions>
      <CardMenu style={{ color: "#fff" }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  );
};

export default EmailyCard;
