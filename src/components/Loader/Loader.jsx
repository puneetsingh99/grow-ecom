import "./loader.css";
import loadingAnimationSvg from "./loaderSvg.svg";

export const Loader = () => {
  return (
    <div className="loader-animation">
      <img src={loadingAnimationSvg} alt="loader" />
    </div>
  );
};
