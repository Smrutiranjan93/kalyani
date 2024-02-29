import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import orchidDataScene from "../../helpers/orchidDataScene";

export default function ParijatScene() {
  const [scene, setScene] = useState(orchidDataScene["pointOneView"]);

  const hotSpots = (Element, i) => {
    if (Element.cssClass === "hotSpotElement")
      return (
        <Pannellum.Hotspot
          key={i}
          type={Element.type}
          yaw={Element.yaw}
          pitch={Element.pitch}
          cssClass={Element.cssClass}
          text={Element.text}
        />
      );
    else if (Element.cssClass === "moveScene")
      return (
        <Pannellum.Hotspot
          key={i}
          type={Element.type}
          yaw={Element.yaw}
          pitch={Element.pitch}
          cssClass={Element.cssClass}
          text={Element.text}
          handleClick={() => setScene(orchidDataScene[Element.scene])}
        ></Pannellum.Hotspot>
      );
  };

  return (
    <>
      <Pannellum
        width="100%"
        height="100vh"
        title={scene.title}
        image={scene.image}
        pitch={scene.pitch}
        yaw={scene.yaw}
        hfov={110}
        defaultZoomLvel={50}
        autoLoad={true}
        showZoomCtrl={false}
        showFullscreenCtrl={false}
        hotspotDebug={true}
      >
        {Object.values(scene.hotSpots).map((Element, i) =>
          hotSpots(Element, i)
        )}
      </Pannellum>
    </>
  );
}
