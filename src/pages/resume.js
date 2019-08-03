// @flow
import React from 'react';
import { Link } from 'gatsby'
import './resume.scss'

const experience = [
    {
        key: 'spruce',
        title: 'Designer at Spruce Labs',
        years: '2018–Present',
        description: 'Created and maintained Heartwood, a design system for the company’s digital product suite and visual identity. Structured the creative team’s design workflow and collaborated with product and engineering teams on sprint planning and handoff.'
    }, {
        key: 'bshop',
        title: 'Designer at Barbershop',
        years: '2015–2018',
        description: 'Designed and developed digital products and visual identities for a range of clients from early-stage tech startups to Fortune 500 companies. Joined the team as its first employee and helped scale the business and grow the team.'
    }, {
        key: 'sk',
        title: 'Art Director at Skreened',
        years: '2013–2014',
        description: 'Collaborated with the marketing team to design and deliver one-off promotions for an apparel printing e-commerce business as part of an “improvisational” branding initiative. Also handled product photography and photo editing.'
    }, {
        key: 'cif',
        title: 'Art Director at Columbus Idea Foundry',
        years: '2012–2013',
        description: 'Created a new visual identity and developed an updated digital experience for a community workshop. Deliverables included a brand style guide, custom Wordpress theme, signage designs, and evergreen promotions to reach potential members.'
    }, {
        key: 'uas',
        title: 'Design Assistant at  Urban Arts Space',
        years: '2011–2012',
        description: 'Designed promotions and signage for a student-run art gallery. Also contributed to evolution of the gallery’s brand identity.'
    }
]

const orgs = [
    {
        key: 'figmaDen',
        title: 'Figma Denver',
        role: 'Co-Organizer and Host',
        years: '2019–Present'
    }, {
        key: 'aigaCo',
        title: 'AIGA Colorado',
        role: 'Web Chair',
        years: '2018–Present'
    }
]

const education = [
    {
        key: 'bdw',
        title: 'Post-grad Certificate in Creative Technology',
        place: 'Boulder Digital Works',
        years: '2015'
    }, {
        key: 'osu',
        title: 'B.S. Landscape Architecture',
        description: 'Minor in Graphic Design',
        place: 'The Ohio State University',
        years: '2012'
    }
]

const ResumePage = () => {
    return (
        <main className="resume">
            <section className="resume-layer">
                <div className="resume-layer__inner resume-title__wrapper">
                    <h1 className="resume-title">Jeremy Tinianow</h1>
                    <p className="resume-contact"><Link className="resume-link" to='/'>tinyeahno.com</Link> | <a className="resume-link" href="tel:+16145612619">614 561 2619</a> | <a className="resume-link" href="mailto:jeremy@tinyeahno.com">jeremy@tinyeahno.com</a></p>
                </div>
            </section>
            <section className="resume-layer">
                <div className="resume-layer__inner resume-layer__inner--flex">
                    <h2 className="resume-heading">Experience</h2>
                    <div className="resume-experience">
                        {experience.map(exp => (
                            <div className="resume-entry resume-entry--flex" key={exp.key}>
                                <div>
                                    <p className="resume-subheading">{exp.title}</p>
                                    <p>{exp.years}</p>
                                </div>
                                <div className="resume-experience__desc">
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="resume-layer">
                <div className="resume-layer__inner resume-layer__inner--flex">
                    <h2 className="resume-heading">Organizations</h2>
                    <div className="resume-organizations">
                        {orgs.map(org => (
                            <div className="resume-entry" key={org.key}>
                                <p className="resume-subheading">{org.title}</p>
                                <p>{org.role}</p>
                                <p>{org.years}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="resume-layer">
                <div className="resume-layer__inner resume-layer__inner--flex">
                    <h2 className="resume-heading">Education</h2>
                    <div className="resume-education">
                        {education.map(edu => (
                            <div className="resume-entry" key={edu.key}>
                                <p className="resume-subheading">{edu.title}</p>
                                {edu.description &&
                                    <p>{edu.description}</p>
                                }
                                <p>{edu.place}</p>
                                <p>{edu.years}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ResumePage;