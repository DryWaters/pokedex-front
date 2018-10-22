import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Button } from 'reactstrap';

import { getRangeOfPokemon } from '../core/PokemonAPI';
import Header from './Header';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
import LoadingError from './LoadingError';
import PokemonModal from '../modal/PokemonModal';

import '../../styles/home/Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      error: '',
      shouldInfiniteScroll: false,
      initialLoad: true,
      modal: true,
    };
    this.perPage = 20;
  }

  /**
   * Fetches a page of pokemon from the server and adds them to the current state
   * @param  {int} page - the page to fetch (1 indexed)
   * @return {void}
   */
  fetchPokemon(page) {
    if (this.state.error)
        return;

    const id = (page - 1) * this.perPage + 1;
    let range;
    if (page === 41) {
      this.setState({ shouldInfiniteScroll: false })
      range = 6
    } else {
      range = this.perPage;
    }
    getRangeOfPokemon(id, range)
      .then(newPokemon => {
        const oldPokemon = this.state.pokemon.slice();
        this.setState({
          pokemon: [...oldPokemon, ...newPokemon],
          initialLoad: false,
        });
      })

      .catch(error => {
        this.setState({
            error: error.message,
            shouldInfiniteScroll: false,
        });
      });
  }

  displayPokemonCards () {
    return this.state.pokemon.map(pokemon => {
      return <PokemonCard {...pokemon} key={pokemon.id} />
    });
  }

  renderLoadButton () {
    return (
      <div>
        <Button color="primary" size="lg" onClick={this.enableInfiniteScroll.bind(this)}> Load more Pokemon </Button>
      </div>
    );
  }

  enableInfiniteScroll (evt) {
    evt.preventDefault();
    this.setState({ shouldInfiniteScroll: true });
  }

  render () {
    let cards = this.displayPokemonCards();
    let loadMoreButton = !this.state.shouldInfiniteScroll && !this.state.error ?
      this.renderLoadButton() : null;
    let error = this.state.error ? <LoadingError error={this.state.error} /> : null;

    return (
      <div className="main" align="center">
        {this.state.modal ? <PokemonModal open={true}>
                  <p>Modal</p>
                  <p>Data</p> </PokemonModal>: null}
        <Header />
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={this.fetchPokemon.bind(this)}
          hasMore={this.state.shouldInfiniteScroll || this.state.initialLoad}
          loader={<Loader key="loader" />}
        >
          <div className="card-container">
            {cards}
          </div>
        </InfiniteScroll>
        {loadMoreButton}
        {error}
      </div>
    )
  }
}

export default Home;
