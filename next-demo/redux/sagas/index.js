import { put, takeLatest, all, fork, select } from "redux-saga/effects";
import { commonAction } from "../action";

export function* getPokemonList(payload) {
    // try {
    //     const response = yield sellOpenService.postSellOpenCreateUpdate({ params: payload.params })
    //     if (response.success) {
    //         yield put({ type: commonAction.GET_API_POKEMON_LIST_SUCCESS, response })
    //     }
    //     else {
    //         yield put({ type: commonAction.GET_API_POKEMON_LIST_FAILURE, response });
    //     }
    // } catch (err) {
    //     yield put({ type: commonAction.GET_API_POKEMON_LIST_FAILURE, response: err });
    // }
}
export default function* rootSaga() {
    yield all([
        takeLatest(commonAction.GET_API_POKEMON_LIST_REQUEST, getPokemonList),

    ]);

}