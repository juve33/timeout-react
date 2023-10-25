import Tag from './Tag';

function TagList(props) {
  return (
    <ul className={"tags " + props.color}>
      <Tag content="Haushalt" />
      <Tag content="Freunde" />
      <Tag content="Sport" />
      <Tag content="Studium" />
      <Tag content="Sonstiges" />
    </ul>
  );
}

export default TagList;
