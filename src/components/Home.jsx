import { LazyLoadImage } from "react-lazy-load-image-component";
import table from "../assets/images/home/table.png";

const Home = () => {
  return (
    <div className="h-full bg-yellowLight flex flex-col md:flex-row md:items-center px-4 md:px-10">
      <div className="h-2/4 flex flex-col justify-evenly md:mb-56">
        <div>
          <p className="text-xl">Interior Needs</p>
          <h2 className="mt-3 md:leading-relaxed text-3xl md:text-4xl font-semibold">
            Various new collections of furniture to decorate the corner of your
            house.
          </h2>
        </div>
        <button className="bg-black w-2/3 sm:w-max px-8 py-4">
          <span className="text-yellowLight font-bold text-lg text-nowrap">Shop Now</span>
        </button>
      </div>
      <div className="">
        <LazyLoadImage src={table} className="sm:m-auto md:m-auto" />
      </div>
    </div>
  );
};

export default Home;
