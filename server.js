import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// CUSTOM LOGIN ENDPOINT
server.post("/login", (req, res) => {
  const { userId, password } = req.body;

  const db = router.db;
  const user = db.get("users").find({ userId, password }).value();

  if (user) {
    return res.status(200).json({ success: true, user });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

// USE DEFAULT ROUTES
server.use(router);

server.listen(8080, () => {
  console.log("JSON Server with custom login running on port 8080");
});
