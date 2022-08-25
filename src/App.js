import React from "react";
import Main from "./components/Main"
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./components/data.json"
import SelecedCardBeast from "./components/SelectedCardBeast";
import Sorted from "./components/Sorted";


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      selBeast:{},
      show:false,
      beastData:data,
      numberOfhorn:0,
      selhorn:data
    }
  }
  myFunction = (title) => {

    const SelecedCardBeast = data.find(beast => beast.title === title);
    this.setState({
      show:true,
      selBeast:SelecedCardBeast
    })

  }

  handleClose=()=>{
    this.setState({
      show:false
    })
  }

  chosenNumber=(event)=>{
    event.preventDefault();
    this.setState({
      numberOfhorn :parseInt(event.target.value)
      
    })
    
    let arrayOfbeastSelected =[];
    var hornnum = parseInt(event.target.value);
      arrayOfbeastSelected = data.filter(item => {
      
      if(hornnum === 1){
        return (item.horns === hornnum);
      }
      else if(hornnum === 2){
        return (item.horns === hornnum);
      }
      else if(hornnum === 3){
        return (item.horns >= hornnum);
      }
      else{
        return item.horns > 0;
      }
    })

    this.setState({
      selhorn : arrayOfbeastSelected
    })

  }
  
  render(){
    return(
      <div>
        <Header />
        <Sorted chosenNumber = {this.chosenNumber} />
        <Main horndBeastData={this.state.selhorn} myFunction = {this.myFunction} />
        <Footer />
        <SelecedCardBeast showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} />
      </div>
    )
  }
}


export default App;