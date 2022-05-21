import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";

type courseViewType = "landscape" | "vertical";

export type UIStoreType = {
  isOpenNav: boolean;
  toggleNav: () => void;
  courseView: courseViewType;
  setCourseView: (courseView: courseViewType) => () => void;
};

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
  }))
);

export default useUIStore;
