class Github {
    constructor() {
        this.client_id = '0b2622bd60882c3edd54';
        this.client_secret = '7dd59c5a51efe8c63db570489a8c3a3caf5badb2';
        this.repos_count = 5;
        this.repos_sort = 'created asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile
        }
    }
}