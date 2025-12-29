import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Category from './Category';

function App() {
  let [finalCategory, setFinalCategory] = useState([])
  let [finalProduct, setFinalProduct] = useState([]);
  let [catName, setCatname] = useState('');

  let getCategory = () => {
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalres) => {
        setFinalCategory(finalres)
      })
  }

  let getProducts = () => {
    axios.get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalres) => {
        setFinalProduct(finalres.products)
      })
  }
    ;
  let Pitems = finalProduct.map((products, index) => {
    return (
      <ProductItem key={products.id} pdata={products} />
    )
  })
    ;
  useEffect(() => {
    getCategory();
    getProducts();
  }, [])
  useEffect(() => {
    if (catName !== "") {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((res) => res.data)
        .then((finalres) => {
          setFinalProduct(finalres.products)
        })
    }

  }, [catName])
  return (
    <>
      <div className="py-[40px]">
        {/* <ToastContainer /> */}
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Category finalCategory={finalCategory} setCatname={setCatname} />
            </div>
            <div>
              <div className='grid grid-cols-3 gap-5'>
                {
                  finalProduct.length >= 1 ?
                    Pitems :
                    'No Product Found'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

function ProductItem({ pdata }) {
  // console.log(pdata);
  return (
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} className='w-[100%] h=[250px]' alt='' />
      <h4>{pdata.title}</h4>
      <b>Rs {pdata.price}</b>
    </div>
  )
}