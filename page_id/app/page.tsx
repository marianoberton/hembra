import HorizontalImageCard from "@/components/HorizontalImageCard"

export default function HaworthPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-1 py-4">
        <div className="bg-black text-white rounded-2xl px-8 py-12">
          <div className="text-project-badge mb-4 text-center">Project</div>
          <h1 className="text-header-title text-center">Haworth - Exclusive Lighting Collection</h1>
        </div>
      </div>

      <div className="px-1 -mt-2">
        <div className="relative h-[70vh] rounded-2xl overflow-hidden">
          <img
            src="/placeholder-8tngu.png"
            alt="Haworth lighting collection hero image showing modern lamps in office setting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="px-1 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
          <div>
            <HorizontalImageCard
              src="/placeholder-7vuxd.png"
              alt="Black modern table lamp with warm lighting"
              className="h-[400px]"
            />
          </div>
          <div className="space-y-4 lg:pl-1 pt-1">
            <div className="text-body-content space-y-4">
              <p>
                Work is no longer confined to the office—remote work blends home and workspace more than ever. But how
                do you create distinction between the two, ensuring your space fosters both focus and relaxation?
              </p>
              <p>
                The Haworth Exclusive Lighting Collection introduces ritual and intention into your remote work life,
                offering variety, functionality, and comfort through thoughtful design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-1 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <HorizontalImageCard
            src="/ribbed-ceramic-lamp.png"
            alt="White ceramic table lamp with ribbed texture"
            className="h-[400px]"
          />
          <HorizontalImageCard
            src="/modern-pendant-lamp-office.png"
            alt="Modern pendant lamp with geometric design"
            className="h-[400px]"
          />
        </div>
      </div>

      <section className="px-1 py-4">
        <div className="border-t border-black/20 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-section-header">Details</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-body-content">
                <p>
                  In this collection, we wanted to combine variety and functionality with comforting lighting effects
                  and forms that celebrate the earth-conscious plant-based materials and on-demand additive
                  manufacturing process that brings these products to life. Produced using the cutting-edge technology
                  of San Francisco Bay Area-based Ganit, intricate details are precision crafted while reducing waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-1 py-2">
        <div className="relative h-[60vh] rounded-2xl overflow-hidden">
          <img
            src="/modern-lighting-manufacturing.png"
            alt="Lighting manufacturing process and workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="px-1 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <HorizontalImageCard
            src="/3d-printed-lamp-components.png"
            alt="3D printed lamp components and materials"
            className="h-[400px]"
          />
          <HorizontalImageCard
            src="/lamp-assembly.png"
            alt="Lamp assembly and quality control process"
            className="h-[400px]"
          />
        </div>
      </div>

      <section className="px-1 py-4">
        <div className="border-t border-black/20 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-section-header">Process</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-body-content space-y-4">
                <p>
                  Textures on these lights are drawn from looking at architectural facades and tiles, resulting in
                  subtle fluted details and nuanced transitions that allow you to appreciate the 3D printed
                  manufacturing process up close.
                </p>
                <p>
                  The team took a highly iterative approach to establishing forms, details, and proportions before
                  arriving at the final result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-1 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <HorizontalImageCard
            src="/architectural-texture-inspiration.png"
            alt="Architectural facades and texture inspiration"
            className="h-[400px]"
          />
          <HorizontalImageCard
            src="/iterative-design.png"
            alt="Design iteration and form development"
            className="h-[400px]"
          />
        </div>
      </div>

      <div className="px-1 py-2">
        <div className="relative h-[60vh] rounded-2xl overflow-hidden">
          <img
            src="/final-lighting-collection.png"
            alt="Final Haworth lighting collection showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="px-1 py-4">
        <div className="border-t border-black/20 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h2 className="text-section-header">More Information</h2>
            </div>
            <div className="lg:col-span-3">
              <div className="text-body-content space-y-4">
                <p>
                  Wherever you do your best work, these designs help you define your space and establish rituals—simply
                  by turning them on. Ambient table lights Rae and Luna set the tone for early mornings with coffee in
                  the living room or late-night emails in bed, while our task light, Beam, adds functionality with an
                  integrated tray for small desktop or entryway essentials.
                </p>
                <p>
                  The collection is available now, 3D printed to order in 26 color options. Shop the next generation of
                  sustainable glow → <strong>HERE</strong>.
                </p>
                <p className="text-sm opacity-70">Professional Photography by Sahra Jajarmikhyat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
