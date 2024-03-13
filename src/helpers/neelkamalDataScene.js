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
    title: "Living Room [Neelkamal]",
    image: viewOne,
    pitch: -13.487634747565298,
    yaw: 106.77530418165708,
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
    title: "Living Room [Neelkamal]",
    image: viewTwo,
    pitch: -12.776940969048091,
    yaw: -74.2983307653139,
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
    title: "Living Room [Neelkamal]",
    image: viewThree,
    pitch: -12.463113738565578,
    yaw: -87.24421462894156,
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
    title: "Living Room [Neelkamal]",
    image: viewFour,
    pitch: -5.200388496782759,
    yaw: 90.95951097080615,
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
    title: "Dining Room [Neelkamal]",
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
    title: "Bedroom [Neelkamal]",
    image: viewSix,
    pitch: -9.462434361779216,
    yaw: 63.1132455437159,
    hotSpots: {
        pointThirteen: {
            type: "custom",
            pitch: -4.914137049370575,
            yaw: -18.209845818949386,
            cssClass: "moveScene",
            scene: "pointThirteenView",
          },
          pointSeven: {
            type: "custom",
            pitch: -27.55059193208727,
            yaw: 99.6504253938746,
            cssClass: "moveScene",
            scene: "pointSevenView",
          },
    },
  },
  pointSevenView: {
    title: "Bedroom [Neelkamal]",
    image: viewSeven,
    pitch: -12.421487198111137,
    yaw: 56.750343699814216,
    hotSpots: {
        pointThirteen: {
            type: "custom",
            pitch: -8.331240552445282,
            yaw: 17.59108517443118,
            cssClass: "moveScene",
            scene: "pointThirteenView",
          },
          pointFour: {
            type: "custom",
            pitch: -7.181992075034943,
            yaw: -12.928954764900878,
            cssClass: "moveScene",
            scene: "pointFourView",
          },
    },
  },
  pointEightView: {
    title: "Bedroom [Neelkamal]",
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
    title: "Balcony [Neelkamal]",
    image: viewNine,
    pitch: -22.627081380908514,
    yaw: 88.75279580774146,
    hotSpots: {
        pointFive: {
            type: "custom",
            pitch: -6.367947261792103,
            yaw: 121.51924637287422,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointTen: {
            type: "custom",
            pitch: -25.07830692926727,
            yaw: 82.11028539314546,
            cssClass: "moveScene",
            scene: "pointTenView",
          },
    },
  },
  pointTenView: {
    title: "Balcony [Neelkamal]",
    image: viewTen,
    pitch: -12.095608153649199,
    yaw: 151.34039512791455,
    hotSpots: {
        pointNine: {
            type: "custom",
            pitch: -23.554373216341197,
            yaw: 178.6582879909215,
            cssClass: "moveScene",
            scene: "pointNineView",
          },
          pointFive: {
            type: "custom",
            pitch: 0.40121897799051714,
            yaw: 124.92490763849459,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
    },
  },
  pointElevenView: {
    title: "Bathroom / Toilet [Neelkamal]",
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
    title: "Bathroom / Toilet [Neelkamal]",
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
    title: "Bathroom / Toilet [Neelkamal]",
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
    title: "Bathroom / Toilet [Neelkamal]",
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
