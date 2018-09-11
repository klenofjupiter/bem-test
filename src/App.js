import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// class SubwayArticle extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ACT_3 : false, 
//       ACT_4: false, 
//       ACT_ALL: false, 
//       EL_3B: false, 
//       EL_4D: false, 
//       EL_4Div: false, 
//       EL_4F: false, 
//       EL_ALL: false,
//       RES_ALL: false, 
//       RES_C: false, 
//       RES_D: false,
//     }
//   }

//   toggleBokeh = evt => {
//     this.setState({ [evt.target.name] : !this.state[evt.target.name]})
//   }
//   render() {
//     return (
//       <article className="article articleContent"> 
//        <h1 className="article__title">NYC Subway</h1>
//        <section className="section4Column">
//          <img className="img section4Column--left" src="https://media.giphy.com/media/wotcaeqAMf8KQ/giphy.gif" />
//          <p className="section4Column--middle">
//            It is hard to mentally separate New York City from its iconic subway system, which can boast of having the most stations of any  
//            <a className="link" href="https://en.wikipedia.org/wiki/List_of_metro_systems#List"> metro system in the world</a>
//           <span className="tooltip">*
//              <span className="tooltip__text">472 if interchange stations (i.e. different sets of platforms) are counted separately.
//              </span>
//             </span>
//             , exactly one hundred more stations than Shanghai, which comes in second) as well as the highest ridership, most boardings per mile, longest track lengths, and most lines of any rapid transit system in North America.
//          </p>
//          <p className="section4Column--middle">
//            All of that is a roundabout way of saying that - despite 
//            <a className="link" href="https://www.nytimes.com/interactive/2018/05/09/nyregion/subway-crisis-mta-decisions-signals-rules.html"> its mounting troubles</a>
//             - the subway system is a fundamental and dynamic part of New York City and its economy. <i>But how exactly?</i> We can explore this relationship using businesses, their addresses, and their functional tag, classified according to the Locus Classification System. Specifically, we compare the distributions of businesses surrounding subway stations and non-subway areas, and identify various economic communities in New York through the lens of subway stations.
//          </p>
//          <p className="section4Column--right sidebar">
//            The Locus Classification System (LCS) assigns economic entities a functional barcode, with each field in the barcode corresponding to a specific attribute of the classified entity. LCS applies a unified framework to classify both companies and occupations.
//          </p>
//          <hr className="section4Column__rule" />
//        </section>
//        <section className="section4Column">
//           <img className="img img--zoom section4Column--left" src="franklin_st.png" />
//           <p className="section4Column--middle">
//             First, we identify the businesses surrounding a station. Take the Franklin St subway station in Tribeca as an example. We can define a radius (792 ft, roughly 3 blocks 
//               <span className="tooltip"> *
//                 <span className="tooltip__text">This is roughly the same length as one avenue.
//                 </span>
//               </span>
//               ) around the station and identify all businesses that fall within that radius. We do this for each subway station in New York City, as well as a corresponding number of randomly selected points (taking care to ensure that the radii of these points do not overlap with the radii of any subway station). We will call these subway areas and non-subway areas, respectively.
//           </p>
//           <p className="section4Column--middle">
//             We then tag all businesses by their Locus functional attributes: what they do and for whom they do it. At the most basic level, all companies perform one of four activities:
//             <span className="tooltip">
//              <span className="span--activity1Highlight">procure</span>
//               <span className="tooltip__text">Locus: 1.*.*</span>
//             </span>
//             (which includes sourcing, transporting, & storing resources), 
//             <span className="tooltip">
//               <span className="span--activity2Highlight">produce</span>
//               <span className="tooltip__text">Locus: 2.*.*</span>
//               (designing, manufacturing, repairing)
//             </span>
//             <span className="tooltip">
//               <span className="span--activity3Highlight">exchange</span>
//               <span className="tooltip__text">Locus: 3.*.*</span>
//             </span>
//             (marketing, selling, accounting), or 
//             <span className="tooltip">
//               <span className="span--activity4Highlight">manage</span>
//               <span className="tooltip__text">Locus: 4.*.*</span>
//             </span> 
//             (strategizing, allocating, auditing).
//           </p>
//           <p  className="sidebar section4Column--right">
//            Wondering why some words are colored? Hover over verbs and nouns that are colored to learn what Locus code they correspond to. Each word corresponds to a specific Locus activity or resource and corresponding color.
//           </p>
//           <p className="section4Column--middle">
//           By calculating the proportion of businesses in an area that perform a particular function, we can identify functional patterns. To illustrate, many investment banks (they allocate money) and management consultancies (they strategize) are located in Midtown. Sure enough, the proportion of businesses around the 51st St station that manage is 42%, vastly higher than most subway stations (the average is 14%), indicating a high concentration of this function (and business suits) there. We can do the same calculations for all functions in each area.
//           </p>
//           <hr className="section4Column__rule" />
//        </section>
//        <section className="section4Column">
//          <h3 className="section4Column--left">
//          So how would the distribution of businesses in subway areas be different?
//          </h3>
//          <p className="section4Column--middle">
//          Well, since subways are a major mode of transportation for commuters and visitors in New York, we would expect businesses in the immediate vicinity of stations to be more reliant on foot traffic, visibility, and convenience for their customers.
//          </p>
//          <p className="section4Column--middle">
//           For that we want to investigate businesses that primarily deal with
//          <span className="tooltip">
//            <span className="span--activity3Highlight">selling</span>
//            <span className="tooltip__text">In the charts, selling is highlighted and referencd by its Locus code, 3.1.*.</span>
//            </span>.
//          </p>
//          <iframe className="section4Column--middle iframe" id="datawrapper-chart-IfIUS-4" title="businesses that sell near and away from subways" src="//datawrapper.dwcdn.net/IfIUS/4/" scrolling="no" frameBorder="0" allowtransparency="true"  height="308" />
//          <p className="section4Column--middle">
//          We see that this is the case with the proportion of businesses that
//             <span className="tooltip">
//               <span className="span--activity3Highlight">sell</span>
//               <span className="tooltip__text">Locus: 3.1.*</span>
//             </span>
//             , which make up 30% of businesses in subway areas and only 28% of businesses in non-subway areas. While a 2 percentage point (pp) difference may not seem like much, that can translate into an additional 100 businesses in a three block radius, and roughly 10,000 more businesses across the city. The bulk of this difference can be attributed to the 
//              <span className="tooltip">
//               <span className="span--activity3Highlight">selling</span>
//               <span className="tooltip__text">Locus: 3.1.*</span>
//             </span> of 
//             <span className="tooltip">
//               <span className="span--resourceEHighlight">food</span>
//               <span className="tooltip__text">Locus: E**</span>
//             </span>
//             - restaurants, food carts, bars, and grocery stores - which make up around 16% of businesses in subway areas and only 12% of businesses in non-subway areas. Put differently, the proportion of food and beverage businesses is <b>one-third greater</b> in subway areas
//             <span className="tooltip">*
//               <span className="tooltip__text">
//                 Another finding in support of this “increased foot traffic” effect is the differences in businesses with consumer customers, with subway areas having higher proportions (57.5% compared to 54.7%).
//               </span>
//             </span>
//             . In contrast, the difference in the proportion of businesses that sell other resource types is never larger than 1pp.
//          </p>
//          <iframe className="section4Column--middle iframe" title="businesses that sell food and drink near subway areas" id="datawrapper-chart-UFIaN" src="//datawrapper.dwcdn.net/UFIaN/4/" scrolling="no" frameBorder="0" allowtransparency="true" height="308" />
//           <p className="section4Column--middle">
//            The proportion of businesses that 
//             <span className="tooltip">
//               <span className="span--activity3Highlight">sell</span>
//               <span className="tooltip__text">Locus: 3.1.*</span>
//             </span> 
//             also decreases as a function of distance from the subway. Specifically, there is an estimated 4pp drop for every mile away from a subway station. However, although we thought the increase with proximity to subway entrances would apply to 
//             <span className="tooltip">
//               <span className="span--resourceEHighlight">restaurants, bars, and grocery stores</span>
//               <span className="tooltip__text">Locus: 3.1.* E**
//               </span>
//             </span>
//             , we did not find a statistically significant effect as we get further from subway stations. Instead, we found strong decreases in the proportion of businesses selling clothing, souvenirs, and equipment (2.8pp for every mile) and diversified resources (0.8pp for every mile).
//           </p>
//           <p className="section4Column--middle">
//             One might also suspect that businesses that deal with transportation and logistics may benefit from being close to the subway system, since being highly connected is essential for them.  We would hence expect these businesses to be highly concentrated in subway areas. This turned out to be true particularly for businesses that
//                <span className="tooltip">
//                 <span className="span--activity1Highlight">transport</span>
//                 <span className="tooltip__text">Locus: 1.2.*</span>
//               </span>.
//           </p>
//           <iframe className="section4Column--middle iframe" title="businesses that deal with transport and logistics" id="datawrapper-chart-4qBfY" src="//datawrapper.dwcdn.net/4qBfY/2/" scrolling="no" frameBorder="0" allowtransparency="true" height="308" />
//           <p className="section4Column--middle">
//             Bearing in mind that these businesses represent only 3% of all businesses, they were still more likely to be found close to subway stations, making up 3.2% of businesses in subway areas compared to 2.7% in non-subway areas. This is true for the 
//               <span className="tooltip">
//                 <span className="span--activity1Highlight">transportation</span>
//                 <span className="tooltip__text">Locus: 1.2.2</span>
//               </span>
//                of 
//                <span className="tooltip">
//                   <span className="span--resourceFHighlight">people</span>
//                   <span className="tooltip__text">Locus: F</span>
//                </span>
//                , as we might expect. But it is also true for the
//               <span className="tooltip">
//                 <span className="span--activity1Highlight">transportation</span>
//                 <span className="tooltip__text">Locus: 1.2.2</span>
//               </span> 
//               of 
//               <span className="tooltip">
//                 <span className="span--resourceBHighlight">equipment</span>
//                 <span className="tooltip__text">Locus: B**</span>
//               </span>
//                and 
//                <span className="tooltip">
//                 <span className="span--resourceCHighlight">information</span>
//                 <span className="tooltip__text">Locus: 1.2 C**</span>
//               </span>
//               . Examples of the former include vehicle towing, waste collection, and moving services; while the latter includes post offices, wireless carriers, and other telecommunication services.
//           </p>
//           <iframe className="section4Column--middle iframe" title="procurement businesses" id="datawrapper-chart-MXRsC" src="//datawrapper.dwcdn.net/MXRsC/4/" scrolling="no" frameBorder="0" allowtransparency="true" height="308" />
//           <hr className="section4Column__rule" />
//        </section>
//        <section className="section4Column">
//           <p className="section4Column--middle">While differences between the businesses in subway and non-subway areas exist, it turns out that subway areas are not all the same. In fact, these differences are more pronounced than the difference between subway and non-subway areas. This is not actually surprising. Most would agree that the concrete jungle of the Financial District looks very different from the residential landscape of the Upper East Side, in no small part due to the businesses that make up the neighborhood.
//            </p>
//            <p className="section4Column--middle">Visualizing, deconstructing, and understanding the boundaries between these different economic communities is more suitably done with subway stations than zipcodes given how integral and noticeable they are to the daily lives of New Yorkers.
//            </p>
//            <h2 className="section4Column--middle">PROFESSIONAL SERVICES AND GOVERNMENTAL OFFICES</h2>
//            <p className="section4Column--middle">Let's revisit the Financial District. Its subway stations
//             <span className="tooltip">*
//               <span className="tooltip__text">Wall St, Broad St, Fulton St, Rector St, and Cortland St
//               </span>
//             </span>
//              have a distinct functional distribution, similar to that of subway stations in Two Bridges
//              <span className="tooltip">*
//                 <span className="tooltip__text">
//                 City Hall, Brooklyn Bridge-City Hall, Chambers St
//                 </span>
//             </span>
//             , Midtown
//             <span className="tooltip">*
//               <span className="tooltip__text">Times Square, 34th St, 50th St, Bryant Park, Lexington Ave-53rd St, Lexington Ave-59th St, Grand Central
//               </span>
//             </span>
//             , and Brooklyn Heights
//             <span className="tooltip">*
//               <span className="tooltip__text">
//                 Borough Hall, Hoyt St, Court St, Jay St-Metro Tech
//               </span>
//             </span>
//             . Specifically, these economic communities are marked by high concentrations of businesses that 
//             <span className="tooltip">
//               <span className="span--activity4Highlight">manage</span>
//               <span className="tooltip__text"> Locus: 4.*.*</span>
//             </span>
//              or act on 
//              <span className="tooltip">
//                 <span className="span--resourceDHighlight">money</span>
//                 <span className="tooltip__text">Locus: D**</span>
//               </span>
//                and 
//               <span className="tooltip">
//                 <span className="span--DIVHighlight">diversified resources</span>
//                 <span className="tooltip__text">Locus: Div</span>
//               </span>
//               .
//            </p>
//            {  this.state.ACT_4 ? 
//             <span className="span--centeredContainer section4Column--all "><iframe title="activity 4.*.*" className="bokeh section4Column--all" src="/ACT_4.html" name="ACT_4"/>  <button name="ACT_4" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="ACT_4" className="section4Column--middle span--center button" onClick={this.toggleBokeh}> click to open </button>
//             }
//            <p className="section4Column--middle">
//             It is possible to identify subclusters by being more specific about what businesses do, specifically: professional services, finance, and public administration. Professional services is high in businesses that 
//               <span className="tooltip">
//                 <span className='span--activity4Highlight'>manage</span>
//                 <span className="tooltip__text">Locus: 4.*.* </span>
//               </span>
//               <span className="tooltip">
//                 <span className="span--DIVHighlight">diversified resources</span>
//                 <span className="tooltip__text">Locus: Div</span>
//               </span>
//               ; finance is high in businesses that 
//               <span className="tooltip">
//                 <span className="span--activity4Highlight">manage</span>
//                 <span className="tooltip__text">Locus: 4.*.* </span>
//               </span>
//               <span className="tooltip">
//                 <span className="span--resourceDHighlight">money</span>
//                 <span className="tooltip__text">Locus: D.*.* </span>
//               </span>
//               ; and public administration is high in businesses (or in this case, governmental entities) that
//                <span className="tooltip">
//                 <span className="span--activity4Highlight">manage</span>
//                 <span className="tooltip__text">Locus: 4.*.* </span>
//               </span>
//                <span className="tooltip">
//                 <span className="span--resourceFHighlight">people</span>
//                 <span className="tooltip__text">Locus: F </span>
//               </span>
//               . All four of the areas fit the profile of professional services, but only Two Bridges fits the public administration profile, and only Midtown and Financial District fit the finance profile.
//            </p>
//            {  this.state.EL_4Div ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="function 4Div" className="bokeh section4Column--all" src="/EL_4Div.html" name="EL_4Div"/> <button name="EL_4Div" className="button span--center section4Column--middle" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="EL_4Div" className="button section4Column--middle span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//            {  this.state.EL_4D ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="function 4D" className="bokeh section4Column--all" src="/EL_4D.html" name="EL_4D"/> <button name="EL_4D" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="EL_4D" className="button section4Column--middle span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//            {  this.state.EL_4F ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="function 4F" className="bokeh section4Column--all" src="/EL_4F.html" name="EL_4F"/> <button name="EL_4F" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="EL_4F" className="section4Column--middle button span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//             <h2 className="section4Column--middle">Tech and Information</h2>
//             <p className="section4Column--middle">
//             Related to professional services are the technology and information functions, which have obvious geographic patterns. This is visible from the concentration of businesses that
//                <span className="tooltip">
//                   <span className='span--activity2Highlight'>design</span>
//                   <span className="tooltip__text">Locus: 2.1.*</span>
//                </span>
//                , but is particularly striking when we look at the proportion of businesses around each subway station that act on
//                 <span className="tooltip">
//                   <span className="span--resourceCHighlight">information</span>
//                   <span className="tooltip__text">Locus: C**</span>
//                 </span> 
//                 resources.
//             </p>
//            {  this.state.RES_C ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="resource C" className="bokeh section4Column--all" src="/RES_C.html" name="RES_C"/> <button name="RES_C" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="RES_C" className="section4Column--middle button span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//             <p className="section4Column--middle">
//                The concentration emanates from Soho and Nolita
//                <span className="tooltip">*
//                   <span className="tooltip__text">Houston St, Prince St, Bleecker St, Spring St</span>
//                </span>
//                , where the proportion of businesses that act on Information is 15-28%, compared to the median of 6%. There is also a second hotspot around the Flatiron District - sometimes referred to as Silicon Alley - with slightly lower proportions of around 18-20%. This concentration of Information businesses is not as pronounced immediately around these hotspots (e.g. in the financial district or midtown), and gets even lower as we move further out. In the other boroughs, it is almost non-existent.
//             </p>
//        </section>
//        <section className="section4Column">
//           <h2 className="section4Column--middle">Tourist Destinations</h2>
//             <p className="section4Column--middle">
//             There are also communities that have particularly high concentrations of businesses that Sell or Exchange. While this function is highly represented in any community (the median proportion is 33%), there are two clusters of subway stations within New York that stand out — ones that are heavy tourist destinations. These are the stretch from Times Square to the Empire State Building and Little Italy-Chinatown. We also see similar concentrations in the subway stations next to stadiums (161st St-Yankee Stadium and Atlantic Av-Barclays Center).
//             </p>
//            {  this.state.ACT_3 ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="activity 3" className="bokeh section4Column--all" src="/ACT_3.html" name="ACT_3"/> <button name="ACT_3" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="ACT_3" className="section4Column--middle button span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//             <p className="section4Column--middle">It appears that the specific resource driving this concentration of sales is Equipment, presumably clothing and souvenirs. Whereas the median proportion of businesses that sell equipment is 9%, that figure is between 25-30% in Times Square, and between 14-20% in Chinatown. Similar increases are also observable in the stadium-adjacent subway stations. 
//             </p>
//            {  this.state.EL_3B ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="function 3B" className="bokeh section4Column--all" src="/EL_3B.html" name="EL_4F"/> <button name="EL_3B" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="EL_3B" className="section4Column--middle button span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//             <p className="section4Column--middle">
//               Interestingly, these areas with high proportions of businesses selling equipment also have relatively high proportions of those selling food.
//             </p>
//        </section>
//        <section className="section4Column">
//             <p className="section4Column--middle">
//             A recent 
//             <a className="link" href="https://www.renthop.com/studies/nyc/nyc-rents-by-subway-proximity">
//             report
//             </a>
//              found that living in apartments that are a ten minute walk from subway stations decreases rent by around 10%
//              <span className="tooltip">
//                 *
//                 <span className="tooltip__text">
//                   Let's be honest, in New York, that is a decent chunk of money.
//                 </span>
//               </span>
//               . Why is this the case? While a shorter commute no doubt plays a role, it is not a stretch to imagine it being at least partly due to the economic composition of each area; the proportion of restaurants and bars it has, for example. There are undoubtedly many more interesting changes in the presence of a subway station. Perhaps as a natural experiment, we can track how the composition of businesses surrounding the recently completed 2nd Avenue subway stations on 72nd, 86th, and 96th St will have changed from their current state in five or ten years.
//             </p>
//             <p className="section4Column--middle">
//             Additionally, as evidenced in the latter half of this article, cities contain various and distinct economic communities. Using subway stations as landmarks enables all of us to chart our daily path and explore the economic communities we interact with, and perhaps learn more about those with which we do not. A final question remains: do the businesses around the Wall St. station look similar to those around the Downtown Crossing station in Boston and the Canary Wharf station in London? Likewise, do Yankee Stadium and Fenway Park belong to the same economic community? With the right data, these questions can be easily answered.
//             </p>
//             <p className="section4Column--middle"> 
//              Explore on your own below!
//             </p> 
//            {  this.state.ACT_ALL ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="all activities" className="bokeh section4Column--all" src="/ACT_ALL.html" name="ACT_ALL"/> <button name="ACT_ALL" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="ACT_ALL" className=" button section4Column--middle span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//             {  this.state.RES_ALL ? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="all resources" className="bokeh section4Column--all" src="/RES_ALL.html" name="RES_ALL"/> <button name="RES_ALL" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="RES_ALL" className="button section4Column--middle span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//            {  this.state.EL_ALL? 
//             <span className="span--centeredContainer section4Column--all"><iframe title="all functions" className="bokeh section4Column--all" src="/EL_ALL.html" name="EL_ALL"/> <button name="EL_ALL" className="button span--center" onClick={this.toggleBokeh}>close</button> </span> :
//             <button name="EL_ALL" className="button section4Column--middle span--center" onClick={this.toggleBokeh}> click to open </button>
//             }
//             <hr className="section4Column__rule"/>
//        </section>
//        <section className="section4Column">
//         <h3 className="section4Column--middle"> Notes</h3>
//         <p className="section4Column--middle">
//         Subway station data was obtained from
//           <a className="link" href="https://data.cityofnewyork.us/Transportation/Subway-Stations/arq3-7z49">
//           NYCOpenData
//           </a>
//           , while the business data was obtained from Dun & Bradstreet. To compare the differences between subway and non-subway areas, we used the independent samples t-test, controlling for multiple testing with the 
//           <a className="link" href="https://en.wikipedia.org/wiki/False_discovery_rate#Benjamini%E2%80%93Hochberg_procedure" >
//             Benjamini-Hochberg false discovery rate
//           </a>
//           . To estimate the changes in function with distance from subway stations, we used a multiple regression model and included a quadratic term for distance (to account for its exponential distribution) as well as the
//            <a className="link" href="https://pypi.org/project/uszipcode/">
//             population density, average wage, and number of housing units
//           </a>
//            of the zip code to which the coordinate belonged. The map visualizations were made with
//             <a className="link" href="https://bokeh.pydata.org/">
//             Bokeh
//             </a>
//              in Python.
//         </p>
//        </section>

