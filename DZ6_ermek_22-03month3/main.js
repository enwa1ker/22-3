//У меня вопрос почему let count = 1 ?, просто когда нажимаете next то оно считает начиная со 2, а не с 1. (p.s. на всякий решил не менять)
//Задание №1
//Решение №1
const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 1
btnNext.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
        `
            block.append(div)
        })
}

btnPrev.onclick = () => {
    if (count > 1) {
        count--
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
                block.append(div)
            })
    }
}

//Решение №2 (сократил код)
// const block = document.querySelector('.block')
// const btnPrev = document.querySelector('.btn-prev')
// const btnNext = document.querySelector('.btn-next')
// let count = 1
//
// const fetchData = () => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             const div = document.createElement('div')
//             div.setAttribute('class', 'card')
//             div.innerHTML = `
//         <h2>${data.title}</h2>
//         <span>${data.id}</span>
//         <h3>${data.completed}</h3>
//       `
//             block.append(div)
//         })
// }
//
// btnNext.onclick = () => {
//     count++
//     fetchData()
// }
//
// btnPrev.onclick = () => count > 1 ? (count--, fetchData()) : null

//Задание №2
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
