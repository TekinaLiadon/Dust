export function killUser(state) {
    state.isAuthenticated = false;
    state.userToken = "";
    window.location.reload(true);
}

export function setUserToken(state, data) {
    state.userToken = data
}
