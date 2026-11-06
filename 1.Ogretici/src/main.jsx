import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Index.css'
function Product({ productObj }) {
  if (!productObj.is_active)
    return null;
  return (
    <div className='card shadow-sm'>
      <img className='card-img-tops p-15 p-md-18 border-bottom' src={productObj.imageUrl} alt='' />
      <div className='card-body'>
        <h2 className='card-title'> {productObj.title} </h2>
        <p className='card-text'> {productObj.descreption} </p>
        <span className='badge text-bg-success'>{productObj.price} TL
        </span>
      </div>

    </div>
  );
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//Componentler uygulamanın bölgelere ayrılmasını sağlar. bu componentler uygulama büyüyünce uygulamaya müdahele etmeyi kolaylaştırır.
/*
dışarı da oluşan ana (main component) de bir parent componenttir
product companent: içerisine ayrı componentler de koyabiliriz. burada product parent component olarak algılanır. içerisine tanımlananlar child component
navbar component
menu component
 */