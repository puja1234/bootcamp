export var logger = (store) => (next) => (action) => {
    console.log("First middleware");
    next(action);
}