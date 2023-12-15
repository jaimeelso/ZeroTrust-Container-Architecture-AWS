const server = Bun.serve({
	port: 3000,
	fetch(req) {
		console.log('METHOD: ' + JSON.stringify(req.method));
		console.log('HEADERS: ' + JSON.stringify(req.headers));
		let res = new Response("Hello World!");
		console.log('STATUS: ' + JSON.stringify(res.status));
		return res;
	},
	tls: {
		key: Bun.file("./key.pem"),
		cert: Bun.file("./cert.pem"),
		passphrase: "my-secret-passphrase",
	}
});

console.log('Web server running on port: ' + server.port);