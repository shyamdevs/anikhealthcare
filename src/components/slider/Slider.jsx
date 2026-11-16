import { useCallback, useEffect, useState } from "react";

import hero from "../../assets/ChatGPT Image Sep 18, 2026, 10_53_39 AM.png";
import hero1 from "../../assets/ChatGPT Image Sep 18, 2026, 10_55_46 AM.png";
import hero2 from "../../assets/ChatGPT Image Sep 18, 2026, 10_59_44 AM.png";
import hero3 from "../../assets/ChatGPT Image Sep 18, 2026, 11_15_06 AM.png";

const slides = [hero, hero1, hero2, hero3];

const AUTOPLAY_DELAY = 3000;

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className="mt-4 mb-10">
      <section
        className="relative w-full overflow-hidden bg-white"
        aria-label="Image carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider */}
        <div className="relative w-full h-full aspect-[16/7] overflow-hidden">
          {/* Slides Track */}
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative h-full w-full min-w-full shrink-0"
              >
                <img
                  src={slide}
                  alt={`Carousel slide ${index + 1}`}
                  className="h-full w-full select-none object-cover object-center"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="
              absolute left-3 top-1/2 z-20
              flex h-9 w-9 -translate-y-1/2
              items-center justify-center
              rounded-full bg-black/40
              text-lg text-white
              shadow-lg backdrop-blur-sm
              transition hover:bg-black/65
              focus:outline-none focus:ring-2 focus:ring-white
              sm:left-5 sm:h-11 sm:w-11
              md:left-6 md:h-12 md:w-12
            "
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute right-3 top-1/2 z-20
              flex h-9 w-9 -translate-y-1/2
              items-center justify-center
              rounded-full bg-black/40
              text-lg text-white
              shadow-lg backdrop-blur-sm
              transition hover:bg-black/65
              focus:outline-none focus:ring-2 focus:ring-white
              sm:right-5 sm:h-11 sm:w-11
              md:right-6 md:h-12 md:w-12
            "
          >
            ❯
          </button>

          {/* Dots */}
          <div
            className="
              absolute bottom-3 left-1/2 z-20
              flex -translate-x-1/2
              items-center gap-2
              sm:bottom-5
            "
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
                className={`
                  h-1.5 rounded-full
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-white

                  ${
                    currentSlide === index
                      ? "w-8 bg-white sm:w-10"
                      : "w-4 bg-white/50 hover:bg-white/80 sm:w-6"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;