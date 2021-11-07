import React, { useEffect, useState } from 'react';
import Article from '../../shared/models/article';
import ArticleItem from '../ArticleItem/ArticleItem';

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
  <div className="container">
    <ul className="row">
      {data.map((item: Article) => (
        <ArticleItem key={item.id} item={item} />
      ))}
    </ul>
  </div>
  );
};

export default ArticleList;
