import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";
import { UIStoreType } from "../constants/types";

const useUIStore = create(
  persist<UIStoreType>(
    (set: SetState<UIStoreType>) => ({
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

      // DropdownMenu State
      dropdownMenuId: "",
      setDropDownMenuId(menuId) {
        return () => set((state) => ({ ...state, dropdownMenuId: menuId }));
      },

      // Course Per Page
      coursePerPage: 8,
      setCoursePerPage(num) {
        return () => set((state) => ({ ...state, coursePerPage: num }));
      },

      //Side bar Toggle
      sideBarToggle: true,
      toggleSideBar() {
        return set((state) => ({
          ...state,
          sideBarToggle: !state.sideBarToggle,
        }));
      },
    }),
    { name: "UIStore", getStorage: () => sessionStorage }
  )
);

export default useUIStore;
