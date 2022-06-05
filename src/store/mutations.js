import uniqueString from "unique-string";

export function killUser(state) {
    state.isAuthenticated = false;
    state.userToken = "";
    window.location.reload(true);
}

export function setUserToken(state, data) {
    state.userToken = data
    state.isAuthenticated = true
}

export function setCurrentPopup(state, data) {
    Object.assign(state.currentPopup, data);
}

export function setSkin(state, data) {
    state.skin = data
}

export function pushToTray(state, data) {
    console.log('aa')
    state.trayItems.unshift({
        text: data.text,
        type: ["success", "error"].filter((type) => type === data.type),
        id: uniqueString(),
    });
    if (state.trayItems.length > 3) state.trayItems.pop();
}

export function removeFromTray(state, itemId) {
    state.trayItems = state.trayItems.filter((item) => item.id !== itemId);
}
