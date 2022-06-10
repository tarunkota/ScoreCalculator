import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Login from "./login";
import { fetchDataWithoutToken } from "./../Utils/NetUtils";
import QuestionBoxList from "./questionBoxList";

class Analytics extends React.Component {
  state = {
    loading: true,
    error: null,
    data: null,
  };

  componentDidMount() {
    fetchDataWithoutToken("scoreCalculator/getAnalyticsData", (json) => {
      this.setState({ ...this.state, data: json });
    });
  }

  render() {
    return (
      <div>
        <Card
          style={{
            padding: "10px",
            margin: "10px",
            marginTop: "40px",
          }}
        >
          <Typography
            align="center"
            variant="h4"
            component="div"
            gutterBottom
            style={{ color: "maroon", fontWeight: "bold" }}
          >
            Analytics
          </Typography>
          <Typography align="center" variant="h6" component="div" gutterBottom>
            GS
          </Typography>
          <Container align="center" style={{ width: "100%" }}>
            <img src="https://storage.googleapis.com/naulets_media/images/scoreDistribution.png"></img>
          </Container>
          <Typography
            align="center"
            variant="subtitle"
            component="div"
            gutterBottom
          >
            The above graph has been generated from the user data who have used
            our marks calculator.
          </Typography>
          <Typography
            align="center"
            variant="h6"
            component="div"
            style={{ color: "red" }}
            gutterBottom
          >
            Naulets predicts the cut-off to be in the range{" "}
            <span style={{ fontWeight: "bold" }}>84-87</span>
          </Typography>
          <br />

          <Typography align="center" variant="h6" component="div" gutterBottom>
            CSAT
          </Typography>
          <Typography
            align="center"
            variant="subtitle"
            component="div"
            gutterBottom
            style={{ color: "purple" }}
          >
            18.9% aspirants were clearing prelims Paper-1 (GS) cut-off but are
            getting less than 66 in Paper-2 (CSAT)
          </Typography>
          <Container align="center" style={{ width: "100%" }}>
            <img
              style={{ width: "100%" }}
              src="https://storage.googleapis.com/naulets_media/images/piechart.png"
            ></img>
          </Container>
        </Card>
        <Card
          style={{
            padding: "10px",
            margin: "10px",
            marginTop: "40px",
          }}
        >
          <br />
          <Typography
            align="center"
            variant="h5"
            component="div"
            gutterBottom
            style={{ color: "maroon", fontWeight: "bold" }}
          >
            Top 5 easiest questions
          </Typography>
          <Typography align="center" variant="subtitle" component="div">
            (most correctly answered questions)
          </Typography>
          {this.state.data ? (
            <div>
              <QuestionBoxList data={this.state.data.easiest}></QuestionBoxList>
            </div>
          ) : null}
          <br />
        </Card>
        <Card
          style={{
            padding: "10px",
            margin: "10px",
            marginTop: "40px",
          }}
        >
          <br />
          <Typography
            align="center"
            variant="h5"
            component="div"
            gutterBottom
            style={{ color: "maroon", fontWeight: "bold" }}
          >
            Top 5 hardest questions
          </Typography>
          <Typography
            align="center"
            variant="subtitle"
            component="div"
            gutterBottom
          >
            (most unattempted questions)
          </Typography>
          {this.state.data ? (
            <div>
              <QuestionBoxList data={this.state.data.hardest}></QuestionBoxList>
            </div>
          ) : null}
          <br />
        </Card>
        <Card
          style={{
            padding: "10px",
            margin: "10px",
            marginTop: "40px",
          }}
        >
          <br />
          <Typography
            align="center"
            variant="h5"
            component="div"
            style={{ color: "maroon", fontWeight: "bold" }}
          >
            Top 5 trickiest questions
          </Typography>
          <Typography
            align="center"
            variant="subtitle"
            component="div"
            gutterBottom
          >
            (questions which mislead people to choose a wrong option)
          </Typography>
          <Container align="center" style={{ width: "100%" }}>
            <img src="https://storage.googleapis.com/naulets_media/images/Screenshot%202022-06-10%20at%2018-43-49%20Welcome%20To%20Mathcha.png"></img>
          </Container>
          <Typography
            align="center"
            variant="caption"
            component="div"
            gutterBottom
          >
            Formula used to calculate a trickyness of a question
          </Typography>
          {this.state.data ? (
            <div>
              <QuestionBoxList
                data={this.state.data.trickiest}
              ></QuestionBoxList>
            </div>
          ) : null}
          <br />
        </Card>
        <Card
          style={{
            padding: "10px",
            margin: "10px",
            marginTop: "40px",
          }}
        >
          <br />
          <Typography
            align="center"
            variant="h5"
            component="div"
            style={{ color: "maroon", fontWeight: "bold" }}
          >
            All questions
          </Typography>

          {this.state.data ? (
            <div>
              <QuestionBoxList data={this.state.data.all}></QuestionBoxList>
            </div>
          ) : null}
        </Card>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Analytics;
