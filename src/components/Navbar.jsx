import React, { useState, useEffect } from 'react'

const styles = {
  nav: {
    background: 'var(--dark)',
    padding: '0 5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '3px solid var(--red)',
  },
  logo: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: '28px',
    fontWeight: 900,
    letterSpacing: '1px',
    color: '#fff',
  },
  logoSpan: { color: 'var(--red)' },
  links: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
  },
  link: {
    color: '#ccc',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '.5px',
    cursor: 'pointer',
    transition: 'color .2s',
  },
  cta: {
    background: 'var(--red)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '.5px',
  },
  burger: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
  },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={styles.nav}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/logo.png"
          alt="JC Portátiles"
          style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
        />
      </div>

      {!isMobile && (
        <ul style={styles.links}>
          {[['servicios', 'Servicios'], ['marcas', 'Marcas'], ['productos', 'Productos'],['contacto', 'Contacto']].map(([id, label]) => (
            <li key={id}>
              <span
                style={styles.link}
                onClick={() => scrollTo(id)}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = '#ccc'}
              >{label}</span>
            </li>
          ))}
        </ul>
      )}

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <a href="https://www.facebook.com/jcportatilessac" target="_blank" rel="noreferrer"
          style={{ background: '#1877F2', color: '#fff', padding: '10px 14px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>
          📘
        </a>
        <a href="tel:981336337" style={styles.cta}>📞 981 336 337</a>
      </div>
    </nav>
  )
}
