import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Container from "@mui/material/Container";
import disableScroll from "disable-scroll";
import Button from "@mui/material/Button";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

class Share extends React.Component {
  componentDidMount() {
    disableScroll.on();
  }

  render() {
    return (
      <div>
        <Container
          style={{
            position: "absolute",
            height: "100%",
            backgroundColor: "#000000aa",
          }}
        >
          <Card
            style={{
              padding: "10px",
              margin: "10px",
              marginTop: "130px",
            }}
          >
            <Typography
              align="center"
              variant="subtitle"
              component="div"
              gutterBottom
            >
              Help us by sharing to atleast one person or a group
            </Typography>
            <Container align="center">
              <WhatsappShareButton
                onShareWindowClose={this.props.hide}
                url="https://www.naulets.com"
                title="Calculate your prelims'22 score with keys from Vision, Insights and many more at one place."
              >
                <WhatsAppIcon
                  fontSize="large"
                  style={{ color: "#128C7E" }}
                ></WhatsAppIcon>
              </WhatsappShareButton>

              <TelegramShareButton
                onShareWindowClose={this.props.hide}
                url="https://www.naulets.com"
                title="Calculate your prelims'22 score with keys from Vision, Insights and many more at one place."
              >
                <TelegramIcon
                  fontSize="large"
                  style={{ color: "#0088cc" }}
                ></TelegramIcon>
              </TelegramShareButton>

              <TwitterShareButton
                onShareWindowClose={this.props.hide}
                url="https://www.naulets.com"
                title="Calculate your prelims'22 score with keys from Vision, Insights and many more at one place."
              >
                <TwitterIcon
                  fontSize="large"
                  style={{ color: "#0088cc" }}
                ></TwitterIcon>
              </TwitterShareButton>

              <FacebookShareButton
                onShareWindowClose={this.props.hide}
                url="https://www.naulets.com"
                quote="Calculate your prelims'22 score with keys from Vision, Insights and many more at one place."
              >
                <FacebookIcon
                  fontSize="large"
                  style={{ color: "#4267B2" }}
                ></FacebookIcon>
              </FacebookShareButton>
            </Container>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Share;
