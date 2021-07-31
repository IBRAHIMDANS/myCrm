export function authHeader() {
    // return authorization header with jwt token
    let users = JSON.parse(<string>localStorage.getItem('users'));

    if (users && users.accessToken) {
        return {
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + users.accessToken
        };
    } else {
        return {};
    }
}
export {}
