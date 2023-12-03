 const cartProductLoader = async()=>{
    const productLoaded = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const Products = await productLoaded.json();
    console.log(Products);
    return Products
 }
 export default cartProductLoader