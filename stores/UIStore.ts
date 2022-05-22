import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";
import { UIStoreType } from "../constants/types";


const useUIStore = create(
  persist<UIStoreType>((set: SetState<UIStoreType>) => ({
    // Navigation State
    isOpenNav: false,
    toggleNav() {
      return set((state) => ({ ...state, isOpenNav: !state.isOpenNav }));
    },

    // Course View State
    courseView: "vertical",
    setCourseView(courseView) {
      return () => set((state) => ({ ...state, courseView }));
    },

    // Course Type State
    courseTag: "N1",
    setCourseTag(courseTag) {
      return () => set((state) => ({ ...state, courseTag }));
    },
  }))
);

export default useUIStore;
