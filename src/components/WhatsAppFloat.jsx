import React, { useState, useEffect } from 'react'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [pulse, setPulse] = useState(true)
  const [tooltip, setTooltip] = useState(false)

  // Aparece después de 2 segundos
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  // Detiene el pulso después de 6 segundos
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6000)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Estilos CSS para animación pulse */}
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: scale(0.7) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .wa-btn {
          animation: wa-fadein .4s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        .wa-btn.pulsing {
          animation: wa-fadein .4s cubic-bezier(.34,1.56,.64,1) forwards,
                     wa-pulse 2s ease 1s infinite;
        }
      `}</style>

      {/* Tooltip */}
      {tooltip && (
        <div style={{
          position: 'fixed', bottom: '90px', right: '80px',
          background: '#fff', color: '#222',
          padding: '10px 16px', borderRadius: '10px',
          fontSize: '13px', fontWeight: 600,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          whiteSpace: 'nowrap', zIndex: 9999,
          pointerEvents: 'none',
        }}>
          💬 ¡Escríbenos! Respondemos rápido
          {/* Flechita */}
          <div style={{
            position: 'absolute', bottom: '-6px', right: '20px',
            width: 0, height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #fff',
          }} />
        </div>
      )}

      {/* Botón */}
      <a
        href="https://wa.me/51981336337?text=Hola,%20quisiera%20información%20sobre%20sus%20servicios%20técnicos"
        target="_blank"
        rel="noreferrer"
        className={`wa-btn${pulse ? ' pulsing' : ''}`}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        style={{
          position: 'fixed',
          bottom: '24px', right: '24px',
          width: '58px', height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '28px',
          zIndex: 9998,
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'transform .2s, background .2s',
        }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.93)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* Ícono SVG de WhatsApp */}
        <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.67 4.61 1.832 6.502L4 29l7.697-1.81A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.4a10.35 10.35 0 01-5.29-1.448l-.378-.225-3.925.922.966-3.834-.247-.393A10.374 10.374 0 015.6 15c0-5.74 4.66-10.4 10.4-10.4S26.4 9.26 26.4 15 21.74 25.4 16 25.4zm5.7-7.77c-.31-.156-1.837-.906-2.122-.01-.087.27-.35.54-.63.74-.248.18-.58.22-.86.09-1.23-.54-2.26-1.41-3.03-2.5-.36-.5-.05-1.02.27-1.36.14-.15.31-.39.47-.59.16-.2.2-.34.3-.56.1-.23.05-.43-.03-.6-.08-.17-.72-1.74-.98-2.38-.26-.63-.53-.54-.73-.55l-.62-.01c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.79.66.75.24 1.43.21 1.97.13.6-.09 1.837-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37z"/>
        </svg>
      </a>
    </>
  )
}