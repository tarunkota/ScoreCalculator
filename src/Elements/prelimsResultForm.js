import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Cookies from "universal-cookie";

import { postData, postDataWithoutToken } from "../Utils/NetUtils";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

class ResultForm extends React.Component {
  state = {
    loggedIn: false,
    qualified: "true",
    category: "0",
    marks: "",
    dialog: false,
  };

  componentDidMount() {
    this.setState({ ...this.state, loggedIn: this.isLoggedIn() });
  }

  isLoggedIn() {
    const cookies = new Cookies();
    let token = cookies.get("Token");
    return !(token == null);
  }

  setQualified = (event) => {
    var v = event.target.value;
    this.setState({ ...this.state, qualified: v });
  };

  setCategory = (event) => {
    var v = event.target.value;
    this.setState({ ...this.state, category: v });
  };

  setMarks = (event) => {
    var v = event.target.value;
    this.setState({ ...this.state, marks: v });
  };

  sendResult = () => {
    //submit the answers first
    let body = JSON.stringify(this.state);
    if (this.state.loggedIn) {
      postData(
        "scoreCalculator/submitPrelimsResult",
        body,

        this.setState({ ...this.state, dialog: true })
      );
    } else {
      postDataWithoutToken(
        "scoreCalculator/submitPrelimsResult",
        body,
        this.setState({ ...this.state, dialog: true })
      );
    }
  };

  render() {
    return (
      <div>
        <Card
          align="center"
          style={{
            padding: "10px",
            margin: "10px",
            marginTop: "40px",
          }}
        >
          <Typography align="center" variant="h6" component="div" gutterBottom>
            What is your prelims'22 result?
          </Typography>
          <br />
          <br />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Did you qualify in the prelims 2022?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={this.setQualified}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Yes, I have qualified."
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="No, I wasn't lucky this time."
              />
            </RadioGroup>
          </FormControl>
          <br />
          <br />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              What is your category?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="0"
              name="radio-buttons-group"
              onChange={this.setCategory}
            >
              <FormControlLabel value="0" control={<Radio />} label="General" />
              <FormControlLabel value="1" control={<Radio />} label="OBC" />
              <FormControlLabel value="2" control={<Radio />} label="SC" />
              <FormControlLabel value="3" control={<Radio />} label="ST" />
              <FormControlLabel value="4" control={<Radio />} label="EWS" />
              <FormControlLabel value="5" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <div>
            <TextField
              id="standard-basic"
              label="Marks"
              variant="standard"
              onChange={this.setMarks}
            />
          </div>

          <br />
          <br />

          <Button
            variant="contained"
            onClick={() => {
              this.sendResult();
            }}
          >
            Save
          </Button>
        </Card>

        <Dialog
          open={this.state.dialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Thank you!!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your response is very helpful to others to know the cut-off of
              prelims'22.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                this.setState({ ...this.state, dialog: false });
              }}
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ResultForm;
