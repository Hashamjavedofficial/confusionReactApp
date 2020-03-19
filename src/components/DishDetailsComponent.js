import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(`DIsh details constructor`);
  }
  componentDidMount() {
    console.log(`Method dishdetails of componentdidmount invoke`);
  }
  componentDidUpdate() {
    console.log(`Method dishdetails of componentdidUpdate invoke`);
  }

  render() {
    console.log(`Render Function dishdetails invoke`);

    if (!this.props.dish) return <div></div>;

    const comments = this.props.dish.comments.map(x => {
      return (
        <div key={x.id}>
          <p>{x.comment}</p>
          <p className="pt-0">
            -- {x.author} ,
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(x.date)))}
          </p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle className="h4">{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <div>{comments}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default DishDetails;
