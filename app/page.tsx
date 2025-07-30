import { TextCard, TypographyCard, CardTitleSubtitle } from './components/cards';
import ThreeDTextCard from './components/ui/3d-text-card';
import ImageCardHover from './components/ui/image-card-hover';
import ImageCardHorizontal from './components/ui/image-card-horizontal';
import Image from 'next/image';
import Footer from './components/Footer';

// Mapeo SOLO de ImageCards a proyectos específicos - ACTUALIZADO
const projectCardMappings = [
  { cardNumber: 2, projectId: 'florero-betty' },         // ImageCard -> Florero Betty
  { cardNumber: 6, projectId: 'linea-complementos-chapa' }, // ImageCard -> Línea Complementos (horizontal)
  { cardNumber: 8, projectId: 'cooperativa-superarte' },    // ImageCard -> Cooperativa Superarte
  { cardNumber: 9, projectId: 'upcycled-luminarias' },      // ImageCard -> Upcycled Luminarias  
  { cardNumber: 13, projectId: 'mesa-bea' },                // ImageCard -> Mesa Bea (horizontal)
  { cardNumber: 17, projectId: 'recap' },                   // ImageCard -> RECAP (horizontal)
  { cardNumber: 21, projectId: 'linea-vasos' }              // ImageCard -> Línea Vasos (horizontal)
];

