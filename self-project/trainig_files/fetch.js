const requestURL = "https://jsonplaceholder.typicode.com/users"

function sendRequest(method, url, body) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers
    }).then(response => {
        return response.json()
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

const body = {
    name: 'Make',
    age: 26
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))