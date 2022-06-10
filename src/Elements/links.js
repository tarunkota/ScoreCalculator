import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Login from "./login";
import MobileStoreButton from "react-mobile-store-button";

class Step1 extends React.Component {
  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {}

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
          <Container align="center">
            <Typography
              align="center"
              variant="h6"
              component="div"
              gutterBottom
            >
              Connect with Naulets
            </Typography>
            <MobileStoreButton
              store="android"
              url={
                "https://play.google.com/store/apps/details?id=com.naulets&hl=en_IN&gl=US"
              }
              linkProps={{ title: "Play Store Button" }}
            />
            <br />
            <Button
              variant="contained"
              onClick={() => {
                window.open("https://t.me/naulets", "_blank");
              }}
            >
              Join our Telegram channel
            </Button>
          </Container>
        </Card>
      </div>
    );
  }
}

export default Step1;
