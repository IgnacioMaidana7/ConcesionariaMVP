import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useVehicleStore } from '../store/useVehicleStore';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowLeft, Calendar, Gauge, MessageCircle } from 'lucide-react';

export const VehicleDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { vehicles } = useVehicleStore();
    const vehicle = vehicles.find(v => v.id === Number(id)); // Assuming ID is number
    const [paymentMethod, setPaymentMethod] = useState<'efectivo' | 'financiacion' | 'usado'>('efectivo');

    if (!vehicle) {
        return <div className="min-h-screen flex items-center justify-center">Vehículo no encontrado</div>;
    }

    const getWhatsappMessage = () => {
        const base = `Hola DOFFO, estoy viendo el ${vehicle.brand} ${vehicle.model}`;
        if (paymentMethod === 'financiacion') return `${base} y me interesa la opción de Financiación.`;
        if (paymentMethod === 'usado') return `${base} y quiero entregar mi usado.`;
        return `${base} y quiero pagar de Contado Efectivo.`;
    };

    const whatsappLink = `https://wa.me/5493576414844?text=${encodeURIComponent(getWhatsappMessage())}`;

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="pt-24 pb-12 container mx-auto px-4">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-trust-blue mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Volver al catálogo
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Gallery Section */}
                    <div className="space-y-4">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-white">
                            <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
                        </div>
                        {/* Add more images grid here if available */}
                    </div>

                    {/* Details Section */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{vehicle.brand} {vehicle.model}</h1>
                        <p className="text-xl text-gray-500 mb-6">{vehicle.type} - {vehicle.year}</p>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl font-bold text-action-red">${vehicle.price.toLocaleString()}</span>
                            <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${vehicle.condition === '0km' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-trust-blue'}`}>
                                {vehicle.condition}
                            </span>
                        </div>

                        {/* Specs */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                                <Calendar className="text-trust-blue" />
                                <div>
                                    <p className="text-sm text-gray-500">Año</p>
                                    <p className="font-bold">{vehicle.year}</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                                <Gauge className="text-trust-blue" />
                                <div>
                                    <p className="text-sm text-gray-500">Kilometraje</p>
                                    <p className="font-bold">{vehicle.km.toLocaleString()} km</p>
                                </div>
                            </div>
                        </div>

                        {/* Quotation / Payment Selector */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Elegí tu forma de pago</h3>
                            <div className="space-y-3">
                                <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'efectivo' ? 'border-trust-blue bg-blue-50/50' : 'border-gray-100 hover:border-gray-200'}`}>
                                    <input type="radio" name="payment" className="mt-1" checked={paymentMethod === 'efectivo'} onChange={() => setPaymentMethod('efectivo')} />
                                    <div>
                                        <span className="font-bold block text-gray-900">Contado Efectivo</span>
                                        <span className="text-sm text-gray-500">Mejor precio garantizado.</span>
                                    </div>
                                </label>

                                <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'financiacion' ? 'border-trust-blue bg-blue-50/50' : 'border-gray-100 hover:border-gray-200'}`}>
                                    <input type="radio" name="payment" className="mt-1" checked={paymentMethod === 'financiacion'} onChange={() => setPaymentMethod('financiacion')} />
                                    <div>
                                        <span className="font-bold block text-gray-900">Financiación</span>
                                        <span className="text-sm text-gray-500">Anticipo + Cuotas Fijas. Consultá planes disponibles.</span>
                                    </div>
                                </label>

                                <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'usado' ? 'border-trust-blue bg-blue-50/50' : 'border-gray-100 hover:border-gray-200'}`}>
                                    <input type="radio" name="payment" className="mt-1" checked={paymentMethod === 'usado'} onChange={() => setPaymentMethod('usado')} />
                                    <div>
                                        <span className="font-bold block text-gray-900">Entrega tu Usado</span>
                                        <span className="text-sm text-gray-500">Tomamos tu auto como parte de pago (Plan Canje).</span>
                                    </div>
                                </label>
                            </div>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/30"
                            >
                                <MessageCircle size={24} />
                                Consultar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
