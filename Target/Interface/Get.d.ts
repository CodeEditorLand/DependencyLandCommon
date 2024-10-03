export default interface Interface {
    (Instance: {
        [key: string]: any;
    }): Promise<Map<any, any>>;
}
