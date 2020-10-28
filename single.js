var issueContainerEl = document.querySelector("#issues-container");



var getRepoIssues = function (repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayIssues(data);
            });
        }
        else {
            alert("There was a problem with your request!")
        }
    });
};

getRepoIssues("facebook/react");

var displayIssues = function (issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    }
    issueContainerEl.appendChild(issueEl);

    for (var i = 0; i < issues.lenght; i++) {
        var issuesEl = document.createElement("a");
        issuesEl.classList = "list-item flex-row justify-space-between align-center";
        issuesEl.setAttribute("href", issues[i].html_url);
        issuesEl.setAttribute("target", "_blank");
    }
    var titleEl = document.createElement("span");
    titleEl.textContent = issues[i].title;

    issuesEl.appendChild(titleEl);

    var typeEl = document.createElement("span");

    if (issues[i].pull_request) {
        typeEl.textContent = "(pull request)";
    } else {
        typeEl.textContent = "(issues)";
    }
};

issuesEl.appendChild(typeEl);