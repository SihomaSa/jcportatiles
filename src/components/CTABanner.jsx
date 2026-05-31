import React from 'react'

export default function CTABanner() {
  return (
    <section style={{ background: 'var(--red)', padding: '60px 5%', textAlign: 'center' }}>
      <h2 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 'clamp(32px, 6vw, 52px)',
        fontWeight: 900, color: '#fff', marginBottom: '12px',
      }}>
        ¿TU LAPTOP TIENE UN PROBLEMA?
      </h2>
      <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '16px', marginBottom: '32px' }}>
        Tráela o contáctanos hoy mismo. Diagnóstico gratuito, presupuesto sin compromiso.
      </p>
      <a
        href="https://wa.me/51981336337?text=Hola,%20necesito%20ayuda%20con%20mi%20laptop"
        target="_blank"
        rel="noreferrer"
        style={{
          background: '#fff', color: 'var(--red)',
          padding: '14px 32px', borderRadius: '4px',
          fontSize: '15px', fontWeight: 700, display: 'inline-block',
        }}
      >
        💬 Escribir por WhatsApp
      </a>
      <a
        href="https://www.facebook.com/jcportatilessac"
          target="_blank"
          rel="noreferrer"
          style={{
            background: '#1877F2', color: '#fff',
            padding: '14px 32px', borderRadius: '4px',
            fontSize: '15px', fontWeight: 700, display: 'inline-block', marginLeft: '12px',
          }}
        >
          📘 Facebook
      </a>
      <div style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', marginTop: '16px' }}>
        O llámanos al
        <strong style={{
          color: '#fff', fontSize: '22px',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900, letterSpacing: '1px', display: 'block', marginTop: '4px',
        }}>981 336 337</strong>
        Juan Cisneros B. — Administrador
      </div>
    </section>
  )
}
