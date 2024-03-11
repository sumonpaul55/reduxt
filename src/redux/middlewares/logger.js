const logger = (store) => (next) => (action) => {
    const currentState = store.getState()
    console.log("current state", currentState)
    console.log("action dispatch", action)
    next(action)
    console.log("Updated stater", store.getState())
}

export default logger