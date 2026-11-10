import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(path.relative(dist, full).replaceAll("\\", "/"));
  }
  return out;
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const url = new URL(req.url, "http://127.0.0.1:4174");

  if (url.pathname === "/manifest") {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(walk(dist)));
    return;
  }

  if (url.pathname === "/file") {
    const rel = url.searchParams.get("path") ?? "";
    const full = path.resolve(dist, rel);
    if (!full.startsWith(dist) || !fs.existsSync(full)) {
      res.statusCode = 404;
      res.end("missing");
      return;
    }
    res.setHeader("content-type", "application/octet-stream");
    fs.createReadStream(full).pipe(res);
    return;
  }

  res.statusCode = 404;
  res.end("no");
});

server.listen(4174, "127.0.0.1", () => {
  console.log("serving dist on 4174");
});
