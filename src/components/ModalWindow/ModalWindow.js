import { Component } from "react";
import css from './ModalWindow.module.css'

export default class ModalWindow extends Component{
 componentDidMount(){
    window.addEventListener('keydown', this.onKeyDown)
 }

 componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeyDown)
 }


   onOverlayClick=(e)=>{
    if(e.currentTarget === e.target){
        this.props.onClose()
    }
   }

   onKeyDown=(e)=>{
    if(e.code === 'Escape'){
        this.props.onClose()
}
   }

   

    render(){
        return (
            <div className={css.background} onClick={this.onOverlayClick}>
                <div className={css.content}><button typr="button" onClick={this.props.onClose}>&times;</button>
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.author}</p>
                </div>
            </div>
        )
    }
}