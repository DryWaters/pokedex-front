import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import PokemonCard from './components/PokemonCard';
import LocalJSON from './local_data/example_single.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PokemonCard {...LocalJSON} />, document.getElementById('root'));
registerServiceWorker();
