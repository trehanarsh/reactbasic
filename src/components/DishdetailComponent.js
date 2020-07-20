import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderDish({dish}) {
        return (
        <div>
         <Card >
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        </div>
        );
        
  
      }
  
      function RenderComments({comments}) {
        const z= comments.map( (coms) => {
            return(    
                    <div>
                        
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
  
      const  DishDetail = (props) => {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        );   
        
      }


 export default DishDetail; 