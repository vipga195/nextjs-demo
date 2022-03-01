// export default allSaga;
import { all } from "redux-saga/effects";
import commonSaga from "./sagas";

function* allSaga() {
        yield all([
                commonSaga(),

        ]);
}

export default allSaga;