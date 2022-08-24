import React from "react";
import { Form } from "react-bootstrap";

class sortCard extends React.Component{

    selectValue = (event) => {
        event.preventDefault();
        let value = event.target.value;
    }

    render(){
        return(
            <Form>
                <Form.Label>Select number horn beast</Form.Label>
                <Form.Control as="select" id="select" onClick={selectValue} />
                <option value="default" >no number choosed</option>
            </Form>
            
        )
    }

}