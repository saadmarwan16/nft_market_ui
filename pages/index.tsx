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
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | NFT Market</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <div
          className={`flex flex-col relative lg:left-16 min-h-screen gap-4 px-4 md:px-6 lg:px-8 py-10 ${styles.mainContentWidth}`}
        >
          <Navbar />
          <Header />
          <div className="flex gap-4 pt-4 grow">
            <div className="flex flex-col w-full gap-10 lg:w-3/4">
              <div className="flex flex-col w-full gap-4 md:flex-row lg:flex-col xl:flex-row">
                <SingleCollectionCard />
                <TopCategoriesCard />
              </div>
              <TopCollections />
            </div>
            <div className="flex flex-col w-0 gap-4 lg:w-1/4">
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
