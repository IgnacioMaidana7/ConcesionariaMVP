import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Car } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contacto" className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-trust-blue">
                            <Car className="w-8 h-8 text-action-orange" />
                            <span className="text-2xl font-bold tracking-tight">AutoElite</span>
                        </div>
                        <p className="text-gray-500 leading-relaxed">
                            Líderes en venta de vehículos premium. Tu confianza es nuestro motor. Encontrá el auto de tus sueños hoy mismo.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-action-orange hover:shadow-lg transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-action-orange hover:shadow-lg transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-action-orange hover:shadow-lg transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Navegación</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-trust-blue transition-colors">Inicio</a></li>
                            <li><a href="#catalogo" className="text-gray-600 hover:text-trust-blue transition-colors">Catálogo</a></li>
                            <li><a href="#tasacion" className="text-gray-600 hover:text-trust-blue transition-colors">Vender mi auto</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-trust-blue transition-colors">Financiación</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <MapPin className="text-action-orange shrink-0 mt-1" size={20} />
                                <span>Av. del Libertador 1234,<br />Vicente López, Buenos Aires</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Phone className="text-action-orange shrink-0" size={20} />
                                <span>+54 11 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Mail className="text-action-orange shrink-0" size={20} />
                                <span>contacto@autoelite.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Horarios</h4>
                        <div className="space-y-2 text-gray-600">
                            <p>Lunes a Viernes:</p>
                            <p className="font-medium text-trust-blue">09:00 - 19:00 hs</p>
                            <div className="h-2" />
                            <p>Sábados:</p>
                            <p className="font-medium text-trust-blue">10:00 - 14:00 hs</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} AutoElite. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
