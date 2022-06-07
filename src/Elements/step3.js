import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { postDataWithoutToken } from "../Utils/NetUtils";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import Cookies from "universal-cookie";
import CircularProgress from "@mui/material/CircularProgress";

class Step3 extends React.Component {
  state = {
    otpSent: false,
    phone: "",
    otp: "",
    loading: false,
  };

  componentDidMount() {}

  sendOTPResponse = (json) => {
    if (json.status === "success") {
      this.setState({ ...this.state, otpSent: true });
    }
  };

  sendOTP() {
    var details = {
      phone: this.state.phone,
      hash: "",
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    postDataWithoutToken("api/login/", formBody, this.sendOTPResponse);
  }

  verifyOTPResponse = (json) => {
    console.log(json);

    if (json.status === "success") {
      //console.log("otp verified");
      console.log(json);
      const cookies = new Cookies();
      // in production make it https only
      cookies.set("Token", json.token, { path: "/", sameSite: true });
      console.log("got otp");
      this.setState({ ...this.state, loading: true });
      this.props.getResults();
    } else {
      console.log("wrong otp");
    }
  };

  verifyOTP() {
    var details = {
      phone: this.state.phone,
      otp: this.state.otp,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    postDataWithoutToken("api/otpCheck/", formBody, this.verifyOTPResponse);
  }

  handleChange = (event) => {
    this.setState({ ...this.state, phone: event.target.value });
  };

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
          Almost done!!
        </Typography>
        <Container align="center">
          <Typography align="left" variant="caption">
            Please verify your phone number. We will notify you when new or
            updated keys are available.
          </Typography>

          {this.state.otpSent ? (
            <div>
              <TextField
                style={{ marginBottom: "20px" }}
                id="outlined-basic"
                label="OTP"
                variant="outlined"
                value={this.state.otp}
                onChange={(event) => {
                  this.setState({ ...this.state, otp: event.target.value });
                }}
              />
              <br />
              <Button
                variant="contained"
                onClick={() => {
                  this.verifyOTP();
                }}
              >
                Verify
              </Button>
            </div>
          ) : (
            <div>
              <FilledInput
                style={{ marginBottom: "20px" }}
                id="filled-adornment-amount"
                value={this.state.phone}
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position="start">+91</InputAdornment>
                }
              />
              <br />
              <Button
                variant="contained"
                onClick={() => {
                  this.sendOTP();
                }}
              >
                Send OTP
              </Button>
            </div>
          )}
        </Container>
        {this.state.loading ? (
          <Container align="center">
            <CircularProgress />
            <Typography align="left" variant="caption">
              Please wait while we are generating your results.
            </Typography>
          </Container>
        ) : null}
      </Card>
    );
  }
}

export default Step3;