// Función helper para obtener la URL del proyecto o genérica
function getProjectUrl(cardNumber: number): string {
  const mapping = projectCardMappings.find(m => m.cardNumber === cardNumber);
  return mapping ? `/proyectos/${mapping.projectId}?from=home` : '/proyectos';
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cards grid responsive */}
      <div className="w-full px-2 sm:px-4 lg:px-6 pb-12 pt-4" style={{ paddingTop: '75px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-none">
          {/* COLUMN 1 (Left) - 8 cards */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* 1. Hembra Estudio - NO 3D TEXT */}
            <ThreeDTextCard
              cardNumber={1}
              label="Estudio"
              title="<strong>HEMBRA ESTUDIO</strong> "
              backgroundColor="#f2f2f2ff"
              textColor="#333333"
              showArrow={true}
              href="/estudio"
            />

            {/* 2. Florero Betty - IMAGE HOVER */}
            <ImageCardHover
              cardNumber={2}
              src="/images/1. Florero Betty/Copia de Betty Vase Colours.jpg"
              alt="Florero Betty - Diseño Sustentable"
              title="Florero Betty"
              label="Proyectos"
              href={getProjectUrl(2)}
              showArrow={true}
            />

            {/* 3. Estrategia Circular - TYPOGRAPHY (TIPO 4) */}
            <TypographyCard
              cardNumber={3}
              items={[
                { text: "Estrategia Circular", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#718355"
              showArrow={true}
              href="/servicios"
            />

            {/* 4. Blog Post - CARDTITLE (TIPO 3) */}
            <CardTitleSubtitle
              cardNumber={4}
              title="Cómo diseñar productos sustentables"
              subtitle="Guía completa para principiantes"
              description="Estrategias y ejemplos prácticos para crear productos que respeten el medio ambiente sin comprometer la funcionalidad."
              label="Blog"
              href="/blog"
              backgroundColor="#cedbbf"
              textColor="#3D4A3D"
              minHeight="min-h-[140px] sm:min-h-[160px]"
            />

            {/* 5. Sustainability Statement - NO 3D TEXT */}
            <ThreeDTextCard
              cardNumber={5}
              label="Estudio"
              title="Diseñamos con la <strong>convicción</strong> de que la <strong>sustentabilidad</strong> no es una opción, sino una <strong>responsabilidad</strong>"
              backgroundColor="#f2f2f2ff"
              textColor="#333333"
              showArrow={true}
              href="/estudio"
            />

            {/* 6. Línea de Complementos - IMAGE HORIZONTAL */}
            <ImageCardHorizontal
              cardNumber={6}
              src="/images/linea-complementos-chapa.jpeg"
              alt="Línea de Complementos en Chapa - Repusaje Artesanal"
              title="Línea de Complementos en Chapa"
              label="Proyectos"
              href={getProjectUrl(6)}
              showArrow={true}
            />

            {/* 7. Diseño de Objetos con Alma - TYPOGRAPHY (TIPO 4) */}
            <TypographyCard
              cardNumber={7}
              items={[
                { text: "Diseño de Objetos con Alma", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#7c8e60"
              showArrow={true}
              href="/servicios"
            />

            {/* 8. Cooperativa Superarte - IMAGE HORIZONTAL */}
            <ImageCardHorizontal
              cardNumber={8}
              src="/images/cooperativa-superarte.JPG"
              alt="Cooperativa Superarte - Trabajo Colaborativo"
              title="Cooperativa Superarte"
              label="Proyectos"
              href={getProjectUrl(8)}
              showArrow={true}
            />
          </div>

          {/* COLUMN 2 (Center) - 5 cards + 3 elementos especiales = 8 elementos */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* 9. Upcycled Luminarias - IMAGE HOVER */}
            <ImageCardHover
              cardNumber={9}
              src="/images/upcycled-luminarias.JPG"
              alt="Upcycled Luminarias - Iluminación Consciente"
              title="Upcycled Luminarias"
              label="Proyectos"
              href={getProjectUrl(9)}
              showArrow={true}
            />

            {/* 10. Marquesina Superior */}
            <div className="h-32 sm:h-40 lg:h-48 rounded-xl relative overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/ORcrWDmgvL8vrAJjyE7jwI4lbLo.gif?scale-down-to=1024"
                alt="Marquesina"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold z-20" style={{backgroundColor: '#a8836d', color: '#fefcfb'}}>
                10
              </div>
            </div>

            {/* 11. Blog Post - CARDTITLE (TIPO 3) */}
            <CardTitleSubtitle
              cardNumber={11}
              title="Tendencias en diseño industrial 2024"
              subtitle="Lo que viene este año"
              description="Análisis profundo de las tendencias más relevantes en materiales, procesos y estilos que marcarán el diseño industrial."
              backgroundColor="#b59582"
              textColor="#fefcfb"
              label="Blog"
              minHeight="min-h-[140px] sm:min-h-[160px]"
            />

            {/* 12. VIDEO CENTRAL - Solo desktop */}
            <div className="hidden lg:block">
              <div className="h-80 sm:h-96 lg:h-[500px] rounded-xl relative overflow-hidden">
                <video
                  src="https://framerusercontent.com/assets/nOkG5qcPPOVv5BSHdgfLxtLTEE.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '12px' }}
                />
                <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold z-20" style={{backgroundColor: '#a8836d', color: '#fefcfb'}}>
                  12
                </div>
              </div>
            </div>

            {/* 12. Mobile: Cooperativa Superarte en lugar del video - IMAGE HOVER */}
            <div className="block lg:hidden">
              <ImageCardHover
                cardNumber={12}
                src="/images/cooperativa-superarte.JPG"
                alt="Cooperativa Superarte - Trabajo Colaborativo"
                title="Cooperativa Superarte"
                label="Proyectos"
                href="/proyectos/cooperativa-superarte?from=home"
                showArrow={true}
              />
            </div>

            {/* 13. Mesa Bea - IMAGE HOVER */}
            <ImageCardHover
              cardNumber={13}
              src="/images/mesa-bea.jpg"
              alt="Mesa Bea - Diseño Funcional"
              title="Mesa Bea"
              label="Proyectos"
              href={getProjectUrl(13)}
              showArrow={true}
            />

            {/* 14. Innovación Sostenible - TYPOGRAPHY (TIPO 4) */}
            <TypographyCard
              cardNumber={14}
              items={[
                { text: "Innovación Sostenible", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#b3c1a2"
              showArrow={true}
              href="/servicios"
            />

            {/* 15. Marquesina Inferior */}
            <div className="h-32 sm:h-40 lg:h-48 rounded-xl relative overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/ORcrWDmgvL8vrAJjyE7jwI4lbLo.gif?scale-down-to=1024"
                alt="Marquesina"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold z-20" style={{backgroundColor: '#a8836d', color: '#fefcfb'}}>
                15
              </div>
            </div>


          </div>

          {/* COLUMN 3 (Right) - 8 cards */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* 16. Prototipado y Desarrollo - TYPOGRAPHY (TIPO 4) */}
            <TypographyCard
              cardNumber={16}
              items={[
                { text: "Prototipado y Desarrollo", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#909b82"
              showArrow={true}
              href="/servicios"
            />

            {/* 17. RECAP - IMAGE HORIZONTAL */}
            <ImageCardHorizontal
              cardNumber={17}
              src="/images/recap.jpg"
              alt="RECAP - Proyecto Integral"
              title="RECAP"
              label="Proyectos"
              href={getProjectUrl(17)}
              showArrow={true}
            />

            {/* 18. Propósito Creativo - NO 3D TEXT */}
            <ThreeDTextCard
              cardNumber={18}
              title="<strong>Reimaginamos</strong> los materiales descartados como <strong>oportunidades</strong> para un futuro más <strong>consciente</strong>"
              label="Estudio"
              backgroundColor="#f2f2f2ff"
              textColor="#333333"
              showArrow={true}
              href="/estudio"
            />

            {/* 19. Blog Post - CARDTITLE (TIPO 3) */}
            <CardTitleSubtitle
              cardNumber={19}
              title="Colaboraciones que inspiran"
              subtitle="Alianzas estratégicas"
              description="Historias reales de colaboraciones exitosas y cómo las alianzas estratégicas potencian la innovación."
              backgroundColor="#718355"
              textColor="#fefcfb"
              label="Blog"
              minHeight="min-h-[140px] sm:min-h-[160px]"
            />

            {/* 20. Impacto Social - NO 3D TEXT */}
            <ThreeDTextCard
              cardNumber={20}
              title="Creamos <strong>productos con propósito</strong>, integrando <strong>diseño</strong>, <strong>impacto social</strong> y <strong>compromiso ambiental</strong>."
              label="Estudio"
              backgroundColor="#f2f2f2ff"
              textColor="#333333"
              showArrow={true}
              href="/estudio"
            />

            {/* 21. Línea Vasos - IMAGE HORIZONTAL */}
            <ImageCardHorizontal
              cardNumber={21}
              src="/images/linea-vasos.JPG"
              alt="Línea Vasos - Vidrio Recuperado"
              title="Línea Vasos"
              label="Proyectos"
              href={getProjectUrl(21)}
              showArrow={true}
            />

            {/* 22. Producción Responsable - TYPOGRAPHY (TIPO 4) */}
            <TypographyCard
              cardNumber={22}
              items={[
                { text: "Producción Responsable", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#a2ae92"
              showArrow={true}
              href="/servicios"
            />

            {/* 23. Blog Post - CARDTITLE (TIPO 3) */}
            <CardTitleSubtitle
              cardNumber={23}
              title="Diseño circular en acción"
              subtitle="Casos de éxito"
              description="Ejemplos reales de cómo implementamos principios de economía circular en proyectos tangibles y exitosos."
              backgroundColor="#cedbbf"
              textColor="#3D4A3D"
              label="Blog"
              minHeight="min-h-[140px] sm:min-h-[160px]"
            />
          </div>
        </div>
      </div>

      {/* Footer con logo gigante */}
      <Footer />
    </div>
  );
} 
