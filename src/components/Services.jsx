import React, { useState } from 'react'

const services = [
  { num: '01', title: 'Reparación', desc: 'Pantallas, teclados, cargadores, puertos, tarjetas madre y todo tipo de daños físicos y electrónicos.' },
  { num: '02', title: 'Formateo', desc: 'Instalación de Windows, drivers y programas. Tu equipo como nuevo, rápido y sin virus.' },
  { num: '03', title: 'Mantenimiento', desc: 'Limpieza interna, cambio de pasta térmica, limpieza de polvo. Previene sobrecalentamiento.' },
  { num: '04', title: 'Repotenciación', desc: 'Ampliación de RAM, cambio a SSD, mejoras de hardware para darle nueva vida a tu laptop.' },
  { num: '05', title: 'Ventas', desc: 'Laptops, accesorios, repuestos y componentes. Nuevos y reacondicionados con garantía.' },
  { num: '06', title: 'Backup y Otros', desc: 'Recuperación de datos, backup, asesoramiento técnico y más servicios personalizados.' },
]

function ServiceCard({ num, title, desc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--dark)' : '#fff',
        padding: '32px 28px',
        transition: 'background .25s',
        cursor: 'default',
      }}
    >
      <div style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '72px', fontWeight: 900,
        color: hovered ? 'rgba(255,255,255,.08)' : '#f0f0f0',
        lineHeight: '.9', marginBottom: '16px',
        transition: 'color .25s',
      }}>{num}</div>
      <h3 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '22px', fontWeight: 700,
        marginBottom: '8px',
        color: hovered ? '#fff' : 'var(--text)',
        transition: 'color .25s',
      }}>{title}</h3>
      <p style={{
        fontSize: '13px',
        color: hovered ? '#8899aa' : 'var(--muted)',
        lineHeight: 1.5,
        transition: 'color .25s',
      }}>{desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '80px 5%' }}>
      <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>
        Lo que hacemos
      </div>
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(36px,6vw,48px)', fontWeight: 900, color: 'var(--dark)', lineHeight: 1.1, marginBottom: '16px' }}>
        Servicios<br />Especializados
      </h2>
      <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.6 }}>
        Atendemos laptops y computadoras de todas las marcas. Diagnóstico rápido, precios justos, garantía en el trabajo.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2px',
        marginTop: '48px',
        background: '#e8e8e8',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        {services.map(s => <ServiceCard key={s.num} {...s} />)}
      </div>
    </section>
  )
}
