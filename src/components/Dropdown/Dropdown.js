import React, { Component } from "react";
class Dropdown extends Component{

    state={
        visible: false
    }


    toggle=() =>{
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    render(){
        return(
            <div className="Dropdown">
                <button type='button' className="Dropdown_toggle" onClick={this.toggle}>{this.state.visible ? 'Close' : "Show"}</button>
{/* 
                <button type='button' className="Dropdown_toggle" onClick={this.hide}>Close</button> */}

                {this.state.visible && <div className="Dropdown_menu">Menu</div>}
            </div>

        )
    }
}

export default Dropdown