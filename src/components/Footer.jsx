import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark)',
      padding: '32px 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
      borderTop: '3px solid var(--red)',
    }}>
      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '22px', fontWeight: 900, color: '#fff',
      }}>
        JC<span style={{ color: 'var(--red)' }}>PORTÁTILES</span>
      </div>
      <p style={{ fontSize: '13px', color: '#556677' }}>
        Servicio Técnico de Laptops y Computadoras · Lima, Perú
      </p>
      <p style={{ fontSize: '13px', color: '#7a90a8' }}>
         ·{' '}
        <a href="https://www.facebook.com/jcportatilessac" target="_blank" rel="noreferrer"
          style={{ color: '#4a9eff' }}>facebook.com/jcportatilessac</a>
      </p>
    </footer>
  )
}
