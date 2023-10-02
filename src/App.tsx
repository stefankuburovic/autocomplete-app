import React from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';
import data from './data/dummy.json';

const App: React.FC = () => {
  const handleSelect = (selectedItem: string) => {
    // Handle the selected item (e.g., set it in state or perform some action)
    console.log(`Selected: ${selectedItem}`);
  };

  return (
      <div className="App">
        <h1>AutoComplete Example</h1>
        <AutoComplete data={data} onSelect={handleSelect} />
      </div>
  );
};

export default App;