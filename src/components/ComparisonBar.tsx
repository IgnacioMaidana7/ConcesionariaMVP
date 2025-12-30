import { motion, AnimatePresence } from 'framer-motion';
import { useComparisonStore } from '../store/useComparisonStore';
import { Layers } from 'lucide-react';

export const ComparisonBar = () => {
    const { selectedVehicles, openModal, clearSelection } = useComparisonStore();

    return (
        <AnimatePresence>
            {selectedVehicles.length > 0 && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-trust-blue text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-6"
                >
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Layers size={24} />
                            <span className="absolute -top-2 -right-2 bg-action-red text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-trust-blue">
                                {selectedVehicles.length}
                            </span>
                        </div>
                        <span className="font-medium">
                            {selectedVehicles.length} {selectedVehicles.length === 1 ? 'vehículo seleccionado' : 'vehículos seleccionados'}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 border-l border-white/20 pl-4">
                        <button
                            onClick={openModal}
                            disabled={selectedVehicles.length < 2}
                            className={`px-4 py-1.5 rounded-lg font-bold transition-all ${selectedVehicles.length < 2
                                    ? 'bg-white/10 text-gray-300 cursor-not-allowed'
                                    : 'bg-white text-trust-blue hover:bg-gray-100'
                                }`}
                        >
                            Ver Comparación
                        </button>

                        <button
                            onClick={clearSelection}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
                        >
                            Limpiar
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
