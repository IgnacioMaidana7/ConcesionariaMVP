import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useVehicleStore } from '../../store/useVehicleStore';
import type { Vehicle } from '../../data/vehicles';
import { Upload, ArrowLeft, Save } from 'lucide-react';

export const VehicleForm = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const editId = searchParams.get('edit');
    const { vehicles, addVehicle, updateVehicle } = useVehicleStore();

    const initialFormState: Partial<Vehicle> = {
        brand: '',
        model: '',
        year: new Date().getFullYear(),
        price: 0,
        km: 0,
        type: 'Auto',
        condition: 'Usado',
        image: '',
        fuel: 'Nafta',
        transmission: 'Manual'
    };

    const [formData, setFormData] = useState<Partial<Vehicle>>(initialFormState);
    const [previewImage, setPreviewImage] = useState<string>('');

    useEffect(() => {
        if (editId) {
            const vehicleToEdit = vehicles.find(v => v.id === Number(editId));
            if (vehicleToEdit) {
                setFormData(vehicleToEdit);
                setPreviewImage(vehicleToEdit.image);
            }
        }
    }, [editId, vehicles]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'year' || name === 'price' || name === 'km' ? Number(value) : value
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPreviewImage(result);
                setFormData(prev => ({ ...prev, image: result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const vehicleData = {
            ...formData,
            id: editId ? Number(editId) : Date.now(), // Simple ID generation
        } as Vehicle;

        if (editId) {
            updateVehicle(vehicleData);
        } else {
            addVehicle(vehicleData);
        }

        navigate('/admin/inventory');
    };

    return (
        <div className="max-w-2xl mx-auto pb-10">
            <div className="flex items-center space-x-4 mb-6">
                <button
                    onClick={() => navigate('/admin/inventory')}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                    {editId ? 'Editar Vehículo' : 'Cargar Vehículo'}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-sm">

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fotos del Vehículo</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {previewImage ? (
                            <div className="relative w-full h-48 md:h-64">
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-md">
                                    <p className="text-white font-medium">Cambiar foto</p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
                                    <Upload className="w-6 h-6 text-blue-600" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">Tocá para subir una foto</p>
                                <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG (Max. 5MB)</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                        <input
                            type="text"
                            name="brand"
                            required
                            value={formData.brand}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Ej: Toyota"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                        <input
                            type="text"
                            name="model"
                            required
                            value={formData.model}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Ej: Hilux"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Año</label>
                        <input
                            type="number"
                            name="year"
                            required
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Precio (USD)</label>
                        <input
                            type="number"
                            name="price"
                            required
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kilometraje</label>
                        <input
                            type="number"
                            name="km"
                            required
                            value={formData.km}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="Auto">Auto</option>
                            <option value="Moto">Moto</option>
                            <option value="Pick-up">Pick-up</option>
                            <option value="Utilitario">Utilitario</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Combustible</label>
                        <select
                            name="fuel"
                            value={formData.fuel}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="Nafta">Nafta</option>
                            <option value="Diesel">Diesel</option>
                            <option value="GNC">GNC</option>
                            <option value="Híbrido">Híbrido</option>
                            <option value="Eléctrico">Eléctrico</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transmisión</label>
                        <select
                            name="transmission"
                            value={formData.transmission}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="Manual">Manual</option>
                            <option value="Automática">Automática</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Estado</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="condition"
                                value="0km"
                                checked={formData.condition === '0km'}
                                onChange={handleChange}
                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                            />
                            <span>Nuevo (0km)</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="condition"
                                value="Usado"
                                checked={formData.condition === 'Usado'}
                                onChange={handleChange}
                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                            />
                            <span>Usado</span>
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
                >
                    <Save className="w-6 h-6" />
                    <span>{editId ? 'Guardar Cambios' : 'Publicar Vehículo'}</span>
                </button>

            </form>
        </div>
    );
};
