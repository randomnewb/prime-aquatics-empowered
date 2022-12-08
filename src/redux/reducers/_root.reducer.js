import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import facilityReducer from "./facility.reducer.js";
import poolReducer from "./pool.reducer";
import resultReducer from "./result.reducer";
import users from "./users.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    errors, // contains registrationMessage and loginMessage
    user, // will have an id and username if someone is logged in
    facilityReducer, // our facilities
    poolReducer, // our pools
    resultReducer, // our test results
    users, // multiple user reducer
});

export default rootReducer;
