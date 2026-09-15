export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__meta">
        <span className="hero__monogram">YS</span>
        <span>Independent digital product team</span>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">About our team</p>
        <h1>We build better,<br /><span>together.</span></h1>
        <p className="hero__lead">
          Design, frontend, and backend expertise working as one focused team.
        </p>
      </div>

      <div className="hero__bottom">
        <p>
          We quietly go about making thoughtful digital products for ambitious
          teams—from the first idea through to launch.
        </p>
        <a className="hero__link" href="#team">
          Meet the team <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  )
}
