import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contacto" className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-trust-blue">
                            <img src="/src/assets/imgDOFFO.png" alt="DOFFO Automotores" className="h-10 w-auto object-contain brightness-0 invert filter" style={{ filter: 'invert(13%) sepia(31%) saturate(2852%) hue-rotate(206deg) brightness(91%) contrast(106%)' }} />
                            {/* Using CSS filter to match trust-blue or just using text if simpler, but user asked for logo. 
                                Since it's an image, I'll use the image. If it needs to be adapted for dark/light backgrounds, I'll handle it. 
                                The footer has a light background (slate-50), so the original logo (likely dark text) should work. 
                                Let's just use the image directly.
                            */}
                        </div>
                        <p className="text-gray-500 leading-relaxed">
                            Líderes en venta de vehículos premium. Tu confianza es nuestro motor. Encontrá el auto de tus sueños hoy mismo.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-action-red hover:shadow-lg transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-action-red hover:shadow-lg transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-action-red hover:shadow-lg transition-all">
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
                                <MapPin className="text-action-red shrink-0 mt-1" size={20} />
                                <span>Av. del Libertador 1234,<br />Vicente López, Buenos Aires</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Phone className="text-action-red shrink-0" size={20} />
                                <span>+54 11 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Mail className="text-action-red shrink-0" size={20} />
                                <span>contacto@doffoautomotores.com.ar</span>
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
                    <p>&copy; {new Date().getFullYear()} DOFFO Automotores. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
