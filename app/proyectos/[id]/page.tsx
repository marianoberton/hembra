'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { proyectos } from '../../../data/proyectos';
import { Proyecto } from '../../../types/proyectos';
import { TextCard, SimpleTextCard, VerticalImageCard, HorizontalImageCard } from '../../components/cards';
import ScrollReveal from '../../components/ui/ScrollReveal';

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

  // Generate dynamic text blocks based on project content
  const generateTextBlocks = (proyecto: Proyecto) => {
    // Split the detail description into meaningful chunks
    const sentences = proyecto.detailDescription.split('. ');
    const chunks: string[] = [];
    
    // Group sentences into chunks of roughly equal length
    const targetChunkSize = Math.ceil(sentences.length / 5);
    for (let i = 0; i < sentences.length; i += targetChunkSize) {
      const chunk = sentences.slice(i, i + targetChunkSize).join('. ');
      chunks.push(chunk.endsWith('.') ? chunk : chunk + '.');
    }
    
    // Ensure we have exactly 5 chunks
    while (chunks.length < 5) {
      chunks.push(chunks[chunks.length - 1]);
    }
    while (chunks.length > 5) {
      chunks[chunks.length - 2] += ' ' + chunks.pop();
    }
    
    return chunks;
  };

  const textBlocks = generateTextBlocks(proyecto);

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
            
            {/* Text Block 1 - ScrollReveal */}
            <div className="bg-white rounded-xl p-8 min-h-[400px] flex items-center">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                textClassName="text-black"
              >
                {textBlocks[0]}
              </ScrollReveal>
            </div>
            
            {/* Hero Image 2 - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[1] || proyecto.image}
              alt={`${proyecto.title} - Vista 2`}
            />
            
            {/* Text Block 2 - ScrollReveal */}
            <div className="bg-white rounded-xl p-8 min-h-[400px] flex items-center">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={3}
                blurStrength={8}
                textClassName="text-black"
              >
                {textBlocks[1]}
              </ScrollReveal>
            </div>
            
            {/* Process Image - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[2] || proyecto.image}
              alt={`${proyecto.title} - Proceso`}
            />
            
            {/* Text Block 3 - ScrollReveal */}
            <div className="bg-white rounded-xl p-8 min-h-[450px] flex items-center">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={6}
                blurStrength={9}
                textClassName="text-black"
              >
                {textBlocks[2]}
              </ScrollReveal>
            </div>
            
            {/* Detail Image - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[0] || proyecto.image}
              alt={`${proyecto.title} - Detalle`}
            />
            
            {/* Text Block 4 - ScrollReveal */}
            <div className="bg-white rounded-xl p-8 min-h-[400px] flex items-center">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={4}
                blurStrength={12}
                textClassName="text-black"
              >
                {textBlocks[3]}
              </ScrollReveal>
            </div>
            
            {/* Cycle Image - VERTICAL */}
            <VerticalImageCard
              src={proyecto.gallery[3] || proyecto.image}
              alt={`${proyecto.title} - Ciclo`}
            />
            
            {/* Text Block 5 - ScrollReveal */}
            <div className="bg-white rounded-xl p-8 min-h-[450px] flex items-center">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={11}
                textClassName="text-black"
              >
                {textBlocks[4]}
              </ScrollReveal>
            </div>
            
            {/* Final Image - HORIZONTAL */}
            <HorizontalImageCard
              src={proyecto.gallery[4] || proyecto.image}
              alt={`${proyecto.title} - Final`}
            />
          </div>

          {/* Desktop: 2 columnas apiladas con espaciado reducido */}
          <div className="hidden md:grid md:grid-cols-2 gap-3">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="space-y-3">
              {/* Hero Image 1 - HORIZONTAL */}
              <HorizontalImageCard
                src={proyecto.image}
                alt={proyecto.title}
              />
              
              {/* Text Block 1 - ScrollReveal */}
              <div className="bg-white rounded-xl p-8 min-h-[400px] flex items-center">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={10}
                  textClassName="text-black"
                >
                  {textBlocks[0]}
                </ScrollReveal>
              </div>
              
              {/* Process Image - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[2] || proyecto.image}
                alt={`${proyecto.title} - Proceso`}
              />
              
              {/* Text Block 3 - ScrollReveal */}
              <div className="bg-white rounded-xl p-8 min-h-[450px] flex items-center">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={6}
                  blurStrength={9}
                  textClassName="text-black"
                >
                  {textBlocks[2]}
                </ScrollReveal>
              </div>
              
              {/* Text Block 5 - ScrollReveal */}
              <div className="bg-white rounded-xl p-8 min-h-[450px] flex items-center">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={2}
                  blurStrength={11}
                  textClassName="text-black"
                >
                  {textBlocks[4]}
                </ScrollReveal>
              </div>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="space-y-3">
              {/* Hero Image 2 - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[1] || proyecto.image}
                alt={`${proyecto.title} - Vista 2`}
              />
              
              {/* Text Block 2 - ScrollReveal */}
              <div className="bg-white rounded-xl p-8 min-h-[400px] flex items-center">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={3}
                  blurStrength={8}
                  textClassName="text-black"
                >
                  {textBlocks[1]}
                </ScrollReveal>
              </div>
              
              {/* Detail Image - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[0] || proyecto.image}
                alt={`${proyecto.title} - Detalle`}
              />
              
              {/* Text Block 4 - ScrollReveal */}
              <div className="bg-white rounded-xl p-8 min-h-[400px] flex items-center">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={4}
                  blurStrength={12}
                  textClassName="text-black"
                >
                  {textBlocks[3]}
                </ScrollReveal>
              </div>
              
              {/* Cycle Image - VERTICAL */}
              <VerticalImageCard
                src={proyecto.gallery[3] || proyecto.image}
                alt={`${proyecto.title} - Ciclo`}
              />
              
              {/* Final Image - HORIZONTAL */}
              <HorizontalImageCard
                src={proyecto.gallery[4] || proyecto.image}
                alt={`${proyecto.title} - Final`}
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