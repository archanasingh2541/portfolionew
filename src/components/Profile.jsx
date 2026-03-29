import React, { useState } from "react";
import profileimg from "../assets/img/image-01-removebg-preview.png";
import DownloadIcon from '@mui/icons-material/Download';
import EastIcon from '@mui/icons-material/East';
import Header from "./Header";
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import WorkIcon from "@mui/icons-material/Work";
import img1 from "../assets/img/image-01.png";
import img01 from "../assets/img/public-health-management/image-01.png";
import img02 from "../assets/img/public-health-management/image-02.png";
import img03 from "../assets/img/public-health-management/image-03.png";
import img04 from "../assets/img/public-health-management/image-04.png";
import img05 from "../assets/img/public-health-management/image-05.png";
import img06 from "../assets/img/public-health-management/image-06.png";
import img07 from "../assets/img/public-health-management/image-07.png";
import img08 from "../assets/img/public-health-management/image-08.png";
import img09 from "../assets/img/public-health-management/image-09.png";
import img10 from "../assets/img/public-health-management/image-10.png";
import img11 from "../assets/img/public-health-management/image-11.png";
import img12 from "../assets/img/public-health-management/image-12.png";
import img13 from "../assets/img/public-health-management/image13.png";
import img14 from "../assets/img/public-health-management/image14.png";
import img15 from "../assets/img/public-health-management/image15.png";
import img16 from "../assets/img/public-health-management/image16.png";


import teacherimg01 from "../assets/img/Teacher-self-evaluation/image-01.png"; 
import teacherimg02 from "../assets/img/Teacher-self-evaluation/image-02.png"; 
import teacherimg03 from "../assets/img/Teacher-self-evaluation/image-03.png";
import teacherimg04 from "../assets/img/Teacher-self-evaluation/image-04.png";
import teacherimg05 from "../assets/img/Teacher-self-evaluation/image-05.png";
import teacherimg06 from "../assets/img/Teacher-self-evaluation/image-06.png";

import aichatbot01 from "../assets/img/ai-chatbot/image-01-chatbot.png";
import aichatbot02 from "../assets/img/ai-chatbot/image-02-chatbot.png";
import aichatbot03 from "../assets/img/ai-chatbot/image-03-chatbot.png";
import aichatbot04 from "../assets/img/ai-chatbot/image-04-chatbot.png";

import issreport01 from "../assets/img/Issue-Reporting-System/issue-report-img-01.png";
import issreport02 from "../assets/img/Issue-Reporting-System/issue-report-img-02.png";
import issreport03 from "../assets/img/Issue-Reporting-System/issue-report-img-03.png";
import issreport04 from "../assets/img/Issue-Reporting-System/issue-report-img-04.png";
import issreport05 from "../assets/img/Issue-Reporting-System/issue-report-img-05.png";

import healthimg01 from "../assets/img/public-health-app/health-app-01.png";
import healthimg02 from "../assets/img/public-health-app/health-app-02.png";
import healthimg03 from "../assets/img/public-health-app/health-app-03.png";
import healthimg04 from "../assets/img/public-health-app/health-app-04.png";
import healthimg05 from "../assets/img/public-health-app/health-app-05.png";
import healthimg06 from "../assets/img/public-health-app/health-app-06.png";
import healthimg07 from "../assets/img/public-health-app/health-app-07.png";
import healthimg08 from "../assets/img/public-health-app/health-app-08.png";
import healthimg09 from "../assets/img/public-health-app/health-app-09.png";
import healthimg10 from "../assets/img/public-health-app/health-app-10.png";
import healthimg11 from "../assets/img/public-health-app/health-app-11.png";
import healthimg12 from "../assets/img/public-health-app/health-app-12.png";
import healthimg13 from "../assets/img/public-health-app/health-app-13.png";
import healthimg14 from "../assets/img/public-health-app/health-app-14.png";
import healthimg15 from "../assets/img/public-health-app/health-app-15.png";
import healthimg17 from "../assets/img/public-health-app/health-app-17.png";
import healthimg001 from "../assets/img/public-health-app/health-app-001.png";


import yugenimg01 from "../assets/img/yugen/image-01.png";
import daniimg001 from "../assets/img/Dani-catto/img-001.png";
import daniimg002 from "../assets/img/Dani-catto/img-002.png";
import daniimg003 from "../assets/img/Dani-catto/img-003.png";

