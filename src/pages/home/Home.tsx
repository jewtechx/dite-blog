import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import classNames from "../../helpers/classNames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Hero from './hero'
import CollectionBanner from "./CollectionBanner";
import BrowseProducts from "./browseProducts";
import Banner2 from "./banner2";
import Banner3 from "./banner3";
import AahighqualityP from "./a&highqualityp";
import QuickChekout from "./quickChekout";
import VisitOnIG from "./visitOnIG";

function Home() {
  return (
    <div className="px-1">
        <Hero/> 
        <div className="w-screen px-4 py-24">
           <CollectionBanner />
           <BrowseProducts />
           <Banner2 />
           <Banner3 />
           <AahighqualityP />
           <QuickChekout />
           <VisitOnIG />
        </div>
    </div>
  );
}

export default Home;
