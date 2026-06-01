import React from 'react'

const contactItems = [
  {
    icon: '🏠',
    label: 'Dirección',
    value: 'Av. Bolivia N° 180, Tienda 328\nC.C. Wilson Plaza (Cruce Av. Bolivia y Av. Wilson), Lima',
    color: '#1A3A7C',
  },
  {
    icon: '📞',
    label: 'Teléfono Claro',
    value: '981 336 337',
    large: true,
    href: 'tel:981336337',
    color: '#D52B2B',
  },
  // {
  //   icon: '✉️',
  //   label: 'Correo',
  //   value: 'jcsoporteportatiles@hotmail.com',
  //   href: 'mailto:jcsoporteportatiles@hotmail.com',
  //   color: '#0D6E34',
  // },
  {
    icon: '🕐',
    label: 'Horario de atención',
    value: 'Lunes a Sábado · 10:00 AM – 9:00 PM',
    color: '#6B3FA0',
  },
  {
    icon: '📘',
    label: 'Facebook',
    value: 'facebook.com/jcportatilessac',
    href: 'https://www.facebook.com/jcportatilessac',
    color: '#1877F2',
  },
]

function ContactItem({ icon, label, value, large, href, color }) {
  const inner = (
    <div style={{
      display: 'flex', gap: '14px', alignItems: 'flex-start',
      padding: '16px 18px',
      background: '#fff',
      borderRadius: '12px',
      border: '1.5px solid #eee',
      transition: 'border-color .2s, box-shadow .2s',
    }}
      onMouseEnter={e => {
        if (href) {
          e.currentTarget.style.borderColor = color
          e.currentTarget.style.boxShadow = `0 4px 16px ${color}22`
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#eee'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{
        width: '44px', height: '44px', borderRadius: '10px',
        background: color + '15',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '20px', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px',
          textTransform: 'uppercase', color: '#aaa', marginBottom: '3px',
        }}>{label}</div>
        <div style={{
          fontSize: large ? '21px' : '14px',
          fontWeight: large ? 800 : 500,
          fontFamily: large ? "'Barlow Condensed', sans-serif" : 'inherit',
          color: large ? color : 'var(--dark)',
          whiteSpace: 'pre-line', lineHeight: 1.45, wordBreak: 'break-word',
        }}>{value}</div>
      </div>
      {href && <div style={{ color, fontSize: '16px', alignSelf: 'center', flexShrink: 0 }}>→</div>}
    </div>
  )
  return href
    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>{inner}</a>
    : inner
}

export default function Contact() {
  return (
    <section id="contacto" style={{
      padding: 'clamp(56px,8vw,96px) 5%',
      background: '#f8f8f8',
    }}>
      {/* Header centrado */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
          textTransform: 'uppercase', color: 'var(--red)', marginBottom: '10px',
        }}>Encuéntranos</div>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(32px,5vw,48px)', fontWeight: 900,
          color: 'var(--dark)', lineHeight: 1.05, marginBottom: '10px',
        }}>
          Contacto y <span style={{ color: 'var(--red)' }}>Ubicación</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '420px', margin: '0 auto' }}>
          Estamos en el centro de Lima. Atendemos por WhatsApp y hacemos envíos a todo el Perú.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '28px',
        maxWidth: '1080px', margin: '0 auto',
      }}>

        {/* Columna izquierda */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {contactItems.map(item => <ContactItem key={item.label} {...item} />)}

          {/* Banner envíos */}
          <div style={{
            background: 'var(--dark)', borderRadius: '12px',
            padding: '16px 18px',
            display: 'flex', alignItems: 'center', gap: '14px',
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '10px',
              background: 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', flexShrink: 0,
            }}>📦</div>
            <div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '16px', fontWeight: 800, color: '#fff', marginBottom: '2px',
              }}>Envíos a todo el Perú</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                Envíanos tu equipo, te lo devolvemos reparado.
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha: Mapa */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Mapa de Google Maps embed */}
          <div style={{
            borderRadius: '14px', overflow: 'hidden',
            border: '1.5px solid #e0e0e0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            height: '300px', background: '#eee',
          }}>
            <iframe
              title="JC Portátiles — C.C. Wilson Plaza"
              src="https://maps.google.com/maps?q=C.C.+Wilson+Plaza+Av+Bolivia+180+Lima+Peru&output=embed&z=16"
              width="100%" height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          {/* Tarjeta de acción rápida */}
          <div style={{
            background: '#fff', borderRadius: '12px',
            border: '1.5px solid #eee', padding: '20px',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '8px',
                background: '#D52B2B15', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '20px', flexShrink: 0,
              }}>📍</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--dark)' }}>
                  C.C. Wilson Plaza — Tienda 328
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '1px' }}>
                  Av. Bolivia N° 180, Lima · Perú
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href="https://maps.google.com/?q=C.C.+Wilson+Plaza+Av+Bolivia+180+Lima"
                target="_blank" rel="noreferrer" style={{
                  flex: 1, minWidth: '120px',
                  background: 'var(--dark)', color: '#fff',
                  padding: '11px 12px', borderRadius: '8px',
                  fontSize: '13px', fontWeight: 700, textAlign: 'center',
                  textDecoration: 'none',
                }}>🗺️ Ver en Maps</a>
              <a href="https://wa.me/51981336337?text=Hola,%20quisiera%20información"
                target="_blank" rel="noreferrer" style={{
                  flex: 1, minWidth: '120px',
                  background: '#25D366', color: '#fff',
                  padding: '11px 12px', borderRadius: '8px',
                  fontSize: '13px', fontWeight: 700, textAlign: 'center',
                  textDecoration: 'none',
                }}>💬 WhatsApp</a>
              <a href="https://www.facebook.com/jcportatilessac"
                target="_blank" rel="noreferrer" style={{
                  flex: 1, minWidth: '120px',
                  background: '#1877F2', color: '#fff',
                  padding: '11px 12px', borderRadius: '8px',
                  fontSize: '13px', fontWeight: 700, textAlign: 'center',
                  textDecoration: 'none',
                }}>📘 Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}