import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <article className="article articleContent"> 
       <h1 className="article__title">NYC Subway</h1>
       <section className="section">
         <img className="img section--left" src="https://media.giphy.com/media/wotcaeqAMf8KQ/giphy.gif" />
         <p className="section--middle">
           It is hard to mentally separate New York City from its iconic subway system, which can boast of having the most stations of any  
           <a className="link" href="https://en.wikipedia.org/wiki/List_of_metro_systems#List" target="_blank"> metro system in the world</a>
         </p>
       </section>
      </article>
    );
  }
}

export default App;
