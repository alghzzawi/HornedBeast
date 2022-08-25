import React from "react";
import { Form } from "react-bootstrap";

class Sorted extends React.Component{





    render(){
        return(
            <Form onChange={this.props.chosenNumber} id="form">
                <Form.Label>Select number of horn beast</Form.Label>
                <Form.Select>
                    <option value="default" >all cards</option>
                    <option value= {1} >one horn</option>
                    <option value= {2} >two horn</option>
                    <option value= {3} >three horn</option>
                </Form.Select>
                

                
            </Form>
            
        )
    }

}

export default Sorted;
