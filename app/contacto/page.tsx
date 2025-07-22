export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4" style={{color: '#3D4A3D'}}>Contacto</h1>
        <p className="text-lg" style={{color: '#718355'}}>
          Contáctanos para comenzar tu proyecto
        </p>
        <div className="mt-8 space-y-4">
          <p className="text-base" style={{color: '#7c8e60'}}>
            📧 hello@hembra.studio
          </p>
          <p className="text-base" style={{color: '#7c8e60'}}>
            📱 +54 11 1234-5678
          </p>
          <p className="text-base" style={{color: '#7c8e60'}}>
            📍 Villa Crespo, Buenos Aires
          </p>
        </div>
      </div>
    </div>
  );
} 