//       </article>
//     );
//   }
// }

//Nav Bar
// class App extends Component {
//   render() {
//     return(

//       <header className="header headerContent">
//         <Link to="/" className="logoLink"><img className="header__logo" src="cropped-orange.png"/></Link>
//          <div className="navLinkList navLinkListContent"><a className="navLinkList__item" href="https://www.home.locus/about/">ABOUT</a> <a className="navLinkList__item" href="https://www.home.locus/people-and-teams">PEOPLE & TEAMS</a> <a className="navLinkList__item" href="https://www.home.locus/contact/">CONTACT</a></div>
//       </header>

//     )
//   }
// }

//table of contents
// class TableOfContents extends Component {
//   render() {
//     return (
//       <ul className="cardList">
//         <li className="articleCard">
//           <a to="/knowles-article">
//             <img className="articleCard__image" src="36-Phase.png" />
//             <hr />
//             <span className="articleCard__textArea" >
//               <span className="articleCard__title"> B2B vs. B2C </span> <span className="articleCard__date"> some date</span>
//               <span className="articleCard__articlePreview "> how the end customer changes a business </span>
//             </span>
//           </a>
//         </li>
//         <li className="articleCard">
//          <a to="/subway-article">
//           <img className="articleCard__image" src="franklin_st.png" />
//           <hr />
//           <span className="articleCard__textArea" >
//             <span className="articleCard__title"> NYC Subway</span> <span className="articleCard__date"> some date</span>
//             <span className="articleCard__articlePreview"> public transportation and micro-economies </span>
//           </span>
//           </a>
//         </li>
//         <li className="articleCard">
//          <a to="/subway-article">
//           <img className="articleCard__image" src="36-Phase.png" />
//           <hr />
//           <span className="articleCard__textArea" >
//             <span className="articleCard__title"> test article</span> <span className="articleCard__date"> some date</span>
//             <span className="articleCard__articlePreview">lorem ipsum dolor sit amet </span>
//           </span>
//           </a>
//         </li>
//       </ul>
//     )
//   }
// }

