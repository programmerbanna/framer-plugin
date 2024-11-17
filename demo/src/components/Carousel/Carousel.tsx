import { useState, useEffect, useCallback, useRef } from "react";
import "./style.css";

interface CarouselProps {
  slides: Array<{
    image: { src: string; srcSet?: string; alt?: string };
    title?: string;
    description?: string;
  }>;
  width?: number;
  height?: number;
  borderRadius?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({
  slides = [],
  width = 400,
  height = 300,
  borderRadius = "12px",
  showArrows = true,
  showDots = true,
  autoPlay = true,
  interval = 3000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<number>();

  const startAutoPlay = useCallback(() => {
    if (autoPlay && slides.length > 1) {
      timerRef.current = window.setInterval(() => {
        handleNext();
      }, interval);
    }
  }, [autoPlay, interval, slides.length]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  return (
    <div
      className="carousel"
      style={{ width, height, borderRadius }}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={slide.image.src}
              srcSet={slide.image.srcSet}
              alt={slide.image.alt || ""}
              className="carousel-image"
            />
            {(slide.title || slide.description) && (
              <div
                className={`slide-content ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                {slide.title && <h3>{slide.title}</h3>}
                {slide.description && <p>{slide.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {showArrows && slides.length > 1 && (
        <>
          <button
            className="nav-button prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            className="nav-button next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}

      {showDots && slides.length > 1 && (
        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
