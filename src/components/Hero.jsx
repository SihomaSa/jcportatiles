import React, { useEffect, useState } from 'react'

const stats = [
  { value: '+10', label: 'Años de experiencia' },
  { value: '+500', label: 'Equipos reparados' },
  { value: '24h', label: 'Entrega rápida' },
  { value: 'Perú', label: 'Envíos a todo el país' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section style={{
      background: 'var(--dark)',
      minHeight: 'clamp(520px, 90vh, 720px)',
      padding: 'clamp(48px,8vw,80px) 5%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* Fondo: degradado + patrón de puntos */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, #1a2a4a 0%, #0d1220 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Acento rojo lateral */}
      <div style={{
        position: 'absolute', left: 0, top: '15%', bottom: '15%',
        width: '4px',
        background: 'linear-gradient(to bottom, transparent, var(--red), transparent)',
      }} />

      {/* ── Laptop real — foto Unsplash, fondo oscuro, libre de derechos ── */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 'clamp(340px, 52%, 660px)',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {/* Capa de degradado izquierda para fundirse con el fondo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to right, var(--dark) 0%, transparent 35%)',
        }} />
        {/* Capa superior e inferior */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to bottom, var(--dark) 0%, transparent 18%, transparent 82%, var(--dark) 100%)',
        }} />
        {/* Overlay de color para integrar con el tema oscuro */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'rgba(10,16,28,0.45)',
          mixBlendMode: 'multiply',
        }} />
        {/* Foto real de laptop — Unsplash (libre, sin atribución obligatoria) */}
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=80"
          alt="Laptop profesional"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.4s ease',
            display: 'block',
            filter: 'brightness(0.75) contrast(1.1) saturate(0.7)',
          }}
        />
      </div>

      {/* Círculo decorativo rojo — encima de la imagen */}
      <div style={{
        position: 'absolute', right: '5%', top: '10%', zIndex: 3,
        width: '260px', height: '260px', borderRadius: '50%',
        border: '1px solid rgba(213,43,43,0.25)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: '9%', top: '16%', zIndex: 3,
        width: '160px', height: '160px', borderRadius: '50%',
        border: '1px solid rgba(213,43,43,0.15)',
        pointerEvents: 'none',
      }} />

      {/* Contenido */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '640px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity .8s ease, transform .8s ease',
      }}>

        {/* Badge ubicación */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--red)',
          color: '#fff', fontSize: '12px', fontWeight: 700,
          letterSpacing: '1.5px', textTransform: 'uppercase',
          padding: '6px 14px', borderRadius: '4px',
          marginBottom: '24px',
        }}>
          📍 Lima · C.C. Wilson Plaza
        </div>

        {/* Titular */}
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(44px,8vw,80px)',
          fontWeight: 900, lineHeight: 0.95,
          color: '#fff', marginBottom: '20px',
          letterSpacing: '-1px',
        }}>
          TU LAPTOP<br />
          EN <span style={{ color: 'var(--red)' }}>BUENAS</span><br />
          MANOS
        </h1>

        {/* Subtítulo */}
        <p style={{
          fontSize: 'clamp(14px,2vw,17px)',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.6, marginBottom: '32px',
          maxWidth: '460px',
        }}>
          Servicio técnico especializado en laptops y computadoras.
          Reparación, mantenimiento, formateo y repotenciación.
          <strong style={{ color: '#fff' }}> Diagnóstico gratuito.</strong>
        </p>

        {/* Botones */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a
            href="tel:981336337"
            style={{
              background: 'var(--red)', color: '#fff',
              padding: '14px 28px', borderRadius: '4px',
              fontSize: '15px', fontWeight: 700,
              textDecoration: 'none', display: 'inline-flex',
              alignItems: 'center', gap: '8px',
            }}
          >
            📞 Llamar ahora
          </a>
          <a
            href="https://wa.me/51981336337?text=Hola,%20quisiera%20información%20sobre%20sus%20servicios"
            target="_blank" rel="noreferrer"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: '#fff',
              padding: '14px 28px', borderRadius: '4px',
              fontSize: '15px', fontWeight: 700,
              textDecoration: 'none', display: 'inline-flex',
              alignItems: 'center', gap: '8px',
              backdropFilter: 'blur(4px)',
            }}
          >
            💬 WhatsApp
          </a>
          <button
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.7)',
              padding: '14px 28px', borderRadius: '4px',
              fontSize: '15px', fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Ver servicios ↓
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 'clamp(20px,4vw,40px)',
          flexWrap: 'wrap',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900,
                color: '#fff', lineHeight: 1,
              }}>{value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}