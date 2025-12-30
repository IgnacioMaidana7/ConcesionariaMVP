import { MessageCircle, Info, Gauge, Calendar, CheckSquare, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Vehicle } from '../data/vehicles';
import { useComparisonStore } from '../store/useComparisonStore';
import { Link } from 'react-router-dom';

interface VehicleCardProps {
    vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
    const whatsappLink = `https://wa.me/5493576414844?text=Hola, me interesa el ${vehicle.brand} ${vehicle.model} publicado en su sitio web.`;
    const { selectedVehicles, toggleVehicle } = useComparisonStore();
    const isSelected = selectedVehicles.some(v => v.id === vehicle.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 group relative ${isSelected ? 'border-trust-blue ring-2 ring-trust-blue/20' : 'border-gray-100'
                }`}
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-trust-blue shadow-sm">
                    {vehicle.condition}
                </div>

                {/* Compare Checkbox */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleVehicle(vehicle);
                    }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-trust-blue shadow-sm hover:bg-trust-blue hover:text-white transition-colors flex items-center gap-2 cursor-pointer z-10"
                >
                    {isSelected ? <CheckSquare size={18} className="text-action-red" /> : <Square size={18} />}
                    <span className="text-xs font-bold">{isSelected ? 'Comparar' : 'Comparar'}</span>
                </button>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{vehicle.brand} {vehicle.model}</h3>
                        <p className="text-sm text-gray-500">{vehicle.type}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-action-red">
                        ${vehicle.price.toLocaleString()}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                        <Calendar size={16} className="text-trust-blue" />
                        <span>{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                        <Gauge size={16} className="text-trust-blue" />
                        <span>{vehicle.km === 0 ? '0 km' : `${vehicle.km.toLocaleString()} km`}</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Link
                        to={`/vehicle/${vehicle.id}`}
                        className="flex-1 bg-trust-blue text-white py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors cursor-pointer"
                    >
                        <Info size={18} />
                        Ver detalles
                    </Link>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-green-500 text-green-600 py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
                    >
                        <MessageCircle size={18} />
                        Consultar
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
