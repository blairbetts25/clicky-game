import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards: cards,
    count: 0,
    highScore: 5
  };

  counter = () => {
    this.setState({ count: this.state.count + 1 })
    if (this.state.count < this.state.highScore) {
      this.setState({ highScore: this.state.highScore })
    } else {
      this.setState({ highScore: this.state.count + 1 })
    }
  };
  hasBeenClicked = id => {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cards[id - 1].clicked = true
    this.setState(stateCopy)
    this.counter();
  }

  // Map over this.state.cards and render a cardsCard component for each cards object
  render() {
    return (
      <div>
        <Title>Clicky Game count:{this.state.count} highscore: {this.state.highScore}</Title>
        <Wrapper>
          {this.state.cards.map(cards => (
            <Cards
              hasBeenClicked={this.hasBeenClicked}
              id={cards.id}
              key={cards.id}
              name={cards.name}
              image={cards.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;