import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import './style.css';
import { CardGroup } from "react-bootstrap";


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
                <Button variant="primary">Go somewhere</Button>
            </Card>
        //    <CardGroup>
        //             <Card className="card" >
        //                 <Card.Img className="img" variant="top" src= onDoubleClick={this.incrementLikes} />
        //                 <Card.Body>
        //                 <Card.Title> {this.props.Title} </Card.Title>
        //                 <Card.Text> {this.props.description} </Card.Text>
        //                 <Card.Text>LIKES : {this.state.likes}❤️</Card.Text>
        //                 </Card.Body>
        //                 <Button variant="primary">Go somewhere</Button>
        //                 <Card.Footer>
        //                 <small className="text-muted">Last updated 3 mins ago</small>
        //                 </Card.Footer>
        //             </Card>
        //     </CardGroup>    
            
        )
    }
}

export default ChildHorned;