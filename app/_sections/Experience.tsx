'use client'
import React, { use, useEffect, useState } from 'react'
import Link from 'next/link';

const Experience = () => {
    const [selected, setSelected] = useState(0);
    useEffect(()=> {
        const transformSelected = () => {
            const underline = document.querySelector<HTMLElement>('.underline');
            underline!.style.top =  `${selected * 2.5}rem`;
        }
        transformSelected();
    }, [selected])
    const expereinces = [
        {
          name: "QiPath",
          shortName: "QiPath",
          role: "Software Engineer Intern",
          url: "https://www.qipath.com",
          start: "September 2023",
          end: "May 2024",
          shortDescription: [
            "Led the frontend development team in migrating QiPath's website from PHP to Angular/Node.js.",
            "Implemented enhancements that led to a 50% decrease in report generation time.",
            "Utilized D3.js to create engaging data visualizations, additionally created highly customizable report page.",
          ],
        },
        {
          name: "University Of Colorado Boulder",
          shortName: 'UC Boulder',
          role: "Grader",
          url: "https://www.colorado.edu/cs/academics/graduate-programs/professional-masters-computer-science",
          start: "January 2024",
          end: "May 2024",
          shortDescription: [
            "Proficiently graded assignments and exams for CSCI 2700- Data structures, ensuring accuracy and adherence to grading criteria.",
            "Successfully managed a workload of 500 students, maintaining organization and efficiency in grading processes.",
            "Provided valuable support to teaching assistants through assistance with recitations and grading tasks, contributing to the smooth operation of course activities.",
          ],
        },
        {
          name: "University Of Colorado Boulder",
          shortName: 'UC Boulder',
          role: "Grader",
          url: "https://www.colorado.edu/cs/academics/graduate-programs/professional-masters-computer-science",
          start: "August 2023",
          end: "December 2023",
          shortDescription: [
            "Diligently graded assignments and assessments for two courses, CSCI-5817 Database Systems and CSCI-1000 Computer Science in the Field of Work and Study.",
            "Managed 250+ students, ensuring smooth administration of course materials and assessments.",
            "Conducted regular office hours to provide students with assistance and clarification on course materials.",
          ],
        }
      ];
  return (
    <div className='experience' id="experience">
        <div className="title">
            <h2>Where I&apos;ve worked</h2>
            <div className="container">
                <ul className='exp-slider'>
                    <div className="underline"></div>
                    {
                        expereinces.map((experience, index) => (
                            <li key={index} className={`exp-slider-item ${index === selected && 'exp-slider-item-selected'
                            }`}
                            onClick={()=> setSelected(index)}
                            >
                                <span>{experience.shortName}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="exp-details">
                    <div className="exp-details-position">
                        <h3>
                            <span>{expereinces[selected].role}</span>
                            <span className='exp-details-position-company'>
                                &nbsp;@&nbsp;
                                <Link className="link" href={expereinces[selected].url}>
                                {expereinces[selected].name}
                                </Link>
                            </span>
                        </h3>
                        <p className="exp-details-range">
                            {expereinces[selected].start}-{expereinces[selected].end}
                        </p>
                        <ul className="exp-details-list">
                            {
                                expereinces[selected].shortDescription.map((desc, idx)=> (
                                    <li key={idx} className='exp-details-list-item'>
                                         {desc}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience