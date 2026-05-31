import React from 'react'

const contactItems = [
  {
    icon: '🏠',
    label: 'Dirección',
    value: 'Av. Bolivia N° 180, Tienda 328\nC.C. Wilson Plaza\n(Cruce Av. Bolivia y Av. Wilson), Lima',
  },
  {
    icon: '📞',
    label: 'Teléfono Claro',
    value: '981 336 337',
    large: true,
  },
  {
    icon: '✉️',
    label: 'Correo',
    value: 'jcsoporteportatiles@hotmail.com',
  },
  {
    icon: '🕐',
    label: 'Horario',
    value: 'Lunes a Sábado · 10:00 AM – 9:00 PM',
  },
  {
    icon: '📘',
    label: 'Facebook',
    value: 'facebook.com/jcportatilessac',
  },
]

export default function Contact() {
  return (
    <section id="contacto" style={{ padding: '80px 5%', background: '#fff' }}>
      <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>
        Encuéntranos
      </div>
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(36px,6vw,48px)', fontWeight: 900, color: 'var(--dark)', lineHeight: 1.1, marginBottom: '48px' }}>
        Contacto<br />y Ubicación
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '60px',
      }}>
        {/* Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {contactItems.map(({ icon, label, value, large }) => (
            <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '44px', height: '44px',
                background: 'var(--gray)', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', flexShrink: 0,
              }}>{icon}</div>
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: '4px' }}>{label}</h4>
                <p style={{
                  fontSize: large ? '20px' : '15px',
                  fontWeight: large ? 700 : 500,
                  fontFamily: large ? "'Barlow Condensed', sans-serif" : 'inherit',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.5,
                }}>{value}</p>
              </div>
            </div>
          ))}

          <div style={{
            background: 'var(--blue)', color: '#fff',
            padding: '14px 20px', borderRadius: '8px',
            fontSize: '14px', fontWeight: 500,
          }}>
            <strong style={{ display: 'block', fontSize: '18px', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, letterSpacing: '.5px', marginBottom: '2px' }}>
              📦 Envíos a todo el Perú
            </strong>
            Envíanos tu equipo, te lo devolvemos reparado.
          </div>
        </div>

        {/* Map card */}
        <div style={{
          background: 'var(--gray)', borderRadius: '12px',
          overflow: 'hidden', minHeight: '320px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', textAlign: 'center', padding: '40px',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>📍</div>
          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--dark)' }}>C.C. Wilson Plaza, Tienda 328</div>
          <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Av. Bolivia N° 180 · Lima, Perú</div>
          <a
            href="https://maps.google.com/?q=Av.+Bolivia+180+Lima+Peru"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block', marginTop: '16px',
              background: 'var(--blue)', color: '#fff',
              padding: '10px 20px', borderRadius: '4px',
              fontSize: '13px', fontWeight: 600,
            }}
          >
            Ver en Google Maps
          </a>
          <a href="https://www.facebook.com/jcportatilessac" target="_blank" rel="noreferrer"
            style={{ color: 'var(--blue)' }}>
            facebook.com/jcportatilessac
          </a>
        </div>
      </div>
    </section>
  )
}
