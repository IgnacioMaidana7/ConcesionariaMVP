export interface Vehicle {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    km: number;
    type: 'Auto' | 'Moto';
    condition: '0km' | 'Usado';
    image: string;
}

export const vehicles: Vehicle[] = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'Hilux GR-Sport',
        year: 2024,
        price: 65000,
        km: 0,
        type: 'Auto',
        condition: '0km',
        image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        brand: 'Volkswagen',
        model: 'Gol Trend Highline',
        year: 2019,
        price: 12500,
        km: 45000,
        type: 'Auto',
        condition: 'Usado',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 3,
        brand: 'Ford',
        model: 'Ranger Raptor',
        year: 2022,
        price: 58000,
        km: 15000,
        type: 'Auto',
        condition: 'Usado',
        image: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        brand: 'Ducati',
        model: 'Panigale V4',
        year: 2023,
        price: 35000,
        km: 1200,
        type: 'Moto',
        condition: 'Usado',
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 5,
        brand: 'BMW',
        model: 'Serie 3 330i',
        year: 2024,
        price: 72000,
        km: 0,
        type: 'Auto',
        condition: '0km',
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 6,
        brand: 'Kawasaki',
        model: 'Ninja 400',
        year: 2021,
        price: 8500,
        km: 5000,
        type: 'Moto',
        condition: 'Usado',
        image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=1000'
    }
];
