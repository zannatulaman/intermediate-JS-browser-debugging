const searchProduct = document.getElementById("search-input");
const listItems = document.getElementById("results");

searchProduct.addEventListener("input", () => {
    const query = searchProduct.value
    //console.log(query);

    if(query){
        listItems.innerHTML = "Loading...."
        listItems.style.marginTop = "10px"
        listItems.style.listStyleType = "none"
        listItems.style.textAlign = "start"
        
        //const codes = '3263859883713,8437011606013,6111069000451';
        const apiUrl = `https://world.openfoodfacts.net/api/v2/product/${query}?fields=product_name,nutriscore_data`;

        //const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${query}.json`

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        // Process the data here
        console.log(data);

        const productName = data.product.product_name
        const productNutrition = data.product.nutriscore_data.energy
        console.log(productName, productNutrition);

        listItems.innerHTML = `<li><strong>${productName}</strong></li><br> <strong>${productNutrition}</strong>`


       })
         .catch(error => {
         console.log('Error fetching data:', error);
        });

        

       
    
    }else{
        listItems.innerHTML = "Please enter a product code or name"
        listItems.style.marginTop = "10px"
        listItems.style.listStyleType = "none"
        listItems.style.textAlign = "start"
    }
})

/*const searchProduct = document.getElementById("search-input");
const listItems = document.getElementById("results");

searchProduct.addEventListener("input", () => {
    const query = searchProduct.value.trim(); // Trim whitespace from the query
    //console.log(query);

    if(query){
        listItems.innerHTML = "Loading....";
        
        const apiUrl = `https://world.openfoodfacts.org/api/v2/search?fields=product_name,product_description,product_image_url&search_terms=${query}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data here
            console.log(data);

            if (data.status === 1 && data.products.length > 0) {
                const product = data.products;
                const productName = product.product_name;
                const productDescription = product.product_description || 'No description available';
                const productImageUrl = product.product_image_url || 'No image available';

                //console.log(product, productName, productDescription, productImageUrl);

                const resultHtml = `
                    <div>
                        <h3>${productName}</h3>
                        <p>Description: ${productDescription}</p>
                        <img src="${productImageUrl}" alt="Product Image">
                    </div>
                `;
                listItems.innerHTML = resultHtml;
            } else {
                listItems.innerHTML = "Product not found";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            listItems.innerHTML = "Error fetching data";
        });
    } else {
        listItems.innerHTML = "Please enter a product code or name";
        listItems.style.marginTop = "10px";
    }
});*/
