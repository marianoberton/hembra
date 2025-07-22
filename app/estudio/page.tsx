'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TextCard, CardTitleSubtitle } from '../components/cards';
import ThreeDTextCard from '../components/ui/3d-text-card';
import Footer from '../components/Footer';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left"
      >
        <span className="text-headline text-gray-900">{title}</span>
        <span className="text-xl text-gray-500">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6'}}>{content}</p>
        </div>
      )}
    </div>
  );
}

export default function EstudioPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Main Header Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left - About Section */}
          <div>
            <h1 className="prowl-label mb-4 uppercase">
              Estudio
            </h1>
            
            <h2 className="text-display mb-8" style={{color: '#718355'}}>
              Comenzamos con el diseño regenerativo.
            </h2>
          </div>

          {/* Right - Main Description */}
          <div className="space-y-6">
            <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6'}}>
              <strong>HEMBRA</strong> es un estudio de diseño industrial con la misión de ayudar a empresas, 
              instituciones y organizaciones a construir un futuro más sostenible.
            </p>
            
            <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6'}}>
              Hemos visto el daño causado por el pensamiento a corto plazo que se detiene en el 
              producto final, diseños que involuntariamente dañan los sistemas naturales y humanos 
              a través de su producción, uso o eliminación. Creemos que tiene que haber una mejor manera.
            </p>
            
            <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6'}}>
              Fundado en 2021, HEMBRA fue construido para ser un tipo diferente de estudio de diseño industrial. 
              Uno donde la sustentabilidad no fuera una reflexión tardía, sino inherente a todo lo que hacemos. 
              No nos dedicamos a crear productos o elaborar investigación y narrativas convincentes; 
              hemos visto surgir adherencias a nuestra misión donde el impacto y la innovación se refuerzan mutuamente.
            </p>
            
            <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6'}}>
              Para crear de manera diferente, pensamos de manera diferente. <strong>Comenzamos con el final</strong> de 
              cada proyecto que tocamos, retrocediendo desde los residuos hasta las raíces de la vida. Este método 
              regenerativo produce soluciones significativas a escala que también respetan a las generaciones venideras. 
              También nos asociamos con diversos expertos, desde científicos materiales hasta filósofos del diseño, 
              para asegurar que nuestros proyectos tengan el mayor impacto posible.
            </p>
            
            <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6'}}>
              Si estás listo para construir un futuro regenerativo con nosotros, ponte en contacto hoy.
            </p>
          </div>
          
        </div>
      </div>

      {/* Principles Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <h2 className="prowl-label mb-8 uppercase">
          Principios
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-1">
              <AccordionItem
                title="¿Qué es el Diseño Regenerativo?"
                content="El diseño regenerativo es un enfoque que va más allá de la sostenibilidad. Mientras la sostenibilidad busca mantener el status quo, el diseño regenerativo busca mejorar y restaurar los sistemas naturales y sociales. Es diseñar con la intención de crear impactos positivos duraderos."
                isOpen={openAccordion === 'regenerative'}
                onToggle={() => toggleAccordion('regenerative')}
              />
              
              <AccordionItem
                title="¿Qué significa 'Comenzar con el Final'?"
                content="Comenzamos cada proyecto considerando su ciclo de vida completo, desde la concepción hasta su disposición final. Esto significa pensar en cómo se desarmará, reciclará o compostará el producto antes de diseñar cómo se construirá."
                isOpen={openAccordion === 'end'}
                onToggle={() => toggleAccordion('end')}
              />
              
              <AccordionItem
                title="¿Qué es el Proceso de HEMBRA?"
                content="Nuestro proceso se basa en tres pilares: Investigación regenerativa (entender el impacto completo), Diseño circular (crear sistemas cerrados), y Implementación consciente (producción responsable con materiales locales y técnicas sustentables)."
                isOpen={openAccordion === 'process'}
                onToggle={() => toggleAccordion('process')}
              />
              
              <AccordionItem
                title="¿Cuáles son los Servicios de HEMBRA?"
                content="Ofrecemos consultoría en diseño regenerativo, desarrollo de productos sustentables, estrategias de economía circular, upcycling de materiales, y educación en diseño consciente. Trabajamos con empresas para transformar sus procesos productivos hacia modelos más regenerativos."
                isOpen={openAccordion === 'services'}
                onToggle={() => toggleAccordion('services')}
              />
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Card para "Nuestro enfoque" - 3D */}
            <ThreeDTextCard
              title="Nuestro enfoque integra diseño, conciencia ambiental y perspectiva social. Cada proyecto es una oportunidad para demostrar que el diseño puede ser hermoso y responsable, creando soluciones que nutren tanto a las personas como al planeta."
              label="Enfoque"
              backgroundColor="#b3c1a2"
              textColor="#3D4A3D"
              minHeight="min-h-[200px]"
              showArrow={false}
            />
            
            {/* Card para "Transformamos materiales" - 3D */}
            <ThreeDTextCard
              title="Transformamos materiales descartados en soluciones innovadoras. El upcycling está en el corazón de nuestra práctica, convirtiendo residuos en productos de valor agregado que extienden la vida útil de los materiales."
              label="Innovación"
              backgroundColor="#cedbbf"
              textColor="#3D4A3D"
              minHeight="min-h-[200px]"
              showArrow={false}
            />
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image
              src="/images/hero1.jpg"
              alt="Proceso de diseño en el estudio"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
            <Image
              src="/images/hero2.jpg"
              alt="Materiales y trabajo sustentable"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Studio Section - Back to text format */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <h2 className="prowl-label mb-8 uppercase">
          Estudio
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-display mb-6 text-left" style={{color: '#718355'}}>
              Soy Ornella Casoy, Diseñadora Industrial especializada en Economía Circular.
            </h3>
            <p className="text-black leading-relaxed mb-6" style={{fontSize: '18px', lineHeight: '1.6'}}>
              Soy apasionada por crear productos sustentables con impacto positivo. Soy profesora de 
              Diseño Sustentable en la Universidad Torcuato Di Tella y fundadora de Hembra, un estudio 
              que fusiona diseño, conciencia ambiental y perspectiva social para desarrollar objetos con propósito.
            </p>
            <p className="text-black leading-relaxed" style={{fontSize: '18px', lineHeight: '1.6'}}>
              El estudio/taller Hembra está basado en Buenos Aires, Argentina. Nos enfocamos en crear 
              proyectos con un profundo compromiso hacia la sustentabilidad. Nuestros diseños están 
              arraigados en el concepto de upcycling, transformando materiales descartados en nuevos 
              productos, impulsados por un compromiso con la responsabilidad social.
            </p>
          </div>
          
          <div>
            <h3 className="text-display mb-4 text-left" style={{color: '#718355'}}>
              Nuestra misión es clara:
            </h3>
            <p className="text-black leading-relaxed mb-8" style={{fontSize: '18px', lineHeight: '1.6'}}>
              Ayudar a nuestros clientes a transmitir su compromiso con la sostenibilidad, 
              integrando este concepto desde la concepción de cada proyecto. Cada propuesta 
              de diseño está pensada para ser parte de un sistema circular, donde los materiales 
              extienden su durabilidad y se ahorran recursos.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-headline text-gray-900 mb-2" style={{fontSize: '20px'}}>Residuos Actuales</h4>
                <p className="text-black leading-relaxed" style={{fontSize: '16px', lineHeight: '1.5'}}>
                  Planificamos soluciones innovadoras para los residuos que se generan hoy, 
                  ofreciendo alternativas creativas para optimizar su gestión.
                </p>
              </div>
              
              <div>
                <h4 className="text-headline text-gray-900 mb-2" style={{fontSize: '20px'}}>Producciones Futuras</h4>
                <p className="text-black leading-relaxed" style={{fontSize: '16px', lineHeight: '1.5'}}>
                  Alineamos la creatividad con principios de Ecodiseño, Biodiseño y Biomímesis, 
                  considerando la "etapa cero" del diseño para evitar residuos desde el origen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Images */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
            <Image
              src="/images/1work.avif"
              alt="Trabajo en el estudio Hembra"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
            <Image
              src="/images/2work.avif"
              alt="Proceso de upcycling"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Final Philosophy Section - 3D Card with less hover sensitivity */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-16">
        <div style={{
          '--hover-sensitivity': '0.3'
        } as React.CSSProperties}>
          <ThreeDTextCard
            title="El pensamiento circular es una necesidad urgente, no una opción. Reconocemos que el reciclaje es vital para abordar los problemas actuales de residuos, pero nuestro objetivo final es trascender este modelo. Nos enfocamos en la 'etapa cero' del ciclo de vida: el diseño, para evitar la generación de desechos desde su origen. En Hembra, no solo buscamos solucionar los problemas existentes, sino reeducar y asumir la responsabilidad de un compromiso ineludible con el futuro."
            label="Filosofía"
            backgroundColor="#a2ae92"
            textColor="#fefcfb"
            minHeight="min-h-[300px]"
            showArrow={false}
          />
        </div>
      </div>

      {/* Footer con logo gigante */}
      <Footer />

    </div>
  );
} 