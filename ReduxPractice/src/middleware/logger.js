export var logger = (store) => (next) => (action) => {
    console.log(action.type);
    next(action);
}