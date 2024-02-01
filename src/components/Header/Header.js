import React from "react";
import Typewriter from "typewriter-effect";
import "./header.css";
import { motion } from "framer-motion";
import Headerimg from '../../assets/images/header.svg';
import InstagramImg from '../../assets/images/social-icons/instagram2.svg'
import GitImg from '../../assets/images/social-icons/github2.png'
import LinkedinImg from '../../assets/images/social-icons/linkedin3.svg'
export default function Header() {
  return (
    <>
      <motion.div className="container-fluid headerContainer"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}

      // initial={{width:0}}
      // animate={{width:'100%'}}
      // exit={{x:window.innerWidth, transition:{duration:0.1}}}

      >
        <div className="row">
          <div className="col-md-6 fade-in-image">
            <h1>
              Hi, I am <span className="myName"> Rohit Shukla
              </span>{" "}
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    " Full Stack Developer",
                    "Web Developer",
                    "Front End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 100,
                  wrapperClassName: "typewriter-wrapper",
                  cursorClassName: "typewriter-cursor",
                  cursorBlinkSpeed: 500,
                  cursorBlink: true,
                  cursor: "|",
                  loopCount: Infinity,
                  onComplete: () => {
                    console.log("Completed");
                  },
                }}
              />
            </h1>
            <p>
              I am a Front-End / Full-Stack Developer, currently i am working at
              iMentus Technologies as a Software Engineer.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://www.instagram.com/____mango____man/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={InstagramImg}
                  width={50}
                  height={50}
                  className="rounded-3 img-fluid mx-2"
                  alt=""
                />
              </a>
              <a href="https://github.com/santosh214" target="_blank" 
                rel="noreferrer"
                >
                <img
                  src={GitImg}
                  width={50}
                  height={50}
                  className="rounded-3 img-fluid mx-2"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/santosh-singhh/"
                target="_blank"
                rel="noreferrer"

              >
                <img
                  src={InstagramImg}
                  width={50}
                  height={50}
                  className="rounded-3 img-fluid mx-2"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 fade-in-image">
            <img
              src={Headerimg}
              alt="rohit img"
              className="img-fluid"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}