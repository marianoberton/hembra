import { TextCard, TypographyCard, CardTitleSubtitle } from './components/cards';
import ThreeDTextCard from './components/ui/3d-text-card';
import ImageCardHorizontal from './components/ui/image-card-horizontal';
import ImageCardHover from './components/ui/image-card-hover';
import Image from 'next/image';
import Footer from './components/Footer';
import LabelTitleArrowCard from './components/cards/LabelTitleArrowCard';

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
      {/* Cards grid responsive - New 3-column layout */}
      <div className="w-full px-2 sm:px-4 lg:px-6 pb-12 pt-4" style={{ paddingTop: '75px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-none">
          
          {/* COLUMN 1 */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* 1. LabelTitleArrowCard - "Hembra Estudio" */}
            <LabelTitleArrowCard
              label="Estudio"
              title="Hembra Estudio"
              backgroundColor="#F5F5F5"
              textColor="#000000"
              href="/estudio"
            />

            {/* 2. ImageCardHover (posición 9 - Upcycled Luminarias) */}
            <ImageCardHover
              cardNumber={9}
              src="/images/upcycled-luminarias.JPG"
              alt="Upcycled Luminarias - Iluminación Sustentable"
              title="Upcycled Luminarias"
              label="Proyectos"
              href={getProjectUrl(9)}
              showArrow={true}
            />

            {/* 3. Card posición 18 - Blog Post */}
            <CardTitleSubtitle
              cardNumber={18}
              title="Casos de éxito en sustentabilidad"
              subtitle="Historias inspiradoras"
              description="Conoce empresas y proyectos que han logrado implementar exitosamente prácticas de diseño sustentable."
              label="Blog"
              href="/blog"
              backgroundColor="#cedbbf"
              textColor="#3D4A3D"
              minHeight="min-h-[140px] sm:min-h-[160px]"
            />

            {/* 4. Card posición 21 - Línea Vasos */}
            <ImageCardHorizontal
              cardNumber={21}
              src="/images/linea-vasos.JPG"
              alt="Línea de Vasos - Vajilla Sustentable"
              title="Línea de Vasos"
              label="Proyectos"
              href={getProjectUrl(21)}
              showArrow={true}
            />
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* 1. Card posición 2 - Florero Betty */}
            <ImageCardHover
              cardNumber={2}
              src="/images/1-2.jpg"
              alt="Florero Betty - Diseño Sustentable"
              title="Florero Betty"
              label="Proyectos"
              href={getProjectUrl(2)}
              showArrow={true}
            />

            {/* 2. LabelTitleArrowCard - Sustainability text */}
            <LabelTitleArrowCard
              label="Estudio"
              title="Diseñamos con la convicción de que la sustentabilidad no es una opción, sino una responsabilidad"
              backgroundColor="#f2f2f2ff"
              textColor="#333333"
              showArrow={true}
              href="/estudio"
            />

            {/* 3. Card posición 10 - Prototipado y Desarrollo */}
            <TypographyCard
              cardNumber={10}
              items={[
                { text: "Prototipado y Desarrollo", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#cedbbf"
              showArrow={true}
              href="/servicios"
            />

            {/* 4. Card posición 6 - Línea de Complementos */}
            <ImageCardHorizontal
              cardNumber={6}
              src="/images/ilustracion.jpg"
              alt="Línea de Complementos en Chapa"
              title="Línea de Complementos"
              label="Proyectos"
              href={getProjectUrl(6)}
              showArrow={true}
            />
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* 1. TypographyCard */}
            <TypographyCard
              items={[
                { text: "Estrategia Circular", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#718355"
              showArrow={true}
              href="/servicios"
            />

            {/* 2. ImageCardHover */}
            <ImageCardHover
              cardNumber={8}
              src="/images/cooperativa-superarte.JPG"
              alt="Cooperativa Superarte - Proyecto Social"
              title="Cooperativa Superarte"
              label="Proyectos"
              href={getProjectUrl(8)}
              showArrow={true}
            />

            {/* 3. Card posición 15 - Blog Post */}
            <CardTitleSubtitle
              cardNumber={15}
              title="Materiales del futuro"
              subtitle="Biomateriales y alternativas"
              description="Descubre los nuevos materiales que están revolucionando el diseño sustentable y sus aplicaciones prácticas."
              label="Blog"
              href="/blog"
              backgroundColor="#a8836d"
              textColor="#ffffff"
              minHeight="min-h-[140px] sm:min-h-[160px]"
            />

            {/* 4. ImageCardHover */}
            <ImageCardHover
              cardNumber={17}
              src="/images/orne.JPG"
              alt="RECAP - Proyecto de Reciclaje"
              title="RECAP"
              label="Proyectos"
              href={getProjectUrl(17)}
              showArrow={true}
            />

            {/* 5. TypographyCard */}
            <TypographyCard
              items={[
                { text: "Innovación Sostenible", className: "text-headline", color: "#000000" }
              ]}
              label="Servicios"
              backgroundColor="#a8836d"
              showArrow={true}
              href="/servicios"
            />
          </div>
        </div>
      </div>

      {/* Footer con logo gigante */}
      <Footer />
    </div>
  );
}
