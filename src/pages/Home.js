import { Component } from "react";
import Resume from "./../components/resume";
import Dripos from "./../components/dripos";
import BottomBar from "./../components/bottombar";
import { TEXT_DARK_SKY, TEXT_DUSK } from "../theme/theme";
import WalkingAnimation from "../components/walking-animation";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <div
          className={`flex justify-between flex-row items-center text-lg font-semibold ${TEXT_DUSK}`}
        >
          <div>Stone Wang</div>
        </div>

        <div className="mt-12 flex flex-row text-xl font-bold items-center">
          <div className="text-dusk">{`Former Software Engineer at`}</div>

          <Dripos />
        </div>

        <Resume />

        <BottomBar />

        <div className="mt-24 text-xl font-semibold text-sky-700 underline">
          <Link to={`/blog/4`}>
            Read My Latest Article on Visual Realism in VR (October, 2024)
          </Link>
        </div>

        <div className="absolute ml-4 bottom-0">
          <WalkingAnimation />
        </div>
      </div>
    );
  }
}

export default Home;
