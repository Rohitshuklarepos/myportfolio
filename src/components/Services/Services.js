import React from "react";
import { motion } from "framer-motion";
export default function Services() {
  return (
    <>
      <motion.section about="Santosh service section"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >

        <div className="container-fluid px-5 fade-in-image">
        <h1 className="text-center fw-bolder pb-4">Services</h1>

          <h2 className="blueColor fw-bold px-md-5  mx-3">What I Provide</h2>

          <div className="row pt-5  d-flex justify-content-evenly py-4">
            <div
              className="col-md-3 my-2 bg-transparent border rounded"
              align="center"
            >
              <img
                src={require("../../assets/images/tech-icons/web-development.png")}
                alt="web"
                className="img-fluid my-5"
              />
              <p className="fw-bold py-2">Web Application Development</p>
            </div>
            <div
              className="col-md-3 my-2 bg-transparent border rounded"
              align="center"
            >
              <img
                src={require("../../assets/images/tech-icons/frontend-development.png")}
                alt="web"
                className="img-fluid my-5"
              />
              <p className="fw-bold py-2">Frontend Development</p>
            </div>
            <div
              className="col-md-3 my-2  bg-transparent border rounded"
              align="center"
            >
              <img
                src={require("../../assets/images/tech-icons/web-development.png")}
                alt="web"
                className="img-fluid my-5"
              />
              <p className="fw-bold py-2">Backend Development</p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}