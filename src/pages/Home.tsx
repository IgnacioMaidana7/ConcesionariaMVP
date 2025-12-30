import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Catalog } from '../components/Catalog';
import { Appraisal } from '../components/Appraisal';
import { Footer } from '../components/Footer';
import { ComparisonBar } from '../components/ComparisonBar';
import { ComparisonModal } from '../components/ComparisonModal';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Catalog />
                <Appraisal />
            </main>
            <Footer />
            <ComparisonBar />
            <ComparisonModal />
        </>
    );
};
