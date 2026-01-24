export default function ProductList(){
  const products = [
    { id: 1, title: "Keyboard", price: 149},
    { id: 2, title: "Mouse", price: 89},
    { id: 3, title: "Monitor", price: 349},
  ]

  return(
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.title} - €{product.price}
        </li>
      ))}
    </ul>
  )

};
