interface IEnvironment {
    server_port: number,
    mongo_uri: string
}

export const Environment: IEnvironment = {
    server_port: 3000,
    mongo_uri: "mongodb://127.0.0.1:27017/NEST_DB"
}