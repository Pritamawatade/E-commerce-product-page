import { useState } from 'react'

const images = [
  'https://m.media-amazon.com/images/I/41uZASQhXAL._SX300_SY300_QL70_FMwebp_.jpg',
  'https://m.media-amazon.com/images/I/71nf+veyRqL._SL1500_.jpg',
  'https://m.media-amazon.com/images/I/712gleZ2n8L._SL1500_.jpg',
]

const colors = ['Black', 'Blue', 'Red']
const sizes = ['S', 'M', 'L', 'XL']

function App() {
  const [current, setCurrent] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[1])
  const [quantity, setQuantity] = useState(1)

  const nextImage = () => setCurrent((current + 1) % images.length)
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Left: Carousel */}
        <div className="md:w-1/2 relative">
          <img
            src={images[current]}
            alt={`Product ${current + 1}`}
            className="w-full h-96 object-contain rounded border"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 text-xl top-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black rounded-full p-3 shadow-lg hover:bg-opacity-100 border-2 border-blue-500"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute text-xl right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black rounded-full p-3 shadow-lg hover:bg-opacity-100 border-2 border-blue-500"
            aria-label="Next"
          >
            &#8594;
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx + 1}`}
                className={`w-10 h-10 object-cover rounded border-2 cursor-pointer ${idx === current ? 'border-blue-600' : 'border-gray-200'}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
        {/* Right: Product Info */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold mb-1">Mechanical keyboard</h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">Brand: <span className="text-blue-700 font-semibold">Keychron</span></span>
            <span className="bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded">#1 Best Seller</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center text-yellow-500 text-lg">
              ★★★★☆
            </span>
            <span className="text-sm text-gray-600">(1,234 ratings)</span>
            <span className="ml-2 text-green-600 font-semibold">In Stock</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-blue-700">$59.99</span>
            <span className="text-sm text-gray-400 line-through">$79.99</span>
            <span className="text-green-600 font-semibold text-sm">25% off</span>
          </div>
          <div className="mb-4">
            <span className="text-sm text-gray-700">FREE delivery <span className="font-semibold">Monday, July 1</span>. Order within <span className="text-red-600">2 hrs 15 mins</span></span>
          </div>
          {/* Color Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Color:</label>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 rounded border ${selectedColor === color ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-white'} text-sm`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          {/* Size Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Size:</label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded border ${selectedSize === size ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-white'} text-sm`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Quantity Selector */}
          <div className="mb-4 flex items-center gap-2">
            <label className="block text-sm font-medium">Qty:</label>
            <input
              type="number"
              min={1}
              max={10}
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="w-16 border rounded px-2 py-1 text-center"
            />
          </div>
          {/* Add to Cart / Buy Now */}
          <div className="flex gap-3 mb-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow">
              Add to Cart
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow">
              Buy Now
            </button>
          </div>
          {/* Shipping Info */}
          <div className="mb-4 text-sm text-gray-700">
            <span className="font-semibold">Ships from:</span> Amazon<br />
            <span className="font-semibold">Sold by:</span> Keychron India<br />
            <span className="font-semibold">Return policy:</span> Eligible for Return, Refund or Replacement within 30 days of receipt
          </div>
          {/* Toggle Details */}
          <button
            onClick={() => setShowDetails((v) => !v)}
            className="text-blue-600 underline mb-2 text-left"
          >
            {showDetails ? 'Hide' : 'Show'} Product Details
          </button>
          {showDetails && (
            <div className="bg-gray-100 rounded p-3 text-gray-700 mb-4">
              <ul className="list-disc pl-5">
                <li>Material: Durable canvas, reinforced stitching</li>
                <li>Capacity: 20L, fits 15" laptop</li>
                <li>Water-resistant & lightweight</li>
                <li>Multiple compartments & USB charging port</li>
                <li>Warranty: 2 years</li>
              </ul>
            </div>
          )}
          {/* Description */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-1">About this item</h2>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              <li>Perfect for school, work, travel, or outdoor adventures.</li>
              <li>Ergonomic padded straps for comfort.</li>
              <li>Available in multiple colors and sizes.</li>
              <li>Eco-friendly materials and packaging.</li>
            </ul>
          </div>
           
        </div>
      </div>
    </div>
  )
}

export default App
