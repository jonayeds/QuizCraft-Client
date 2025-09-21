export const config = {
    server_url: process.env.ENVIRONMENT === 'production' ? process.env.SERVER_URL : process.env.LOCAL_SERVER_URL,
    environment: process.env.ENVIRONMENT,
}