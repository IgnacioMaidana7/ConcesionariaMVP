import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import {
    LayoutDashboard,
    Car,
    PlusCircle,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import clsx from 'clsx';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleSidebar = () => setIsOpen(!isOpen);

    const navItems = [
        { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
        { to: '/admin/inventory', icon: Car, label: 'Inventario' },
        { to: '/admin/add', icon: PlusCircle, label: 'Cargar Vehículo' },
    ];

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden bg-blue-900 text-white p-4 flex justify-between items-center">
                <span className="font-bold text-lg">DOFFO Admin</span>
                <button onClick={toggleSidebar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar Container */}
            <div className={clsx(
                "fixed inset-y-0 left-0 transform md:relative md:translate-x-0 transition-transform duration-200 ease-in-out bg-blue-900 text-white w-64 flex flex-col z-20",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 border-b border-blue-800 hidden md:block">
                    <h1 className="text-2xl font-bold">DOFFO <span className="text-blue-300">Admin</span></h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => clsx(
                                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                                isActive
                                    ? "bg-blue-800 text-white"
                                    : "text-blue-100 hover:bg-blue-800 hover:text-white"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-blue-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-3 w-full text-left text-blue-100 hover:bg-blue-800 hover:text-white rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};
