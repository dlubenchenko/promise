let input = document.querySelector('#new-promise')
let output = document.querySelector('#output')




input.addEventListener('keyup', () => output.textContent = input.value)

const data1 = 'https://jsonplaceholder.typicode.com/photos'

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-type': 'application/json'
    }
    return fetch(url, {
            method: method,
            // body: JSON.stringify(body),
            headers: headers
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return response.json().then(error => {
                const e = new Error('Something wrong')
                e.data = error
                throw e
            })
        })
}






sendRequest('GET', data1)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// sendRequest('POST', data1, {
//         name: 'Dima',
//         age: 33
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


















// return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Content-type', 'application/json')
//     console.log(xhr)

//     xhr.onload = () => {
//         if (xhr.status >= 400) {
//             resolve(xhr.response)
//         } else {
//             reject(xhr.response)
//         }
//     }

//     xhr.onerror = () => {
//         reject(xhr.response)
//     }

//     xhr.send(JSON.stringify(body))
// })