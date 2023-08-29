import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import classNames from "../../helpers/classNames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Hero from './hero'
import WomenCollectionBanner from "./womenCollectionBanner";
import MenCollectionBanner from "./menCollectionBanner";
import BrowseProducts from "./browseProducts";

function Home() {
  return (
    <div className="px-1">
        <Hero/>
        <div className="w-screen px-4 py-24">
           <WomenCollectionBanner />
           <MenCollectionBanner />
           <BrowseProducts />
        </div>
    </div>
  );
}

export default Home;
