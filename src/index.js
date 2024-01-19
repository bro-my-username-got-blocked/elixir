import createBareServer from "@tomphttp/bare-server-node";
import { fileURLToPath } from "url";
import { createServer as createHttpsServer } from "node:https";
import { createServer as createHttpServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import serveStatic from "serve-static";

const bare = createBareServer("/bare/");

const serve = serveStatic(
  fileURLToPath(new URL("../static/public", import.meta.url)),
  { fallthrough: false }
);

var server;
if (existsSync("../ssl/key.pem") && existsSync("../ssl/cert.pem")) {
  server = createHttpsServer({
    key: readFileSync("../ssl/key.pem"),
    cert: readFileSync("../ssl/cert.pem"),
  });
} else server = createHttpServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    if (req.url.startsWith("/data")) {
      // Handle "/data" route (assuming analytics is defined)
      analytics(req, res, data);
    } else {
      // Serve static files or handle 404 error
      serve(req, res, (err) => {
        if (err) {
          if (err.statusCode === 404) {
            // Custom 404 page handling
            return handle404(req, res);
          } else {
            // Other errors, respond with a generic error message
            res.writeHead(err.statusCode, null, {
              "Content-Type": "text/plain",
            });
            res.end("Error");
          }
        }
        // Continue with normal flow if no error
      });
    }
  }
});

// Custom 404 page handling middleware
const handle404 = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/html" });

  // Read and send the custom 404 page
  const custom404PagePath = fileURLToPath(new URL("../static/public/404.html", import.meta.url));
  const custom404Page = readFileSync(custom404PagePath, "utf8");
  res.end(custom404Page);
};



server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) bare.routeUpgrade(req, socket, head);
  else socket.end();
});

server.on("listening", () => {
  const addr = server.address();

  console.log(`Elixir running on port ${addr.port}`);
  console.log("");
  console.log("You may now access it using your browser!");

  console.log(
    `Local: http://${
      addr.family === "IPv6" ? `[${addr.address}]` : addr.address
    }:${addr.port}`
  );
  try {
    console.log(`On Your Network: http://${address.ip()}:${addr.port}`);
  } catch (err) {
    /* Can't find LAN interface */
  }
  if (process.env.REPL_SLUG && process.env.REPL_OWNER)
    console.log(
      `Replit: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    );
});

server.listen({ port: process.env.PORT || 8080 });
