import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  // const addProductsToCart = (event, productData) => {
  //   event.stopPropagation()
  //   context.setCount(context.count + 1)
  //   context.setCartProducts([...context.cartProducts, productData])
  //   context.openCheckoutSideMenu()
  //   context.closeProductDetail()
  // }
  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-2 border border-slate-300 rounded-lg bg-white mt-1`}>
      <div className="flex flew-row justify-between items-center p-4">
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => context.closeProductDetail()} />
        </div>
      </div>
      <figure className='flex flex-col justify-center  px-5' >
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images}
          alt={context.productToShow.title} />

        <p className='flex flex-col px-2 py-4'>
          <span className='font-medium text-base'>{context.productToShow.title}</span>
          <span className='font-medium text-xl text-green-600 my-2'>${context.productToShow.price}</span>
          <span className='font-light text-md'>{context.productToShow.description}</span>
        </p>
        {/* <div className="flex justify-center items-center w-[19.7rem] h-35px absolute bottom-5 ">
          <button className='bg-black py-3 text-white w-full rounded-lg shadow-md  ' onClick={addProductsToCart}>Add Product
          </button>
        </div> */}
      </figure>
    </aside>
  )
}

export default ProductDetail