import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useComparisonStore } from '../store/useComparisonStore';

export const ComparisonModal = () => {
    const { isModalOpen, selectedVehicles, closeModal, toggleVehicle } = useComparisonStore();

    if (!isModalOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
                >
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                        <h3 className="text-2xl font-bold text-trust-blue">Comparación de Vehículos</h3>
                        <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 overflow-x-auto">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr>
                                    <th className="p-4 text-left w-1/4"></th>
                                    {selectedVehicles.map(v => (
                                        <th key={v.id} className="p-4 text-center min-w-[200px]">
                                            <div className="relative">
                                                <img src={v.image} alt={v.model} className="w-full h-32 object-cover rounded-lg mb-2" />
                                                <h4 className="font-bold text-lg text-gray-900">{v.brand} {v.model}</h4>
                                                <button
                                                    onClick={() => toggleVehicle(v)}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="p-4 font-semibold text-gray-600">Precio</td>
                                    {selectedVehicles.map(v => (
                                        <td key={v.id} className="p-4 text-center font-bold text-action-red text-xl">
                                            ${v.price.toLocaleString()}
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-gray-600">Año</td>
                                    {selectedVehicles.map(v => (
                                        <td key={v.id} className="p-4 text-center text-gray-800">{v.year}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-gray-600">Kilometraje</td>
                                    {selectedVehicles.map(v => (
                                        <td key={v.id} className="p-4 text-center text-gray-800">{v.km.toLocaleString()} km</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-gray-600">Condición</td>
                                    {selectedVehicles.map(v => (
                                        <td key={v.id} className="p-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${v.condition === '0km' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-trust-blue'
                                                }`}>
                                                {v.condition}
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
