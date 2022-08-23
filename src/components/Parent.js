import React from "react";
import ChildHorned from "./ChildHorned";
import Giant from './assets/Giant.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import data from './data.json'
import { Row } from "react-bootstrap";


class Parent extends React.Component{
    render(){
        return(
            <div>
                <h1>HornedBeast</h1>
                
                <Row xs={1} md={5} className="g-4">
                    <ChildHorned imgUrl= {data[0].image_url} title ={data[0].title} description ={data[0].description} keyword ={data[0].keyword} horns ={data[0].horns}/>
                    <ChildHorned imgUrl= {data[1].image_url} title ={data[1].title} description ={data[1].description} keyword ={data[1].keyword} horns ={data[1].horns}/>
                    <ChildHorned imgUrl= {data[2].image_url} title ={data[2].title} description ={data[2].description} keyword ={data[2].keyword} horns ={data[2].horns}/>
                    <ChildHorned imgUrl= {data[3].image_url} title ={data[3].title} description ={data[3].description} keyword ={data[3].keyword} horns ={data[3].horns}/>
                    <ChildHorned imgUrl= {data[4].image_url} title ={data[4].title} description ={data[4].description} keyword ={data[4].keyword} horns ={data[4].horns}/>
                
                
                    <ChildHorned imgUrl= {data[5].image_url} title ={data[5].title} description ={data[5].description} keyword ={data[5].keyword} horns ={data[5].horns}/>
                    <ChildHorned imgUrl= {data[6].image_url} title ={data[6].title} description ={data[6].description} keyword ={data[6].keyword} horns ={data[6].horns}/>
                    <ChildHorned imgUrl= {data[7].image_url} title ={data[7].title} description ={data[7].description} keyword ={data[7].keyword} horns ={data[7].horns}/>
                    <ChildHorned imgUrl= {data[8].image_url} title ={data[8].title} description ={data[8].description} keyword ={data[8].keyword} horns ={data[8].horns}/>
                    <ChildHorned imgUrl= {data[9].image_url} title ={data[9].title} description ={data[9].description} keyword ={data[9].keyword} horns ={data[9].horns}/>
                
                    <ChildHorned imgUrl= {data[10].image_url} title ={data[10].title} description ={data[10].description} keyword ={data[10].keyword} horns ={data[10].horns}/>
                    <ChildHorned imgUrl= {data[11].image_url} title ={data[11].title} description ={data[11].description} keyword ={data[11].keyword} horns ={data[11].horns}/>
                    <ChildHorned imgUrl= {data[12].image_url} title ={data[12].title} description ={data[12].description} keyword ={data[12].keyword} horns ={data[12].horns}/>
                    <ChildHorned imgUrl= {data[13].image_url} title ={data[13].title} description ={data[13].description} keyword ={data[13].keyword} horns ={data[13].horns}/>
                    <ChildHorned imgUrl= {data[14].image_url} title ={data[14].title} description ={data[14].description} keyword ={data[14].keyword} horns ={data[14].horns}/>
                
                    <ChildHorned imgUrl= {data[15].image_url} title ={data[15].title} description ={data[15].description} keyword ={data[15].keyword} horns ={data[15].horns}/>
                    <ChildHorned imgUrl= {data[16].image_url} title ={data[16].title} description ={data[16].description} keyword ={data[16].keyword} horns ={data[16].horns}/>
                    <ChildHorned imgUrl= {data[17].image_url} title ={data[17].title} description ={data[17].description} keyword ={data[17].keyword} horns ={data[17].horns}/>
                    <ChildHorned imgUrl= {data[18].image_url} title ={data[18].title} description ={data[18].description} keyword ={data[18].keyword} horns ={data[18].horns}/>
                    <ChildHorned imgUrl= {data[19].image_url} title ={data[19].title} description ={data[19].description} keyword ={data[19].keyword} horns ={data[19].horns}/>
                </Row>

            </div>
        )
    }
}

export default Parent;