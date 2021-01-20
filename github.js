class Github {
  constructor() {
    this.clinet_id = "Iv1.08a5a5e429cde53a";
    this.client_secret = "0302f7747c921ef4ac67e23d72d1d05bba680bb3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUsers(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?clinet_id=${this.clinet_id}&clinet_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clinet_id=${this.clinet_id}&clinet_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
