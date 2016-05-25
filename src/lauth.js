class Lauth {
    constructor () {
        this.loggedIn = false

        // attempt to grab token
        var token = localStorage.getItem('ltk991')

        // if works
        if (token) this.loggedIn = true
    }

    createAuthHeader () {
        return 'bearer ' + localStorage.getItem('ltk991')
    }

    getAuthHeaders () {
        return this.loggedIn ? { Authorization: this.createAuthHeader() } : {}
    }
}

export default Lauth
