import React, { useState } from 'react'

const services = [
  {
    num: '01',
    icon: '🔧',
    title: 'Reparación',
    desc: 'Pantallas, teclados, cargadores, puertos, tarjetas madre y todo tipo de daños físicos y electrónicos.',
    price: 'Desde S/. 35',
    color: '#1A3A7C',
    tags: ['Pantallas', 'Teclados', 'Puertos', 'Tarjeta madre'],
  },
  {
    num: '02',
    icon: '💿',
    title: 'Formateo',
    desc: 'Instalación de Windows, drivers y programas. Tu equipo como nuevo, rápido y sin virus.',
    price: 'Desde S/. 40',
    color: '#D52B2B',
    tags: ['Windows 10/11', 'Drivers', 'Antivirus', 'Programas'],
  },
  {
    num: '03',
    icon: '🧹',
    title: 'Mantenimiento',
    desc: 'Limpieza interna, cambio de pasta térmica, limpieza de polvo. Previene sobrecalentamiento.',
    price: 'Desde S/. 30',
    color: '#0D6E34',
    tags: ['Limpieza', 'Pasta térmica', 'Cooling', 'Preventivo'],
  },
  {
    num: '04',
    icon: '⚡',
    title: 'Repotenciación',
    desc: 'Ampliación de RAM, cambio a SSD, mejoras de hardware para darle nueva vida a tu laptop.',
    price: 'Desde S/. 50',
    color: '#6B3FA0',
    tags: ['RAM', 'SSD', 'Upgrade', 'Rendimiento'],
  },
  {
    num: '05',
    icon: '🛒',
    title: 'Ventas',
    desc: 'Laptops, accesorios, repuestos y componentes. Nuevos y reacondicionados con garantía.',
    price: 'Consultar',
    color: '#B45309',
    tags: ['Laptops', 'Repuestos', 'Accesorios', 'Garantía'],
  },
  {
    num: '06',
    icon: '💾',
    title: 'Backup y Otros',
    desc: 'Recuperación de datos, backup, asesoramiento técnico y más servicios personalizados.',
    price: 'Desde S/. 40',
    color: '#0E7490',
    tags: ['Recuperación', 'Backup', 'Asesoría', 'Personalizado'],
  },
]

function ServiceCard({ num, icon, title, desc, price, color, tags }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? color : '#fff',
        border: `2px solid ${hovered ? color : '#eee'}`,
        borderRadius: '14px',
        padding: '28px 22px',
        transition: 'all .25s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Número decorativo de fondo */}
      <div style={{
        position: 'absolute', top: '-10px', right: '10px',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '80px', fontWeight: 900, lineHeight: 1,
        color: hovered ? 'rgba(255,255,255,0.1)' : color + '18',
        transition: 'color .25s',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>{num}</div>

      {/* Ícono */}
      <div style={{
        width: '52px', height: '52px', borderRadius: '12px',
        background: hovered ? 'rgba(255,255,255,0.2)' : color + '18',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '26px', marginBottom: '16px',
        transition: 'background .25s',
      }}>
        {icon}
      </div>

      {/* Título */}
      <h3 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '21px', fontWeight: 700, marginBottom: '8px',
        color: hovered ? '#fff' : 'var(--dark)',
        transition: 'color .25s',
      }}>{title}</h3>

      {/* Descripción */}
      <p style={{
        fontSize: '13px', lineHeight: 1.55, marginBottom: '16px',
        color: hovered ? 'rgba(255,255,255,0.85)' : 'var(--muted)',
        transition: 'color .25s',
      }}>{desc}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontSize: '11px', fontWeight: 600, padding: '3px 8px',
            borderRadius: '20px',
            background: hovered ? 'rgba(255,255,255,0.2)' : '#f0f0f0',
            color: hovered ? '#fff' : '#555',
            transition: 'all .25s',
          }}>{tag}</span>
        ))}
      </div>

      {/* Precio */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: hovered ? 'rgba(255,255,255,0.2)' : color,
        color: '#fff',
        padding: '6px 14px', borderRadius: '20px',
        fontSize: '13px', fontWeight: 700,
        transition: 'all .25s',
      }}>
        💰 {price}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" style={{ padding: 'clamp(48px,8vw,80px) 5%', background: '#fff' }}>

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
          textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px',
        }}>
          Lo que hacemos
        </div>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(32px,6vw,48px)', fontWeight: 900,
          color: 'var(--dark)', lineHeight: 1.05, marginBottom: '12px',
        }}>
          Servicios<br />Especializados
        </h2>
        <p style={{
          fontSize: 'clamp(14px,2vw,16px)', color: 'var(--muted)',
          maxWidth: '520px', lineHeight: 1.6,
        }}>
          Atendemos laptops y computadoras de todas las marcas. Diagnóstico rápido, precios justos, garantía en el trabajo.
        </p>
      </div>

      {/* Grid de servicios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
      }}>
        {services.map(s => <ServiceCard key={s.num} {...s} />)}
      </div>

      {/* Aviso diagnóstico gratis */}
      <div style={{
        background: 'var(--dark)',
        borderRadius: '12px',
        padding: 'clamp(18px,4vw,28px)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
            textTransform: 'uppercase', color: 'var(--red)', marginBottom: '6px',
          }}>
            ✅ Sin costo inicial
          </div>
          <h4 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '22px', fontWeight: 700,
            color: '#fff', marginBottom: '4px',
          }}>
            Diagnóstico 100% gratuito
          </h4>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
            Revisamos tu equipo y te damos presupuesto sin compromiso. Solo pagas si decides reparar.
          </p>
        </div>
        <a
          href="https://wa.me/51981336337?text=Hola,%20quiero%20un%20diagn%C3%B3stico%20gratuito%20para%20mi%20laptop"
          target="_blank" rel="noreferrer"
          style={{
            background: '#25D366', color: '#fff',
            padding: '13px 26px', borderRadius: '4px',
            fontSize: '14px', fontWeight: 700, whiteSpace: 'nowrap',
            textDecoration: 'none',
          }}
        >
          💬 Solicitar diagnóstico
        </a>
      </div>
    </section>
  )
}