//footer 

// const Footer = () => (
//   <div className="footer footerContent">
//    <span>Locus Analytics: One Liberty Plaza, New York, NY, 10006, United States</span>
//      <a className="footer__link link" href="https://www.home.locus/about-fis">What is FIS?</a>
//      <a className="footer__link link" href="https://www.linkedin.com/company/locus-analytics/">LinkedIn</a>
//      <a className="footer__link link" href="https://twitter.com/locusanalytics">Twitter</a>
//   </div>
// )

//knowles article 

class App extends Component {
  constructor(){
    super();
    this.state = {
      barcodeIndex: 0,
      showB2B: true,
      inDev: false,
    };
  }

  distanceClicker = (up = true) => {
    if (up){
     if (this.state.barcodeIndex < 5) {
      let newInd = (this.state.barcodeIndex + 1)
      this.setState({barcodeIndex : newInd})
      }else{
       this.setState({barcodeIndex: 0})
     }
    }else {
      if(this.state.barcodeIndex > 0){
        let newInd = (this.state.barcodeIndex - 1)
        this.setState({barcodeIndex: newInd})
      }else{
        this.setState({barcodeIndex: 5})
      }
    }
  }

  businessClicker = () => {
    if(this.state.barcodeIndex !== 0){
      this.setState({barcodeIndex: 0})
    }else{
      this.setState({barcodeIndex: 1})
    }
  }

