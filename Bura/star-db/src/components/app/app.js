import React, { Component } from "react";

import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
// import ErrorIndicator from "../error-indicator";
// import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
    selectedPlanet: null,
    selectedStarship: null,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onPlanetSelected(selectedPlanet) {
    this.setState({ selectedPlanet });
  }

  onStarshipSelected(selectedStarship) {
    this.setState({ selectedStarship });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { getPerson, getStarship } = this.swapiService;
    const personDetails = <ItemDetails itemId={11} getData={getPerson} />;
    const starshipDetails = <ItemDetails itemId={11} getData={getStarship} />;

    // if (this.state.hasError) {
    //   return <ErrorIndicator />;
    // }

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
