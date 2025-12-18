import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Appraisal } from './components/Appraisal';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Appraisal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
