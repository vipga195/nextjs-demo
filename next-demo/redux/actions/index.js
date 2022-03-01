const name = "POKEMON";
const actions = {
    GET_API_POKEMON_LIST_REQUEST: name + "GET_API_POKEMON_LIST_REQUEST",
    GET_API_POKEMON_LIST_FAILURE: name + "GET_API_POKEMON_LIST_FAILURE",
    GET_API_POKEMON_LIST_SUCCESS: name + "GET_API_POKEMON_LIST_SUCCESS",

    getPokemonList: (params) => ({
        type: actions.GET_API_POKEMON_LIST_REQUEST,
        params
    })
}
export default actions;