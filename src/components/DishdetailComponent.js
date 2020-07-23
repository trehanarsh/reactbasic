import React, { Component } from 'react';
import {
    Card, CardImg, CardText,
    CardBody, CardTitle, Breadcrumb,
    BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody,
    Label, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

class CommentForm extends Component {
    state = {
        isModalOpen: false
    }


    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit = function(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
        this.toggleModal();
    }


    render() {
        let required = (val) => val && val.length;
        let maxLength = (len) => (val) => !(val) || (val.length <= len);
        let minLength = (len) => (val) => val && (val.length >= len);
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={12}><Control.select
                                    model='.rating'
                                    id="rating"
                                    name="rating"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select></Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="name" md={5}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text
                                        className="form-control"
                                        model='.name'
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>

                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="comment" md={3}>Comment
                                </Label>
                                <Col md={12}>
                                    <Control.textarea model='.comment' id='comment' name="comment"
                                        rows='6' className='form-control' />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div >
        )
    }

}

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
  
      function RenderComments({comments, addComment, dishId}) {
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
            <CommentForm dishId={dishId} addComment={addComment} />
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
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />
                   
                </div>
            </div>
            </div>
        );   
        
      }


 export default DishDetail; 