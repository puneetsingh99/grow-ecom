import "./home-styles.css";
import { HomeSlider, Navbar } from "../";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <main className={`home-page`}>
        <HomeSlider />
      </main>
    </div>
  );
};
