import { FC, ReactNode, useState } from "react";
import { BsDash } from "react-icons/bs";
import Button from "../Button";
import { LayoutGroup, motion } from "framer-motion";

type TabTitles =
  | "Description"
  | "Reviews"
  | "Discussion"
  | "Resources"
  | "Instructor";

type TabChildrenProps = {
  tabs: TabTitles[];
  currentTab: TabTitles;
};

interface TabsViewProps {
  tabsTitles: TabTitles[];
  children: (props: TabChildrenProps) => JSX.Element;
}

const TabsView: FC<TabsViewProps> = ({ tabsTitles, children }) => {
  const [currentTab, setCurrent] = useState<TabTitles>(tabsTitles[0]);

  function switchTab(tabTitle: TabTitles) {
    return () => {
      setCurrent(tabTitle);
    };
  }

  return (
    <>
      <div
        className="tabView mb-4 border-b border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden appearance-none"
        style={{ scrollbarWidth: "none" }}
      >
        <ul className="flex -mb-px my-2 text-sm font-medium text-center">
          <LayoutGroup id="tabs">
            {tabsTitles.map((tabtitle) => {
              const isActive = currentTab === tabtitle;
              return (
                <li
                  className="relative mr-2 flex items-center justify-center"
                  role="presentation"
                >
                  <button
                    onClick={switchTab(tabtitle)}
                    className={`inline-block p-4 rounded-t-lg hover:text-primary-500 transition-colors ${
                      isActive ? "text-primary-500" : "text-slate-400"
                    }`}
                  >
                    {tabtitle}
                  </button>
                  {isActive && (
                    <motion.span
                      layoutId="course_details_tab"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-500"
                    />
                  )}
                </li>
              );
            })}
          </LayoutGroup>
        </ul>
      </div>
      <motion.div className="min-w-[300px]">
        {children({
          tabs: tabsTitles,
          currentTab,
        })}
      </motion.div>
    </>
  );
};

export default TabsView;
