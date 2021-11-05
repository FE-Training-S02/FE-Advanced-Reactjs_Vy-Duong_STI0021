import React from 'react';
import IArticle from '../../shared/modules/article';

const Article = (props: { item: IArticle }) => {
  return (
    <div className='container'>
      <li className='col'>
        <div className='new-card'>
          <img
            className='new-card-img'
            src={require(`../../assets/img/${props.item.picture}`).default}
            alt={props.item.title}
          />
          <div className='new-card-body'>
            <h4 className='new-card-category'>{props.item.category}</h4>
            <h3 className='new-card-title'>{props.item.title}</h3>
            <p className='new-card-content'>{props.item.content}</p>
            <div className='new-card-info'>
              <p>
                BY <span className='new-card-author'>{props.item.author}</span>
              </p>
              <p>{props.item.createdDate}</p>
              <p>12 mins read</p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Article;
