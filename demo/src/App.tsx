import Carousel from "./components/Carousel";

export const App = () => {
  const slides = [
    <div
      key="1"
      className="w-full h-full bg-blue-500 flex items-center justify-center"
    >
      <h2 className="text-white text-4xl">Slide 1</h2>
    </div>,
    <div
      key="2"
      className="w-full h-full bg-red-500 flex items-center justify-center"
    >
      <h2 className="text-white text-4xl">Slide 2</h2>
    </div>,
    <div
      key="3"
      className="w-full h-full bg-green-500 flex items-center justify-center"
    >
      <h2 className="text-white text-4xl">Slide 3</h2>
    </div>,
  ];

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[500px]">
        <Carousel
          items={slides}
          autoPlay={true}
          interval={3000}
          showArrows={true}
          showDots={true}
        />
      </div>
    </div>
  );
};
