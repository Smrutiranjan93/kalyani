import viewOne from "../images/orchid/view1.jpg";
import viewTwo from "../images/orchid/view2.jpg";
import viewThree from "../images/orchid/view3.jpg";
import viewFour from "../images/orchid/view4.jpg";

const Scene = {
  pointOneView: {
    title: "Orchid",
    image: viewOne,
    pitch: -4.629615149895911,
    yaw: 98.8549593061394,
    hotSpots: {
      mainhallroomEntry: {
        type: "custom",
        pitch: -26.44913732673491,
        yaw: 142.03560973272982,
        cssClass: "moveScene",
        scene: "pointTwoView",
        label: "Go to Inside"
      },
    },
  },
  pointTwoView: {
    title: "Living  / Dining",
    image: viewTwo,
    pitch: -32.91379703426066,
    yaw: -80.72627202808201,
    hotSpots: {
      pointThree: {
        type: "custom",
        pitch: -8.02534053261661,
        yaw: -158.78247820764358,
        cssClass: "moveScene",
        scene: "pointThreeView",
      },
    },
  },
  pointThreeView: {
    title: "Living  / Dining",
    image: viewThree,
    pitch: -9.69364804297623,
    yaw: 97.35791367606708,
    hotSpots: {
        pointFour: {
            type: "custom",
            pitch: -4.831510173789116,
            yaw: 103.22781743566858,
            cssClass: "moveScene",
            scene: "pointFourView",
            text: "Exit"
          },
    },
  },
  pointFourView: {
    title: "Living  / Dining",
    image: viewFour,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointThree: {
            type: "custom",
            pitch: -21.537232363060976,
            yaw: 45.44129283463002,
            cssClass: "moveScene",
            scene: "pointThreeView",
          }
    },
  },
};

export default Scene;
