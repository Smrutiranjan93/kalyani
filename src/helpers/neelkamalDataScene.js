import viewOne from "../images/neelkamal/view1.jpg";
import viewTwo from "../images/neelkamal/view2.jpg";
import viewThree from "../images/neelkamal/view3.jpg";
import viewFour from "../images/neelkamal/view4.jpg";
import viewFive from "../images/neelkamal/view5.jpg";
import viewSix from "../images/neelkamal/view6.jpg";
import viewSeven from "../images/neelkamal/view7.jpg";
import viewEight from "../images/neelkamal/view8.jpg";
import viewNine from "../images/neelkamal/view9.jpg";
import viewTen from "../images/neelkamal/view10.jpg";
import viewEleven from "../images/neelkamal/view11.jpg";
import viewTwelve from "../images/neelkamal/view12.jpg";
import viewThirteen from "../images/neelkamal/view11.jpg";
import viewFourteen from "../images/neelkamal/view12.jpg";

const Scene = {
  pointOneView: {
    title: "Orchid",
    image: viewOne,
    pitch: -11.803234287655917,
    yaw: 140.81343419130073,
    hotSpots: {
      pointTwo: {
        type: "custom",
        pitch: -19.96068479806594,
        yaw: 133.30742960747727,
        cssClass: "moveScene",
        scene: "pointTwoView",
        label: "Go to Inside"
      },
      pointFour: {
        type: "custom",
        pitch: -22.406288784789233,
        yaw: 76.26484610361301,
        cssClass: "moveScene",
        scene: "pointFourView",
        label: "Go to Inside"
      }
    },
  },
  pointTwoView: {
    title: "Living  / Dining",
    image: viewTwo,
    pitch: -6.451563092850391,
    yaw: 163.8487731480429,
    hotSpots: {
      pointThree: {
        type: "custom",
        pitch: -19.937109577489952,
        yaw: 77.44609623113833,
        cssClass: "moveScene",
        scene: "pointThreeView",
      },
      pointFour: {
        type: "custom",
        pitch: -37.37266819112175,
        yaw: 24.558891402057814,
        cssClass: "moveScene",
        scene: "pointFourView",
      },
      pointSix: {
        type: "custom",
        pitch: -4.548102555288975,
        yaw: 50.025212119770565,
        cssClass: "moveScene",
        scene: "pointSixView",
      },
      pointEleven: {
        type: "custom",
        pitch: -6.040885695056998,
        yaw: -2.025724603888846,
        cssClass: "moveScene",
        scene: "pointElevenView",
      },
    },
  },
  pointThreeView: {
    title: "Living  / Dining",
    image: viewThree,
    pitch: -4.717825434350785,
    yaw: 67.81772320854652,
    hotSpots: {
        pointFour: {
            type: "custom",
            pitch: -45.74847061764442,
            yaw: -37.798719743080575,
            cssClass: "moveScene",
            scene: "pointFourView",
            text: "Exit"
          },
          pointSix: {
            type: "custom",
            pitch: -7.701714098838762,
            yaw: 34.58942044679762,
            cssClass: "moveScene",
            scene: "pointSixView",
            text: "Exit"
          },
          pointFive: {
            type: "custom",
            pitch: -26.400267208095233,
            yaw: 118.4867058995856,
            cssClass: "moveScene",
            scene: "pointFiveView",
            text: "Exit"
          },
          pointNine: {
            type: "custom",
            pitch: -1.5011848770039014,
            yaw: 96.51556563459422,
            cssClass: "moveScene",
            scene: "pointNineView",
            text: "Exit"
          },
          pointTwo: {
            type: "custom",
            pitch: -26.700471393863204,
            yaw: -129.92872989338557,
            cssClass: "moveScene",
            scene: "pointTwoView",
            text: "Exit"
          },
          pointEleven: {
            type: "custom",
            pitch: -8.78477922668723,
            yaw: -51.55822303183489,
            cssClass: "moveScene",
            scene: "pointElevenView",
            text: "Exit"
          },
    },
  },
  pointFourView: {
    title: "Living  / Dining",
    image: viewFour,
    pitch: -13.508800816841287,
    yaw: 116.13287881034132,
    hotSpots: {
        pointFive: {
            type: "custom",
            pitch: -13.189651648295001,
            yaw: 138.0448083905533,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointSix: {
            type: "custom",
            pitch: -7.771478913714589,
            yaw: 75.27628962606978,
            cssClass: "moveScene",
            scene: "pointSixView",
          },
          pointNine: {
            type: "custom",
            pitch: -4.210477864035756,
            yaw: 110.0858208010192,
            cssClass: "moveScene",
            scene: "pointNineView",
          },
          pointTwo: {
            type: "custom",
            pitch: -21.978868694130398,
            yaw: -158.48968117561017,
            cssClass: "moveScene",
            scene: "pointTwoView",
          },
          pointOne: {
            type: "custom",
            pitch: -32.895982960524876,
            yaw: -104.31453717049277,
            cssClass: "moveScene",
            scene: "pointOneView",
          },
    },
  },
  pointFiveView: {
    title: "Living  / Dining",
    image: viewFive,
    pitch: -8.056140186366013,
    yaw: 52.98960961787118,
    hotSpots: {
        pointSix: {
            type: "custom",
            pitch: -8.391387490197678,
            yaw: 14.63346669083809,
            cssClass: "moveScene",
            scene: "pointSixView",
          },
          pointNine: {
            type: "custom",
            pitch: -3.208643263602442,
            yaw: 82.79089692380087,
            cssClass: "moveScene",
            scene: "pointNineView",
          },
          pointThree: {
            type: "custom",
            pitch: -31.016842711592503,
            yaw: -35.74031845568466,
            cssClass: "moveScene",
            scene: "pointThreeView",
          }
    },
  },
  pointSixView: {
    title: "Living  / Dining",
    image: viewSix,
    pitch: -17.77144600774397,
    yaw: -175.3064601120045,
    hotSpots: {
        pointTwo: {
            type: "custom",
            pitch: -34.26625447879167,
            yaw: 157.79832759741637,
            cssClass: "moveScene",
            scene: "pointTwoView",
          },
    },
  },
  pointSevenView: {
    title: "Living  / Dining",
    image: viewSeven,
    pitch: -26.087015898757443,
    yaw: 110.68618604859039,
    hotSpots: {
        pointSix: {
            type: "custom",
            pitch: -21.537232363060976,
            yaw: 45.44129283463002,
            cssClass: "moveScene",
            scene: "pointSixView",
          },
    },
  },
  pointEightView: {
    title: "Living  / Dining",
    image: viewEight,
    pitch: -11.783797178010756,
    yaw: 124.93367334269487,
    hotSpots: {
        pointNine: {
            type: "custom",
            pitch: -3.4140928376332704,
            yaw: -165.06494355728128,
            cssClass: "moveScene",
            scene: "pointNineView",
          },
    },
  },
  pointNineView: {
    title: "Living  / Dining",
    image: viewNine,
    pitch: 0.8754130724800545,
    yaw: 119.20599596805798,
    hotSpots: {
        pointTen: {
            type: "custom",
            pitch: -23.246084641593537,
            yaw: 55.12287197274011,
            cssClass: "moveScene",
            scene: "pointTenView",
          },
    },
  },
  pointTenView: {
    title: "Living  / Dining",
    image: viewTen,
    pitch: -24.22267553729003,
    yaw: 121.62092434983016,
    hotSpots: {
        pointEight: {
            type: "custom",
            pitch: -5.415057463904915,
            yaw: 114.68539056120045,
            cssClass: "moveScene",
            scene: "pointEightView",
          },
    },
  },
  pointElevenView: {
    title: "Living  / Dining",
    image: viewEleven,
    pitch: -16.79559680834313,
    yaw: 96.57696341537665,
    hotSpots: {
        pointTwelve: {
            type: "custom",
            pitch: -9.317557787732108,
            yaw: 41.71080462277542,
            cssClass: "moveScene",
            scene: "pointTwelveView",
          },
          pointTwo: {
            type: "custom",
            pitch: -31.768388324841958,
            yaw: -96.10819033057396,
            cssClass: "moveScene",
            scene: "pointTwoView",
          }
    },
  },
  pointTwelveView: {
    title: "Living  / Dining",
    image: viewTwelve,
    pitch: -16.79559680834313,
    yaw: 96.57696341537665,
    hotSpots: {
        pointEleven: {
            type: "custom",
            pitch: -24.724412459896755,
            yaw: 12.083464734311441,
            cssClass: "moveScene",
            scene: "pointElevenView",
          },
    },
  },
  pointThirteenView: {
    title: "Living  / Dining",
    image: viewThirteen,
    pitch: -16.79559680834313,
    yaw: 96.57696341537665,
    hotSpots: {
        pointFourteen: {
            type: "custom",
            pitch: -9.317557787732108,
            yaw: 41.71080462277542,
            cssClass: "moveScene",
            scene: "pointFourteenView",
          },
          pointSeven: {
            type: "custom",
            pitch: -31.768388324841958,
            yaw: -96.10819033057396,
            cssClass: "moveScene",
            scene: "pointSevenView",
          }
    },
  },
  pointFourteenView: {
    title: "Living  / Dining",
    image: viewFourteen,
    pitch: -16.79559680834313,
    yaw: 96.57696341537665,
    hotSpots: {
        pointThirteen: {
            type: "custom",
            pitch: -24.724412459896755,
            yaw: 12.083464734311441,
            cssClass: "moveScene",
            scene: "pointThirteenView",
          },
    },
  },
};

export default Scene;
