import React from 'react';
import './Posts.css';
import Post from '../Post/Post';
import photoBali from '../img/Bali.jpg';
import photoMaldives from '../img/Maldives.jpg';
import photoArgentina from '../img/Argentina.jpg';
import photoChile from '../img/Chile.jpg';

const Posts = () => {
  const blogPosts = [
    {
      title: 'Bali Indonesia',
      body: `Beyond stunning beaches and magical temples, Bali has virtually every kind of natural beauty. Glorious mountainous areas with lush greenery, scenic lakes, gorgeous waterfalls, iconic rice fields, flower gardens, gushing sacred rivers and secret canyons all make up the island’s landscape.`,
      author: 'Monica Witt ',
      imgUrl: photoBali,
    },
    {
      title: 'Argentina - La Angostura ',
      body: `Nicknamed the garden of Patagonia, Villa la Angostura and the surrounding area is known to be one of the most beautiful parts of the the Lake District. Situated on the northwestern shore of Lake Nahuel Huapi north of Bariloche, Villa la Angostura has a small collection of fantastic hotels and an enviable location.`,
      author: 'Monica Witt',
      imgUrl: photoArgentina,
    },
    {
      title: 'Maldives',
      body: `The point of the Maldives is that it is not a single large island but is, instead, a collection of thousands of tiny coral islands. A few are large enough to support an international airport (on one island) or a small town called Male (on another island) that serves as the capital of the Maldives. But most are tiny.`,
      author: 'Monica Witt',
      imgUrl: photoMaldives,
    },
    {
      title: 'Chile - Pichilemu',
      body: `It is widely considered one of the best beaches for surfing worldwide. In 2012, it was named one of the "50 most thrilling surf destinations". Pichilemu is regarded as the prime location for surfing in Chile, particularly at Punta de Lobos.`,
      author: 'Monica Witt',
      imgUrl: photoChile,
    },
  ];

  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
