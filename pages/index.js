import Confirm from "../components/Confirm";
import LocationSelection from "../components/LocationSelection";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
};
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className="h-full w-screen flex-1 z-10">
        <Map />
      </div>
      <div
        className={`h-full w-[400px] ml-[1rem] py-[3rem] absolute top-20 right-50 flex flex-col justify-end z-20`}
      >
        <div
          className={`h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`}
        >
          <LocationSelection />
          <Confirm />
        </div>
      </div>
    </div>
  );
}
