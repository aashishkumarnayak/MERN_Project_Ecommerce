import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
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
              src="https://instagram.fsxr1-2.fna.fbcdn.net/v/t51.2885-19/321768797_882986739717146_8917675668725993122_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsxr1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ICXP3eaD3I8AX8GK9CL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCozieUC81LGsRg4zWHwxeXOXXToyg6tU4Bx-a5bsBJUw&oe=65008043&_nc_sid=8b3546"
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
