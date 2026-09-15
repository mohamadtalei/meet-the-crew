export default function TeamPortrait({ member }) {
  if (member.photo) {
    return (
      <div className="portrait portrait--photo">
        <img src={member.photo} alt={`Portrait of ${member.name}`} />
      </div>
    )
  }

  return (
    <div
      className="portrait"
      style={{ '--portrait-color': member.color, '--portrait-accent': member.accent }}
      aria-hidden="true"
    >
      <span className="portrait__orbit" />
      <span className="portrait__shape portrait__shape--one" />
      <span className="portrait__shape portrait__shape--two" />
      <span className="portrait__initials">{member.initials}</span>
      <span className="portrait__stamp">Human made</span>
    </div>
  )
}
