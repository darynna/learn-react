import React from "react";
import './ColorPicker.css';

class ColorPicker extends React.Component{
    state={
      activeOptionInd: 0, 
    };

    setActiveIndex = (index) => {
      this.setState({activeOptionInd: index})
    }

    makeOptionClassName = (index) =>{
      
        const optionClasses = ['ColorPicker_options']

        if (index === this.state.activeOptionInd){
            optionClasses.push('ColorPicker_options_active')
        }

        return optionClasses.join(" ")
    }

    render(){
        const {activeOptionInd} = this.state
        const {options} = this.props
        const {label} = options[activeOptionInd];

        return (
            <div className="ColorPicker">
              <h2 className="ColorPicker_title">Color Picker</h2>
              <p>Choosen color: {label}</p>
              <div>
                {options.map(({ label}, index) => (
                  <button
                    key={label}
                    className={this.makeOptionClassName(index)}
                    style={{ backgroundColor: label}}
                    onClick={() => this.setActiveIndex(index)}
                  ></button>
                ))}
              </div>
            </div>
          );
    }
}


export default ColorPicker;