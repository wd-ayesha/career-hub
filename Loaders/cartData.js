import { getStoredCart } from '../utils/fakedb';

export const cartData = async () => {
  const featuresData = await fetch('/featuredJobs.json')
  const features = await featuresData.json()

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundFeature = features.find(f => f.id === id)
    if (foundFeature) {
      const quantity = savedCart[id]
      foundFeature.quantity = quantity
      initialCart.push(foundFeature)
    }
  }

  return { features, initialCart }
}