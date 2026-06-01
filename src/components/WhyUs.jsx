import React from 'react'

const reasons = [
  {
    icon: '🔍',
    title: 'Diagnóstico sin costo',
    desc: 'Revisamos tu equipo y te damos presupuesto antes de cualquier trabajo. Sin compromiso.',
    color: '#1A3A7C',
  },
  {
    icon: '👨‍🔧',
    title: 'Técnicos especializados',
    desc: 'Más de 10 años reparando laptops de todas las marcas. Garantía en cada trabajo.',
    color: '#D52B2B',
  },
  {
    icon: '⚡',
    title: 'Entrega rápida',
    desc: 'La mayoría de servicios se resuelven el mismo día o en 24 horas. Tu tiempo importa.',
    color: '#0D6E34',
  },
  {
    icon: '📦',
    title: 'Envíos a todo el Perú',
    desc: '¿No estás en Lima? Envíanos tu equipo y te lo devolvemos reparado con garantía.',
    color: '#6B3FA0',
  },
]

// Logos oficiales desde Wikimedia Commons — dominio público / libre uso
const brands = [
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/120px-HP_logo_2012.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/120px-Dell_Logo.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1280px-ASUS_Logo.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://images.acer.com/is/content/acer/acer-4',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/1280px-Toshiba_logo.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/60px-Apple_logo_black.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1280px-Sony_logo.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Samsung_Black_icon.svg/1280px-Samsung_Black_icon.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fujitsu-Logo.svg/1280px-Fujitsu-Logo.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png',
    bg: '#fff',
  },
  {
    name: '',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Compaq_logo_new.svg/1280px-Compaq_logo_new.svg.png',
    bg: '#fff',
  },
]

function BrandCard({ name, logo, bg }) {
  return (
    <div style={{
      background: bg,
      borderRadius: '12px',
      border: '1.5px solid #e8e8e8',
      padding: '18px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      minWidth: '110px',
      transition: 'transform .18s, box-shadow .18s',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <img
        src={logo}
        alt={`Logo ${name}`}
        style={{
          height: '32px',
          width: 'auto',
          maxWidth: '100px',
          objectFit: 'contain',
          filter: 'grayscale(100%)',
          transition: 'filter .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
        onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'}
        onError={e => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'block'
        }}
      />
      {/* Fallback texto si la imagen no carga */}
      <span style={{
        display: 'none',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 800, fontSize: '15px',
        color: '#333', letterSpacing: '1px',
      }}>{name}</span>
      <span style={{ fontSize: '11px', fontWeight: 600, color: '#bbb', letterSpacing: '1px' }}>
        {name}
      </span>
    </div>
  )
}

export default function WhyUs() {
  return (
    <>
      {/* ── Barra de marcas con logos reales ── */}
      <section id="marcas" style={{
        padding: 'clamp(48px,7vw,72px) 5%',
        background: '#f8f8f8',
        borderTop: '1px solid #eee',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
            textTransform: 'uppercase', color: 'var(--red)', marginBottom: '10px',
          }}>
            Marcas que atendemos
          </div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900,
            color: 'var(--dark)', lineHeight: 1.1,
          }}>
            Reparamos <span style={{ color: 'var(--red)' }}>todas las marcas</span>
          </h2>
          <p style={{
            fontSize: '14px', color: 'var(--muted)',
            maxWidth: '400px', margin: '10px auto 0',
          }}>
            Sin importar la marca o modelo, tenemos el repuesto y el técnico especializado.
          </p>
        </div>

        {/* Grid de logos */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          maxWidth: '920px',
          margin: '0 auto',
        }}>
          {brands.map(b => <BrandCard key={b.name} {...b} />)}
        </div>

        {/* Nota inferior */}
        <p style={{
          textAlign: 'center', marginTop: '24px',
          fontSize: '13px', color: '#aaa',
        }}>
          ¿No ves tu marca? <strong style={{ color: 'var(--dark)' }}>También la atendemos</strong> — escríbenos por WhatsApp
        </p>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section style={{
        padding: 'clamp(48px,8vw,80px) 5%',
        background: 'var(--dark)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
            textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px',
          }}>¿Por qué elegirnos?</div>
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(30px,5vw,46px)', fontWeight: 900,
            color: '#fff', lineHeight: 1.05,
          }}>
            Expertos en<br />
            <span style={{ color: 'var(--red)' }}>todas las marcas</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          maxWidth: '960px', margin: '0 auto 48px',
        }}>
          {reasons.map(({ icon, title, desc, color }) => (
            <div key={title} style={{
              background: 'rgba(255,255,255,0.05)',
              border: `1px solid ${color}40`,
              borderTop: `3px solid ${color}`,
              borderRadius: '14px',
              padding: '28px 22px',
              transition: 'background .2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: color + '25',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px', marginBottom: '16px',
              }}>{icon}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '20px', fontWeight: 700,
                color: '#fff', marginBottom: '8px',
              }}>{title}</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          flexWrap: 'wrap', gap: 'clamp(24px,5vw,60px)',
          padding: 'clamp(24px,4vw,36px)',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.08)',
          maxWidth: '760px', margin: '0 auto',
        }}>
          {[
            { val: '+10', label: 'Años de experiencia' },
            { val: '+500', label: 'Equipos reparados' },
            { val: '100%', label: 'Diagnóstico gratis' },
            { val: '24h', label: 'Entrega rápida' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(32px,5vw,48px)', fontWeight: 900,
                color: 'var(--red)', lineHeight: 1,
              }}>{val}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}