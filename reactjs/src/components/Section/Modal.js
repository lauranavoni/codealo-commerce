import React, {Fragment} from 'react'
import ReactDom from 'react-dom';
import styles from '../css/Modal.css';

const Backdrop = props =>{
    return(
        <div className={styles.backdrop} onClick ={props.onClick}/>
    )
}
const ModalOverlay = props =>{
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const Modal = props =>{

    return(
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdropRoot')) }
            {ReactDom.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlayRoot')) }
            
           
        </Fragment>
        

    )
}

export default Modal;