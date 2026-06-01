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
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/logo.png"
          alt="JC Portátiles"
          style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
        />
      </div>
      <p style={{ fontSize: '13px', color: '#556677' }}>
        Servicio Técnico de Laptops y Computadoras · Lima, Perú
      </p>
      <p style={{ fontSize: '13px', color: '#7a90a8' }}>
         {' '}
        <a href="https://www.facebook.com/jcportatilessac" target="_blank" rel="noreferrer"
          style={{ color: '#4a9eff' }}>facebook.com/jcportatilessac</a>
      </p>
    </footer>
  )
}
