import React, { useEffect, useState } from 'react';
import IArticle from '../../shared/modules/article';
import Article from '../Article/Article';

const ArticleList = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className='row'>
      {data.map((item: IArticle) => (
        <Article key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ArticleList;
