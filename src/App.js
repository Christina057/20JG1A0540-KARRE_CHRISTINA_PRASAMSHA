import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import './App.css'; 

const App = () => {
  const cardsData = [
    { title: 'Card 1', description: 'This is card 1.', imageUrl: 'my-react-app\src\components\flash-cards.png' },
    { title: 'Card 2', description: 'This is card 2.', imageUrl: 'my-react-app\src\components\flash-cards.png' },
  ];

  const handleButtonClick = (title) => {
    alert(`Button clicked for ${title}`);
  };

  return (
    <div className="app">
      {cardsData.map((card, index) => (
        <div key={index} className="card-container">
          <Card {...card} />
          <Button onClick={() => handleButtonClick(card.title)} style={{ marginTop: '10px' }}>
            Click me
          </Button>
        </div>
      ))}
    </div>
  );
};

export default App;
