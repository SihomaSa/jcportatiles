import React, { useState } from 'react'

const categories = [
  {
    icon: '💻',
    title: 'Laptops',
    desc: 'Venta de laptops nuevas y reacondicionadas. Todas las marcas con garantía.',
    tags: ['HP', 'Dell', 'Toshiba', 'Lenovo', 'Acer', 'Asus'],
    color: '#1A3A7C',
  },
  {
    icon: '🧠',
    title: 'Memorias RAM',
    desc: 'DDR3, DDR4, DDR5 para laptops y PCs. Ampliamos la RAM de tu equipo.',
    tags: ['4GB', '8GB', '16GB', '32GB', 'SO-DIMM'],
    color: '#D52B2B',
  },
  {
    icon: '💾',
    title: 'Discos SSD / HDD',
    desc: 'Discos sólidos SSD y discos duros HDD. Upgrades que transforman tu laptop.',
    tags: ['SSD 256GB', 'SSD 512GB', 'SSD 1TB', 'HDD 1TB', 'M.2 NVMe'],
    color: '#0D6E34',
  },
  {
    icon: '🔌',
    title: 'Cargadores',
    desc: 'Cargadores originales y compatibles para todas las marcas y modelos.',
    tags: ['HP', 'Dell', 'Toshiba', 'Lenovo', 'Acer', 'Apple'],
    color: '#6B3FA0',
  },
  {
    icon: '⌨️',
    title: 'Teclados',
    desc: 'Teclados de repuesto para laptops de todas las marcas. Instalación incluida.',
    tags: ['HP', 'Dell', 'Lenovo', 'Toshiba', 'Asus', 'Acer'],
    color: '#B45309',
  },
  {
    icon: '🖱️',
    title: 'Mouse y Accesorios',
    desc: 'Mouse, hubs USB, adaptadores, cables y todo tipo de accesorios.',
    tags: ['USB 3.0', 'Inalámbrico', 'Hub USB', 'Adaptadores', 'VGA/HDMI'],
    color: '#0E7490',
  },
  {
    icon: '🖨️',
    title: 'Impresoras y Tintas',
    desc: 'Impresoras y cartuchos de tinta para todas las marcas disponibles.',
    tags: ['Epson', 'HP', 'Canon', 'Brother', 'Cartuchos', 'Tóner'],
    color: '#BE185D',
  },
  {
    icon: '📱',
    title: 'Tablets',
    desc: 'Tablets nuevas y reacondicionadas, accesorios y repuestos para tablets.',
    tags: ['Samsung', 'Lenovo', 'Huawei', 'iPad', 'Pantallas'],
    color: '#DC5A2B',
  },
  {
    icon: '🃏',
    title: 'Tarjetas de Memoria',
    desc: 'MicroSD, SD Cards de todas las capacidades para laptops, cámaras y más.',
    tags: ['microSD', 'SD Card', '32GB', '64GB', '128GB', '256GB'],
    color: '#065F46',
  },
]

// Fotos reales del negocio (las imágenes del usuario copiadas a public/)
    const trabajos = [
    { src: '/trabajos/camara.jpg',          label: 'Cámara' },
    { src: '/trabajos/cargadordell.jpg',    label: 'Cargador Dell' },
    { src: '/trabajos/cargadorlenovo.jpg',  label: 'Cargador Lenovo' },
    { src: '/trabajos/cargadorsamsung.jpg', label: 'Cargador Samsung' },
    { src: '/trabajos/cargadorsony.jpg',    label: 'Cargador Sony' },
    { src: '/trabajos/cargadoruniversal.jpg', label: 'Cargador Universal' },
    { src: '/trabajos/hub.jpg',             label: 'Hub USB' },
    { src: '/trabajos/hub1.jpg',            label: 'Hub USB Multipuerto' },
    { src: '/trabajos/hub2.jpg',            label: 'Hub USB-C' },
    { src: '/trabajos/hubvga.jpg',          label: 'Adaptador Hub VGA' },
    { src: '/trabajos/impresora.jpg',       label: 'Impresora' },
    { src: '/trabajos/impresoraepson.jpg',  label: 'Impresora Epson' },
    { src: '/trabajos/laptopamd.jpg',       label: 'Laptop AMD' },
    { src: '/trabajos/laptopasus.jpg',      label: 'Laptop Asus' },
    { src: '/trabajos/laptopgeforce.jpg',   label: 'Laptop GeForce' },
    { src: '/trabajos/laptophp.jpg',        label: 'Laptop HP' },
    { src: '/trabajos/laptoplenovo.jpg',    label: 'Laptop Lenovo' },
    { src: '/trabajos/laptoptoshiva.jpg',   label: 'Laptop Toshiba' },
    { src: '/trabajos/ram.jpg',             label: 'Memoria RAM' },
    { src: '/trabajos/reparacionlaptop.jpg',label: 'Reparación de Laptop' },
    { src: '/trabajos/router.jpg',          label: 'Router' },
    { src: '/trabajos/routertplink.jpg',    label: 'Router TP-Link' },
    { src: '/trabajos/tablet.jpg',          label: 'Tablet' },
    { src: '/trabajos/teclado.jpg',         label: 'Teclado' },
    { src: '/trabajos/tecladohalion.jpg',   label: 'Teclado Halion' },
    { src: '/trabajos/tonnerepson.jpg',     label: 'Tóner Epson' },
    ]

