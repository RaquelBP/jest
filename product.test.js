const { resetProducts,  addProduct, removeProduct, getProducts, getId, getProduct, updateProduct, id, products} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe("Adding Products", ()=>{ 
    it("should add a product", ()=>{
        expect(addProduct("product1", 1)).toEqual({ name: 'product1', price: 1 })
    })
    it("should increment the id", ()=>{
        addProduct("product1", 1)
        expect(getId()).toBe(1)
    })
    it("should fail when adding a product with no name or price", ()=>{
        expect(() => addProduct()).toThrow("name and price must be defined")
    })
    it("should fail when adding a repeated product", ()=>{
        addProduct("product1", 1)
        expect(() => addProduct("product1", 1)).toThrow("name already exists")
    })
})


describe("Removing Products", ()=>{ 
    it("should remove a product", ()=>{
        addProduct("product1", 1)
        expect(removeProduct(0)).toEqual([{"name": "product1", "price": 1}])
    })
    
    it("should fail when product with index does not exist", ()=>{
        expect(() => removeProduct(0)).toThrow("product with that id does not exist")
    })
})

describe("Getting a single product", ()=>{ 
    it("should get a product", ()=>{
        addProduct("product1", 1)
        expect(getProduct(0)).toEqual({"name": "product1", "price": 1})
    })
    
    it("should fail when product with index does not exist", ()=>{
        expect(() => getProduct(0)).toThrow("product with that id does not exist")
    })
})

describe("Updating Products", ()=>{ 
    it("should update a product", ()=>{
        addProduct("product1", 1)
        updateProduct(0, "product1", 2)
        expect(getProduct(0)).toEqual({"name": "product1", "price": 2})
    })
    
    it("should fail when product with index does not exist", ()=>{
        expect(() => updateProduct(0, "product1", 1)).toThrow("product with that id does not exist")
    })
})