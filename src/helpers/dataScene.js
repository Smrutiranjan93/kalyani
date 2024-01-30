import viewOne from "../images/view-1.jpg";
import viewTwo from "../images/view-2.jpg";
import viewThree from "../images/view-3.jpg";
import viewFour from "../images/view-4.jpg";
import viewFive from "../images/view-5.jpg";
import viewSeven from "../images/view-7.jpg";
import viewEight from "../images/view-8.jpg";
import viewNine from "../images/view-9.jpg";
import viewTen from "../images/view-10.jpg";
import viewEleven from "../images/view-11.jpg";

const Scene = {
  outsideHome: {
    title: "Room 001",
    image: viewOne,
    pitch: -17.024382166944726,
    yaw: 77.97404561754303,
    hotSpots: {
      mainhallroomEntry: {
        type: "custom",
        pitch: -8.74040622221662,
        yaw: 78.17957210260218,
        cssClass: "moveScene",
        scene: "pointTwo",
        label: "Go to Inside"
      },
    },
  },
  pointTwo: {
    title: "Living  / Dining",
    image: viewTwo,
    pitch: -26.67049098395467,
    yaw: 105.44028830779123,
    hotSpots: {
      pointThree: {
        type: "custom",
        pitch: -32.24158156158518,
        yaw: 51.505575794641324,
        cssClass: "moveScene",
        scene: "pointThreeView",
      },
      pointFour: {
        type: "custom",
        pitch: -37.99551762704566,
        yaw: 113.07695998489801,
        cssClass: "moveScene",
        scene: "pointFourView",
      },
      pointFive: {
        type: "custom",
        pitch: -11.373074536000852,
        yaw: 103.90110036054617,
        cssClass: "moveScene",
        scene: "pointFiveView",
      },
      pointTwelve: {
        type: "custom",
        pitch: -13.825609456317025,
        yaw: -162.32230241955872,
        cssClass: "moveScene",
        scene: "pointTwelveView",
        text: "Bedroom"
      },
      pointOne: {
        type: "custom",
        pitch: -25.17075144032323,
        yaw: -5.757373454405093,
        cssClass: "moveScene",
        scene: "outsideHome",
      },
    },
  },
  pointThreeView: {
    title: "Living  / Dining",
    image: viewThree,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointOne: {
            type: "custom",
            pitch: -7.597757938758813,
            yaw: -176.3381705647524,
            cssClass: "moveScene",
            scene: "outsideHome",
            text: "Exit"
          },
      pointFour: {
        type: "custom",
        pitch: -28.207878041810726,
        yaw: 145.78233364871525,
        cssClass: "moveScene",
        scene: "pointFourView",
        text: "Exit"
      },
      pointFive: {
        type: "custom",
        pitch: -13.533055801569486,
        yaw: 86.91032850010104,
        cssClass: "moveScene",
        scene: "pointFiveView",
        text: "Exit"
      },
      pointTwelve: {
        type: "custom",
        pitch: -7.970643726581749,
        yaw: 166.521185424467,
        cssClass: "moveScene",
        scene: "pointTwelveView",
        text: "Exit"
      },
    },
  },
  pointFourView: {
    title: "Living  / Dining",
    image: viewFour,
    pitch: -38.30161188547922,
    yaw: 165.0519818745348,
    hotSpots: {
      pointOne: {
        type: "custom",
        pitch: -16.17842690090621,
        yaw: -124.31070756235428,
        cssClass: "moveScene",
        scene: "outsideHome",
      },
      pointFive: {
        type: "custom",
        pitch: -19.22767984318633,
        yaw: 88.76849894632738,
        cssClass: "moveScene",
        scene: "pointFiveView",
      },
      pointSix: {
        type: "custom",
        pitch: -10.550108342215001,
        yaw:  105.03875920784074,
        cssClass: "moveScene",
        scene: "pointSixView",
      },
      pointSeven: {
        type: "custom",
        pitch: -10.39647057933282,
        yaw:  116.69744864033423,
        cssClass: "moveScene",
        scene: "pointSevenView",
      },
      pointTwelve: {
        type: "custom",
        pitch: -15.264054935990877,
        yaw:  -159.30593344844561,
        cssClass: "moveScene",
        scene: "pointTwelveView",
      },
    },
  },
  pointFiveView: {
    title: "Living  / Dining",
    image: viewFive,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
        pointThree: {
            type: "custom",
            pitch: -23.888092901205116,
            yaw: -94.4192116987436,
            cssClass: "moveScene",
            scene: "pointThreeView",
          },
          pointFour: {
            type: "custom",
            pitch:  -26.250568121725088,
            yaw:  -144.63925600184822,
            cssClass: "moveScene",
            scene: "pointFourView",
          },
      pointSix: {
        type: "custom",
        pitch: -9.582989299187851,
        yaw: 130.53066148842535,
        cssClass: "moveScene",
        scene: "pointSixView",
      },
      pointSeven: {
        type: "custom",
        pitch: -13.076697715977891,
        yaw:  147.13848873549557,
        cssClass: "moveScene",
        scene: "pointSevenView",
      },
    },
  },
  pointSixView: {
    title: "Balcony",
    image: viewSeven,
    pitch: -23.85067594438321,
    yaw: 64.41290703347215,
    hotSpots: {
      pointFive: {
        type: "custom",
        pitch: -19.135662250753022,
        yaw: -115.51039167877305,
        cssClass: "moveScene",
        scene: "pointFiveView",
      },
    },
  },
  pointSevenView: {
    title: "Bedroom",
    image: viewEight,
    pitch: -18.59192159144042,
    yaw:  116.28996515572659,
    hotSpots: {
        pointEight: {
            type: "custom",
            pitch: -6.7844934657205505,
            yaw:  28.16870449439946,
            cssClass: "moveScene",
            scene: "pointEightView",
          },
          pointNine: {
            type: "custom",
            pitch:  1.6190688671586577,
            yaw: 131.8186750220368,
            cssClass: "moveScene",
            scene: "pointNinetView",
          },
      pointFive: {
        type: "custom",
        pitch: -8.927925783941077,
        yaw: -24.19647199453171,
        cssClass: "moveScene",
        scene: "pointFiveView",
      },
    },
  },
  pointEightView: {
    title: "Bedroom",
    image: viewNine,
    pitch: -15.204010608944582,
    yaw: 106.05427620549571,
    hotSpots: {
        pointFive: {
            type: "custom",
            pitch: -7.434646215964467,
            yaw: 115.99388888944605,
            cssClass: "moveScene",
            scene: "pointFiveView",
          },
          pointNine: {
            type: "custom",
            pitch:  -4.165016670147862,
            yaw: 92.62884214880135,
            cssClass: "moveScene",
            scene: "pointNinetView",
          },
    },
  },
  pointNinetView: {
    title: "Bathroom",
    image: viewTen,
    pitch: -12.42578503109163,
    yaw: 82.64162495778537,
    hotSpots: {
        pointEight: {
            type: "custom",
            pitch:  -14.904876727691779,
            yaw: -113.98281870901094,
            cssClass: "moveScene",
            scene: "pointEightView",
          },
      pointTen: {
        type: "custom",
        pitch: -13.28396302554681,
        yaw: 40.69236354422851,
        cssClass: "moveScene",
        scene: "pointTenView",
      },
    },
  },
  pointTenView: {
    title: "Bathroom",
    image: viewEleven,
    pitch: -31.401894178966522,
    yaw: 60.040717843292356,
    hotSpots: {
      pointNine: {
        type: "custom",
        pitch: -30.502524511012666,
        yaw: 7.098814486579715,
        cssClass: "moveScene",
        scene: "pointNinetView",
      },
    },
  },
  pointTwelveView: {
    title: "Bathroom",
    image: viewTen,
    pitch: -13.354665152985383,
    yaw: 162.97967203301724,
    hotSpots: {
      ExitMain: {
        type: "custom",
        pitch: -30.536791880546147,
        yaw: -106.37085602027514,
        cssClass: "moveScene",
        scene: "pointTwo",
        text: "Exit"
      },
    },
  },
};

export default Scene;
