const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
    let { username, password } = req.body;
    let db = req.app.get("db");
    let [foundUser] = await db.check_for_user([username]);
    if (foundUser)
      return res.status(200).send({ message: "Email already in use." });
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    let [createdUser] = await db.create_hero_user([username, hash]);
    req.session.user = { id: createdUser.id, username: createdUser.username };
    res.status(200).send({ user: req.session.user, message: "loggedIn" });
  },
  async login(req, res) {
    let { username, password } = req.body;
    let db = req.app.get("db");
    let [foundUser] = await db.check_for_user([username]);
    if (foundUser) {
      let result = bcrypt.compareSync(password, foundUser.password);
      if (result) {
        req.session.user = { id: foundUser.id, username: foundUser.username };
        res.status(200).send({ user: req.session.user, message: "loggedIn" });
      } else {
        res.status(401).send({ message: "Incorrect password." });
      }
    } else {
      res.status(401).send({ message: "Email not found." });
    }
  },
  async getUserPosts(req, res) {
    res.status(200).send("hit endpoint");
  }
};
