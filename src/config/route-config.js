module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const topicRoutes = require("../routes/topics");
    const postRoutes = require("../routes/posts");
    const flairRoutes = require("../routes/flairs");
    const userRoutes = require("../routes/users");

    app.use(staticRoutes);
    app.use(topicRoutes);
    app.use(postRoutes);
    app.use(flairRoutes);
    app.use(userRoutes);
  }
};
