import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import RESUME from '../../assets/files/ROHIT_SHUKLA.pdf'
export default function Contact() {
  return (
    <motion.section about="Santosh contact us section" className="contactSection"
    
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="container fade-in-image">
      <h1 className="contactH1 pb-4 text-md-start text-center">Contact Me</h1>

        <div className="row">
          <div className="col">
            <p className="text-secondary px-md-0 px-2">
              Here's how to reach me, looking forward to talk with you all!.
            </p>
            <p className="text-secondary px-md-0 px-2">
              Inquiries via email at{" "}
              <a href="mailto:santoshsingh74827@gmail.com">
                <u className="linkColor"> shuklarohit867@gmail.com </u>
              </a>{" "}
              or via socials below:.
            </p>
            <ul>
              <li className="pt-3">
                Github-{" "}
                <a className="linkColor" href="https://github.com/Rohitshuklarepos">
                   https://github.com/Rohitshuklarepos
                </a>{" "}
              </li>
              <li className="pt-3">
                Linkedin-{" "}
                <a
                  className="linkColor"
                  href="https://www.linkedin.com/in/rohit-shukla-511549227/"
                >
                 https://www.linkedin.com/in/rohit-shukla-511549227/
                </a>{" "}
              </li>
              <li className="pt-3">
                Telegram-{" "}
                <a className="linkColor" href="https://web.telegram.org/a/">
                https://web.telegram.org/a/
                </a>{" "}
              </li>
            </ul>
            <p className="pt-3 text-secondary">
              View my resume in{" "}
              <a
                href={RESUME}
                download
                className="linkColor"
              >
                pdf format.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}