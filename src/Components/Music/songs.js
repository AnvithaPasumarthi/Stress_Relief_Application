
import React from 'react';

import './AudioPlayer.css';
import AudioPlayer from './index';

 function songs (){
   const songs=[
  {
    url: 'https://www.talk2trend.com/english/alan-walker-alone.mp3',
    cover:
      'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
    artist: {
      name: 'Alan Walker',
      song: 'Alone',
    },
  },
  {
    url: 'https://www.talk2trend.com/english/imagine-dragons-believer.mp3',
    cover:
      'http://www.cmchatlive.com/scenic/wp-content/uploads/2015/05/hugo-99-problems-country-that.jpg',
    artist: {
      name: 'Imagine Dragons',
      song: 'beliver',
    },
  }, 
  {
    url: 'https://www.talk2trend.com/english/blank-space.mp3',
    cover:
      'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
    artist: {
      name: 'Taylor Swift',
      song: 'Blank Space',
    },
  },
  {
    url:'https://www.talk2trend.com/english/maroon-5-girls-like-you.mp3',
    cover:
      'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
    artist: {
      name: 'Maroon',
      song: 'Girls like you ',
    }, 
  },
  {
    url: 'https://www.talk2trend.com/english/see-you-again-ft-charlie-puth.mp3',
    artist: {
      name: 'Charlie Puth',
      song: 'See you again',
    },
  },
  {
    url:
      'https://www.talk2trend.com/english/taki-taki-mp3-free-download.mp3',
    cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
    artist: {
      name: 'DJ Snake',
      song: 'Taki Taki',
    },
  },
];

return (
  <>
  <div className="container">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,400,700"
      rel="stylesheet"
      type="text/css"
    />
    <AudioPlayer songs={songs} />

  </div>
  </>
);
}

export default songs;


