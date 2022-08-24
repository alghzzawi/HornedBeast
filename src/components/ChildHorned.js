import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import './style.css';


class ChildHorned extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            likes : 0
        }
    }

    incrementLikes = () => {
        this.setState({
            likes : this.state.likes + 1
        })
    }


    render(){
        return(

            <Card id="labCard">
                <Card.Img src={this.props.imgUrl} variant="top" onDoubleClick={this.incrementLikes} />
                <Card.Body>
                    <Card.Title> {this.props.Title} </Card.Title>
                    <Card.Text> {this.props.description} </Card.Text>
                    <Card.Text>LIKES : {this.state.likes}❤️</Card.Text>                
                </Card.Body>
                <Button variant="info" onClick={()=>{this.props.myFunction(this.props.title)}} >open this card beast</Button>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

        )
    }
}

export default ChildHorned;