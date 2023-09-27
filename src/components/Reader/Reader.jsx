import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
 state={
  index: 0
 }

 componentDidUpdate(prevProps, prevState){
  if(prevState.index !== this.state.index){
    localStorage.setItem(LS_KEY, this.state.index)
  }
 }

 componentDidMount(){
  const savedState = localStorage.getItem(LS_KEY)
  if(savedState){
  const index = Number( savedState)
  this.setState({index: index})}

 }

 changeIndex=(value)=>{
  this.setState(state => ({index: state.index + value}))
 }

 
 render(){
  const {index} = this.state;
  const  totalItems = this.props.items.length
  const currentItem = this.props.items[this.state.index]
  return(
    <div>
       <Controls onChange={this.changeIndex} current={index + 1} total={totalItems}/>
      <Progress current={this.state.index + 1} total={this.props.items.length}/>
     <Publication title={currentItem.title} text={currentItem.text}/>
    </div>
  )
 }
}
