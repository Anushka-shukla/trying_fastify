// Require the framework and instantiate it
const app = require('fastify')({
    logger: true
})

// hooks
app.addHook('onRoute', (routeOptions) => {
    console.log(`Registered route: ${routeOptions.url}`)
})

// Declare a route
app.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
})

// Register routes to handle blog posts
const blogRoutes = require('./routes/blogs')
blogRoutes.forEach((route, index) => {
    app.route(route)
})

// Run the server!
app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})