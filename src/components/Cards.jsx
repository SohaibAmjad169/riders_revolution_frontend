import { useCart } from './CartContext'
function Cards({ item }) {
  const { addToCart } = useCart() // Get the addToCart function from context

  const handleBuyNow = () => {
    addToCart(item) // Add the item to the cart
    alert(`${item.name} added to cart!`)
  }
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          {/* <figure>
            <img src={item.image} alt="Bike" />
          </figure> */}
          <figure className="w-full h-64 overflow-hidden flex justify-center items-center">
            <img
              src={item.image}
              alt="Bike"
              className="object-cover w-full h-full"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-sky-500 border-sky-500">
                {item.type}
              </div>
            </h2>
            <p>{item.make}</p>
            <p>{item.title}</p>
            <p>{item.year}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs.{item.price}</div>
              <button
                className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-sky-500 hover:text-white duration-200"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              {/* <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-sky-500 hover:text-white duration-200">
                Buy Now
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
