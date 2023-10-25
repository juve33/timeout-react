import './AppStart.css';
import Card from './components/Card';
import TagList from './components/TagList';

function App() {
  return (
    <div className="wrapper">
      <Card color="red" content="Überfällig" />
      <Card color="orange" content="Heute" />
      <Card color="yellow" content="Morgen" />
      <Card color="blue" content="Bald" />
      <Card color="green" content="Erledigt" />
      <Card color="purple" content="noch ein Ordner" />

      <TagList />

      <div className="add">+</div>
    </div>
  );
}

export default App;
