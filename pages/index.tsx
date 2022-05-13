import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SingleCollectionCard from "../components/SingleCollectionCard";
import TopCategoriesCard from "../components/TopCategoriesCard";
import Avatar from "../components/Avatar";
import TopCollections from "../components/TopCollections";
// import { BsSearch } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | NFT Market</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <div
          className={`flex flex-col relative left-16 min-h-screen gap-4 px-8 py-10 ${styles.mainContentWidth}`}
        >
          <Header />
          <div className="flex pt-4 grow">
            <div className="flex flex-col w-3/4 gap-10">
              <div className="flex w-full h-72 gap-4">
                <SingleCollectionCard />
                <TopCategoriesCard />
              </div>
              <TopCollections />
            </div>
            <div className="flex w-1/4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