import ladderimage from "../assets/img/ladder-lock/img-001.png";
import ladderimagess from "../assets/img/ladder-lock/img-0011.png";

import digiimg01 from "../assets/img/digiform-portal/digi-form-01.png";
import digiimg02 from "../assets/img/digiform-portal/digi-form-02.png";
import digiimg03 from "../assets/img/digiform-portal/digi-form-03.png";


const experiences = [
  {
    company: "Ivdisplays Digital Service Pvt Ltd",
    date: "2020-Now",
    role: "Senior Frontend Developer",
    desc: "I bring user interfaces to life as a Front-End Developer, utilizing React.js, Material UI, and modern web technologies (HTML5, CSS3, Bootstrap5, Sass, JavaScript) to build responsive and interactive web experiences. I leverage Adobe XD for efficient workflows and prioritize code reusability by developing custom components and front-end libraries. My expertise extends to unit testing for robust code, and I enjoy fostering a collaborative environment by mentoring junior developers on React UI and responsive design principles",
   
    color: "green",
  },
  {
    company: "Webizzoo",
    date: "2019-2020",
    role: "Web Developer",
    desc: "Specializing in web development, I design and build web pages using React.js, JavaScript, CSS, Bootstrap 4, and HTML5. My focus lies in creating responsive layouts that adapt smoothly across different devices. Additionally, I implement jQuery to enhance interactivity and user experience. Through meticulous attention to detail and rigorous testing, I ensure the reliability and performance of each component, delivering high-quality, responsive web solutions",
   
    color: "red",
  },
  {
     company: "Onex Solutions",
    date: "2017-2019",
    role: "Web Developer",
    desc: "I leverage my expertise in HTML, CSS (including Bootstrap), and JavaScript to build responsive web pages that prioritize user experience with intuitive and visually appealing interfaces. My commitment to quality extends to ensuring code functionality through unit testing",
   
    color: "yellow",
  },
  {
     company: "Nest Innovative Solutions",
    date: "2015-2016",
    role: "Software Developer",
    desc: "In my previous role as a UI/UX Designer, I honed my skills in crafting user-centered interfaces that are both beautiful and functional. I focused on understanding user needs through research and testing, then translated those insights into intuitive and visually appealing designs. I collaborated closely with developers to ensure my designs came to life seamlessly, resulting in successful digital products",
   
     color: "yellow",

    
  },
];


// for work section 
const projectsData = [
  {
    id: 1,
    name: "Public Health Management",
    cover: img1,
    images: 
      [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16],
    
  },
  {
    id: 2,
    name: "Teacher Self Evaluation",
    cover: teacherimg04,
    images: [
      teacherimg01,
      teacherimg02,
      teacherimg03,
      teacherimg04,
      teacherimg05,
      teacherimg06,
    ],
  },

  {
    id: 3,
    name: "Ai Chatbot",
    cover: aichatbot01,
    images: [
      aichatbot01,
      aichatbot02,
      aichatbot03,
      aichatbot04,
    ],
  },

  {
    id: 4,
    name: "Issue Reporting System",
    cover: issreport01,
    images: [
      issreport01,
      issreport02,
      issreport03,
      issreport04,
      issreport05,
    ],
  },

  {
    id: 5,
    name: "Public Health App",
    cover: healthimg001,
    images: [
      healthimg01,
      healthimg02,
      healthimg03,
      healthimg04,
      healthimg05,
      healthimg06,
      healthimg07,
      healthimg08,
      healthimg09,
      healthimg10,
      healthimg11,
      healthimg12,
      healthimg13,
      healthimg14,
      healthimg15,
      healthimg17,
    ],
  },

   {
    id: 6,
    name: "DigiForm Portal",
    cover: digiimg01,
    images: [
      digiimg01,
      digiimg02,
      digiimg03,
    ],
  },
  {
    id: 7,
    name: "YUGEN",
    cover: yugenimg01,
    images: [
      yugenimg01
     
    ],
  },

   {
    id: 8,
    name: "Dani Catto",
    cover: daniimg001,
    images: [
      daniimg001,
      daniimg002,
      daniimg003,
    ],
  },

   {
    id: 9,
    name: "Ladder Lock",
    cover: ladderimagess,
    images: [
      ladderimage,
    ],
  },

  
];

