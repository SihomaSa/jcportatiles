import React from 'react'

const items = [
  { icon: '📍', text: 'Av. Bolivia N° 180, Tienda 328 — C.C. Wilson Plaza, Lima' },
  { icon: '🕐', text: 'Lunes a Sábado · 10:00 AM – 9:00 PM' },
  { icon: '📦', text: 'Envíos a todo el Perú' },
]

export default function InfoBar() {
  return (
    <div style={{
      background: 'var(--blue)',
      padding: '14px 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      {items.map(({ icon, text }) => (
        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontSize: '14px' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'rgba(255,255,255,.15)',
            borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px',
          }}>{icon}</div>
          {text}
        </div>
      ))}
    </div>
  )
}
