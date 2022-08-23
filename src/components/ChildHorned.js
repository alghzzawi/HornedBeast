import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Alert } from "bootstrap";



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
                <Card>
                    <Card.Img variant="top" src={this.props.imgUrl} onClick={this.incrementLikes} />
                    <Card.Body>
                    <Card.Title> {this.props.Title} </Card.Title>
                    <Card.Text> {this.props.description} </Card.Text>
                    <Card.Text>LIKES : {this.state.likes}❤️</Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
         
            
        )
    }
}

export default ChildHorned;