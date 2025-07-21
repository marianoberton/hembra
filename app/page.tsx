import { TextCard, ImageCard, ProjectCard, TypographyCard, CardTitleSubtitle } from './components/cards';

// Mapeo SOLO de ImageCards a proyectos específicos
const projectCardMappings = [
  { cardNumber: 2, projectId: 'florero-betty' },         // ImageCard -> Florero Betty
  { cardNumber: 5, projectId: 'linea-complementos-chapa' }, // ImageCard -> Línea Complementos
  { cardNumber: 7, projectId: 'upcycled-luminarias' },      // ImageCard -> Upcycled Luminarias  
  { cardNumber: 10, projectId: 'cooperativa-superarte' },   // ImageCard -> Cooperativa Superarte
  { cardNumber: 13, projectId: 'linea-vasos' },             // ImageCard -> Línea Vasos
  { cardNumber: 16, projectId: 'recap' },                   // ImageCard -> RECAP
  { cardNumber: 18, projectId: 'mesa-bea' }                 // ImageCard -> Mesa Bea
];

// Función helper para obtener la URL del proyecto o genérica
function getProjectUrl(cardNumber: number): string {
  const mapping = projectCardMappings.find(m => m.cardNumber === cardNumber);
  return mapping ? `/proyectos/${mapping.projectId}?from=home` : '/proyectos';
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cards grid con margen superior para separar del header/nav */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-none">
          {/* COLUMN 1 (Left) - 6 cards */}
          <div className="space-y-4 md:space-y-6">
            {/* 1. Hembra Statement */}
            <TextCard
              cardNumber={1}
              label="Estudio"
              title="Hembra es un estudio de diseño industrial con la misión de transformar residuos en soluciones sustentables."
              backgroundColor="#b3c1a2"
              textColor="#718355"
              minHeight="min-h-[240px]"
              showArrow={true}
            />

            {/* 2. Florero Betty - PROYECTO */}
            <ImageCard
              cardNumber={2}
              src="/images/1. Florero Betty/Copia de Betty Vase Colours.jpg"
              alt="Florero Betty - Diseño Sustentable"
              label="Proyectos"
              href={getProjectUrl(2)}
              minHeight="min-h-[280px]"
              showArrow={true}
            />

            {/* 3. Summer 2023 Project */}
            <CardTitleSubtitle
              cardNumber={3}
              title="Summer 2023"
              subtitle="Barriers to Entry"
              description="Produced in collaboration with Barriers to Action"
              label="Servicios"
              href="/servicios"
              backgroundColor="#cedbbf"
              textColor="#7c8e60"
              minHeight="min-h-[280px]"
            />

            {/* 4. Upcycling Process */}
            <TypographyCard
              cardNumber={4}
              items={[
                { text: "Upcycling Process", className: "text-headline" }
              ]}
              label="Metodología"
              backgroundColor="#a8836d"
              showArrow={false}
            />

            {/* 5. Línea de Complementos - PROYECTO */}
            <ImageCard
              cardNumber={5}
              src="/images/linea-complementos-chapa.jpeg"
              alt="Línea de Complementos en Chapa - Repusaje Artesanal"
              label="Proyectos"
              href={getProjectUrl(5)}
              minHeight="min-h-[240px]"
              showArrow={true}
            />

            {/* 6. Quote Block */}
            <TextCard
              cardNumber={6}
              content="We begin with the end.™"
              backgroundColor="#fefcfb"
              textColor="#7c8e60"
              minHeight="min-h-[160px]"
              className="italic text-center border"
              showArrow={false}
            />
          </div>

          {/* COLUMN 2 (Center) - 6 cards */}
          <div className="space-y-4 md:space-y-6">
            {/* 7. Upcycled Luminarias - PROYECTO */}
            <ImageCard
              cardNumber={7}
              src="/images/upcycled-luminarias.JPG"
              alt="Upcycled Luminarias - Iluminación Consciente"
              label="Proyectos"
              href={getProjectUrl(7)}
              minHeight="min-h-[280px]"
              showArrow={true}
            />

            {/* 8. Marquesina */}
            <div className="h-24 rounded-xl flex items-center justify-center relative" style={{backgroundColor: '#94a27f'}}>
              <p className="text-caption" style={{color: '#fefcfb'}}>Marquesina</p>
              <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold z-20" style={{backgroundColor: '#a8836d', color: '#fefcfb'}}>
                8
              </div>
            </div>

            {/* 9. Metodología */}
            <TypographyCard
              cardNumber={9}
              items={[
                { text: "Metodología Sustentable" }
              ]}
              backgroundColor="#718355"
              label="Estudio"
            />

            {/* 10. Cooperativa Superarte - PROYECTO */}
            <ImageCard
              cardNumber={10}
              src="/images/cooperativa-superarte.JPG"
              alt="Cooperativa Superarte - Trabajo Colaborativo"
              label="Proyectos"
              href={getProjectUrl(10)}
              minHeight="min-h-[200px]"
              showArrow={true}
            />

            {/* 11. Partnership Text */}
            <TextCard
              cardNumber={11}
              title="Collaborate to be stronger, together ⎯ Strategic partnerships increase the capacity to create the regenerative future."
              label="Estudio"
              backgroundColor="#ae8b77"
              textColor="#fefcfb"
              showArrow={true}
            />

            {/* 12. Blog */}
            <TextCard
              cardNumber={12}
              title="Blog"
              label="Contenido"
              href="/blog"
              backgroundColor="#a2ae92"
              textColor="#718355"
              showArrow={true}
            />
          </div>

          {/* COLUMN 3 (Right) - 6 cards */}
          <div className="space-y-4 md:space-y-6">
            {/* 13. Línea Vasos - PROYECTO */}
            <ImageCard
              cardNumber={13}
              src="/images/linea-vasos.JPG"
              alt="Línea Vasos - Vidrio Recuperado"
              label="Proyectos"
              href={getProjectUrl(13)}
              minHeight="min-h-[280px]"
              showArrow={true}
            />

            {/* 14. Impacto Social */}
            <TextCard
              cardNumber={14}
              title="Impacto Social"
              subtitle="Generamos trabajo con el menor consumo de recursos posible"
              backgroundColor="#909b82"
              textColor="#fefcfb"
              minHeight="min-h-[200px]"
            />

            {/* 15. Winter 2022 - The New Comfort */}
            <CardTitleSubtitle
              cardNumber={15}
              title="Winter 2022"
              subtitle="The New Comfort"
              description="A future of resilience amidst rapid change."
              backgroundColor="#cedbbf"
              textColor="#7c8e60"
              label="Servicios"
            />

            {/* 16. RECAP - PROYECTO */}
            <ImageCard
              cardNumber={16}
              src="/images/recap.jpg"
              alt="RECAP - Proyecto Integral"
              label="Proyectos"
              href={getProjectUrl(16)}
              minHeight="min-h-[240px]"
              showArrow={true}
            />

            {/* 17. Building 12 Announcement */}
            <TextCard
              cardNumber={17}
              title="We are extraordinarily excited to announce that we have moved into Building 12, which is part of the larger Pier 70 project in San Francisco's Dogpatch neighborhood. This space will include an entire prototyping lab, micro material library, and other features that will enable us to do our best work and grow as a team."
              backgroundColor="#b59582"
              textColor="#7c8e60"
            />

            {/* 18. Mesa Bea - PROYECTO */}
            <ImageCard
              cardNumber={18}
              src="/images/mesa-bea.jpg"
              alt="Mesa Bea - Mobiliario Upcycled"
              label="Proyectos"
              href={getProjectUrl(18)}
              minHeight="min-h-[200px]"
              showArrow={true}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12" style={{backgroundColor: '#fefcfb'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Logos Placeholder */}
          <div className="h-24 rounded-xl mb-8 flex items-center justify-center" style={{backgroundColor: '#a2ae92'}}>
            <p className="text-caption" style={{color: '#718355'}}>Client Logos</p>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com" 
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{backgroundColor: '#b3c1a2', color: '#fefcfb'}}>
                IG
              </a>
              <a 
                href="https://linkedin.com" 
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{backgroundColor: '#b3c1a2', color: '#fefcfb'}}>
                LI
              </a>
            </div>

            {/* CTA */}
            <a 
              href="/contacto" 
              className="px-6 py-2 rounded-full text-sm font-medium transition-colors"
              style={{backgroundColor: '#a8836d', color: '#fefcfb'}}>
              Get in touch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 