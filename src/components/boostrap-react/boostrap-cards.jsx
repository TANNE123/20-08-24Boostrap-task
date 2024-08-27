import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({ title, text, img,index,remove }) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "auto",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        margin:'20px 6px'
      }}
    >

      <Card.Img
        variant="top"
        src={img}
        style={{ width: "150px", height: "150px" }}
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={()=>remove(index)}>Go somewhere</Button>

      </Card.Body>
    </Card>
  );
}

export default CardComponent;
