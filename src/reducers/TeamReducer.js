// this reducer is responsible for specifying how the store will change when the action for
// selecting a pokemon is dispatched. specifically, it describes how the selected_pokemon array
// changes when it receives the SELECT_POKEMON action. it only processes the request further if
// less than six pokemon are currently selected. from there, it pushes the selected pokemon into
// the selected_pokemon array, and removes it if it's deselected (when action.is_selected is false)

import { SELECT_POKEMON } from "../actions/types";
import pokemon_data from "../data/pokemon_data";

const INITIAL_STATE = {
    pokemon: pokemon_data,
    selected_pokemon: [] // stores the currently selected pokemon
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_POKEMON:
            let pokemon = [...state.pokemon];
            let selected_pokemon = [...state.selected_pokemon];

            const is_selected = action.is_selected;

            // there should only be six selected pokemon
            if (state.selected_pokemon.length < 6 || is_selected) {
                pokemon = pokemon.map(item => {
                    if (item.id == action.id) { // only modify the pokemon specified in the action
                        item.is_selected = !is_selected; // flip the current selected value
                    }
                    return item;
                });

                if (is_selected) {
                    const index_to_remove = selected_pokemon.findIndex(
                        item => item.id == action.id
                    );
                    selected_pokemon.splice(index_to_remove, 1);
                } else {
                    selected_pokemon.push(action.pokemon_data);
                }
            }

            return {...state, pokemon, selected_pokemon};

        default:
            return state;
    }
};