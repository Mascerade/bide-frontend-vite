import dotenv from 'dotenv'
dotenv.config()

export const HOST = process.env.HOST
export const SERVER_PORT = process.env.SERVER_PORT
export const SERVER = `${HOST}:${SERVER_PORT}`
