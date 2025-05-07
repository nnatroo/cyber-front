import { create } from 'zustand';

const useShippingDataStore = create((set) => ({
    selectedMethod: '',
    selectedDate: '',
    setSelectedMethod: (method) => set({ selectedMethod: method }),
    setSelectedDate: (date) => set({ selectedDate: date.getDate() }),
}));

export default useShippingDataStore;