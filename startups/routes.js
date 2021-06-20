module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index", { layout: "specific-layout" });
  });
  app.get("/services", function (req, res) {
    res.render("services/services");
  });
  app.get("/join", function (req, res) {
    res.render("join");
  });
  app.get("/project/getadvice", function (req, res) {
    res.render("project/clients/getadvice");
  });
  app.get("/who-we-are", function (req, res) {
    res.render("about");
  });
};
