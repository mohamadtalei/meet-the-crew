import Reveal from './Reveal.jsx'
import TeamPortrait from './TeamPortrait.jsx'

export default function TeamCard({ member, index }) {
  return (
    <Reveal className="team-card" delay={index * 90}>
      <div className="team-card__visual">
        <span className="team-card__number">{member.number}</span>
        <TeamPortrait member={member} />
      </div>

      <div className="team-card__content">
        <p className="eyebrow">{member.role}</p>
        <h3>{member.name}</h3>
        <p className="team-card__intro">{member.intro}</p>

        <div className="capabilities">
          <p className="experience__label">Skills</p>
          <ul className="skill-list" aria-label={`${member.name}'s skills`}>
            {member.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          {member.tools && (
            <>
              <p className="experience__label capabilities__tools-label">Tools</p>
              <ul className="skill-list" aria-label={`${member.name}'s tools`}>
                {member.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="experience">
          <p className="experience__label">Experience</p>
          <ol className="experience__list" aria-label={`${member.name}'s work experience`}>
            {member.experience.map((job) => (
              <li className="experience__item" key={`${job.company}-${job.period}`}>
                <span
                  className={`experience__logo${job.logo ? ' experience__logo--filled' : ''}`}
                  aria-hidden="true"
                >
                  {job.logo ? <img src={job.logo} alt="" loading="lazy" /> : <span>Logo</span>}
                </span>
                <div className="experience__body">
                  <span className="experience__details">
                    <strong>{job.company}</strong>
                    <span className="experience__meta">
                      <span>{job.period}</span>
                      {job.location && <span>{job.location}</span>}
                    </span>
                  </span>
                  {job.title && <p className="experience__title">{job.title}</p>}
                  {job.responsibilities && (
                    <details className="experience__highlights">
                      <summary>View role highlights</summary>
                      <ul>
                        {job.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {member.education && (
          <div className="education">
            <p className="experience__label">Education</p>
            {member.education.map((item) => (
              <div className="education__item" key={`${item.institution}-${item.degree}`}>
                <div>
                  <strong>{item.degree}</strong>
                  <span>{item.institution}</span>
                </div>
                <span className="education__meta">
                  <span>{item.period}</span>
                  {item.location && <span>{item.location}</span>}
                </span>
                {item.details && (
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {member.projects && (
          <div className="resume-section">
            <p className="experience__label">Projects</p>
            {member.projects.map((project) => (
              <div className="resume-section__item" key={project.name}>
                <strong>{project.name}</strong>
                <p>{project.summary}</p>
                <details className="experience__highlights">
                  <summary>View project highlights</summary>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        )}

        {member.certifications && (
          <div className="resume-section">
            <p className="experience__label">Certifications</p>
            {member.certifications.map((certification) => (
              <div className="resume-section__item" key={certification.name}>
                <div className="resume-section__heading">
                  <span>
                    <strong>{certification.name}</strong>
                    <small>{certification.issuer}</small>
                  </span>
                  <span className="education__meta">
                    <span>{certification.period}</span>
                    {certification.location && <span>{certification.location}</span>}
                  </span>
                </div>
                {certification.details && (
                  <details className="experience__highlights">
                    <summary>View certification details</summary>
                    <ul>
                      {certification.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            ))}
          </div>
        )}

        {member.note && <p className="team-card__note">“{member.note}”</p>}
      </div>
    </Reveal>
  )
}
