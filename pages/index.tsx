import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// import { BsSearch } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | NFT Market</title>
      </Head>

      <div className="flex">
        <Sidebar />
        <div className="flex flex-col min-h-screen gap-4 px-8 py-10 grow">
          <Header />
          <div className="flex pt-4 grow">
            <div className="flex w-3/4">
              <div className="flex w-full h-96">
                <div className="flex w-2/3 gap-12 p-6 bg-neutral rounded-2xl">
                  <div className="avatar">
                    <div className="w-1/2">
                      <Image
                        src="/profile.jpg"
                        alt="Explosion of Colors"
                        layout="fill"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="">
                    <h3>Explosion of Colors</h3>
                    <div className="flex gap-1">
                      <div className="avatar">
                        <div className="w-12">
                          <Image
                            src="/profile.jpg"
                            alt="Explosion of Colors"
                            layout="fill"
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <p>Explosion of Colors by AIIV</p>
                        <div>
                          <small>@AIIV - AIMC Collections</small>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Current Bid</p>
                      <div><p>3.69 ETH</p></div>
                      <div><p>$ 970.76</p></div>
                    </div>
                    <div>
                      <span className={`${styles.headerIcon} normal-case`}>View Artwork</span>
                      <span className={`${styles.headerIcon} btn-primary normal-case`}>Place Bid</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/3"></div>
              </div>
            </div>
            <div className="flex w-1/4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
