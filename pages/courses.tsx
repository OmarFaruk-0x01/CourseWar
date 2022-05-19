import type { NextPage } from "next";
import CoursesView from "../components/CoursesView";
import Search from "../components/Search";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableView from "../components/TableView";
import customData from "../constants/customData";
import Layout from "../layouts/Layout";

const Inventory: NextPage = () => {
  return (
    <Layout title={"Inventory"}>
      <div className="bg-white rounded-md">
        <div className="p-3 py-5 tablet:flex items-center justify-start">
          <Search extentClassName="tablet:min-w-[400px]" />
        </div>
        <CoursesView
          
        />
      </div>
    </Layout>
  );
};

export default Inventory;
