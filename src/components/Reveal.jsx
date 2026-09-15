import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}
