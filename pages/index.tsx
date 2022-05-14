import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SingleCollectionCard from "../components/SingleCollectionCard";
import TopCategoriesCard from "../components/TopCategoriesCard";
import TopCollections from "../components/TopCollections";
import Statistics from "../components/Statistics";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";

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
          <div className="flex gap-4 pt-4 grow">
            <div className="flex flex-col w-3/4 gap-10">
              <div className="flex w-full gap-4 h-72">
                <SingleCollectionCard />
                <TopCategoriesCard />
              </div>
              <TopCollections />
            </div>
            <div className="flex flex-col w-1/4 gap-4">
              <Statistics />
              <Notifications />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
