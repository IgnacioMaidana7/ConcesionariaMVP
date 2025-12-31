import { create } from 'zustand';
import type { Vehicle } from '../data/vehicles';
import { vehicles as initialVehicles } from '../data/vehicles';

interface VehicleState {
    vehicles: Vehicle[];
    addVehicle: (vehicle: Vehicle) => void;
    removeVehicle: (id: number) => void;
    updateVehicle: (updatedVehicle: Vehicle) => void;
}

export const useVehicleStore = create<VehicleState>((set) => ({
    vehicles: initialVehicles,
    addVehicle: (vehicle) =>
        set((state) => ({ vehicles: [...state.vehicles, vehicle] })),
    removeVehicle: (id) =>
        set((state) => ({
            vehicles: state.vehicles.filter((v) => v.id !== id),
        })),
    updateVehicle: (updatedVehicle) =>
        set((state) => ({
            vehicles: state.vehicles.map((v) =>
                v.id === updatedVehicle.id ? updatedVehicle : v
            ),
        })),
}));
