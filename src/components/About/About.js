import React from "react";
import "./about.css";
import {motion} from 'framer-motion'
export default function About() {
  const technologies = [
    {
      img: "react",
      name: "React",
      url: "https://reactjs.org/",
    },
    {
      img: "bootstrap",
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
    },
    {
      img: "html5",
      name: "HTML",
      url: "https://www.w3.org/standards/html/",
    },
    {
      img: "css3",
      name: "CSS",
      url: "https://www.w3.org/standards/css/",
    },
    {
      img: "javascript",
      name: "JavaScript",
      url: "https://www.w3.org/standards/html/",
    },
    {
      img: "nodejs",
      name: "NodeJS",
      url: "https://nodejs.org/en/",
    },
    // {
    //   img: "nextjs",
    //   name: "NextJs",
    //   url: "https://nextjs.org/",
    // },
    {
      img: "redux",
      name: "Redux",
      url: "https://redux.js.org/",
    },
    {
      img: "typescript",
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      img: "tailwindcss",
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
    },
    {
      img: "git",
      name: "Git",
      url: "https://git-scm.com/",
    },
    {
      img: "heroku",
      name: "Heroku",
      url: "https://www.heroku.com/",
    },
    {
      img: "mysql",
      name: "MySQL",
      url: "https://www.mysql.com/",
    },
    {
      img: "postman",
      name: "Postman",
      url: "https://www.getpostman.com/",
    },
  ];

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <section section about="Santosh singh About section" className="py-md-5 py-3 fade-in-image">
        <div className="container-fluid px-md-5 px-2">
          <h1 className="text-center fw-bolder pb-4">About Me</h1>
          <div className="row px-3">
            <div className="col-12">
              <h1 className="blueColor fw-bold">A bit about me</h1>
              <p className="lineHeight py-2">
                I'm a self-taught Web developer and Frontend Developer with
                experience in designing new features from ideation to
                production, implementation of wireframes and design flows into
                high performance software applications. I take into
                consideration the user experience while writing reusable and
                efficient code. I passionately combine good design, technology,
                and innovation in all my projects, which I like to accompany
                from the first idea to release.Currently, I'm focused on the
                backend development.
              </p>
            </div>
            <div className="col-12">
              <h1 className="blueColor fw-bold">Technologies and Tools</h1>
              <p className="lineHeight py-2">
                Using a combination of cutting-edge technologies and reliable
                open-source software I build user-focused, performant apps and
                websites for smartphones, tablets, and desktops.
              </p>
            </div>
          </div>
          <div className="row justify-content-evenly ">
            {technologies.length > 0
              ? technologies.map((item, index) => {
                  return (
                    <div
                      className="col-md-2  col-3 m-md-4  m-3 d-flex justify-content-evenly"
                      key={index}
                    >
                      <div className="col-4 col-md-4 py-md-3   d-flex justify-content-evenly">
                        <img
                          src={require(`../../assets/images/tech-icons/${item.img}.svg`)}
                          alt="react"
                          className="img-fluid  rounded circle "
                          width={80}
                        />
                        <p className=" pt-3 ms-2 pt-md-4 ms-md-4 techName">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    </motion.div>
  );
}