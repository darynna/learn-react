import { Component } from "react";
import css from './Modal.module.css'
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root")

export default class Modal extends Component{
    componentDidMount(){
        console.log('componentDidMount');
        window.addEventListener("keydown", this.handleKeydown)

    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = (e) => {
            if(e.code === 'Escape'){
                console.log("close modal")
                this.props.onClose()
        }
    };

    handleBackdropClick = (e) =>{
        if(e.currentTarget === e.target){
            this.props.onClose()
        }
    }

    render(){
        return createPortal(
            <div className={css.background} onClick={this.handleBackdropClick}>
                <div className={css.content}>{this.props.children}</div>
            </div>,
            modalRoot
        )
    }
}