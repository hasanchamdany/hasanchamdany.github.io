import React from "react";
import Image from "next/image";
import TiltComponent from "./TiltCard";
import Link from "next/link";

import git from "../../../public/images/skillset/1.svg";
import vuejs from "../../../public/images/skillset/2.svg";
import reactjs from "../../../public/images/skillset/3.svg";
import nodejs from "../../../public/images/skillset/4.svg";
import github from "../../../public/images/skillset/5.svg";
import arduino from "../../../public/images/skillset/6.svg";
import cpp from "../../../public/images/skillset/7.svg";
import nextjs from "../../../public/images/skillset/8.svg";
import html from "../../../public/images/skillset/9.svg";
import css from "../../../public/images/skillset/10.svg";
import firebase from "../../../public/images/skillset/11.svg";
import sql from "../../../public/images/skillset/12.svg";
import postgreesql from "../../../public/images/skillset/13.svg";
import python from "../../../public/images/skillset/14.svg";
import js from "../../../public/images/skillset/15.svg";
import ts from "../../../public/images/skillset/16.svg";
import mongodb from "../../../public/images/skillset/17.svg";
import vscode from "../../../public/images/skillset/18.svg";
import figma from "../../../public/images/skillset/19.svg";
import premierepro from "../../../public/images/skillset/20.svg";

const ProjectCard = (props) => {
  //   const dummy = "git, vuejs, postgreesql, python, firebase";
  const techStack = props.techstack
    ? props.techstack.split(",").map((tech) => tech.trim())
    : [];

  const getTechLogo = (tech) => {
    switch (tech.toLowerCase()) {
      case "git":
        return git;
      case "vuejs":
        return vuejs;
      case "reactjs":
        return reactjs;
      case "nodejs":
        return nodejs;
      case "github":
        return github;
      case "arduino":
        return arduino;
      case "cpp":
        return cpp;
      case "nextjs":
        return nextjs;
      case "html":
        return html;
      case "css":
        return css;
      case "firebase":
        return firebase;
      case "sql":
        return sql;
      case "postgresql":
        return postgreesql;
      case "python":
        return python;
      case "js":
        return js;
      case "ts":
        return ts;
      case "mongodb":
        return mongodb;
      // Add more cases for other tech logos
      default:
        return null; // Return null for unrecognized tech
    }
  };

  const getGenreColor = (genre) => {
    switch (genre) {
      case "web":
        return "#33B950";
      case "data-engineering":
        return "#0D8BFF";
      case "deep-learning":
        return "#E0B835";
      default:
        return "transparent"; // or any default color
    }
  };

  return (
    <TiltComponent>
      <Link href={props.url} className="">
        <div className="role-card focus:scale-105 focus:outline-none shadow-sm shadow-black hover:shadow-white  rounded-2xl transition-transform hover:scale-105">
          <div className="flex justify-center">
            <Image
              src={props.src}
              alt="image card"
              width={380}
              height={200}
              className="flex justify-center pt-2 px-2 rounded-[15px]"
            />
          </div>
          <div className="flex flex-col gap-4 text-white max-w-[350px] py-4 px-4">
            <h1 className="text-xl font-bold ml-4">{props.title}</h1>
            <p className="ml-4">{props.desc}</p>

            <div className="flex flex-wrap ml-4 mt-2">
              {techStack.map((tech, index) => (
                <div key={index} className="mr-2 mb-2">
                  {getTechLogo(tech) && (
                    <Image
                      src={getTechLogo(tech)}
                      alt={`${tech} logo`}
                      width={30}
                      height={30}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              className="rounded-[15px] flex justify-center ml-4 mb-2 w-fit px-3 py-1"
              style={{ backgroundColor: getGenreColor(props.genre) }}
            >
              <p className="text-lg font-bold text-dark-grey">{props.genre}</p>
            </div>
          </div>
        </div>
      </Link>
    </TiltComponent>
  );
};

export default ProjectCard;
