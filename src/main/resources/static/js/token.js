const token = searchParam('token')
alert(token)
if (token) {
    alert(2)
    localStorage.setItem("access_token", token)
}

function searchParam(key) {
    return new URLSearchParams(location.search).get(key);
}