import simpsonsQuotes from '../../img/portfolio/simpsonsQuotes.png';
import gameApp from '../../img/portfolio/gameApp.png';
import rickAndMorty from '../../img/portfolio/rickAndMorty.png';
import krow from '../../img/portfolio/krow.png';
import portefolio from '../../img/portfolio/portefolio.png';
import flags from '../../img/portfolio/flags.png';
import hungerStrikes from '../../img/portfolio/hungerStrike.png';

// import expenseApp from '../../img/portfolio/mobile/expense_app.png';

export const projects = [
  {
    img: `${simpsonsQuotes}`,
    url: 'https://ajax-simpsons-quotes-wcs.netlify.app',
    title: 'Simpsons Quotes',
    description: 'Game to get your favorite Simpson Character Quote. Built with Vanilla JavaScript.',
    github: 'https://github.com/LuisClara92/ajax-simpsons-quotes',
  },
  {
    img: `${flags}`,
    url: 'https://flags-around-world.netlify.app/',
    title: 'Flags From World',
    description: 
      'A project for WCS Lisbon built with React (with dark mode) using Styled-Components and restcountries API.',
    github: 'https://github.com/LuisClara92/flags-react',
  },
  {
    img: `${hungerStrikes}`,
    url: 'https://hunger-strike.netlify.app/',
    title: 'Hunger Strike',
    description: 
      'A Group project for 48h Hackathon of WCS built with React using Bootstrap and 2 different API\'s.',
    github: 'https://github.com/LuisClara92/hackathon',
  },
  {
    img: `${gameApp}`,
    url: 'https://lc-game-app.netlify.app/',
    title: 'Game Library',
    description: 
      'A project for Checkpoint 2 of WCS Lisbon built with React using MaterialUI and wild-games API.',
    github: 'https://github.com/LuisClara92/game-app',
  },
  {
    img: `${rickAndMorty}`,
    url: 'https://rick-and-morty-lc.netlify.app/',
    title: 'Rick and Morty Wiki',
    description:
      'A Group project for WCS Lisbon built with React using Styled-Components and Rick and Morty API.',
    github: 'https://github.com/TRM-WCSLisbon/ricky_morty_react_app',
  },
  {
    img: `${portefolio}`,
    url: 'https://luis-clara-web-developer.netlify.app/',
    title: 'Portfolio',
    description:
      'A project dedicated to show some of my skills and knowledge, built with React using Styled-Components.',
    github: '',
  },
  {
    img: `${krow}`,
    url: 'https://www.krow.works/',
    title: 'Krow.works',
    description: 
      'A Full-stack project for Krow built with React and Node.js, using Stripe and Hubspot.',
    github: '',
  },
];

export const mobile = [
  {
    title: 'Expense App',
    img: `${krow}`,
  },
];
