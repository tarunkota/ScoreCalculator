import React from "react";
import QuestionBox from "./questionBox";
import { fetchDataWithoutToken } from "../Utils/NetUtils";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

class Step2 extends React.Component {
  state = {
    loading: true,
    questions: [],
  };

  setData(json) {
    console.log(json);
    this.setState({
      loading: false,
      questions: json.questions,
    });
  }

  componentDidMount() {
    fetchDataWithoutToken(
      "scoreCalculator/getQuestions?set=" + this.props.set,
      (json) => this.setData(json)
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Container align="center">
            <CircularProgress />
          </Container>
        ) : (
          this.state.questions.map((question, index) => {
            return (
              <QuestionBox
                qno={index}
                question={question}
                set={this.props.set}
                key={question.setAQuestionNo}
                setAnswer={this.props.setAnswer}
              ></QuestionBox>
            );
          })
        )}
        <Button
          variant="contained"
          style={{ width: "100%", marginBottom: "10px", height: "70px" }}
          onClick={this.props.submitAnswers}
        >
          Submit
        </Button>
        <br />
      </div>
    );
  }
}

export default Step2;
