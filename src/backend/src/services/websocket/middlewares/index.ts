class WebsocketMiddlewares {
    middlewares = []

    constructor() {
        this.middlewares = [];
    }
    use(...values) {
        this.middlewares.push(...values)
    }
    execute(initialValue) {

        const finalValue = this.middlewares.reduce(
            async (acc, fn) => fn(await acc),
            initialValue
        );

        return finalValue;
    }
}

export default WebsocketMiddlewares