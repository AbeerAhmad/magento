import React,{Component} from 'react';
import './stores.css';
import Card from './card/card'






class Store extends Component{

    render(){
 

        const cards = (

            this.props.data.length?this.props.data.map((obj)=>{
              
                
                return <Card id = {obj._id} key = {obj._id} title = {obj.name} description = {obj.desc} image = {obj.imgSrc} />
            }):null
        )
        
        return(
            <div className="store-head">
                {cards}
            </div>
        )
    }
}


export default Store;


