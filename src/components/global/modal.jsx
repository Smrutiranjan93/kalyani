import React from 'react';
import '../../styles/modal.css';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal ({ Children, isOpen, close }){
    return (
        <article className={isOpen ? 'modal is-open' : 'modal'}>
            <button className='close-modal' onClick={()=> close()}><CloseIcon/></button>
            <div className='modal-container'>
                {Children}
            </div>
        </article>
    )
}