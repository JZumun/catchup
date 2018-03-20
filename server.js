const fs = require("fs");
const path = require("path");

const express = require("express");
const server = express();

// Config
require("dotenv").config();
const bodyParser = require("body-parser");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use( require("cookie-parser")() );

// Static Bundle
server.use(require("serve-favicon")(path.join(__dirname, "public", "favicon.ico")));
server.use(require("stylus").middleware(path.join(__dirname, "public")));
server.use(express.static(path.join(__dirname, 'public')));


//API Endpoint
server.use("/api", require("./src/api/router"));

// Vue SSR
const bundle = require("./public/js/server.build.js");
const renderer = require("vue-server-renderer").createRenderer({
	template: fs.readFileSync("./index.html", "utf-8")
});
server.get("*", (req, res, next) => {
	bundle.default({ url: req.url }).then(app => {
		const context = {};
		return renderer.renderToString(app, context).then(html => res.end(html));
	}).catch(next);
});

server.use((err, req, res, next) => {
	console.error(err);
	if (err.code === 404) {
		return res.status(404).end("Page not found.")
	} else {
		return res.status(500).end("Internal Server Error");
	}
});


module.exports = server;
