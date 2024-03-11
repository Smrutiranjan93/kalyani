import viewOne from "../images/orchid/view1.jpg";
import viewTwo from "../images/orchid/view2.jpg";
import viewThree from "../images/orchid/view3.jpg";
import viewFour from "../images/orchid/view4.jpg";
import viewFive from "../images/orchid/view5.jpg";
import viewSix from "../images/orchid/view6.jpg";
import viewSeven from "../images/orchid/view7.jpg";
import viewEight from "../images/orchid/view8.jpg";
import viewNine from "../images/orchid/view9.jpg";
import viewTen from "../images/orchid/view10.jpg";
import viewEleven from "../images/orchid/view11.jpg";
import viewTwelve from "../images/orchid/view12.jpg";
import viewThirteen from "../images/orchid/view13.jpg";
import viewFourteen from "../images/orchid/view14.jpg";
import viewFifteen from "../images/orchid/view15.jpg";
import viewSixteen from "../images/orchid/view16.jpg";
import viewSeventeen from "../images/orchid/view17.jpg";
import viewEighteen from "../images/orchid/view18.jpg";
import viewNinteen from "../images/orchid/view19.jpg";

const Scene = {
  pointOneView: {
    title: "Orchid",
    image: viewOne,
    pitch: -4.629615149895911,
    yaw: 98.8549593061394,
    hotSpots: {
      pointTwo: {
        type: "custom",
        pitch: -26.44913732673491,
        yaw: 142.03560973272982,
        cssClass: "moveScene",
        scene: "pointTwoView",
        label: "Go to Inside"
      },
      pointSeven: {
        type: "custom",
        pitch: -3.657960744371566,
        yaw: 53.08595175417996,
        cssClass: "moveScene",
        scene: "pointSevenView",
        label: "Go to Inside"
      },
      pointFive: {
        type: "custom",
        pitch: -25.149459051328414,
        yaw: 87.49891349974818,
        cssClass: "moveScene",
        scene: "pointFiveView",
        label: "Go to Inside"
      },
      pointTwelve: {
        type: "custom",
        pitch: -9.076130218473716,
        yaw: 116.05179274760553,
        cssClass: "moveScene",
        scene: "pointTwelveView",
        label: "Go to Inside"
      },
      pointThree: {
        type: "custom",
        pitch: -6.58680185158474,
        yaw: 168.02021930990654,
        cssClass: "moveScene",
        scene: "pointThreeView",
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
      pointEight: {
        type: "custom",
        pitch: -26.448083395137544,
        yaw: 153.16857611931854,
        cssClass: "moveScene",
        scene: "pointEightView",
      },
      pointNine: {
        type: "custom",
        pitch: -4.210224074412851,
        yaw: 127.1762527303443,
        cssClass: "moveScene",
        scene: "pointNineView",
      },
      pointSeven: {
        type: "custom",
        pitch: -5.371820572227949,
        yaw: 6.589925848084577,
        cssClass: "moveScene",
        scene: "pointSevenView",
      },
      pointSeventeen: {
        type: "custom",
        pitch: -3.1176809742491054,
        yaw: 49.0409718454842,
        cssClass: "moveScene",
        scene: "pointSeventeenView",
      },
      pointFive: {
        type: "custom",
        pitch: -40.58173741506932,
        yaw: 55.893370294416364,
        cssClass: "moveScene",
        scene: "pointFiveView",
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
          pointEight: {
            type: "custom",
            pitch: -30.25415115465549,
            yaw: 39.573782727344735,
            cssClass: "moveScene",
            scene: "pointEightView",
            text: "Exit"
          },
          pointFive: {
            type: "custom",
            pitch: -23.677867435897248,
            yaw: -39.16841863892475,
            cssClass: "moveScene",
            scene: "pointFiveView",
            text: "Exit"
          },
          pointSeven: {
            type: "custom",
            pitch: -7.505876318458907,
            yaw: -69.18458177185433,
            cssClass: "moveScene",
            scene: "pointSevenView",
            text: "Exit"
          },
          pointSeventeen: {
            type: "custom",
            pitch: -4.4008376783163,
            yaw: -38.742260041687764,
            cssClass: "moveScene",
            scene: "pointSeventeenView",
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
            pitch: -28.233275247590207,
            yaw: 33.223249668515386,
            cssClass: "moveScene",
            scene: "pointThreeView",
          },
          pointEight: {
            type: "custom",
            pitch: -25.7955131685865,
            yaw: 70.25152967938234,
            cssClass: "moveScene",
            scene: "pointEightView",
          }
    },
  },
  pointFiveView: {
    title: "Living  / Dining",
    image: viewFive,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointSeventeen: {
            type: "custom",
            pitch: -10.321845928180723,
            yaw: -32.32790060921534,
            cssClass: "moveScene",
            scene: "pointSeventeenView",
          },
          pointSeven: {
            type: "custom",
            pitch: -10.47377953218667,
            yaw: -130.89060501025844,
            cssClass: "moveScene",
            scene: "pointSevenView",
          },
          pointThree: {
            type: "custom",
            pitch: -13.521751783896919,
            yaw: 124.521036387336,
            cssClass: "moveScene",
            scene: "pointThreeView",
          },
          pointTwo: {
            type: "custom",
            pitch: -23.038606879680525,
            yaw: 143.65474922864658,
            cssClass: "moveScene",
            scene: "pointTwoView",
          },
          pointEight: {
            type: "custom",
            pitch: -11.779667716945768,
            yaw: 88.35095707916899,
            cssClass: "moveScene",
            scene: "pointEightView",
          },
          pointThirteen: {
            type: "custom",
            pitch: -18.142229401563952,
            yaw: 51.644448962251744,
            cssClass: "moveScene",
            scene: "pointThirteenView",
          },

    },
  },
  pointSixView: {
    title: "Living  / Dining",
    image: viewSix,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointTwo: {
            type: "custom",
            pitch: -34.26625447879167,
            yaw: 157.79832759741637,
            cssClass: "moveScene",
            scene: "pointTwoView",
          },
          pointTwelve: {
            type: "custom",
            pitch: -11.590501443674373,
            yaw: 127.73434503001363,
            cssClass: "moveScene",
            scene: "pointTwelveView",
          },
          pointSeventeen: {
            type: "custom",
            pitch: -4.297392384051599,
            yaw: 75.04358107116376,
            cssClass: "moveScene",
            scene: "pointSeventeenView",
          },
          pointSeven: {
            type: "custom",
            pitch: -9.841434375026985,
            yaw: 40.33898038093961,
            cssClass: "moveScene",
            scene: "pointSevenView",
          },
          pointThree: {
            type: "custom",
            pitch: -6.020506356420634,
            yaw: 178.07739133142388,
            cssClass: "moveScene",
            scene: "pointThreeView",
          }

    },
  },
  pointSevenView: {
    title: "Living  / Dining",
    image: viewSeven,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointSix: {
            type: "custom",
            pitch: -21.537232363060976,
            yaw: 45.44129283463002,
            cssClass: "moveScene",
            scene: "pointSixView",
          }
    },
  },
  pointEightView: {
    title: "Living  / Dining",
    image: viewEight,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointNine: {
            type: "custom",
            pitch: -3.4140928376332704,
            yaw: -165.06494355728128,
            cssClass: "moveScene",
            scene: "pointNineView",
          },
          pointFive: {
            type: "custom",
            pitch: -15.05455800973916,
            yaw: 92.37243958156932,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointTwo: {
            type: "custom",
            pitch: -17.083842153565463,
            yaw: 53.02260596219156,
            cssClass: "moveScene",
            scene: "pointTwoView",
          },
          pointThree: {
            type: "custom",
            pitch: -7.508386436538318,
            yaw: -8.066666858760058,
            cssClass: "moveScene",
            scene: "pointThreeView",
          },
    },
  },
  pointNineView: {
    title: "Living  / Dining",
    image: viewNine,
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
  pointTenView: {
    title: "Living  / Dining",
    image: viewTen,
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
  pointElevenView: {
    title: "Living  / Dining",
    image: viewEleven,
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
  pointTwelveView: {
    title: "Living  / Dining",
    image: viewTwelve,
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
  pointThirteenView: {
    title: "Living  / Dining",
    image: viewThirteen,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointFive: {
            type: "custom",
            pitch: -21.537232363060976,
            yaw: 45.44129283463002,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointFourteen: {
            type: "custom",
            pitch: -17.1337861770463,
            yaw: 91.0143808124017,
            cssClass: "moveScene",
            scene: "pointFourteenView",
          }
    },
  },
  pointFourteenView: {
    title: "Living  / Dining",
    image: viewFourteen,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointFifteen: {
            type: "custom",
            pitch: -11.913430931931915,
            yaw: 88.2668314698111,
            cssClass: "moveScene",
            scene: "pointFifteenView",
          }
    },
  },
  pointFifteenView: {
    title: "Living  / Dining",
    image: viewFifteen,
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
  pointSixteenView: {
    title: "Living  / Dining",
    image: viewSixteen,
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
  pointSeventeenView: {
    title: "Living  / Dining",
    image: viewSeventeen,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointEighteen: {
            type: "custom",
            pitch: -14.093221530662461,
            yaw: 77.39408119888479,
            cssClass: "moveScene",
            scene: "pointEighteenView",
          }
    },
  },
  pointEighteenView: {
    title: "Living  / Dining",
    image: viewEighteen,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointNinteen: {
            type: "custom",
            pitch: -25.627561237471276,
            yaw: 26.0742273283227,
            cssClass: "moveScene",
            scene: "pointNinteenView",
          },
          pointFive: {
            type: "custom",
            pitch: -10.430766534485091,
            yaw: -5.701633869145737,
            cssClass: "moveScene",
            scene: "pointFiveView",
          }
    },
  },
  pointNinteenView: {
    title: "Living  / Dining",
    image: viewNinteen,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointFive: {
            type: "custom",
            pitch: -11.260015145887635,
            yaw: -33.16596962986101,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointEighteen: {
            type: "custom",
            pitch: -14.911143912983277,
            yaw: 169.1032917284816,
            cssClass: "moveScene",
            scene: "pointEighteenView",
          }
    },
  },
};

export default Scene;
