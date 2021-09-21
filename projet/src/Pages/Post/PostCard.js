import React from "react";
import "./PostCard.css";
import { Card } from "react-bootstrap";

const PostCard = ({ post }) => {
    return (
        <Card border="danger" style={{ width: "18rem" }}>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PostCard;
