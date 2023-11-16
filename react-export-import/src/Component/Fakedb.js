// use of fake data central point//
const addToDb = (id)=>{
   let shoppingCart = {};
// get the shopping cart//
const storedCart = localStorage.getItem('shopping-cart');
if(storedCart){
 shoppingCart = JSON.parse(storedCart)
}
else{
   shoppingCart ={}
}
  
// add the quentity//
   const quantity = shoppingCart[id];
 if(quantity){

   const newQuentity = (quantity)+1;
   shoppingCart[id]=newQuentity;
   // localStorage.setItem(id,newQuentity)
 }
 else{
 
  shoppingCart[id] =1;
   // localStorage.setItem(id,1)
 }
 localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const removeFromCartDb= (id)=>{
const storedCart = localStorage.getItem('shopping-cart')
if(storedCart){
   const shoppingCart = JSON.parse(storedCart);
   if(id in shoppingCart)
 delete shoppingCart[id];
 localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

}

}
export {addToDb
   ,removeFromCartDb
}