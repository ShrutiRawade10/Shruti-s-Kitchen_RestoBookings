import { HeroSection } from '../components/HeroSection';
import { MenuSlider } from   '../components/MenuSlider';  

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <MenuSlider />
      </div>
    </main>
  );
} 