import { Car, Eye, MessageCircle, DollarSign } from 'lucide-react';

const KPICard = ({ title, value, icon: Icon, color }: { title: string, value: string, icon: any, color: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
            <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
    </div>
);

export const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard General</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Vehículos Activos"
                    value="12"
                    icon={Car}
                    color="bg-blue-600"
                />
                <KPICard
                    title="Vistas este mes"
                    value="2,543"
                    icon={Eye}
                    color="bg-emerald-500"
                />
                <KPICard
                    title="Consultas WhatsApp"
                    value="48"
                    icon={MessageCircle}
                    color="bg-green-500"
                />
                <KPICard
                    title="Vehículos Vendidos"
                    value="3"
                    icon={DollarSign}
                    color="bg-indigo-500"
                />
            </div>
        </div>
    );
};
