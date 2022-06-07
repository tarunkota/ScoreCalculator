import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { fetchData } from "../Utils/NetUtils";
import CircularProgress from "@mui/material/CircularProgress";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import RemoveIcon from "@mui/icons-material/Remove";
import Share from "./share";
import disableScroll from "disable-scroll";

class Step4 extends React.Component {
  state = {
    loading: true,
    error: null,
    data: null,
    hide: true,
  };

  componentDidMount() {
    if (this.state.data == null)
      fetchData("scoreCalculator/getResults", (json) => {
        this.setState({
          ...this.state,
          data: json,
          loading: false,
          hide: false,
        });
      });
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  hide = () => {
    this.sleep(5000).then((r) => {
      console.log("hide");
      this.setState({ ...this.state, hide: true });
      disableScroll.off();
    });
  };

  render() {
    // find no. of correct
    var correct = [];
    var wrong = [];
    var score = [];
    if (!this.state.loading && this.state.data) {
      var data = this.state.data;
      var answers = this.state.data.answers;
      correct = ["Correct"];
      wrong = ["Wrong"];
      for (let j = 1; j < data.answers[0].length; j++) {
        let noc = 0;
        let now = 0;
        for (let i = 0; i < data.answers.length; i++) {
          if (answers[i][j] === "c") {
            noc++;
          }
          if (answers[i][j] === "w") {
            now++;
          }
        }
        correct[j] = noc;
        wrong[j] = now;
      }
      score = ["Score"];
      for (let j = 1; j < data.answers[0].length; j++) {
        score[j] = (correct[j] * 2 - (wrong[j] * 2) / 3).toFixed(2);
      }
    }

    console.log(correct);
    console.log(wrong);
    console.log(score);

    return (
      <div>
        {this.state.hide ? null : <Share hide={this.hide}></Share>}
        {this.state.loading ? (
          <Container align="center">
            <CircularProgress />
          </Container>
        ) : (
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
                variant="h6"
                component="div"
                gutterBottom
              >
                Result
              </Typography>

              <Typography
                align="left"
                variant="caption"
                component="div"
                gutterBottom
              >
                {"Answered: " + this.state.data.answered}
              </Typography>
              <Typography
                align="left"
                variant="caption"
                component="div"
                gutterBottom
              >
                {"Unanswered: " + this.state.data.unanswered}
              </Typography>
              <Typography align="center" variant="subtitle" component="div">
                Score
              </Typography>
              <TableContainer style={{ marginBottom: "30px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Questions</TableCell>
                      {this.state.data.institutes.map((name) => {
                        return <TableCell key={name}>{name}</TableCell>;
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {score.map((v, index) => {
                        return <TableCell key={index}>{v}</TableCell>;
                      })}
                    </TableRow>
                    <TableRow>
                      {correct.map((v, index) => {
                        return <TableCell key={index}>{v}</TableCell>;
                      })}
                    </TableRow>
                    <TableRow>
                      {wrong.map((v, index) => {
                        return <TableCell key={index}>{v}</TableCell>;
                      })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography align="center" variant="subtitle" component="div">
                Analysis
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Questions</TableCell>
                      {this.state.data.institutes.map((name) => {
                        return <TableCell key={name}>{name}</TableCell>;
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.data.answers.map((answer, index) => {
                      return (
                        <TableRow key={answer[0]}>
                          {answer.map((cell, index) => {
                            if (cell === "c")
                              return (
                                <TableCell key={index}>
                                  <DoneIcon
                                    style={{ color: "green" }}
                                  ></DoneIcon>{" "}
                                </TableCell>
                              );
                            if (cell === "w")
                              return (
                                <TableCell key={index}>
                                  <CloseIcon
                                    style={{ color: "red" }}
                                  ></CloseIcon>{" "}
                                </TableCell>
                              );
                            if (cell === "u")
                              return (
                                <TableCell key={index}>
                                  <RemoveIcon
                                    style={{ color: "gray" }}
                                  ></RemoveIcon>{" "}
                                </TableCell>
                              );

                            return <TableCell key={index}>{cell}</TableCell>;
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default Step4;
