let productData;
function requestProducts() {
    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: '/getproductlist',
            contentType: 'application/json',
            success: function(response) {
                Data = response.result
                productData = Data // for Categories
                
                for (let i = 0; i < Data.length; i++) {        
                    main.innerHTML += cardSnippet(Data,i)

                    productCards = document.querySelectorAll(".card")
                    cartBtns = document.querySelectorAll(".card .card-footer .card-btn")
                    productNames = document.querySelectorAll(".card .card-title")
                    imgTags = document.querySelectorAll(".card .card-img img")

                    searchImagesPexel(Data[i].ProductName,i) // Passing "Data[i].ProductName" as query and "i" to push requested image in relevant <img>
                }

                cartBtns.forEach((e,rel) => {
                    e.addEventListener("click",()=>{
                        selectedProductsId.push(productCards[rel].getAttribute("attr"))
                        localStorage.setItem('cartactive',selectedProductsId)
                    })
                });
    
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });    
}