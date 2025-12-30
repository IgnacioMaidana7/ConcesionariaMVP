import { create } from 'zustand';
import type { Vehicle } from '../data/vehicles';

interface ComparisonStore {
    selectedVehicles: Vehicle[];
    isModalOpen: boolean;
    toggleVehicle: (vehicle: Vehicle) => void;
    clearSelection: () => void;
    openModal: () => void;
    closeModal: () => void;
}

export const useComparisonStore = create<ComparisonStore>((set) => ({
    selectedVehicles: [],
    isModalOpen: false,
    toggleVehicle: (vehicle) => set((state) => {
        const isSelected = state.selectedVehicles.some(v => v.id === vehicle.id);

        if (isSelected) {
            return { selectedVehicles: state.selectedVehicles.filter(v => v.id !== vehicle.id) };
        }

        if (state.selectedVehicles.length >= 3) {
            alert("Podés comparar hasta 3 vehículos a la vez."); // Simple alert for MVP
            return state;
        }

        return { selectedVehicles: [...state.selectedVehicles, vehicle] };
    }),
    clearSelection: () => set({ selectedVehicles: [] }),
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
}));
