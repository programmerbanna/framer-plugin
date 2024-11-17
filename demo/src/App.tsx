import { framer } from "framer-plugin";
import Carousel from "./components/Carousel";

framer.showUI({
  position: "center",
  width: 1000,
  height: 400,
});

function App() {
  const slides = [
    {
      image: {
        src: "https://picsum.photos/800/400?random=1",
        alt: "First slide",
      },
      title: "First Slide",
      description: "This is the first slide description",
    },
    {
      image: {
        src: "https://picsum.photos/800/400?random=2",
        alt: "Second slide",
      },
      title: "Second Slide",
      description: "This is the second slide description",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Carousel Demo</h1>
      <Carousel
        slides={slides}
        width={800}
        height={400}
        autoPlay={true}
        interval={3000}
        showArrows={true}
        showDots={true}
      />
    </div>
  );
}

export default App;
