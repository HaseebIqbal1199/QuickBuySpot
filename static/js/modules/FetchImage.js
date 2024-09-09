// This Code is for fetching picture related to products
// Source : Pexel.com
const API_KEY_PEXEL = 'kdvz9BfnVKJqOgE42RjpUtP6nTmYictUiX1Z1SUDFhxdWbuxdGi51GtM'; // Pexel Api Key
const API_URL = 'https://api.pexels.com/v1/search?query='; // Pexel endpint
const API_KEY_GOOGLE = 'AIzaSyCsFbrACohxEdaunFflEwtKuT6SDr6cJq8'; // Google Api Key
const CX = '0481bb4d1bf9b4071';  // Search Engine ID

function searchImagesPexel(query,index) {
    fetch(`${API_URL}${query}`, {
        headers: {
            Authorization: API_KEY_PEXEL
        }
    })
    .then(response => response.json())
    .then(data => {
        imgTags[index].src = data.photos[2].src.tiny // (data.photos[0].src.tiny) depends on json structure 
    })
    .catch(error => {
        console.error('Error fetching data from Pexels API:', error);
    });
}

async function searchImagesGoogle(query,index) {
    const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${CX}&key=${API_KEY_GOOGLE}&searchType=image`;

    try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data);
        imgTags[index].src = data.items[1].image.thumbnailLink // (data.photos[0].src.tiny) depends on json structure 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}