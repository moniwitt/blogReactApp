import React from 'react';
import './Posts.css';
import Post from '../Post/Post';
import photoBali from '../img/Bali.jpg';

const Posts = () => {
  const blogPosts = [
    {
      title: 'Bali Indonesia',
      body: `Beyond stunning beaches and magical temples, Bali has virtually every kind of natural beauty. Glorious mountainous areas with lush greenery, scenic lakes, gorgeous waterfalls, iconic rice fields, flower gardens, gushing sacred rivers and secret canyons all make up the island’s landscape.`,
      author: 'Monica Witt ',
      imgUrl: { photoBali },
    },
    {
      title: 'Data Structure ',
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked 
      over one another in the canteen. The plate 
      which is at the top is the first one to be 
      removed, i.e. the plate which has been placed 
      at the bottommost position remains in the 
      stack for the longest period of time. So, it 
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
      author: 'Suresh Kr',
      imgUrl:
        'https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png',
    },
    {
      title: 'Algorithm',
      body: `The word Algorithm means “a process 
      or set of rules to be followed in calculations 
      or other problem-solving operations”. Therefore 
      Algorithm refers to a set of rules/instructions 
      that step-by-step define how a work is to be 
      executed upon in order to get the expected 
      results. `,
      author: 'Monu Kr',
      imgUrl:
        'https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png',
    },
    {
      title: 'Computer Network',
      body: `An interconnection of multiple devices, 
      also known as hosts, that are connected using 
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can 
      also include multiple devices/mediums which 
      help in the communication between two different 
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges. `,
      author: 'Sonu Kr',
      imgUrl:
        'https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png',
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
