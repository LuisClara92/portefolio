import simpsonsQuotes from '../../img/portfolio/simpsonsQuotes.png';
import gameApp from '../../img/portfolio/gameApp.png';
import rickAndMorty from '../../img/portfolio/rickAndMorty.png';
import krow from '../../img/portfolio/krow.png';

// import expenseApp from '../../img/portfolio/mobile/expense_app.png';

export const projects = [
  {
    img: `${simpsonsQuotes}`,
    url: 'https://ajax-simpsons-quotes-wcs.netlify.app',
    title: 'Simpsons Quotes',
    description: 'Game to get your favorite Quote. Built with Vanilla JavaScript.',
    github: 'https://github.com/LuisClara92/ajax-simpsons-quotes',
  },
  {
    img: `${gameApp}`,
    url: 'https://wcs-lisbon-lc-game-app.netlify.app/',
    title: 'Game Library',
    description: 'A React project for WCS Lisbon built with React using MaterialUI and wild-games API from herokuapp.',
    github: 'https://github.com/LuisClara92/game-app',
  },
  {
    img: `${rickAndMorty}`,
    url: 'https://rick-and-morty-lc.netlify.app/',
    title: 'Rick and Morty Wiki',
    description:
      'A React project for WCS Lisbon built with React using styled-Components and Rick and Morty API.',
    github: 'https://github.com/TRM-WCSLisbon/ricky_morty_react_app',
  },
  {
    img: `${krow}`,
    url: 'https://www.krow.works/',
    title: 'Krow.works',
    description: 'A Full-stack project for Krow built with React and Node.js using Stripe and Hubspot.',
    github: '',
  },
];

export const mobile = [
  {
    title: 'Expense App',
    img: `${krow}`,
  },
];
