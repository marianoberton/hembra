'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { proyectos } from '../../../data/proyectos';
import { Proyecto } from '../../../types/proyectos';
import ProjectHeader from '../../components/ProjectHeader';

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
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#e6e6e1'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3D4A3D] mx-auto mb-4"></div>
          <h2 className="text-xl font-medium" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>Cargando proyecto...</h2>
        </div>
      </div>
    );
  }

  if (!proyecto) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#e6e6e1'}}>
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4" style={{color: '#3D4A3D', fontFamily: 'Helvetica Neue LT Pro'}}>Proyecto no encontrado</h1>
          <Link 
            href="/proyectos"
            className="text-lg hover:underline"
            style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}
          >
            ← Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#e6e6e1'}}>
      {/* Navigation Bar */}
      <div className="w-full border-b border-gray-200" style={{backgroundColor: '#e6e6e1'}}>
        <div className="w-full px-4 py-4 flex justify-between items-center">
          <Link 
            href="/proyectos"
            className="text-sm font-medium tracking-wide hover:underline"
            style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}
          >
            ← Proyectos
          </Link>
        </div>
      </div>

      {/* Header con título del proyecto */}
      <ProjectHeader 
        title={proyecto.title}
        subtitle={proyecto.subtitle}
        backgroundColor="#d0ddc3"
      />

      {/* Contenedor Principal */}
      <div className="w-full px-2 sm:px-4 lg:px-6">
        
        {/* Sección 1: Proyecto (Introducción) */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            {/* Columna Izquierda - 60% (3/5) */}
            <div className="lg:col-span-3">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={proyecto.image}
                  alt={proyecto.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Columna Derecha - 40% (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>
                  Las botellas de vino desechadas constituyen una gran parte de los residuos de vidrio de nuestro planeta. 
                  Pero, ¿y si pudiéramos darles una segunda vida y transformarlas en algo realmente hermoso? 
                  Nos enorgullece presentar nuestro tan preciado {proyecto.title}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Línea de separación */}
        <div className="w-full h-px bg-gray-300 my-8"></div>

        {/* Sección 2: Galería de Estilo de Vida */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Columna Izquierda - 50% */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={proyecto.gallery[0] || proyecto.image}
                  alt={`${proyecto.title} - Ambiente 1`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={proyecto.gallery[1] || proyecto.image}
                  alt={`${proyecto.title} - Ambiente 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Columna Derecha - 50% */}
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={proyecto.gallery[2] || proyecto.image}
                alt={`${proyecto.title} - Con flores`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Línea de separación */}
        <div className="w-full h-px bg-gray-300 my-8"></div>

        {/* Sección 3: Proceso de Elaboración */}
        <section className="py-8 space-y-6">
          {/* Bloque 1: Título y Descripción del Proceso */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-light" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>
                Proceso
              </h2>
            </div>
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>
                  Esta elaborado 100% a mano, su cuerpo está hecho a partir de botellas de vino reutilizadas, 
                  y su base se fabrica con retazos de chapa recuperada de chatarreras. Al reutilizar estas botellas, 
                  no solo estamos reduciendo significativamente los residuos, sino que también estamos creando 
                  oportunidades laborales en nuestra comunidad local.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 2: Imagen del Taller */}
          <div className="w-full">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={proyecto.gallery[3] || proyecto.image}
                alt={`${proyecto.title} - Proceso de elaboración`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bloque 3: Imagen de Materiales */}
          <div className="w-full">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={proyecto.gallery[4] || proyecto.image}
                alt={`${proyecto.title} - Materiales utilizados`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Línea de separación */}
        <div className="w-full h-px bg-gray-300 my-8"></div>

        {/* Sección 4: Vista y Detalle del Diseño */}
        <section className="py-8 space-y-6">
          {/* Bloque 1: Título y Concepto de Diseño */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-light" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>
                Diseño con Propósito
              </h2>
            </div>
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>
                  Este jarrón no solo es una pieza decorativa, sino también un símbolo de sostenibilidad y compromiso social. 
                  Lo diseñamos bajo el concepto de upcycling, dándole un nuevo valor a materiales que de otra manera serían desechados.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 2: Imágenes de Producto en Detalle */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={proyecto.gallery[0] || proyecto.image}
                alt={`${proyecto.title} - Detalle`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={proyecto.gallery[1] || proyecto.image}
                alt={`${proyecto.title} - Proceso`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Línea de separación */}
        <div className="w-full h-px bg-gray-300 my-8"></div>

        {/* Sección 5: Nuestra Red de Colaboradores */}
        <section className="py-8 space-y-6">
          {/* Bloque 1: Título y Descripción de la Colaboración */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-light" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>
                Impacto Social
              </h2>
            </div>
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed" style={{color: '#2C2C2C', fontFamily: 'Helvetica Neue LT Pro'}}>
                  Trabajamos de cerca con una red de talleros en el conurbano y con la cooperativa Supercrea, 
                  quienes se encargan de proveernos estos envases de vidrio recuperados. Así, hemos logrado construir 
                  una red de actores comprometidos con el medio ambiente y el desarrollo social.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 2: Imagen Contextual de la Comunidad */}
          <div className="w-full">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={proyecto.gallery[2] || proyecto.image}
                alt={`${proyecto.title} - Comunidad`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center py-16 border-t" style={{borderColor: '#CEDBBF'}}>
          <Link 
            href="/proyectos"
            className="flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{backgroundColor: '#d0ddc3', color: '#000', fontFamily: 'Helvetica Neue LT Pro'}}
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
                style={{color: '#7C8E60', fontFamily: 'Helvetica Neue LT Pro'}}
              >
                ← Anterior
              </Link>
            )}
            
            {/* Proyecto siguiente */}
            {proyectos.findIndex(p => p.id === proyectoId) < proyectos.length - 1 && (
              <Link 
                href={`/proyectos/${proyectos[proyectos.findIndex(p => p.id === proyectoId) + 1].id}`}
                className="px-6 py-3 rounded-full transition-colors hover:underline"
                style={{color: '#7C8E60', fontFamily: 'Helvetica Neue LT Pro'}}
              >
                Siguiente →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}