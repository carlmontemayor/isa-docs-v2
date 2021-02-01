/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Team(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const developers = [
    {
      title: "Amanda Lee",
      content:
        "Amanda has a background in computer science and engineering and some experience working in industry through her past internships. She has done some work with front and back end development which includes some HTML, CSS, Python, and SQL. However, she would like to get more experience and expand her knowledge within those areas. Her involvement in the project is to research and improve her abilities in full-stack development and play an impactful role in each part of the project areas. Overall, her main goal is to learn and get the most out of this project so that it can help her grow professionally.",
    },
    {
      title: "Aya Nakano",
      content:
        "Aya has a background in computer science and engineering with experience working in corporate environments through internship experiences. She has done some front end web development using HTML, CSS, and TypeScript as well as some data visualization using a business intelligence tool Tableau in her internships. She is hoping to work on many different components of the project with the rest of the members while learning the processes to determine her interests, and is looking forward to building software that can apply to real world applications from beginning to end.",
    },
    {
      title: "Gage Shaw",
      content:
        "Gage has a background in physics, engineering, and computer science.  He has done some work with data visualization, but has no experience in front or back end app development.  For this reason his involvement in the project, at this point, is to research and practice full-stack app development to see where his talents will be of the most use to the team.  No matter where he chooses to focus his energy, he will play a role in every step of the process in an effort to practice the important skill of app development.  ",
    },
    {
      title: "Carl Montemayor",
      content:
        "Carl has had experience in software engineering through his internships and side projects. In particular, he has developed web applications to support the data management software at aerospace agencies and also full stack applications to support a local business in Las Vegas. ",
    },
  ];

  const instructors = [
    {
      title: "Dr. Sergiu Dascalu",
      content: "CS 426 Professor",
    },
    {
      title: "Devrin Lee",
      content: "CS 426 Professor",
    },
  ];

  const advisors = [
    {
      title: "Drew Cortright",
      content: "Intuit External Advisor",
    },
    {
      title: "Jacob Leveroni",
      content: "Intuit External Advisor",
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Meet Our Team 8!</h1>
          </header>
          <GridBlock layout="fourColumn" contents={developers}></GridBlock>
          <h1>Meet Our Instructors!</h1>
          <GridBlock layout="twoColumn" contents={instructors}></GridBlock>
          <h1>Meet Our External Advisors!</h1>
          <GridBlock layout="twoColumn" contents={advisors}></GridBlock>
        </div>
      </Container>
    </div>
  );
}

module.exports = Team;
