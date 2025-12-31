import { useVehicleStore } from '../../store/useVehicleStore';
import { Edit, Trash2, Share2, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { shareOnFacebook } from '../../utils/shareUtils';

export const Inventory = () => {
    const { vehicles, removeVehicle } = useVehicleStore();
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este vehículo?')) {
            removeVehicle(id);
        }
    };

    const handleEdit = (id: number) => {
        navigate(`/admin/add?edit=${id}`);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Inventario</h1>
                <Link
                    to="/admin/add"
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-800 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">Nuevo Vehículo</span>
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Vehículo</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Precio</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Año</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">Estado</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vehicles.map((vehicle) => (
                                <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={vehicle.image}
                                                alt={vehicle.model}
                                                className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-900">{vehicle.brand} {vehicle.model}</p>
                                                <p className="text-xs text-gray-500">{vehicle.type}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-gray-900">
                                            ${vehicle.price.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{vehicle.year}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${vehicle.condition === '0km'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-green-100 text-green-700'
                                            }`}>
                                            {vehicle.condition}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                onClick={() => shareOnFacebook(vehicle.id)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Compartir en Facebook"
                                            >
                                                <Share2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(vehicle.id)}
                                                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                                title="Editar"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(vehicle.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Eliminar"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {vehicles.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No hay vehículos cargados.
                    </div>
                )}
            </div>
        </div>
    );
};
