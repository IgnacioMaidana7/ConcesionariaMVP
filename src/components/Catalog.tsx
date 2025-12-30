import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';

export const Catalog = () => {
    const [filterType, setFilterType] = useState<string>('all');
    const [filterCondition, setFilterCondition] = useState<string>('all');

    const filteredVehicles = useMemo(() => {
        return vehicles.filter(vehicle => {
            const typeMatch = filterType === 'all' || vehicle.type.toLowerCase() === filterType;
            const conditionMatch = filterCondition === 'all' || vehicle.condition.toLowerCase() === filterCondition;
            return typeMatch && conditionMatch;
        });
    }, [filterType, filterCondition]);

    return (
        <section id="catalogo" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Catálogo</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explorá nuestra selección exclusiva de vehículos verificados. Calidad y transparencia en cada unidad.
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-10 flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 gap-4">
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <Filter size={20} className="text-action-red" />
                        <span>Filtrar por:</span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <select
                            className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-trust-blue"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option value="all">Todos los vehículos</option>
                            <option value="auto">Autos</option>
                            <option value="moto">Motos</option>
                        </select>

                        <select
                            className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-trust-blue"
                            value={filterCondition}
                            onChange={(e) => setFilterCondition(e.target.value)}
                        >
                            <option value="all">Cualquier condición</option>
                            <option value="nuevo">Nuevo (0km)</option>
                            <option value="usado">Usado</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                {filteredVehicles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredVehicles.map(vehicle => (
                            <VehicleCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500 text-lg">No se encontraron vehículos con esos filtros.</p>
                        <button
                            onClick={() => { setFilterType('all'); setFilterCondition('all'); }}
                            className="mt-4 text-action-red font-medium hover:underline cursor-pointer"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