const Profile = () => {

   const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (project) => {
    setActiveProject(project);
    setCurrentIndex(0);
  };

  const closeCarousel = () => {
    setActiveProject(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

    return (
        <>
       <div className="main-sec">
        <Header />
        <section className="hero-section">
      <div className="container-fluid">
        <div className="row min-vh-100 row-img-sec">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="hero-content px-5">
              <span className="subtitle">SENIOR FRONTEND UI/UX DEVELOPER</span>
              <h1>
                I'm Archana  Kumari
              </h1>
              {/* <p>Front-end developers are the architects of the web experiences we encounter every day. They translate stunning visual designs from UI/UX designers into functional and interactive websites and web applications. Their expertise lies in crafting the front-end, the user-facing side that users see and interact with. Using a combination of programming languages like HTML, CSS, and JavaScript, they bring web pages to life, ensuring smooth navigation, animations, and a visually captivating design that adheres to responsive layouts for optimal display across various devices

              </p> */}

              <div className="hero-buttons mt-4">
               <a href="#about"> <button className="btn btn-about  me-3">
                  More About Me <span className="arrow-icon-new"><EastIcon /></span>
                </button></a>
                <button className="btn bt-outline-new">
                  <a href="/archana-cv.pdf" download="archana_Resume.pdf" style={{ textDecoration: "none", color: "inherit" }}>
                  Resume Download <span className="arrow-icon-new"><DownloadIcon /></span>
                  </a>
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 hero-image  d-lg-flex align-items-end">
            <img
              src={profileimg}
              alt="profile"
            />
          </div>

        </div>
      </div>
     
    </section>
  

    <section id="about">

        <div className="about-sec main-inner-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <h2 className="about-sec-cont">About Me</h2>
                        

                    </div>
                </div>
                <div className="row">
                   
                    <div className="col-md-6">
                      <div className="design-tools">
  <h4><span className="line"></span> Design Tools</h4>

  <div className="tool-list">
    <span className="tool-chip">Adobe Xd</span>
    <span className="tool-chip">Photoshop</span>
    <span className="tool-chip">Figma</span>
  </div>

  <h4 className="tech-sec-main"><span className="line"></span> Technologies and Skill</h4>

  <div className="tool-list">
    <span className="tool-chip">HTML5</span>
    <span className="tool-chip">CSS3</span>
    <span className="tool-chip">SASS</span>
    <span className="tool-chip">TAILWIND CSS</span>
      <span className="tool-chip">BOOTSTRAP5</span>
    <span className="tool-chip">JAVACRIPT</span>
    <span className="tool-chip">RESPOSIVE PAGES</span>
    <span className="tool-chip">MATERIAL UI</span>
     <span className="tool-chip">REACT</span>
       <span className="tool-chip">GIT</span>
  </div>
</div>
                      </div>

                       <div className="col-md-6">
                        <div className="para-about">
                        {/* <p>
                          Front-end developers are the architects of the web experiences we encounter every day. 
                          They translate stunning visual designs from UI/UX designers into functional and 
                          interactive websites and web applications. 
                          Their expertise lies in crafting the front-end, 
                          the user-facing side that users see and interact with
                          .I also create wireframes and UI designs using tools like Adobe XD and Figma, helping to define clear structure and user flow before development begins. Using a combination of programming 
                          languages like React UI, HTML, CSS, SASS, TAILWIND CSS, BOOTSTRAP and JavaScript, 
                          they bring web pages to life, ensuring smooth navigation, animations, and a visually 
                          captivating design that adheres to responsive layouts for optimal display across various devices.</p> */}
                     {/* <p>
                      Front-end developers are the architects of the web experiences we encounter every day, transforming UI/UX designs into functional and interactive websites and applications. I design wireframes using Adobe XD and Figma to establish a clear structure and user flow before development. Using technologies such as React, HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, and JavaScript, I build responsive, visually appealing interfaces with smooth navigation and user-friendly interactions.
                     </p> */}

                     <p>
                    Front-end developers are the architects of the web experiences we encounter every day, transforming UI/UX designs into functional and interactive websites and applications. I design wireframes using Adobe XD and Figma to establish a clear structure and user flow before development. Using technologies such as React, HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, and JavaScript, I build responsive, visually appealing interfaces with smooth navigation and user-friendly interactions.
                    
                     </p>
                     
                      </div>
                      </div>
                </div>
            </div>
        </div>
    </section>

    <section className="timeline" id="experience">
      <div className="timeline-container">
        <h2 className="about-sec-cont">Relevant Experience</h2>
        <div className="timeline-line"></div>
        <div className="desktimeline">
        {experiences.map((item, index) => (
          <>
          <div
            key={index}
            className={`timeline-item ${
              index % 1 === 0 ? "reverse" : ""
            }`}
          >
           
            <div className="timeline-left">
            
               <h3>{item.role}</h3>
              <p>{item.desc}</p>
            </div>

           
            <div className="timeline-center">
              <span className={`dot ${item.color}`}></span>
            </div>

           
            <div className="timeline-right">
               <h3>{item.company}</h3>
              <p>{item.date}</p>
            </div>
          </div>

       

          </>



        ))}
</div>
     <div className="mobiletimeline">
         {experiences.map((item, index) => (
          <>
          <div
            key={index}
            className={`timeline-item ${
              index % 1 === 0 ? "reverse" : ""
            }`}
          >
           
            <div className="timeline-left">
               <h3>{item.company}</h3>
              <p>{item.date}</p>
               <h3>{item.role}</h3>
              <p>{item.desc}</p>
            </div>

           
            <div className="timeline-center">
              <span className={`dot ${item.color}`}></span>
            </div>

           
            {/* <div className="timeline-right">
               <h3>{item.company}</h3>
              <p>{item.date}</p>
            </div> */}
          </div>

       

          </>



        ))}
        </div>
      </div>
    </section>

     <section className="education" id="education">
      <div className="container">
        <h2 className="title">EDUCATION</h2>

        <div className="divider"></div>

        <div className="education-grid">
          <div className="education-card">
            <SchoolIcon className="education-icon" />
            <h3>Bachelor in Information Technology</h3>
            <p className="institute">
              Bengal College of Engineering and Technology for Women
            </p>
            <p className="duration">Duration : 2011-2015</p>
          </div>

          <div className="education-card">
            <SchoolIcon className="education-icon" />
            <h3>High School (Higher Secondary)</h3>
            <p className="institute">
              Andhra Higher Secondary School
            </p>
            <p className="duration">Duration : 2011-2015</p>
          </div>

          <div className="education-card">
            <SchoolIcon className="education-icon" />
            <h3>High School (Secondary)</h3>
            <p className="institute">
              Andhra Higher Secondary School
            </p>
            <p className="duration">Duration : 2009-2011</p>
          </div>
        </div>
      </div>
    </section>

     <section className="work" id="work">
      <div className="container">
        <h2>My Work</h2>

        <div className="work-grid">
          {projectsData.map((project) => (
            <div className="work-card" key={project.id}>
              <img src={project.cover} alt={project.name} />
              <h3>{project.name}</h3>
              <button onClick={() => openCarousel(project)}>
                View More
              </button>

            </div>
          ))}
        </div>
      </div>

      {/* Modal Carousel */}
      {activeProject && (
        <div className="modal">
          <span className="close" onClick={closeCarousel}>×</span>

          <button className="prev" onClick={prevSlide}>❮</button>

          <img
            src={activeProject.images[currentIndex]}
            alt="project"
            className="carousel-img"
          />

          <button className="next" onClick={nextSlide}>❯</button>
        </div>
      )}
    </section>


    <section className="contact" id="contact">
      <div className="container">
        
        <div className="contact-grid">
          
          {/* Contact */}
          <div className="contact-col">
            <p className="label">CONTACT</p>
            <h3 className="footer-mail"> <a href="mailto:archanasingh2541@gmail.com">archanasingh2541@gmail.com</a></h3>
            <p className="sub-text tel-sec">
              <a href="tel:+919609056547">+91 9609056547</a> / <a href="tel:+916297335683">+91 6297335683</a>
              </p>
          </div>

          {/* Location */}
          <div className="contact-col">
            <p className="label">LOCATION</p>
            <h3>
              Kolkata, West Bengal, India
            </h3>
          </div>

          {/* Follow */}
          <div className="contact-col">
            <p className="label">FOLLOW</p>
            <ul>
              {/* <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Portfolio</li> */}
              <li><a href="https://www.linkedin.com/in/archana-singh-b815b594/" target="_blank"><LinkedInIcon titleAccess="LinkedIn"/></a> </li>
              {/* <li><InstagramIcon titleAccess="Instagram"/> </li> */}
              <li><a href="https://archana-portfolio.pages.dev/" target="_blank"><WorkIcon titleAccess="Portfolio"/> </a></li>
            </ul>
          </div>

        </div>

      </div>
    </section>

      </div>
        </>
    );
}
export default Profile;