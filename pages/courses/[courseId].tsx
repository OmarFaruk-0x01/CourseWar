import Image from "next/image";
import { FC } from "react";
import Layout from "../../layouts/Layout";
import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "../../components/Button";
import { GetServerSidePropsContext } from "next";
import { CourseType } from "../../constants/types";

const CoursePage: FC = () => {
  return (
    <Layout title="">
      <motion.div
        layoutId={"courseThumb-" + "s"}
        className={`relative h-[250px] mobile:h-[300px] sm:!h-[250px] mt-3 ml-3 mr-3 mb-0 bg-primary-600 rounded-lg overflow-hidden transition-all`}
      >
        <Button
          title=""
          buttonType="tertiary"
          buttonContent="icon"
          buttonIcon={AiOutlineHeart}
          buttonSizes="medium"
          className="z-10 absolute w-10 h-10 right-2 top-2 bg-white rounded-lg text-primary-400 shadow-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors group-hover:text-white active:!bg-primary-600 "
        />

        {/* <Image src={thumbnail.url} layout="fill" /> */}
      </motion.div>
    </Layout>
  );
};

export default CoursePage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const data = await fetch(process.env.API_URL || "");
  const result: { courses: CourseType[] } = await data.json();
  return {
    props: {},
  };
}
