import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

class Step1 extends React.Component {
  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {}

  render() {
    return (
      <Card
        style={{
          padding: "10px",
          margin: "10px",
          marginTop: "40px",
        }}
      >
        <Typography align="center" variant="h6" component="div" gutterBottom>
          Welcome!!
        </Typography>
        <Container align="center">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={this.props.setName}
          />
          <br />
          <ButtonGroup
            style={{ marginTop: "10px" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => this.props.selectSet(1)}>Set A</Button>
            <Button onClick={() => this.props.selectSet(2)}>Set B</Button>
            <Button onClick={() => this.props.selectSet(3)}>Set C</Button>
            <Button onClick={() => this.props.selectSet(4)}>Set D</Button>
          </ButtonGroup>
        </Container>
      </Card>
    );
  }
}

export default Step1;
