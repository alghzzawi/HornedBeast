import React from "react";
import Main from "./components/Main"
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./components/data.json"
import SelecedCardBeast from "./components/SelectedCardBeast";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      selBeast:{},
      show:false
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

  render(){
    return(
      <div>
        <Header />
        <Main horndBeastData={data} myFunction = {this.myFunction} />
        <Footer />
        <SelecedCardBeast showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} />
      </div>
    )
  }
}


export default App;