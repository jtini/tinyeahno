// @flow
import React from 'react';
import './CaseStudyIntro.scss';

type Props = {
    title: String,
    client?: String,
    year?: String,
    visit?: {
        text: String,
        href: String
    }
}


const CaseStudyIntro = (props: Props) => {
    const { title, client, visit, year } = props;

    return (

        <section className="case-study__intro">
            <div className="case-study__summary-wrapper">
                <h1 className="case-study__headline">{title}</h1>
            </div>
            <div className="case-study__summary">
                {client &&
                    <div className="summary__item">
                        <p className="summary-item__label">Client</p>
                        <p className="summary-item__text">{client}</p>
                    </div>
                }
                {visit &&
                    <div className="summary__item">
                        <p className="summary-item__label">Visit</p>
                        <p className="summary-item__text">
                            <a href={visit.href} target="_blank" rel="noopener noreferrer" className="case-study__text-link">{visit.text}</a>
                        </p>
                    </div>
                }
                {year &&
                    <div className="summary__item">
                        <p className="summary-item__label">Year</p>
                        <p className="summary-item__text">{year}</p>
                    </div>
                }
            </div>
        </section>

    )
}

export default CaseStudyIntro;