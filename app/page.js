import Brands from "./components/home/Brands";
import OurFeature from "./components/home/OurFeature";
import Hero from "./components/home/Hero";
import PMS from "./components/home/PMS";
import Services from "./components/home/Services";
import Status from "./components/home/Status";

export default function Home() {
  return (
    <>
      <div className="ontainer mx-auto px-4">
        <div className="px-4">
          <Hero/>
          <OurFeature/>
          <Services/>
          <PMS/>
          <Brands/>
          <Status/>
        </div>
      </div>
    </>
  )
}
