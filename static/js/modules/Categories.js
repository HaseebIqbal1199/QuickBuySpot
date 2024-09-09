//  Basically selecting the radio buttons of Categorize Section
const Categories = document.querySelectorAll('.CategorySelection div input')
// Add Eventlistener to each to get Value
let filter = [];
Categories.forEach(category => {
    category.addEventListener("click",()=>{
        filter = []
        main.innerHTML = ''
        for (let i = 0; i < productData.length; i++) {
            if (category.value == productData[i].category) {
                filter.push(productData[i])
                console.log(filter);
                main.innerHTML += cardSnippet(productData,i)
                imgTags = document.querySelectorAll(".card .card-img img")
                for (let j = 0; j < filter.length; j++) {
                    searchImagesPexel(filter[j].ProductName,j)
                }
                console.log(productData[i].ProductName,i);
            }
        }
    })
});