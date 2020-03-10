import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.selectedDish == null) return <div></div>;

    const comments = this.props.selectedDish.comments.map(x => {
      return (
        <div key={x.id}>
          <p>{x.comment}</p>
          <p className="pt-0">
            -- {x.author} ,{x.date}
          </p>
        </div>
      );
    });

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              top
              src={this.props.selectedDish.image}
              alt={this.props.selectedDish.name}
            />
            <CardBody>
              <CardTitle className="h4">
                {this.props.selectedDish.name}
              </CardTitle>
              <CardText>{this.props.selectedDish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <div>{comments}</div>
        </div>
      </div>
    );
  }
}

export default DishDetails;
