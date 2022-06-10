import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "@fontsource/roboto";
import MultiColorProgressBar from "./multiColorBar";
class QuestionBox extends React.Component {
  state = { value: 0 };

  componentDidMount() {}

  render() {
    var total =
      this.props.responseDetails[0] +
      this.props.responseDetails[1] +
      this.props.responseDetails[2];
    var optionA = ((this.props.responseDetails[0] * 100) / total).toFixed(1);
    var optionB = ((this.props.responseDetails[1] * 100) / total).toFixed(1);
    var optionC = (100 - optionA - optionB).toFixed(1);
    var readings = [
      {
        name: "Correct",
        value: optionA,
        color: "#6ab04c",
      },
      {
        name: "Wrong",
        value: optionB,
        color: "#eb4d4b",
      },
      {
        name: "Unattempted",
        value: optionC,
        color: "#aaa",
      },
    ];

    return (
      <Card
        style={{
          padding: "5px",
          margin: "10px",
          marginTop: "40px",
          backgroundColor: "rgb(233, 248, 201)",
        }}
      >
        <CardContent>
          <Typography
            align="left"
            variant="subtitle"
            color="text.secondary"
            gutterBottom
          >
            {this.props.set === 1
              ? "Question " + this.props.question.setAQuestionNo
              : ""}

            {this.props.set === 2
              ? "Question " + this.props.question.setBQuestionNo
              : ""}

            {this.props.set === 3
              ? "Question " + this.props.question.setCQuestionNo
              : ""}

            {this.props.set === 4
              ? "Question " + this.props.question.setDQuestionNo
              : ""}
          </Typography>
          {this.props.question.questionText.split("\n").map((line, index) => {
            return (
              <Typography align="left" variant="subtitle1" key={index}>
                {line}
              </Typography>
            );
          })}
          <Button
            variant={this.state.value === 1 ? "contained" : "text"}
            style={{
              width: "100%",
              justifyContent: "left",
              textTransform: "none",
              textAlign: "left",
            }}
          >
            A. {this.props.question.optionA}
          </Button>
          <br />
          <Button
            variant={this.state.value === 2 ? "contained" : "text"}
            style={{
              width: "100%",
              justifyContent: "left",
              textTransform: "none",
              textAlign: "left",
            }}
          >
            B. {this.props.question.optionB}
          </Button>
          <br />
          <Button
            variant={this.state.value === 3 ? "contained" : "text"}
            style={{
              width: "100%",
              justifyContent: "left",
              textTransform: "none",
              textAlign: "left",
            }}
          >
            C. {this.props.question.optionC}
          </Button>
          <br />
          <Button
            variant={this.state.value === 4 ? "contained" : "text"}
            style={{
              width: "100%",
              justifyContent: "left",
              textTransform: "none",
              textAlign: "left",
            }}
          >
            D. {this.props.question.optionD}
          </Button>
          <br />
          <MultiColorProgressBar readings={readings} />
        </CardContent>
      </Card>
    );
  }
}

export default QuestionBox;
