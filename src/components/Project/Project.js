import React from 'react';
import {motion} from 'framer-motion';
import './project.css';
export default function Project() {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <section
          section
          about="Santosh singh project section"
          className="py-md-5 py-3 fade-in-image"
        >
          <div className="container-fluid px-md-5 px-2">
            <h1 className="text-center fw-bolder pb-4">Projects</h1>
          
            {/* <div className="row pt-5  d-flex justify-content-evenly py-4">
            <div
              className="col-md-3 my-2 bg-transparent border rounded"
              align="center"
            >
              <img
                src="../assets/images/tech-icons/web-development.png"
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
                src="../assets/images/tech-icons/frontend-development.png"
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
                src="../assets/images/tech-icons/web-development.png"
                alt="web"
                className="img-fluid my-5"
              />
              <p className="fw-bold py-2">Backend Development</p>
            </div>
          </div>
           */}
          
          </div>
        </section>
      </motion.div>
    </>
  );
}