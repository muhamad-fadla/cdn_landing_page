/**
 * First Setup
 */
let BASE_URL = "https://my-topup.store";
let DOMAIN = "my-topup.store";



/**
 * Server Setup
 */
const Fastify = require('fastify')
const fs = require('fs');
const path = require('path');


/**
 * Build Setup
 */
const PORT = process.env.PORT || 3000;


/**
 * Routes
 */
async function routes(server){


	server.get("/favicon.ico", (req,reply) => {
		return reply.sendFile('./favicon.ico');
	});

}




/**
 * Build
 */
async function build () {
  	const fastify = Fastify()

  	fastify.register(require('fastify-static'), {
	  	root: path.join(__dirname, 'public'),
	  	prefix: '/'
	})
  	
  	return fastify
}


build()
  .then(fastify => fastify.listen(PORT), console.log(`Server running on PORT:${PORT}`))
  .catch(console.log)