function CategoryCard({ icon, title, desc, tags, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? color : '#fff',
        border: `2px solid ${hovered ? color : '#eee'}`,
        borderRadius: '12px',
        padding: '24px 20px',
        transition: 'all .25s',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '36px', marginBottom: '12px', lineHeight: 1 }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '20px', fontWeight: 700, marginBottom: '8px',
        color: hovered ? '#fff' : 'var(--dark)',
        transition: 'color .25s',
      }}>{title}</h3>
      <p style={{
        fontSize: '13px', lineHeight: 1.5, marginBottom: '14px',
        color: hovered ? 'rgba(255,255,255,.85)' : 'var(--muted)',
        transition: 'color .25s',
      }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontSize: '11px', fontWeight: 600, padding: '3px 8px',
            borderRadius: '20px',
            background: hovered ? 'rgba(255,255,255,.2)' : '#f0f0f0',
            color: hovered ? '#fff' : '#444',
            transition: 'all .25s',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <>
      {/* ── Catálogo de productos ── */}
      <section id="productos" style={{ padding: 'clamp(48px,8vw,80px) 5%', background: '#fff' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>
          Lo que vendemos
        </div>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(32px,6vw,48px)', fontWeight: 900, color: 'var(--dark)',
          lineHeight: 1.05, marginBottom: '12px',
        }}>
          Productos &amp;<br />Repuestos
        </h2>
        <p style={{ fontSize: 'clamp(14px,2vw,16px)', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.6, marginBottom: '40px' }}>
          Contamos con repuestos, accesorios y equipos de todas las marcas. Si no lo tenemos en stock, lo conseguimos para ti.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {categories.map(cat => <CategoryCard key={cat.title} {...cat} />)}
        </div>

        {/* CTA consulta */}
        <div style={{
          marginTop: '40px', background: 'var(--gray)',
          borderRadius: '12px', padding: 'clamp(20px,4vw,32px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <div>
            <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>
              ¿No encuentras lo que buscas?
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Escríbenos y lo buscamos para ti. Envíos a todo el Perú.</p>
          </div>
          <a
            href="https://wa.me/51981336337?text=Hola,%20busco%20un%20producto%20electr%C3%B3nico"
            target="_blank" rel="noreferrer"
            style={{
              background: '#25D366', color: '#fff',
              padding: '12px 24px', borderRadius: '4px',
              fontSize: '14px', fontWeight: 700, whiteSpace: 'nowrap',
            }}
          >💬 Consultar por WhatsApp</a>
        </div>
      </section>

      {/* ── Galería de trabajos realizados ── */}
      <section style={{ padding: 'clamp(40px,7vw,72px) 5%', background: 'var(--dark)' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '12px' }}>
          Nuestro trabajo
        </div>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(28px,5vw,42px)', fontWeight: 900, color: '#fff',
          lineHeight: 1.1, marginBottom: '32px',
        }}>
          Productos que manejamos<br />
          <span style={{ color: 'var(--red)' }}>y trabajos realizados</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(140px,22vw,200px), 1fr))',
          gap: '12px',
        }}>
          {trabajos.map(({ src, label }) => (
            <div key={src} style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', aspectRatio: '1', background: '#1a2a3a' }}>
              <img
                src={src}
                alt={label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .3s' }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.06)'}
                onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                onError={e => { e.currentTarget.style.display='none' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,.75))',
                padding: '20px 10px 10px',
              }}>
                <p style={{ color: '#fff', fontSize: '11px', fontWeight: 600, textAlign: 'center', lineHeight: 1.3 }}>{label}</p>
              </div>
            </div>
          ))}

          {/* Celda extra: CTA */}
          <div style={{
            borderRadius: '10px', background: 'var(--red)',
            aspectRatio: '1', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '16px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>📸</div>
            <p style={{ color: '#fff', fontSize: '13px', fontWeight: 700, lineHeight: 1.4 }}>
              Síguenos en<br />Facebook para más<br />fotos y ofertas
            </p>
            <a
              href="https://www.facebook.com/jcportatilessac"
              target="_blank" rel="noreferrer"
              style={{
                marginTop: '10px', background: '#fff', color: 'var(--red)',
                padding: '6px 14px', borderRadius: '4px',
                fontSize: '12px', fontWeight: 700,
              }}
            >Ver Facebook</a>
          </div>
        </div>
      </section>
    </>
  )
}