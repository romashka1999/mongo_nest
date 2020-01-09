interface IEnvironment {
    server_port: number,
    mongo_uri: string
}

export const Environment: IEnvironment = {
    server_port: 3000,
    mongo_uri: "mongodb127.0.0.127017NEST_DB"
}