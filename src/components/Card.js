import './Card.css';

function Card(props) {
  return (
    <div className={"card " + props.color}>
      {props.content}
    </div>
  );
}

export default Card;
