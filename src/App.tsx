import './App.scss';
import React, { useState, useEffect } from 'react';
import Article from './shared/modules/article';
import ArticleElement from './components/article-element';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'>
      <ul className='row'>
        {data.map((item: Article) => (
          <ArticleElement key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
