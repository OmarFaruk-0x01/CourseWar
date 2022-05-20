import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";

export type UIStoreType = {
  isOpenNav: boolean;
  toggolNav: () => void;
};

const useUIStore = create(
  persist<UIStoreType>((set: SetState<UIStoreType>) => ({
    isOpenNav: false,
    toggolNav() {
      return set((state) => ({ isOpenNav: !state.isOpenNav }));
    },
  }))
);

export default useUIStore;
