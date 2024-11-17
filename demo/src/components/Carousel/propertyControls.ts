import { addPropertyControls, ControlType } from "framer";
import Carousel from "./index";

addPropertyControls(Carousel, {
  slides: {
    type: ControlType.Array,
    title: "Slides",
    control: {
      type: ControlType.Object,
      controls: {
        image: {
          type: ControlType.Image,
          title: "Image",
        },
        title: {
          type: ControlType.String,
          title: "Title",
          defaultValue: "",
          placeholder: "Enter title",
        },
        description: {
          type: ControlType.String,
          title: "Description",
          defaultValue: "",
          displayTextArea: true,
          placeholder: "Enter description",
        },
      },
    },
    defaultValue: [
      {
        image: {
          src: "https://via.placeholder.com/400x300/333/fff?text=Slide+1",
        },
        title: "First Slide",
        description: "Description for first slide",
      },
      {
        image: {
          src: "https://via.placeholder.com/400x300/666/fff?text=Slide+2",
        },
        title: "Second Slide",
        description: "Description for second slide",
      },
    ],
  },
  width: {
    type: ControlType.Number,
    title: "Width",
    defaultValue: 400,
    min: 200,
    max: 1200,
    step: 10,
    unit: "px",
  },
  height: {
    type: ControlType.Number,
    title: "Height",
    defaultValue: 300,
    min: 150,
    max: 800,
    step: 10,
    unit: "px",
  },
  borderRadius: {
    type: ControlType.String,
    title: "Border Radius",
    defaultValue: "12px",
  },
  showArrows: {
    type: ControlType.Boolean,
    title: "Show Arrows",
    defaultValue: true,
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  showDots: {
    type: ControlType.Boolean,
    title: "Show Dots",
    defaultValue: true,
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  autoPlay: {
    type: ControlType.Boolean,
    title: "Auto Play",
    defaultValue: true,
    enabledTitle: "On",
    disabledTitle: "Off",
  },
  interval: {
    type: ControlType.Number,
    title: "Interval",
    defaultValue: 3000,
    min: 1000,
    max: 10000,
    step: 500,
    unit: "ms",
    hidden: (props) => !props.autoPlay,
  },
});
