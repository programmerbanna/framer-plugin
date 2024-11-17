export interface SlideItem {
  image: {
    src: string;
    srcSet?: string;
    alt?: string;
  };
  title?: string;
  description?: string;
}

export interface CarouselProps {
  slides: SlideItem[];
  width: number;
  height: number;
  borderRadius: string;
  showArrows: boolean;
  showDots: boolean;
  autoPlay: boolean;
  interval: number;
  transition: {
    type: "spring" | "tween";
    duration?: number;
  };
}

export interface NavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  style?: React.CSSProperties;
}
