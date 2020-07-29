import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PageDefault from '../../components/PageDefault';
import './index.css';

function Page404(){
    return (
      <PageDefault>
        <h1>FlappyBirds</h1>

        <iframe className="canvas" 
        src="https://mariosouto.com/flappy-bird-devsoutinho/" 
        frameBorder="0" 
        scrolling="no"
        algin="center"
        width="320" 
        height="480" />

        <p/>

        <Link to="/">
          Ir para home
        </Link>
        
        <p/>

      </PageDefault>
    )
  }

  export default Page404;