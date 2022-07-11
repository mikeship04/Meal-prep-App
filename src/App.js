import React from 'react';
import './App.css';

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '779106e3f6mshd8ff79161f60763p1564cbjsn3c570f10dc5a',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    
    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[])

  return (
    <div className="App">
      <p>Hello world!</p>
    </div>
  );
}

export default App;
