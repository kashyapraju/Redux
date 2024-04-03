import { createStore} from "redux";

import rootReducer from "./reducers/index";

const store = createStore(rootReducer, window.REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION_());

export default store ;
