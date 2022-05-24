import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";
import { MainStoreType, UIStoreType } from "../constants/types";

const useMainStore = create<MainStoreType>()(
  (set: SetState<MainStoreType>) => ({
    courses: [],
    setCourses(courses) {
      return () => set((state) => ({ ...state, courses }));
    },
  })
);

export default useMainStore;
