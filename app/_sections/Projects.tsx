import React from 'react'
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const projectsData = [
        {
          image: "/file-vista.png",
          projectName: "FileVista",
          projectLink: "https://file-vista.netlify.app/",
          projectDescription:
            "Securely share files by effortlessly dragging and dropping onto our cloud. Protect with passwords and send via email.",
          projectTech: [
            "React",
            "NextJS",
            "tailwind",
            "Firebase",
            "Clerk",
          ],
          projectExternalLinks: {
            github: "https://github.com/jasonfelix23/File-Share",
            externalLink: "https://file-vista.netlify.app/",
          },
        },
        {
          image: "/fit-fusion.png",
          projectName: "Fit-Fusion",
          projectLink: "https://fit-fusion.netlify.app/",
          projectDescription:
            "Fit-Fusion is an app that blends different exercise styles to help you reach your fitness goals. Discover and learn new exercises with video demos and follow the author's favorite workout routine for a challenge.",
          projectTech: [
            "React",
            "MaterialUI",
            "RapidApi"
          ],
          projectExternalLinks: {
            github: "https://github.com/jasonfelix23/Fit-Fusion",
            externalLink: "https://fit-fusion.netlify.app/",
          },
        },
        {
          image: "/chat-sipport.png",
          projectName: "Chat Support",
          projectLink: "https://github.com/jasonfelix23/Chat-support",
          projectDescription:
            "The Chat Support System aims to create a comprehensive platform for users to seek assistance through real-time chat, collaborate on code, and share ideas using an integrated digital sketching canvas.",
          projectTech: [
            "React",
            "Node.js",
            "Sockets",
            "MongoDB",
            "Express",
            "Docker",
          ],
          projectExternalLinks: {
            github: "https://github.com/jasonfelix23/Chat-support",
            externalLink: "",
          },
        },
      ];
  return (
    
    <div className='projects' id='work'>
        <div className="title">
            <h2>Some Things I&apos;ve built</h2>
        </div>
        <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div
                className="project"
                key={projectName}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  )
}

export default Projects