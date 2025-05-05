import { create } from 'zustand';

const useShippingDataStore = create((set) => ({
    selectedMethod: '',
    selectedDate: null,
    setSelectedMethod: (method) => set({ selectedMethod: method }),
    setSelectedDate: (date) => set({ selectedDate: date.getDate() }),
}));

export default useShippingDataStore;