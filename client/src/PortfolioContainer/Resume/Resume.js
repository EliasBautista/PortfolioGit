import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
          <span> <b> <a href={props.link ? props.link : ""} target="_blank" rel="noopener noreferrer">{props.demo ? props.demo : ""}</a> </b></span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "briefcase.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 90 },
    { skill: "Kotlin", ratingPercentage: 95 },
    { skill: "R", ratingPercentage: 90 },
    { skill: "Java", ratingPercentage: 90 },
    { skill: "PHP", ratingPercentage: 75 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "MySQl", ratingPercentage: 75 },
    { skill: "Android", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "CryptoWallet",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Cryptocurrency wallet: Allows the user to check their balance of different cryptocurrencies in real time.",
      subHeading: "Technologies: Kotlin, XML, Firebase, RoomDB",
      Demo:
        "Demo & Documentation",
      link:
        "https://github.com/EliasBautista/CryptoWallet",
    },
    {
      title: "Portfolio Management",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Project Management | Change Management | Portfolio Management. ",
      subHeading:
        "Portfolio Management & PMO",
      Demo:
        "See More",
      link:
        "https://github.com/EliasBautista/ProjectManagment_Emtech",
    },
    {
      title: "Data Analysis - Python",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Extract and manipulate data using machine learning algorithms and presenting well-prepared reports.",
      subHeading:
        "Technologies: Python, Pandas, Numpy, SQL.",
      Demo:
        "Demo & Documentation",
      link:
        "https://github.com/EliasBautista/DataScience_Emtech",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Universidad Autónoma de Querétaro"}
        subHeading={"Ingeniería de Software"}
        fromDate={"2018"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Bedu"}
        subHeading={"Desarrollo Movil con Android"}
        fromDate={"2021 "}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"EMTECH: Emerging Technologies Institute"}
        subHeading={"Data Science | Project Managment"}
        fromDate={"2020"}
        toDate={"2021"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Research Center in Educational Technology UAQ"}
          subHeading={"Software developer"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Design and production of courses and diplomas in virtual mode.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            • Automation of processes for the generation of web pages on the Moodle platform.
          </span>
          <br />
          <span className="resume-description-text">
            • Course design on the Moodle platform.{" "}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          demo={projectsDetails.Demo}
          link={projectsDetails.link}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know and share my knowledge with others."
      />
      <ResumeHeading
        heading="Design"
        description="I find working on design very satisfactory as it is a way of taking ideas and making them tangible, design is an intermediary between information and understanding."
      />
      <ResumeHeading
        heading="Algorithms"
        description="Generate and optimize algorithms to streamline day-to-day processes."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
