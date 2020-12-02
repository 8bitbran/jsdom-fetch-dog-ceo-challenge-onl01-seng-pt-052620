function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json))
}

function renderImages(dogImages) {
    const imgDiv = document.querySelector("#dog-image-container")
    dogImages.message.forEach(image => {
        const img = document.createElement("img")
        img.src = image
        imgDiv.appendChild(img)
    })
}

document.addEventListener('DOMContentLoaded', function(e) {
    fetchImages()
})