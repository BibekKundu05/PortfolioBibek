import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const [titlex, datex, descx] = [
    (props.subtitle || "").split('|'),
    (props.date || "").split('|'),
    (props.description || "").split('|')
  ];

  const linkRegex = /\((.*?)\)/;

  return (
    <div className="resume__item resume_border">
      <div className="resume__header" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="resume__subtitle">{props.title}</h3>
        <span className="resume__icon">{showInfo ? "-" : "+"}</span>
      </div>

      {titlex.map((titlePart, index) => {
        const linkMatch = titlePart.match(linkRegex);
        const title = linkMatch
          ? titlePart.replace(linkRegex, "").trim()
          : titlePart.trim();
        const href = linkMatch ? linkMatch[1] : null;

        return (
          <div
            className={`${showInfo ? "show-content" : ""} resume__content`}
            key={`resume-${index}`}
          >
            <div className="resume__item">
              <div className="resume__date-title">
                <h3 className="resume__title">
                  {title}
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <FaLink className="link__icon2" />
                    </a>
                  )}
                </h3>
                <span className="resume__date text-cs">{datex[index] || ''}</span>
              </div>
              <p className="resume__description">{descx[index] || ''}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
