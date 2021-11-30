export type ParsedMessage = {
    command: string;
    message: string;
}
export type ParseMiddleware = (data: string) => Promise<ParsedMessage>;
export type ActionMiddleware = (data: ParsedMessage) => Promise<() => Promise<void>>;
export type RootMiddleware = () => (data: ParsedMessage) => () => any;