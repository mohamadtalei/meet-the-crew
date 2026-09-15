import Reveal from './Reveal.jsx'

export default function StudioIntro() {
  return (
    <section className="studio-intro page-shell" aria-labelledby="intro-title">
      <Reveal className="studio-intro__copy">
        <p className="eyebrow">Our team</p>
        <h2 id="intro-title">Four specialists.<br /><span>One shared standard.</span></h2>
        <p>
          Two frontend developers, one backend developer, and one product designer.
          We work side by side, keeping communication direct and every detail
          connected from concept to launch.
        </p>
        <div className="studio-intro__roles" aria-label="Team composition">
          <span><strong>02</strong> Frontend</span>
          <span><strong>01</strong> Backend</span>
          <span><strong>01</strong> Designer</span>
        </div>
      </Reveal>
    </section>
  )
}
