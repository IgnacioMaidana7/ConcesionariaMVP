import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-trust-blue/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                >
                    Tu próximo vehículo <br />
                    <span className="text-action-orange">te está esperando</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Encontrá los mejores autos y motos seleccionados para vos. Garantía, confianza y la mejor financiación.
                </motion.p>

                {/* Search Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-2xl max-w-3xl mx-auto border border-white/20 shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <select className="flex-1 bg-white/90 text-gray-900 h-12 rounded-lg params-select px-4 focus:ring-2 focus:ring-action-orange outline-none">
                            <option value="">Tipo de Vehículo</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                        <select className="flex-1 bg-white/90 text-gray-900 h-12 rounded-lg px-4 focus:ring-2 focus:ring-action-orange outline-none">
                            <option value="">Condición</option>
                            <option value="nuevo">Nuevo (0km)</option>
                            <option value="usado">Usado</option>
                        </select>
                        <button className="bg-action-orange hover:bg-orange-600 text-white h-12 px-8 rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105">
                            <Search size={20} />
                            Buscar
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
