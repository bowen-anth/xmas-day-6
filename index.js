const shuffleButton = document.querySelector('#shuffle-button')
const givePresents = document.querySelector('#give-presents')
const receivePresents = document.querySelector('#receive-presents')
const givePresentsList = document.querySelector('#give-presents-list')
const receivePresentsList = document.querySelector('#receive-presents-list')

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]
let receivers = []

console.log("test", receivers)

const givePresentsHtml = people.map(function(person) {
    return `<li>${person}</li>`
})
givePresentsList.innerHTML = givePresentsHtml.join('')



function generateSecretSantaPairs(arr) {
    const shuffledArr = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
        let j;
        do {
            j = Math.floor(Math.random() * i);
        } while (j === i || shuffledArr[j] === arr[i]);  // Ensure the shuffled element is not in the original position
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    console.log(arr)
    receivers = shuffledArr
    return shuffledArr
}

// function appendLiReceivePresents(receivers) {
//     const receivePresentsHtml = arr.map(function(receivers) {
//     return `<li>${person}</li>`
//         })
// }
        
shuffleButton.addEventListener('click', function () {
    generateSecretSantaPairs(people);
    
    const receivePresentsHtml = receivers.map(function(person) {
        return `<li>${person}</li>`
    })
    receivePresentsList.innerHTML = receivePresentsHtml.join('');
});

console.log(generateSecretSantaPairs(people))