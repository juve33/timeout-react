import './AppStart.css';
import Card from './components/Card';
import TagList from './components/TagList';
import Tag from './components/Tag';

function App() {
  return (
    <div className="wrapper">
      <Card color="red" content="Überfällig" />
      <Card color="orange" content="Heute" />
      <Card color="yellow" content="Morgen" />
      <Card color="blue" content="Bald" />
      <Card color="green" content="Erledigt" />
      <Card color="purple" content="noch ein Ordner" />

      <TagList>
        <Tag content="Haushalt" />
        <Tag content="Freunde" />
        <Tag content="Sport" />
        <Tag content="Studium" />
        <Tag content="Sonstiges" />
      </TagList>

      <div className="add">+</div>
    </div>
  );
}

export default App;
