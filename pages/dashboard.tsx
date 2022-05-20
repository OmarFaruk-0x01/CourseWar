import type { NextPage } from "next";
import Search from "../components/Search";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableView from "../components/TableView";
import UserLeftSideBarContent from "../components/UserLeftSideBarContent";
import customData from "../constants/customData";
import Layout from "../layouts/Layout";

const Dashboard: NextPage = () => {
  return (
    <Layout title={"Dashboard"} renderLeftSideBar={<UserLeftSideBarContent />}>
      <div className="bg-white rounded-md">
        <div className="p-3 py-5 tablet:flex items-center justify-start">
          <Search extentClassName="tablet:min-w-[400px]" />
        </div>
        <TableView
          data={customData}
          renderHeader={() => <TableHeader />}
          renderRow={(item, index) => (
            <TableRow key={item.Title} rowContent={item} />
          )}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
