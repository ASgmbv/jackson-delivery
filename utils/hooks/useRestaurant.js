import create from "zustand";

const useRestaurant = create((set) => ({
  restaurant: {},
  setRestaurant: (restaurant) => {
    return set({
      restaurant: { ...restaurant },
    });
  },
}));

export default useRestaurant;
