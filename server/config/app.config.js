const config = {
    PORT: 5000,
    HASH_PREFIX: "$2b$10$",
    JWT_SECRET: "b3715d5693ef63a7f77454f671a3270a",
    RESTRICTED_ROUTES: {
        "/auth/renew/*": (user,params) => user.role > 0 && user.id == params.id, 
    }
}

module.exports = config;