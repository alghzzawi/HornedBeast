import React from "react";
import HornedBeast from "./HornedBeast";
import Rhino from './assets/Rhino.jpg'
import Giant from './assets/Giant.jpg'
class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeast title='Rhino'  img={Rhino} description='Rhinos are lovable lummoxes, herbivores who roam grasslands and forests nibbling on foliage, fruit and grasses.' />
                <HornedBeast title='Giant'  img={Giant} description='A giant rhino that may have been the origin of the unicorn myth survived until at least 39,000 years ago - much longer than previously thought.' />
            </div>
        )
    }
}

export default Main;