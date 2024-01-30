import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
import dataScene from "../../helpers/dataScene";
import UseModal from "../../hooks/useModal";
import Modal from "./modal";
import ModalContainer from "./modalContainer";
import { Box } from "@mui/material";

export default function Scene() {

  const {isOpen, openModal, closeModal} = UseModal(false);
  const [scene, setScene] = useState(dataScene["outsideHome"]);
  const [modal, setModal] = useState(null);

  const hotSpots = (Element,i) => {
    if(Element.cssClass === 'hotSpotElement') return (
      <Pannellum.Hotspot 
            key={i}
            type={Element.type} 
            yaw={Element.yaw}
            pitch={Element.pitch}
            cssClass={Element.cssClass} 
            text={Element.text}
            // handleClick={ ()=> {openModal(); setModal(Element.nameModal)}}
        />
    );
    else if(Element.cssClass === 'moveScene') return (
       <Pannellum.Hotspot 
            key={i}
            type={Element.type} 
            yaw={Element.yaw}
            pitch={Element.pitch}
            cssClass={Element.cssClass} 
            text={Element.text}
            handleClick={ ()=> setScene(dataScene[Element.scene])}
        >
          
        </Pannellum.Hotspot>
    );
  }

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
        defaultZoomLvel ={50}
        autoLoad= {true}
        showZoomCtrl={false}
        showFullscreenCtrl={false}
        hotspotDebug={false}
      >
        {Object.values(scene.hotSpots).map((Element, i) => (hotSpots(Element,i)))}
      </Pannellum>

      <Modal isOpen={isOpen} close={()=>closeModal()}>
        {isOpen ? <ModalContainer nameModal={modal}/> : null}
      </Modal>
    </>
  );
}
