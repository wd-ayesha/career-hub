import { getStoredCart } from '../utils/fakedb'

export const cartData = async () => {


  const productsData = await fetch('/featuredJobs.json')
  const products = await productsData.json()

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart }
}