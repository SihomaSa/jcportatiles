import React from 'react'

export default function CTABanner() {
  return (
    <section style={{
      background: 'var(--red)',
      padding: 'clamp(52px,8vw,88px) 5%',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Patrón de fondo */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      {/* Círculos decorativos */}
      <div style={{
        position: 'absolute', right: '-60px', top: '-60px',
        width: '320px', height: '320px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.12)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '-20px', top: '-20px',
        width: '200px', height: '200px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '-40px', bottom: '-40px',
        width: '220px', height: '220px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none',
      }} />

      {/* Contenido */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '700px', margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.18)',
          color: '#fff', fontSize: '12px', fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
          padding: '6px 16px', borderRadius: '20px',
          marginBottom: '20px',
        }}>
          ✅ Diagnóstico 100% gratuito
        </div>

        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(36px,7vw,68px)',
          fontWeight: 900, color: '#fff',
          lineHeight: 0.95, letterSpacing: '-1px',
          marginBottom: '16px',
        }}>
          ¿TU LAPTOP<br />TIENE UN PROBLEMA?
        </h2>

        <p style={{
          fontSize: 'clamp(14px,2vw,17px)',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.6, marginBottom: '36px',
          maxWidth: '500px', margin: '0 auto 36px',
        }}>
          Tráela o contáctanos hoy mismo. Diagnóstico gratuito,
          presupuesto sin compromiso. Más de <strong style={{ color: '#fff' }}>10 años</strong> de experiencia.
        </p>

        {/* Botones grandes */}
        <div style={{
          display: 'flex', gap: '14px',
          justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '28px',
        }}>
          <a
            href="https://wa.me/51981336337?text=Hola,%20quisiera%20un%20diagnóstico%20gratuito%20para%20mi%20laptop"
            target="_blank" rel="noreferrer"
            style={{
              background: '#fff', color: 'var(--red)',
              padding: 'clamp(13px,2vw,16px) clamp(24px,4vw,36px)',
              borderRadius: '6px',
              fontSize: 'clamp(14px,2vw,16px)', fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              transition: 'transform .15s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            💬 Escribir por WhatsApp
          </a>
          <a
            href="tel:981336337"
            style={{
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.6)',
              color: '#fff',
              padding: 'clamp(13px,2vw,16px) clamp(24px,4vw,36px)',
              borderRadius: '6px',
              fontSize: 'clamp(14px,2vw,16px)', fontWeight: 800,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              transition: 'background .15s, border-color .15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.borderColor = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
            }}
          >
            📞 981 336 337
          </a>
        </div>

        {/* Nombre del administrador */}
        <div style={{
          fontSize: '13px', color: 'rgba(255,255,255,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        }}>
          <span style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px',
          }}>👤</span>
          Juan Cisneros B. — Administrador
        </div>
      </div>
    </section>
  )
}