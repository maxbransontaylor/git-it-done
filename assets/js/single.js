var getRepoIssues = function (repo) {
    var url = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayIssues(data);
            });
        } else { alert("There was a problem with your request.") }
    });
};
var displayIssues = function (issues) {
    for (var i = 0; i < data.length; i++) {
        var issueEl = document.createElement("a");
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute("href", issues[i].html_url);
        issueEl.setAttribute("target", "_blank");
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;
        issueEl.appendChild(titleEl);
        var typeEl = document.createElement("span");
        if (issues[i].pull_request) {
            typeEl.textContent = "(Pull request)";
        } else { typeEl.textContent = "(Issue)" }
    }
    issueEl.appendChild(typeEl);
};

getRepoIssues("facebook/react")
//6.3.5