import { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-trust-blue/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 text-white">
                    <Car className="w-8 h-8 text-action-orange" />
                    <span className="text-2xl font-bold tracking-tight">AutoElite</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-gray-200 hover:text-white transition-colors">Inicio</a>
                    <a href="#catalogo" className="text-gray-200 hover:text-white transition-colors">Catálogo</a>
                    <a href="#tasacion" className="text-gray-200 hover:text-white transition-colors">Tasación</a>
                    <a href="#contacto" className="text-gray-200 hover:text-white transition-colors">Contacto</a>
                    <button className="bg-action-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg hover:shadow-orange-500/20">
                        Vendé tu auto
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-trust-blue border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            <a href="#" className="text-gray-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
                            <a href="#catalogo" className="text-gray-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Catálogo</a>
                            <a href="#tasacion" className="text-gray-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Tasación</a>
                            <a href="#contacto" className="text-gray-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
                            <button className="bg-action-orange text-white px-6 py-2 rounded-full font-medium w-full">
                                Vendé tu auto
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
