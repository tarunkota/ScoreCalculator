import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import "@fontsource/roboto";

class QuestionBox extends React.Component {
  state = { value: 0 };

  componentDidMount() {}

  buttonClick(i) {
    if (this.state.value === i) {
      this.setState({ value: 0 });
      this.props.setAnswer(this.props.qno, 0);
    } else {
      this.setState({ value: i });
      this.props.setAnswer(this.props.qno, i);
    }
  }

  render() {
    return (
      <Card style={{ padding: "5px", margin: "10px", marginTop: "40px" }}>
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
            onClick={() => this.buttonClick(1)}
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
            onClick={() => this.buttonClick(2)}
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
            onClick={() => this.buttonClick(3)}
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
            onClick={() => this.buttonClick(4)}
          >
            D. {this.props.question.optionD}
          </Button>
          <br />
        </CardContent>
      </Card>
    );
  }
}

export default QuestionBox;
