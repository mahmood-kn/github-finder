const github = new Github();
const ui = new UI();

const searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    // show user

    github.getUsers(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
