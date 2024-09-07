// This Code is for fetching picture related to products
// Source : Pexel.com
const API_KEY = 'kdvz9BfnVKJqOgE42RjpUtP6nTmYictUiX1Z1SUDFhxdWbuxdGi51GtM';
const API_URL = 'https://api.pexels.com/v1/search?query=';
function searchImages(query,index) {
    fetch(`${API_URL}${query}`, {
        headers: {
            Authorization: API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        imgTags[index].src = data.photos[0].src.tiny // (data.photos[0].src.tiny) depends on json structure 
    })
    .catch(error => {
        console.error('Error fetching data from Pexels API:', error);
    });
}