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
import viewTwenty from "../images/orchid/view20.jpg";
import viewTwentyOne from "../images/orchid/view21.jpg";
import viewTwentyTwo from "../images/orchid/view20.jpg";
import viewTwentyThree from "../images/orchid/view21.jpg";

const Scene = {
  pointOneView: {
    title: "Main Hall [Orchid]",
    image: viewOne,
    pitch: -11.803234287655917,
    yaw: 140.81343419130073,
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
    title: "Main Hall [Orchid]",
    image: viewTwo,
    pitch: -6.451563092850391,
    yaw: 163.8487731480429,
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
    title: "Kitchen [Orchid]",
    image: viewThree,
    pitch: -4.717825434350785,
    yaw: 67.81772320854652,
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
    title: "Kitchen [Orchid]",
    image: viewFour,
    pitch: -13.508800816841287,
    yaw: 116.13287881034132,
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
    title: "Dining [Orchid]",
    image: viewFive,
    pitch: -8.056140186366013,
    yaw: 52.98960961787118,
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
    title: "Main Hall [Orchid]",
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
    title: "Balcony [Orchid]",
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
          }
    },
  },
  pointEightView: {
    title: "Dining [Orchid]",
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
    title: "Bedroom [Orchid]",
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
          pointEleven: {
            type: "custom",
            pitch: -19.21617022046207,
            yaw: 131.20006299677678,
            cssClass: "moveScene",
            scene: "pointElevenView",
          },
          pointEight: {
            type: "custom",
            pitch: -11.304415046201383,
            yaw: -166.2011811264394,
            cssClass: "moveScene",
            scene: "pointEightView",
          },
          pointTwentyTwo: {
            type: "custom",
            pitch: -11.547638234417304,
            yaw: 160.8715236061757,
            cssClass: "moveScene",
            scene: "pointTwentyTwoView",
          },
    },
  },
  pointTenView: {
    title: "Bedroom [Orchid]",
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
          pointEleven: {
            type: "custom",
            pitch: -12.56736536509054,
            yaw: 76.66156243864808,
            cssClass: "moveScene",
            scene: "pointElevenView",
          },
          pointTwentyTwo: {
            type: "custom",
            pitch: -5.597274466082089,
            yaw: 93.24061191596039,
            cssClass: "moveScene",
            scene: "pointTwentyTwoView",
          }
    },
  },
  pointElevenView: {
    title: "Bedroom [Orchid]",
    image: viewEleven,
    pitch: -4.812565572201448,
    yaw: 137.90715016468823,
    hotSpots: {
        pointNine: {
            type: "custom",
            pitch: -37.365934932133904,
            yaw: 28.419615894955836,
            cssClass: "moveScene",
            scene: "pointNineView",
          },
          pointTen: {
            type: "custom",
            pitch: -8.983202284897635,
            yaw: 101.9708878847246,
            cssClass: "moveScene",
            scene: "pointTenView",
          },
    },
  },
  pointTwelveView: {
    title: "Living Room [Orchid]",
    image: viewTwelve,
    pitch: -10.33375832555302,
    yaw: 68.15422253871657,
    hotSpots: {
        pointSeven: {
            type: "custom",
            pitch: -8.117417879553772,
            yaw: -22.07404321326181,
            cssClass: "moveScene",
            scene: "pointSevenView",
          },
          pointThirteen: {
            type: "custom",
            pitch: -24.201376852255343,
            yaw: 112.86309215113734,
            cssClass: "moveScene",
            scene: "pointThirteenView",
          },
          pointFifteen: {
            type: "custom",
            pitch: -3.4264207256762247,
            yaw: 77.22306867515358,
            cssClass: "moveScene",
            scene: "pointFifteenView",
          },
          pointFive: {
            type: "custom",
            pitch: -35.90977282992995,
            yaw: 1.6499737159098125,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointThree: {
            type: "custom",
            pitch:  -8.407153432495232,
            yaw: -130.38054090548218,
            cssClass: "moveScene",
            scene: "pointThreeView",
          },
          pointTwo: {
            type: "custom",
            pitch: -21.79717541724426,
            yaw: -76.44435347614389,
            cssClass: "moveScene",
            scene: "pointTwoView",
          },
          pointEight: {
            type: "custom",
            pitch: -24.91013020183401,
            yaw: -168.02279128608654,
            cssClass: "moveScene",
            scene: "pointEightView",
          },
    },
  },
  pointThirteenView: {
    title: "Living Room [Orchid]",
    image: viewThirteen,
    pitch: -18.045704246324078,
    yaw: 129.98242531116387,
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
          },
          pointFifteen: {
            type: "custom",
            pitch: -2.412203491412049,
            yaw: 123.65836631032059,
            cssClass: "moveScene",
            scene: "pointFifteenView",
          }
    },
  },
  pointFourteenView: {
    title: "Living Room [Orchid]",
    image: viewFourteen,
    pitch: -14.86395768578739,
    yaw: 92.81990602227545,
    hotSpots: {
        pointThirteen: {
            type: "custom",
            pitch: -31.181281067950643,
            yaw: 145.64027145386282,
            cssClass: "moveScene",
            scene: "pointThirteenView",
          },
          pointFifteen: {
            type: "custom",
            pitch: -10.937297940439867,
            yaw: 81.56519685607941,
            cssClass: "moveScene",
            scene: "pointFifteenView",
          },
          pointEight: {
            type: "custom",
            pitch: -17.57965455071188,
            yaw: -142.46994012277668,
            cssClass: "moveScene",
            scene: "pointEightView",
          },
          pointFive: {
            type: "custom",
            pitch: -41.0405942712127,
            yaw: -54.906706498094195,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointSeven: {
            type: "custom",
            pitch: -3.9601430244528033,
            yaw: -45.404739743903846,
            cssClass: "moveScene",
            scene: "pointSevenView",
          },
    },
  },
  pointFifteenView: {
    title: "Balcony [Orchid]",
    image: viewFifteen,
    pitch: -9.467519857646197,
    yaw: 93.57203796856706,
    hotSpots: {
        pointSixteen: {
            type: "custom",
            pitch: -40.80206496598262,
            yaw: 88.41015623778584,
            cssClass: "moveScene",
            scene: "pointSixteenView",
          },
          pointFourteen: {
            type: "custom",
            pitch: -11.075805316148196,
            yaw: 166.71919602838844,
            cssClass: "moveScene",
            scene: "pointFourteenView",
          }
    },
  },
  pointSixteenView: {
    title: "Balcony [Orchid]",
    image: viewSixteen,
    pitch: -30.400121450439386,
    yaw: 94.55732958536795,
    hotSpots: {
        pointFourteen: {
            type: "custom",
            pitch: -10.552044585792354,
            yaw: 115.82534090078727,
            cssClass: "moveScene",
            scene: "pointFourteenView",
          }
    },
  },
  pointSeventeenView: {
    title: "Bedroom [Orchid]",
    image: viewSeventeen,
    pitch: -15.846832497714505,
    yaw: 108.20179387174298,
    hotSpots: {
        pointEighteen: {
            type: "custom",
            pitch: -14.093221530662461,
            yaw: 77.39408119888479,
            cssClass: "moveScene",
            scene: "pointEighteenView",
          },
          pointNinteen: {
            type: "custom",
            pitch: -31.54847583578852,
            yaw: 31.758373249699524,
            cssClass: "moveScene",
            scene: "pointNinteenView",
          }
    },
  },
  pointEighteenView: {
    title: "Bedroom [Orchid]",
    image: viewEighteen,
    pitch: -19.264348452432834,
    yaw: 15.979879420540247,
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
          },
          pointTwenty: {
            type: "custom",
            pitch: -11.918163912025934,
            yaw: 14.869573757054056,
            cssClass: "moveScene",
            scene: "pointTwentyView",
          },
    },
  },
  pointNinteenView: {
    title: "Bedroom [Orchid]",
    image: viewNinteen,
    pitch: -16.79559680834313,
    yaw: 96.57696341537665,
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
          },
          pointTwenty: {
            type: "custom",
            pitch: -10.265303654866006,
            yaw: 21.813690378460326,
            cssClass: "moveScene",
            scene: "pointTwentyView",
          }
    },
  },
  pointTwentyView: {
    title: "Bathroom / Toilet [Orchid]",
    image: viewTwenty,
    pitch: -4.518269051260987,
    yaw: 54.32079087454679,
    hotSpots: {
        pointTwentyOne: {
            type: "custom",
            pitch: -14.756259876965926,
            yaw: 20.5990370748412,
            cssClass: "moveScene",
            scene: "pointTwentyOneView",
          },
          pointNinteen: {
            type: "custom",
            pitch: -69.34333729248975,
            yaw: -60.838967749884375,
            cssClass: "moveScene",
            scene: "pointNinteenView",
          }
    },
  },
  pointTwentyOneView: {
    title: "Bathroom / Toilet [Orchid]",
    image: viewTwentyOne,
    pitch: -22.057947868042465,
    yaw: 68.52011373930563,
    hotSpots: {
        pointTwenty: {
            type: "custom",
            pitch: -19.23680782435917,
            yaw: 35.539586651943075,
            cssClass: "moveScene",
            scene: "pointTwentyView",
          },
          pointNinteen: {
            type: "custom",
            pitch: -15.769095203668076,
            yaw: -16.605813190421227,
            cssClass: "moveScene",
            scene: "pointNinteenView",
          },
    },
  },
  pointTwentyTwoView: {
    title: "Bathroom / Toilet [Orchid]",
    image: viewTwentyTwo,
    pitch: -4.518269051260987,
    yaw: 54.32079087454679,
    hotSpots: {
        pointTwentyThree: {
            type: "custom",
            pitch: -14.756259876965926,
            yaw: 20.5990370748412,
            cssClass: "moveScene",
            scene: "pointTwentyThreeView",
          },
          pointEleven: {
            type: "custom",
            pitch: -69.34333729248975,
            yaw: -60.838967749884375,
            cssClass: "moveScene",
            scene: "pointElevenView",
          }
    },
  },
  pointTwentyThreeView: {
    title: "Bathroom / Toilet [Orchid]",
    image: viewTwentyThree,
    pitch: -22.057947868042465,
    yaw: 68.52011373930563,
    hotSpots: {
        pointTwentyTwo: {
            type: "custom",
            pitch: -19.23680782435917,
            yaw: 35.539586651943075,
            cssClass: "moveScene",
            scene: "pointTwentyTwoView",
          },
          pointEleven: {
            type: "custom",
            pitch: -15.769095203668076,
            yaw: -16.605813190421227,
            cssClass: "moveScene",
            scene: "pointElevenView",
          }
    },
  },
};

export default Scene;
