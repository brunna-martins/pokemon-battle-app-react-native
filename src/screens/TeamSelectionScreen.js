import React, { Component } from "react";
import { View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";

import CustomText from "../components/CustomText";
import PokemonList from "../components/PokemonList";
import ActionList from "../components/ActionList";

import { connect } from react-redux;

import { setTeam, setPokemon } from "../actions";
import moves_data from "../data/moves_data";

// todo: import Redux packages
// todo: import actions
// todo: import helper functions

import uniqid from "../helpers/uniqid";
import shuffleArray from "../helpers/shuffleArray";

class TeamSelectionScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { selected_pokemon } = this.props;
    return (
      <View style={styles.container}>
        <CustomText>Team Selection Screen</CustomText>
      </View>
    );
  }

  confirmTeam = () => {
    /*
    todo:
    - extract selected pokemon, function for setting the team, and function for setting current Pokemon from props
    - construct an array containing the Pokemon data for the selected team
    - dispatch action for setting team
    - dispatch action for setting current Pokemon
    */
  };
}

// todo: add mapStateToProps (current pokemon, selected pokemon)
const mapStateToProps = ({ team_selection }) => {
  const { pokemon, selected_pokemon } = team_selection;

  return {
    pokemon,
    selected_pokemon
  };
};

// todo: add mapDispatchToProps (set team, set current pokemon)
const mapDispatchToProps = dispatch => {
  return {
    setTeam: team => {
      dispatch(setTeam(team));
    },
    setPokemon: pokemon => {
      dispatch(setPokemon(pokemon));
    }
  };
};


export default TeamSelectionScreen; // todo: turn component into a connected component

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSelectionScreen);

const styles = {
  container: {
    flex: 1,
    // todo: remove on part 1
    alignItems: "center",
    justifyContent: "center"
    // end remove
  },
  headerText: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center"
  },
  confirmButton: {
    padding: 10,
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#95ff84"
  },
  loadingContainer: {
    alignItems: "center"
  },
  messageText: {
    fontSize: 13,
    color: "#676767"
  }
};
