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
          <span className="tooltip">*
             <span className="tooltip__text">472 if interchange stations (i.e. different sets of platforms) are counted separately.
             </span>
            </span>
            , exactly one hundred more stations than Shanghai, which comes in second) as well as the highest ridership, most boardings per mile, longest track lengths, and most lines of any rapid transit system in North America.
         </p>
         <p className="section--middle">
           All of that is a roundabout way of saying that - despite 
           <a className="link" href="https://www.nytimes.com/interactive/2018/05/09/nyregion/subway-crisis-mta-decisions-signals-rules.html" target="_blank"> its mounting troubles</a>
            - the subway system is a fundamental and dynamic part of New York City and its economy. <i>But how exactly?</i> We can explore this relationship using businesses, their addresses, and their functional tag, classified according to the Locus Classification System. Specifically, we compare the distributions of businesses surrounding subway stations and non-subway areas, and identify various economic communities in New York through the lens of subway stations.
         </p>
         <p className="section--right sidebar">
           The Locus Classification System (LCS) assigns economic entities a functional barcode, with each field in the barcode corresponding to a specific attribute of the classified entity. LCS applies a unified framework to classify both companies and occupations.
         </p>
         <hr className="section__rule" />
       </section>
      </article>
    );
  }
}

export default App;
