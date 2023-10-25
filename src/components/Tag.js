import './Buttons.css';

function Tag(props) {
  return (
    <li className={props.color}>
      {props.content}
    </li>
  );
}

export default Tag;
