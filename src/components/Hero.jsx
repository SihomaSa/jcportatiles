import React from 'react'

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--dark) 60%, #1a2f60 100%)',
      minHeight: '560px',
      display: 'flex',
      alignItems: 'center',
      padding: '60px 5%',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', right: '-80px', top: '-80px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'rgba(213,43,43,.08)',
        border: '80px solid rgba(213,43,43,.04)',
      }} />
      <div style={{
        position: 'absolute', right: '5%', bottom: '-40px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(26,58,124,.3)',
      }} />

      <div style={{ maxWidth: '560px', position: 'relative', zIndex: 1 }}>
        <div style={{
          background: 'var(--red)', color: '#fff',
          fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
          textTransform: 'uppercase', padding: '5px 14px',
          borderRadius: '2px', display: 'inline-block', marginBottom: '20px',
        }}>Lima · C.C. Wilson Plaza</div>

        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(44px, 8vw, 68px)',
          fontWeight: 900, color: '#fff',
          lineHeight: '.95', marginBottom: '24px', letterSpacing: '-1px',
        }}>
          TU LAPTOP<br />EN <span style={{ color: 'var(--red)' }}>BUENAS</span><br />MANOS
        </h1>

        <p style={{
          color: '#a0b0c8', fontSize: '17px', lineHeight: 1.6,
          marginBottom: '32px', fontWeight: 300,
        }}>
          Servicio técnico especializado en laptops y computadoras. Reparación, mantenimiento, formateo y repotenciación. Envíos a todo el Perú.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="tel:981336337" style={{
            background: 'var(--red)', color: '#fff',
            padding: '14px 28px', borderRadius: '4px',
            fontSize: '15px', fontWeight: 600, letterSpacing: '.5px',
          }}>Llamar ahora</a>
          <a href="#servicios" style={{
            background: 'transparent', color: '#fff',
            padding: '14px 28px', borderRadius: '4px',
            fontSize: '15px', fontWeight: 600,
            border: '2px solid rgba(255,255,255,.3)',
          }}>Ver servicios</a>
        </div>

        <div style={{
          display: 'flex', gap: '40px', marginTop: '48px',
          paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,.1)',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '+10', label: 'Años de experiencia' },
            { num: 'Lun–Sáb', label: '10am – 9pm' },
            { num: 'Perú', label: 'Envíos a todo el país' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '40px', fontWeight: 900, color: '#fff', lineHeight: 1,
              }}>{num}</div>
              <div style={{ fontSize: '13px', color: '#7a90a8', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
