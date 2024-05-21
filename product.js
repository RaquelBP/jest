let products = []
let id = 0

function addProduct(name, price){
    if(!name || !price){
        throw new Error ("name and price must be defined")
    }
    
    products.forEach(element => {
        if(element.name === name){
            throw new Error ("name already exists")
        }
    });

    const product = {
        name: name,
        price: price
    }
    id+=1
    products.push(product)
    return product
    
}

function removeProduct(idProduct){
    if(!products.at(idProduct)){
        throw new Error ("product with that id does not exist")
    }
    id-=1
    return products.splice(idProduct, 1)
}

function getProduct(idProduct){
    if(!products.at(idProduct)){
        throw new Error ("product with that id does not exist")
    }
    return products.at(idProduct)
}

function updateProduct(idProduct, nameProduct, priceProduct){
    if(!products.at(idProduct)){
        throw new Error ("product with that id does not exist")
    }
    products[idProduct].name = nameProduct
    products[idProduct].price = priceProduct
    return products
}

function resetProducts(){
    id = 0
    return products = []
}

function getProducts(){
    return products
}

function getId(){
    return id
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
    getId,
    products,
    id
}