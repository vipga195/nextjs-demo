import { commonAction } from '@/redux/action';

const initialState = {
    pokemonList: null
};

const reduder = (state = initialState, action) => {
    switch (action.type) {
        case commonAction.GET_API_POKEMON_LIST_REQUEST:
            return {
                ...state,
                pokemonList: null,
            };
        case commonAction.GET_API_POKEMON_LIST_FAILURE:
            return {
                ...state,
                pokemonList: action.response,
            };
        case commonAction.GET_API_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonList: action.response,
            };
        default:
            return state;
    }
}
export default reduder