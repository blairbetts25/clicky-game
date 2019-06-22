import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import Instructions from "./components/Instructions"

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards: cards,
    count: 0,
    highScore: 0,
    status: "Click an image to start!"
  };
  shuffle = (array) => {
    array.sort(() => Math.random() - Math.random())
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
    let arr = this.state.cards;
    this.shuffle(arr)
  }

  // Map over this.state.cards and render a cardsCard component for each cards object
  render() {
    return (
      <div>
        <Title>
          <ui>
            <li className="brand">Clicky Game</li>
            <li className="brand">{this.state.status}</li>
            <li className="brand">{`Score:${this.state.count}`}|| {`Highscore: ${this.state.highScore}`}</li>
          </ui>
        </Title>
        <Instructions>
          <h2>CLICKY GAME</h2>
          <h3>Click on the images but dont click the same one twice see how high of a score you can get!</h3></Instructions>
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