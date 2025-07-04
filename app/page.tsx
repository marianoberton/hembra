import { TextCard, ImageCard, ProjectCard, TypographyCard, CardTitleSubtitle } from './components/cards';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cards grid con margen superior para separar del header/nav */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-none">
          {/* COLUMN 1 (Left) */}
          <div className="space-y-4 md:space-y-6">
            {/* 1. PROWL Statement */}
            <TextCard
              cardNumber={1}
              label="Estudio"
              title="Hembra es un estudio de diseño industrial con la misión de transformar residuos en soluciones sustentables."
              backgroundColor="#b3c1a2"
              textColor="#718355"
              minHeight="min-h-[240px]"
              showArrow={true}
            />

            {/* 2. Work Image - 3work.avif */}
            <ImageCard
              cardNumber={2}
              src="/images/3work.avif"
              alt="Work - Design Project"
              label="Work"
              href="/work"
              minHeight="min-h-[280px]"
              showArrow={true}
            />

            {/* 3. Summer 2023 Project */}
            <CardTitleSubtitle
              cardNumber={3}
              title="Summer 2023"
              subtitle="Barriers to Entry"
              description="Produced in collaboration with Barriers to Action"
              badge="NEW"
              label="Projections"
              href="/projections"
              backgroundColor="#cedbbf"
              textColor="#7c8e60"
              minHeight="min-h-[280px]"
            />

            {/* 4. Air Company */}
            <TypographyCard
              cardNumber={4}
              items={[
                { text: "Air Company", className: "text-headline" }
              ]}
              label="Work"
              href="/work"
              backgroundColor="#a8836d"
              showArrow={true}
            />

            {/* 5. Industrial Image */}
            <ImageCard
              cardNumber={5}
              src="/images/5work.avif"
              alt="Industrial Design Project"
              label="Work"
              href="/work"
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

            {/* 7. Landscape Image */}
            <ImageCard
              cardNumber={7}
              src="/images/7work.avif"
              alt="Landscape Design Project"
              label="Work"
              href="/work"
              minHeight="min-h-[200px]"
              showArrow={true}
            />

            {/* 8. PEEL Chair */}
            <TypographyCard
              cardNumber={8}
              items={[
                { text: "PEEL Chair" }
              ]}
              label="Work"
              href="/work"
              backgroundColor="#7c8e60"
              showArrow={true}
            />

            {/* 9. Winter 2022 */}
            <TextCard
              cardNumber={9}
              title="Winter 2022"
              subtitle="Waste Source"
              backgroundColor="#a2ae92"
              textColor="#718355"
              minHeight="min-h-[200px]"
            />

            {/* 10. Collaboration Image */}
            <ImageCard
              cardNumber={10}
              src="/images/10work.avif"
              alt="Collaboration Project"
              label="Work"
              href="/work"
              minHeight="min-h-[200px]"
              showArrow={true}
            />

            {/* 11. Winter 2022 - Waste Source */}
            <CardTitleSubtitle
              cardNumber={11}
              title="Winter 2022"
              subtitle="Waste Source"
              description="Shifting the way we think about 'waste'"
              backgroundColor="#909b82"
              textColor="#fefcfb"
            />

            {/* 12. Collaboration Text */}
            <TextCard
              cardNumber={12}
              title="Collaborate to be stronger, together ⎯ Strategic partnerships increase the capacity to create the regenerative future."
              label="Estudio"
              backgroundColor="#ae8b77"
              textColor="#fefcfb"
              showArrow={true}
            />
          </div>

          {/* COLUMN 2 (Center) */}
          <div className="space-y-4 md:space-y-6">
            {/* 13. Work Image */}
            <ImageCard
              cardNumber={13}
              src="/images/11work.avif"
              alt="Work Project"
            />

            {/* 14. Marquesina */}
            <div className="h-24 rounded-xl flex items-center justify-center relative" style={{backgroundColor: '#94a27f'}}>
              <p className="text-caption" style={{color: '#fefcfb'}}>Marquesina</p>
              <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold z-20" style={{backgroundColor: '#a8836d', color: '#fefcfb'}}>
                14
              </div>
            </div>

            {/* 15. HTC Vive Flow */}
            <TypographyCard
              cardNumber={15}
              items={[
                { text: "HTC Vive Flow" }
              ]}
              backgroundColor="#718355"
            />

            {/* 16. Video Card */}
            <div className="h-48 rounded-xl flex items-center justify-center relative" style={{backgroundColor: '#cedbbf'}}>
              <p className="text-caption" style={{color: '#7c8e60'}}>Video Card</p>
              <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold z-20" style={{backgroundColor: '#a8836d', color: '#fefcfb'}}>
                16
              </div>
            </div>

            {/* 17. Partnership Text */}
            <TextCard
              cardNumber={17}
              title="The partnership between PROWL Studio and Parallel allows both of our businesses to bring our clients further, faster."
              backgroundColor="#b3c1a2"
              textColor="#718355"
            />

            {/* 18. Work Image */}
            <ImageCard
              cardNumber={18}
              src="/images/16work.avif"
              alt="Creative Work Project"
            />

            {/* 19. Marquesina */}
            <div className="h-24 rounded-xl flex items-center justify-center relative" style={{backgroundColor: '#8e9d75'}}>
              <p className="text-caption" style={{color: '#fefcfb'}}>Marquesina</p>
              <div className="absolute top-2 right-2 text-xs px-2 py-1 rounded font-bold z-20" style={{backgroundColor: '#ab8773', color: '#fefcfb'}}>
                19
              </div>
            </div>

            {/* 20. Fall 2022 - Biome Futures */}
            <CardTitleSubtitle
              cardNumber={20}
              title="Fall 2022"
              subtitle="Biome Futures"
              description="In Collaboration with Biome"
              backgroundColor="#b2917e"
              textColor="#fefcfb"
            />

            {/* 21. Work Image */}
            <ImageCard
              cardNumber={21}
              src="/images/19work.avif"
              alt="Studio Design Project"
            />

            {/* 22. News */}
            <TextCard
              cardNumber={22}
              title="News"
              backgroundColor="#a2ae92"
              textColor="#718355"
            />

            {/* 23. Work Image */}
            <ImageCard
              cardNumber={23}
              src="/images/21work.avif"
              alt="Product Design Project"
            />
          </div>

          {/* COLUMN 3 (Right) */}
          <div className="space-y-4 md:space-y-6">
            {/* 24. Haworth */}
            <TypographyCard
              cardNumber={24}
              items={[
                { text: "Haworth" }
              ]}
              href="/work"
              backgroundColor="#b18f7c"
            />

            {/* 25. Work Image */}
            <ImageCard
              cardNumber={25}
              src="/images/23work.avif"
              alt="Minimal Design Project"
            />
            
            {/* 26. News */}
            <TextCard
              cardNumber={26}
              title="News"
              backgroundColor="#909b82"
              textColor="#fefcfb"
            />

            {/* 27. Work Image */}
            <ImageCard
              cardNumber={27}
              src="/images/27work.avif"
              alt="Design Project"
            />

            {/* 28. Winter 2022 - The New Comfort */}
            <CardTitleSubtitle
              cardNumber={28}
              title="Winter 2022"
              subtitle="The New Comfort"
              description="A future of resilience amidst rapid change."
              backgroundColor="#cedbbf"
              textColor="#7c8e60"
            />

            {/* 29. ByBorre */}
            <TypographyCard
              cardNumber={29}
              items={[
                { text: "ByBorre" }
              ]}
              backgroundColor="#87986a"
            />

            {/* 30. Work Image */}
            <ImageCard
              cardNumber={30}
              src="/images/30work.avif"
              alt="Fabric Design Project"
            />

            {/* 31. Building 12 Announcement */}
            <TextCard
              cardNumber={31}
              title="We are extraordinarily excited to announce that we have moved into Building 12, which is part of the larger Pier 70 project in San Francisco's Dogpatch neighborhood. This space will include an entire prototyping lab, micro material library, and other features that will enable us to do our best work and grow as a team."
              backgroundColor="#b59582"
              textColor="#7c8e60"
            />

            {/* 32. Work Image */}
            <ImageCard
              cardNumber={32}
              src="/images/32work.avif"
              alt="Textile Design Project"
            />

            {/* 33. Gantri Focal */}
            <TypographyCard
              cardNumber={33}
              items={[
                { text: "Gantri Focal" }
              ]}
              backgroundColor="#718355"
            />

            {/* 34. Work Image */}
            <ImageCard
              cardNumber={34}
              src="/images/34work.avif"
              alt="Architecture Design Project"
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