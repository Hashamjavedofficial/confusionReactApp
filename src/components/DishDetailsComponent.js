import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function RenderDishDetails({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle className="h4">{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}
function RenderComments({ x }) {
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
}
const DishDetails = props => {
  if (!props.dish) return <div></div>;
  const comments = props.dish.comments.map(x => {
    return <RenderComments x={x} />;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDishDetails dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <div>{comments}</div>
        </div>
      </div>
    </div>
  );
};
export default DishDetails;
