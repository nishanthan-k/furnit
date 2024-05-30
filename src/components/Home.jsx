import { LazyLoadImage } from "react-lazy-load-image-component";
import table from "../assets/images/home/table.png";

const Home = () => {
  return (
    <div className="h-full bg-yellowLight flex flex-col px-4">
      <div className="h-2/4 flex flex-col justify-evenly">
        <div>
          <p className="text-xl">Interior Needs</p>
          <h2 className="mt-3 text-3xl font-semibold">
            Various new collections of furniture to decorate the corner of your
            house.
          </h2>
        </div>
        <button className="bg-black w-2/3 px-8 py-4">
          <span className="text-yellowLight font-bold text-lg">Shop Now</span>
        </button>
      </div>
      <div className="bg-red-500">
        <LazyLoadImage src={table} className="" />
      </div>
    </div>
  );
};

export default Home;
