import React from "react";
import QuestionBox2 from "./questionBox2";

class QuestionBoxList extends React.Component {
  state = {
    loading: true,
    error: null,
  };

  render() {
    return (
      <div>
        {this.props.data.questions.map((question, i) => {
          return (
            <QuestionBox2
              set={1}
              key={question.setAQuestionNo}
              question={question}
              responseDetails={this.props.data.responseDetails[i]}
            ></QuestionBox2>
          );
        })}
      </div>
    );
  }
}

export default QuestionBoxList;
