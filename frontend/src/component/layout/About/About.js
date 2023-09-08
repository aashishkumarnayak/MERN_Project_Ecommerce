import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
import dp from "../../../images/dp.jpg";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/aashishkumar.nayak/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={dp}
              alt="Founder"
            />
            <Typography>Aashish Kumar Nayak</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            This is my online store. 🌟 Discover unbeatable deals at Nayak Online Store! 🛍️ We're your go-to destination for amazing products at jaw-dropping low prices. Shop now and elevate your shopping experience! 💻🛒
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/aashish-kumar-nayak-038952200/"
              target="blank"
            >
              <LinkedInIcon className="LinkedinSvgIcon" />
            </a>

            <a href="https://www.instagram.com/aashishkumar.nayak/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
