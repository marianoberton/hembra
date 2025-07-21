'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { proyectos } from '../../../data/proyectos';
import { Proyecto } from '../../../types/proyectos';
import { TextCard, SimpleTextCard, VerticalImageCard, HorizontalImageCard } from '../../components/cards';

export default function ProyectoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const proyectoId = params.id as string;
  const fromHome = searchParams.get('from') === 'home';
  
  const [proyecto, setProyecto] = useState<Proyecto | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const foundProyecto = proyectos.find(p => p.id === proyectoId);
    if (foundProyecto) {
      setProyecto(foundProyecto);
    }
    setLoading(false);
  }, [proyectoId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#F9F8F6'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3D4A3D] mx-auto mb-4"></div>
          <h2 className="text-xl font-medium" style={{color: '#2C2C2C'}}>Cargando proyecto...</h2>
        </div>
      </div>
    );
  }

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#F9F8F6'}}>
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4" style={{color: '#3D4A3D'}}>Proyecto no encontrado</h1>
          <Link 
            href="/proyectos"
            className="text-lg hover:underline"
            style={{color: '#2C2C2C'}}
          >
            ← Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  // Text blocks for Florero Betty
  const textBlocks = [
    {
      title: "Un problema que elegimos transformar",
      content: "Las botellas de vino desechadas constituyen una gran parte de los residuos de vidrio de nuestro planeta. Pero, ¿y si pudiéramos darles una segunda vida y transformarlas en algo realmente hermoso?"
    },
    {
      title: "Así nace el Florero Betty",
      content: "Nos enorgullece presentar nuestro tan preciado Florero Betty. Este jarrón no solo es una pieza decorativa, sino también un símbolo de sostenibilidad y compromiso social."
    },
    {
      title: "Diseño con conciencia",
      content: "Lo diseñamos bajo el concepto de upcycling, dándole un nuevo valor a materiales que de otra manera serían desechados. Está elaborado 100% a mano: su cuerpo está hecho a partir de botellas de vino reutilizadas, y su base se fabrica con retazos de chapa recuperada de chatarreras."
    },
    {
      title: "Una red que genera impacto",
      content: "Al reutilizar estas botellas, no solo estamos reduciendo significativamente los residuos, sino que también estamos creando oportunidades laborales en nuestra comunidad local."
    },
    {
      title: "Trabajo colectivo y economía circular",
      content: "Trabajamos de cerca con una red de talleres en el conurbano y con la cooperativa Supercrea, quienes se encargan de proveernos estos envases de vidrio recuperados. Así, hemos logrado construir una red de actores comprometidos con el medio ambiente y el desarrollo social."
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F9F8F6'}}>
      {/* Header expandido cuando viene desde home */}
      {fromHome && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-32 relative overflow-hidden"
          style={{backgroundColor: proyecto.backgroundColor}}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide font-serif" style={{color: '#2C2C2C'}}>
              {proyecto.title}
            </h1>
          </div>
        </motion.div>
      )}
      
      {/* Navigation Bar */}
      <div className="w-full border-b border-gray-200" style={{backgroundColor: 'white'}}>
        <div className="w-full px-4 py-4 flex justify-between items-center">
          <Link 
            href="/proyectos"
            className="text-sm font-medium tracking-wide hover:underline"
            style={{color: '#2C2C2C'}}
          >
            ← Proyectos
          </Link>
        </div>
      </div>

      {/* Main Content - Full Width */}
      <div className="w-full">
        
        {/* Header TextCard - Compact */}
        <div className="w-full px-2 py-6">
          <TextCard
            title={`${proyecto.title} — ${proyecto.subtitle}`}
            label="Proyecto"
            backgroundColor={proyecto.backgroundColor}
            textColor="#2C2C2C"
            minHeight="min-h-[200px]"
            className="rounded-3xl"
            showArrow={false}
          />
        </div>

        {/* Content Container */}
        <div className="w-full px-2 py-4">
          
          {/* Mobile: Stack todas las cards una arriba de otra */}
          <div className="block md:hidden space-y-4">
            {/* Hero Image 1 - HORIZONTAL */}
            <HorizontalImageCard
              src={proyecto.image}
              alt={proyecto.title}
            />
            
            {/* Text Block 1 */}
            <SimpleTextCard
              title={textBlocks[0].title}
              content={textBlocks[0].content}
              minHeight="min-h-[400px]"
            />
            
            {/* Hero Image 2 - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[1] || proyecto.image}
              alt={`${proyecto.title} - Vista 2`}
            />
            
            {/* Text Block 2 */}
            <SimpleTextCard
              title={textBlocks[1].title}
              content={textBlocks[1].content}
              minHeight="min-h-[400px]"
            />
            
            {/* Process Image - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[2] || proyecto.image}
              alt={`${proyecto.title} - Proceso`}
            />
            
            {/* Text Block 3 */}
            <SimpleTextCard
              title={textBlocks[2].title}
              content={textBlocks[2].content}
              minHeight="min-h-[450px]"
            />
            
            {/* Detail Image - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[0] || proyecto.image}
              alt={`${proyecto.title} - Detalle`}
            />
            
            {/* Text Block 4 */}
            <SimpleTextCard
              title={textBlocks[3].title}
              content={textBlocks[3].content}
              minHeight="min-h-[400px]"
            />
            
            {/* Cycle Image - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[3] || proyecto.image}
              alt={`${proyecto.title} - Ciclo`}
            />
            
            {/* Text Block 5 */}
            <SimpleTextCard
              title={textBlocks[4].title}
              content={textBlocks[4].content}
              minHeight="min-h-[450px]"
            />
            
            {/* Final Image - HORIZONTAL */}
            <HorizontalImageCard
              src={proyecto.gallery[4] || proyecto.image}
              alt={`${proyecto.title} - Final`}
            />
          </div>

          {/* Desktop: 2 columnas apiladas sin espacios */}
          <div className="hidden md:grid md:grid-cols-2">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="space-y-0">
              {/* Hero Image 1 - HORIZONTAL */}
              <HorizontalImageCard
                src={proyecto.image}
                alt={proyecto.title}
                className="rounded-none"
              />
              
              {/* Text Block 1 */}
              <SimpleTextCard
                title={textBlocks[0].title}
                content={textBlocks[0].content}
                minHeight="min-h-[400px]"
                className="rounded-none"
              />
              
              {/* Process Image - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[2] || proyecto.image}
                alt={`${proyecto.title} - Proceso`}
                className="rounded-none"
              />
              
              {/* Text Block 3 */}
              <SimpleTextCard
                title={textBlocks[2].title}
                content={textBlocks[2].content}
                minHeight="min-h-[450px]"
                className="rounded-none"
              />
              
              {/* Text Block 5 */}
              <SimpleTextCard
                title={textBlocks[4].title}
                content={textBlocks[4].content}
                minHeight="min-h-[450px]"
                className="rounded-none"
              />
            </div>

            {/* COLUMNA DERECHA */}
            <div className="space-y-0">
              {/* Hero Image 2 - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[1] || proyecto.image}
                alt={`${proyecto.title} - Vista 2`}
                className="rounded-none"
              />
              
              {/* Text Block 2 */}
              <SimpleTextCard
                title={textBlocks[1].title}
                content={textBlocks[1].content}
                minHeight="min-h-[400px]"
                className="rounded-none"
              />
              
              {/* Detail Image - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[0] || proyecto.image}
                alt={`${proyecto.title} - Detalle`}
                className="rounded-none"
              />
              
              {/* Text Block 4 */}
              <SimpleTextCard
                title={textBlocks[3].title}
                content={textBlocks[3].content}
                minHeight="min-h-[400px]"
                className="rounded-none"
              />
              
              {/* Cycle Image - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[3] || proyecto.image}
                alt={`${proyecto.title} - Ciclo`}
                className="rounded-none"
              />
              
              {/* Final Image - HORIZONTAL */}
              <HorizontalImageCard
                src={proyecto.gallery[4] || proyecto.image}
                alt={`${proyecto.title} - Final`}
                className="rounded-none"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t" style={{borderColor: '#CEDBBF'}}>
            <Link 
              href="/proyectos"
              className="flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#3D4A3D', color: 'white'}}
            >
              <span>←</span>
              <span>Ver Todos los Proyectos</span>
            </Link>

            <div className="flex space-x-6">
              {/* Proyecto anterior */}
              {proyectos.findIndex(p => p.id === proyectoId) > 0 && (
                <Link 
                  href={`/proyectos/${proyectos[proyectos.findIndex(p => p.id === proyectoId) - 1].id}`}
                  className="px-6 py-3 rounded-full transition-colors hover:underline"
                  style={{color: '#7C8E60'}}
                >
                  ← Anterior
                </Link>
              )}
              
              {/* Proyecto siguiente */}
              {proyectos.findIndex(p => p.id === proyectoId) < proyectos.length - 1 && (
                <Link 
                  href={`/proyectos/${proyectos[proyectos.findIndex(p => p.id === proyectoId) + 1].id}`}
                  className="px-6 py-3 rounded-full transition-colors hover:underline"
                  style={{color: '#7C8E60'}}
                >
                  Siguiente →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 