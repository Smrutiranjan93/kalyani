import { useState } from "react";

export default function UseModal(){
    const [isOpen, setIsOpen] = useState(false);
    const closeModal =()=> setIsOpen(false);
    const openModal =()=>{
        setIsOpen(true);
    }
    return {isOpen,openModal,closeModal};
}