  switchClick = (bool) => {
    this.setState({showB2B: bool})
  }
  render() {
    return (
      <div className="article articleContent twoColumnArticle">
        <article className="twoColumnArticle--left">
          <h1 className="article__title article__title--withBackgroundImage article--backgroundImageBilly">2 B or 2 C: that is the Question</h1>
          <h4>Using Function to Distinguish B2B and B2C Companies</h4>
          <section>
            <p>A common distinction made in the business world is between businesses that sell to other businesses and businesses that sell to consumers (<strong>B2B</strong> and <strong>B2C</strong> respectively). While it is easy to determine if a single company is B2B or B2C, it is not entirely straightforward when attempting to do so for many companies within a dataset.</p>
            <p>Before we dive into our data, let&apos;s talk about organizing food.</p>
             <p><strong>Warning: Many of the examples in this article involve food products, so please make sure to eat before reading any further.</strong></p>
             <img src="food.gif" alt="Dancing Food" className="img"/>
            <p>Picture your local grocery store. Chances are, the products are organized in some variant of the following: baked goods and fresh vegetables in one aisle, raw meats in another, followed by frozen foods and dairy products, and candy across from soft drinks in the final aisle.</p>
            <p>Now, imagine a magical grocery store with shelves that shift around based on the needs of each customer who walks in. Leigh wants to make pasta for dinner, so the first aisle is now filled with different pasta types, marinara sauce, ground beef, fresh vegetables (for a balanced meal!), and assorted herbs. Aaron, on the other hand, does not know what he wants to buy, but he does have a gluten allergy, so the shelves now reshuffle such that every food item containing gluten is hidden. </p>
            <p>The difference between the grocery store just described and the grocery stores that exist in reality is similar to that of the Locus Classification System (LCS) and traditional classification systems used by governmental agencies, academics, and investment firms. A key factor is that Locus stores multiple attributes about companies in a standardized structure referred to as the <strong>barcode</strong> (illustrated on the right).</p>
            <p>Let’s talk through multiple attributes with B2B and B2C distinctions in mind.</p>
          </section>
          <section>
            <h4>Multiple Attributes</h4>
            <p>Traditional classification systems like GICS and NAICS are organized in a hierarchical (i.e. tree-like) taxonomies. This system of storing information is easy to navigate, but makes it difficult to find companies based on criteria that differ from those used to determine the original taxonomy. For example, B2B/B2C is not a GICS criterion, and so the most granular GICS groups contain both types of businesses, such as residential and commercial real estate companies, or apparel companies that sell directly and indirectly to consumers.</p>
            <p>In contrast, the Locus barcode specifies what a company does (produce engines), the customer (shipping companies), the intermediaries that exist (truck manufacturers and truck retailers) between them and the customer, how the customer uses the product (transport industrial equipment), and the customer’s customer (processed food manufacturer).</p>
            <p>This allows users to make flexible groupings based on any desired criteria. For example, querying the Locus database for all companies whose domain involves “transporting” would return the truck engine manufacturers, as well as truck manufacturers, aircraft wholesalers, public transit operators, automobile dealers, road construction, and many others. As we will see later, in order to select all B2C companies, we can query for all companies who i) have consumers as customers and ii) do not have intermediaries between them and their customers. The resulting company list will include apparel retailers, media streaming services, pharmacies, and many others.</p>
          </section>
        </article>
      </div>
    )
  }
}

export default App;
