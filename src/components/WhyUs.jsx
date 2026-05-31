import React, { useState } from 'react'

const reasons = [
  { num: '01', title: 'Diagnóstico sin costo', desc: 'Revisamos tu equipo y te damos un presupuesto antes de cualquier trabajo.' },
  { num: '02', title: 'Técnicos especializados', desc: 'Años de experiencia en reparación de laptops y computadoras de todas las marcas.' },
  { num: '03', title: 'Entrega rápida', desc: 'La mayoría de servicios se resuelven el mismo día o en 24 horas.' },
  { num: '04', title: 'Envíos a todo el Perú', desc: '¿No estás en Lima? Envíanos tu equipo y te lo devolvemos reparado.' },
]

const brands = ['Toshiba', 'Dell', 'Apple', 'HP', 'IBM', 'Gateway', 'Sony', 'Compaq', 'Acer', 'Fujitsu', 'Lenovo', 'Asus']

function BrandPill({ name }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(213,43,43,.2)' : 'rgba(255,255,255,.07)',
        border: `1px solid ${hovered ? 'rgba(213,43,43,.4)' : 'rgba(255,255,255,.1)'}`,
        borderRadius: '6px', padding: '10px',
        textAlign: 'center', color: '#fff',
        fontSize: '13px', fontWeight: 600, letterSpacing: '.5px',
        transition: 'all .2s', cursor: 'default',
      }}
    >{name}</div>
  )
}

export default function WhyUs() {
  return (
    <section id="marcas" style={{ background: 'var(--gray)', padding: '80px 5%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Left: reasons */}
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>
            ¿Por qué elegirnos?
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(36px,6vw,48px)', fontWeight: 900, color: 'var(--dark)', lineHeight: 1.1, marginBottom: '32px' }}>
            Expertos en<br />todas las marcas
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {reasons.map(({ num, title, desc }) => (
              <div key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '36px', fontWeight: 900, color: 'var(--red)', lineHeight: 1, minWidth: '40px' }}>{num}</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: brands + hours */}
        <div style={{ background: 'var(--dark)', borderRadius: '12px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(213,43,43,.15)' }} />
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#7a90a8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Marcas que atendemos
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', position: 'relative', zIndex: 1 }}>
            {brands.map(b => <BrandPill key={b} name={b} />)}
          </div>
          <div style={{
            marginTop: '28px', position: 'relative', zIndex: 1,
            background: 'rgba(213,43,43,.1)',
            border: '1px solid rgba(213,43,43,.3)',
            borderRadius: '8px', padding: '20px',
          }}>
            <div style={{ color: 'var(--red)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Horario de atención
            </div>
            <div style={{ color: '#fff', fontSize: '20px', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
              Lunes a Sábado
            </div>
            <div style={{ color: '#7a90a8', fontSize: '13px', marginTop: '4px' }}>10:00 AM – 9:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  )
}
