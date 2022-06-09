import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

import { postData } from "../Utils/NetUtils";
import Share from "./share";
import disableScroll from "disable-scroll";

class Core extends React.Component {
  state = {
    step: 1,
    set: 0,
    answers: new Array(100).fill(0),
    name: "",
    csat: false,
  };

  componentDidMount() {}

  selectSet = (s) => {
    this.setState({ step: 2, set: s });
  };

  selectSet2 = (s) => {
    this.setState({ step: 2, set: s, csat: true });
  };
  setAnswer = (qno, value) => {
    console.log(qno, value);
    var a = this.state.answers;
    a[qno] = value;
    this.setState({ ...this.state, answers: a });
  };

  setName = (event) => {
    this.setState({ ...this.state, name: event.target.value });
  };

  submitAnswers = () => {
    this.setState({ ...this.state, step: 3 });
  };

  getResultsResponse = (json) => {
    console.log(json);
    this.setState({ ...this.state, step: 4 });
  };

  getResults = () => {
    //submit the answers first
    let body = JSON.stringify(this.state);
    if (this.state.csat) {
      postData(
        "scoreCalculator/submitResponse2",
        body,
        this.getResultsResponse
      );
    } else {
      postData("scoreCalculator/submitResponse", body, this.getResultsResponse);
    }
  };

  onClickPaper1 = () => {
    this.setState({ ...this.state, step: 4, csat: false });
  };

  onClickPaper2 = () => {
    this.setState({ ...this.state, step: 4, csat: true });
  };

  render() {
    return (
      <Container
        style={{ backgroundColor: "#0a1929", minHeight: "100vh" }}
        disableGutters
      >
        <Container align="center">
          <img
            src={
              "https://storage.googleapis.com/naulets_media/react/static/media/logo.d6e51749.png"
            }
            alt="logo"
            style={{ width: "100px", height: "100px", marginTop: "50px" }}
          />
        </Container>
        <Typography
          align="center"
          variant="h3"
          component="div"
          gutterBottom
          style={{ color: "#eee" }}
        >
          Naulets
        </Typography>
        <Typography
          align="center"
          variant="h5"
          component="div"
          gutterBottom
          style={{ color: "#eee" }}
        >
          Prelims'22 Score Calculator
        </Typography>
        {this.state.step === 1 ? (
          <Step1
            selectSet={this.selectSet}
            selectSet2={this.selectSet2}
            setName={this.setName}
            onClickPaper1={this.onClickPaper1}
            onClickPaper2={this.onClickPaper2}
          ></Step1>
        ) : null}
        {this.state.step === 2 ? (
          <Step2
            csat={this.state.csat}
            set={this.state.set}
            setAnswer={this.setAnswer}
            submitAnswers={this.submitAnswers}
          ></Step2>
        ) : null}
        {this.state.step === 3 ? (
          <Step3 getResults={this.getResults}></Step3>
        ) : null}
        {this.state.step === 4 ? <Step4 csat={this.state.csat}></Step4> : null}
      </Container>
    );
  }
}

export default Core;
