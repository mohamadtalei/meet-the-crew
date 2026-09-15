import { team } from '../data/team.js'
import Reveal from './Reveal.jsx'
import TeamCard from './TeamCard.jsx'

export default function TeamSection() {
  return (
    <section className="team-section page-shell" id="team" aria-labelledby="team-title">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">The people behind the work</p>
            <h2 id="team-title">Meet the team<span>.</span></h2>
          </div>
          <p className="section-heading__count">
            {String(team.length).padStart(2, '0')} team members
          </p>
        </div>
      </Reveal>

      <div className="team-list">
        {team.map((member, index) => (
          <TeamCard member={member} index={index} key={member.name} />
        ))}
      </div>
    </section>
  )
}
