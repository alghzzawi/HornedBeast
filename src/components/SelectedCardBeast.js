import React from 'react'
import {Button,Modal} from 'react-bootstrap';
class SelecedCardBeast extends React.Component{
    render(){
        return(
            
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                        <Modal.Title>{this.props.selBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <img src={this.props.selBeast.image_url} alt={this.props.selBeast.Title} />   
                    <p>{this.props.selBeast.description}</p>  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        )
    }
}
export default SelecedCardBeast;