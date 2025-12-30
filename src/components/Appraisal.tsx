import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Appraisal = () => {
    return (
        <section id="tasacion" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-trust-blue/20 blur-3xl opacity-30 transform translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <CheckCircle2 size={16} className="text-action-red" />
                            <span>Cotización super rápida</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Cotizá tu usado y llevalo como <span className="text-action-red">parte de pago</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 max-w-xl">
                            ¿Querés cambiar tu vehículo? Te ofrecemos la mejor cotización del mercado. Completá el formulario y un asesor te contactará en minutos.
                        </p>

                        <ul className="space-y-4 text-gray-300 mb-8">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-trust-blue flex items-center justify-center text-white text-xs">1</div>
                                Tasación transparente y sin costo.
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-trust-blue flex items-center justify-center text-white text-xs">2</div>
                                Pagamos en el acto.
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-trust-blue flex items-center justify-center text-white text-xs">3</div>
                                Documentación 100% a nuestro cargo.
                            </li>
                        </ul>
                    </div>

                    {/* Form */}
                    <div className="flex-1 w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl text-gray-900">
                        <h3 className="text-2xl font-bold mb-6">Solicitar Cotización</h3>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Marca</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-trust-blue" placeholder="Ej: Toyota" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Modelo</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-trust-blue" placeholder="Ej: Hilux" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700">Año</label>
                                <input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-trust-blue" placeholder="Ej: 2020" />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-700">Teléfono</label>
                                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-trust-blue" placeholder="Ej: 11 1234-5678" />
                            </div>

                            <button className="w-full bg-action-red hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] mt-2 cursor-pointer">
                                Cotizar Ahora
                                <ArrowRight size={20} />
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                Al enviar aceptás ser contactado por nuestros asesores.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
