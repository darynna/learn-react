import { PureComponent } from "react";

export default class Tabs extends PureComponent{
    state={
        activeTabInd: 0
    };

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextState.activeTabInd !== this.state.activeTabInd;
    // }

    setActiveTabInd = idx =>{
        this.setState({activeTabInd: idx})
    };

    render(){
        console.log(`Re-render ${Date.now()}`);

        const {activeTabInd} = this.state;
        const {items} = this.props;
        const activeTabs = items[activeTabInd];

        return(
            <>
            <div>
                {items.map((item, idx) =>(
                    <button type="button" key={item.label} onClick={()=> this.setActiveTabInd(idx)}>{item.label}</button>
                ))}
            </div>

            <div>
                <h2>{activeTabs.label}</h2>
                <h2>{activeTabs.content}</h2>
            </div>
            
            </>
        )
    }
}