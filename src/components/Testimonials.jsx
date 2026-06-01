import React, { useState } from 'react'

const testimonials = [
  {
    name: 'Carlos Mendoza',
    city: 'Lima',
    service: 'Cambio de pantalla',
    rating: 5,
    text: 'Llevé mi laptop HP con la pantalla rota y en menos de 2 horas ya estaba lista. Precio justo y el técnico muy amable. 100% recomendado.',
    avatar: 'CM',
    color: '#1A3A7C',
  },
  {
    name: 'Rosa Quispe',
    city: 'Callao',
    service: 'Formateo + RAM',
    rating: 5,
    text: 'Mi laptop iba lentísima, le pusieron más RAM y le hicieron formateo. Ahora vuela. Me explicaron todo el proceso y el precio fue muy razonable.',
    avatar: 'RQ',
    color: '#D52B2B',
  },
  {
    name: 'Miguel Torres',
    city: 'San Juan de Lurigancho',
    service: 'Cambio de SSD',
    rating: 5,
    text: 'Excelente servicio. Cambiaron el disco duro por un SSD y la diferencia es brutal. Además me enviaron el equipo a domicilio sin costo extra.',
    avatar: 'MT',
    color: '#0D6E34',
  },
  {
    name: 'Lucía Fernández',
    city: 'Miraflores',
    service: 'Reparación tarjeta madre',
    rating: 5,
    text: 'Pensé que mi laptop no tenía solución. En JC la revisaron sin costo, me dieron presupuesto y quedó perfecta. Honestidad y profesionalismo total.',
    avatar: 'LF',
    color: '#6B3FA0',
  },
  {
    name: 'Jorge Salinas',
    city: 'Ate',
    service: 'Compra de laptop',
    rating: 5,
    text: 'Compré una laptop reacondicionada con garantía. Me orientaron muy bien según mi presupuesto. Meses después sigue funcionando perfecto.',
    avatar: 'JS',
    color: '#B45309',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ fontSize: '16px', color: i < count ? '#FBBF24' : '#ddd' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section style={{
      padding: 'clamp(48px,8vw,80px) 5%',
      background: '#f8f8f8',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
          textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px',
        }}>
          Lo que dicen nuestros clientes
        </div>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(30px,5vw,44px)', fontWeight: 900,
          color: 'var(--dark)', lineHeight: 1.05, marginBottom: '12px',
        }}>
          Clientes satisfechos<br />
          <span style={{ color: 'var(--red)' }}>en todo Lima y Perú</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto' }}>
          Más de 10 años reparando laptops. La confianza de nuestros clientes es nuestro mejor respaldo.
        </p>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto 40px',
      }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              borderRadius: '14px',
              padding: '24px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              borderTop: `4px solid ${t.color}`,
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            <Stars count={t.rating} />
            <p style={{
              fontSize: '14px', lineHeight: 1.65,
              color: '#444', marginBottom: '20px', flex: 1,
              fontStyle: 'italic',
            }}>
              "{t.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '50%',
                background: t.color, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', fontWeight: 700, flexShrink: 0,
              }}>
                {t.avatar}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--dark)' }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{t.city} · {t.service}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promedio general */}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        gap: '16px', flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ fontSize: '24px', color: '#FBBF24' }}>★</span>
          ))}
        </div>
        <div>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '28px', fontWeight: 900, color: 'var(--dark)',
          }}>5.0</span>
          <span style={{ fontSize: '14px', color: 'var(--muted)', marginLeft: '8px' }}>
            promedio basado en clientes reales
          </span>
        </div>
      </div>
    </section>
  )
}