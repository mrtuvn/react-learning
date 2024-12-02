import React from 'react';


/*
Use index of array: https://stackblitz.com/edit/vitejs-vite-xmvhtb?file=src%2FApp.jsx,src%2FAppUniqueId.jsx,src%2Fmain.jsx

Don't use index of array: https://stackblitz.com/edit/vitejs-vite-xmvhtb?file=src%2FApp.jsx,src%2FAppUniqueId.jsx,src%2Fmain.jsx

*/

function ListKey() {
  const [title, setTitle] = React.useState('');
  const [products, setProducts] = React.useState([
    { title: 'product 1' },
    { title: 'product 2'},
    { title: 'product 3' },
    { title: 'product 4'},
    { title: 'product 5' },
    { title: 'product 6'},
  ]);
  const dataSource = products.map(item => {
    return {
      ...item,
      id: Math.floor((Math.random() * 100) + 1)
    }
  })
  
  // const renderListProduct = products.map(item => {
  //   return (
  //     <div>
  //       Title: {item.title}
  //     </div>
  //   )
  // })

  function handleAddProduct() {
    const item = {
      title,
      id: Date.now()
    }
    const newProducts = [...products]; // shallow clone array
    // newProducts.push(item); // push last item
    newProducts.unshift(item); // push head item
    setProducts(newProducts)
  }

  function deleteProduct(id) {
    const productFiltered = products.filter((item) => item.id !== id);
    setProducts(productFiltered);
  }

  console.log('dataSource: ', dataSource)
  return (
    <div>
      <h1>ListKey</h1>
      {/* {renderListProduct} */}

      <h3>Use index of array</h3>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button type="button" onClick={handleAddProduct}>Add</button>
      {products && products.map((item) => {
        return (
          <ProductItem key={item.id} item={item} />
        )
      })}

      <h3>Performance</h3>
      <div>
        {dataSource.map((item) => {
          return (
            <>
              <button key={item.id} data-id={item.title} type="button" onClick={() => deleteProduct(item.id)}>
                Delete {item.title}
              </button>
              <br />
            </>
          )
        })}
      </div>
     
      
    </div>
  )
}

export default ListKey;

function ProductItem({ item }) {
  const [price, setPrice] = React.useState(0);
  return (
    <div key={item.id}>
      Title: {item.title}
      <input 
        type="text" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  )
}