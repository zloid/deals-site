export function insertRandomNumbers() {
    const placesForInserting = document.querySelectorAll(
        '.right-aside__some-numbers'
    )

    const randomNumber = () => 11 + Math.floor(Math.random() * 50)

    for (let i = 0; i < placesForInserting.length; i++) {
        placesForInserting[i].innerHTML = randomNumber()
    }
}
