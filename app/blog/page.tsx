import { BlogPreviewCard, BlogPreviewImageCard } from '../components/blog';

const mockPosts = [
  {
    id: 1,
    title: 'Cómo diseñar productos sustentables',
    subtitle: 'Guía completa para principiantes',
    description: 'Estrategias y ejemplos prácticos para crear productos que respeten el medio ambiente sin comprometer la funcionalidad.',
    excerpt: 'Descubre las técnicas más efectivas para integrar la sustentabilidad en cada etapa del proceso de diseño industrial.',
    href: '/blog/como-disenar-productos-sustentables',
    backgroundColor: '#cedbbf',
    textColor: '#3D4A3D',
    publishedAt: '2024-01-15T10:00:00Z',
    type: 'solid'
  },
  {
    id: 2,
    title: 'Tendencias en diseño industrial 2024',
    subtitle: 'Lo que viene este año',
    description: 'Análisis profundo de las tendencias más relevantes en materiales, procesos y estilos que marcarán el diseño industrial.',
    excerpt: 'Desde biomateriales hasta inteligencia artificial, exploramos las innovaciones que están transformando la industria.',
    href: '/blog/tendencias-diseno-industrial-2024',
    imageUrl: '/images/hero1.jpg',
    imageAlt: 'Tendencias de diseño industrial 2024',
    publishedAt: '2024-01-12T14:30:00Z',
    type: 'image'
  },
  {
    id: 3,
    title: 'El proceso creativo en Hembra',
    subtitle: 'De la idea al producto',
    description: 'Un recorrido detallado por nuestra metodología de trabajo, desde la conceptualización hasta la materialización.',
    excerpt: 'Conoce los pasos que seguimos para transformar ideas en productos tangibles que marquen la diferencia.',
    href: '/blog/proceso-creativo-hembra',
    backgroundColor: '#a8836d',
    textColor: '#fefcfb',
    publishedAt: '2024-01-10T09:15:00Z',
    type: 'solid'
  },
  {
    id: 4,
    title: 'Colaboraciones que inspiran',
    subtitle: 'Alianzas estratégicas',
    description: 'Historias reales de colaboraciones exitosas y cómo las alianzas estratégicas potencian la innovación.',
    excerpt: 'Descubre cómo trabajar en equipo con otros profesionales puede llevar tus proyectos al siguiente nivel.',
    href: '/blog/colaboraciones-inspiran',
    imageUrl: '/images/hero2.jpg',
    imageAlt: 'Colaboraciones en diseño industrial',
    publishedAt: '2024-01-08T16:45:00Z',
    type: 'image'
  },
  {
    id: 5,
    title: 'Materiales reciclados: mitos y realidades',
    subtitle: 'Desmitificando conceptos',
    description: 'Análisis objetivo sobre el uso de materiales reciclados en diseño industrial, separando hechos de mitos.',
    excerpt: 'Una mirada científica a las ventajas y desafíos reales de incorporar materiales reciclados en tus proyectos.',
    href: '/blog/materiales-reciclados-mitos-realidades',
    backgroundColor: '#b3c1a2',
    textColor: '#718355',
    publishedAt: '2024-01-05T11:20:00Z',
    type: 'solid'
  },
  {
    id: 6,
    title: 'Impacto social del diseño industrial',
    subtitle: 'Diseño con propósito',
    description: 'Exploración del potencial transformador del diseño industrial en comunidades y su impacto social positivo.',
    excerpt: 'Cómo el diseño consciente puede ser una herramienta poderosa para generar cambios sociales significativos.',
    href: '/blog/impacto-social-diseno-industrial',
    imageUrl: '/images/hero3.jpg',
    imageAlt: 'Impacto social del diseño',
    publishedAt: '2024-01-03T13:00:00Z',
    type: 'image'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockPosts.map((post) => (
            post.type === 'image' ? (
              <BlogPreviewImageCard
                key={post.id}
                title={post.title}
                subtitle={post.subtitle}
                description={post.description}
                excerpt={post.excerpt}
                href={post.href}
                imageUrl={post.imageUrl!}
                imageAlt={post.imageAlt}
              />
            ) : (
              <BlogPreviewCard
                key={post.id}
                title={post.title}
                subtitle={post.subtitle}
                description={post.description}
                excerpt={post.excerpt}
                href={post.href}
                backgroundColor={post.backgroundColor}
                textColor={post.textColor}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
} 