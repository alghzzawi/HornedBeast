import React from "react";
import ChildHorned from "./ChildHorned";
import './style.css';



class Main extends React.Component{

    

    render(){
        return(
            <div id = "cards">

                {this.props.horndBeastData.map((element,index) => 
    
                <ChildHorned
                key={index} 
                id = {element._id}
                title = {element.title}
                imgUrl = {element.image_url}
                description = {element.description}
                horns = {element.horns}
                myFunction={this.props.myFunction} />
)}
            </div>
        )
    }
}

export default Main;