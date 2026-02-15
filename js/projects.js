fetch("/data/projects.json")
  .then(function (res) { return res.json(); })
  .then(function (data) {
    renderCourses(data.courses || []);
    renderProjects(data.projects || []);
  })
  .catch(function (err) {
    console.error("Failed to load projects.json:", err);
  });

function renderCourses(courses) {
  var grid = document.getElementById("course-grid");
  if (!grid) return;
  grid.innerHTML = courses.map(function (c) {
    return (
      '<a class="course-card" href="' + escapeAttr(c.href || "#") + '">' +
        '<span class="course-code">' + escapeHTML(c.code) + "</span>" +
        '<span class="course-title">' + escapeHTML(c.title) + "</span>" +
        '<span class="course-tag">' + escapeHTML(c.tag || "课程") + "</span>" +
      "</a>"
    );
  }).join("");
}

function renderProjects(projects) {
  var grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(function (p) {
    var highlights = (p.highlights || []).map(function (h) {
      return "<li>" + escapeHTML(h) + "</li>";
    }).join("");

    var tags = (p.tags || []).map(function (t) {
      return "<span>" + escapeHTML(t) + "</span>";
    }).join("");

    return (
      '<div class="project-card">' +
        '<div class="project-header">' +
          "<h3>" + escapeHTML(p.name) + "</h3>" +
          '<span class="project-label">' + escapeHTML(p.label || "") + "</span>" +
        "</div>" +
        '<p class="project-desc">' + escapeHTML(p.desc) + "</p>" +
        (highlights ? '<ul class="project-highlights">' + highlights + "</ul>" : "") +
        (tags ? '<div class="project-tags">' + tags + "</div>" : "") +
      "</div>"
    );
  }).join("");
}

function escapeHTML(s) {
  var d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function escapeAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
