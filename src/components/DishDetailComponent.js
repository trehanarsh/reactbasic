import React, { Component } from 'react';
 import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(){
        const z= this.props.dish.comments.map( (coms) => {
            return(    
                    <div>
                        <br></br>
                      {coms.comment}
                      <br></br>
                      --{coms.author}, {coms.date.substring(0,10)}
                      <br></br>
                      <br></br>
                    </div>
                    
            );
        });
        return(
            <div>
            <h4>Comments:</h4>
            {z}
            </div>
        );
    }
    render() {
        
          if(this.props.dish==null)
            return(
                <div></div>
            );
          else
          {
           
            return(
                <div className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                {this.renderComments()}
                </div>
                
            );
           }
    }
}

 export default DishDetail; 