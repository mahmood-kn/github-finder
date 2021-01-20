class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2">
            <a href="${user.url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 class="page-heading mb-3">Latest Repos</h2>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
        <div class="card card-body">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    document.querySelector("#repos").innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className += className;
    div.appendChild(document.createTextNode(`${msg}`));
    const searchContainer = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    searchContainer.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
