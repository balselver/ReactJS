import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Index.css'

function App() {
  return (
    <div>
      <Header />

      <div className='container mt-3'>
        <ProductList />
      </div>

    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
        <div className='container'>
          <a href='' className='navbar-brand'>Store App</a>
        </div>
      </nav>
    </header>
  )
}

function ProductList() {
  const items = [
    {
      "imageUrl": "/img1.jpg",
      "title": "Iphone 13",
      "descreption": "Lorem ipsum dolor sit amet.",
      "price": 20000,
      "is_active": true
    },

    {
      "imageUrl": "/img2.png",
      "title": "Iphone 14",
      "descreption": "Lorem ipsum dolor sit amet.",
      "price": 30000,
      "is_active": true

    },

    {
      "imageUrl": "/img3.jpg",
      "title": "Iphone 15",
      "descreption": "Lorem ipsum dolor sit amet.",
      "price": 40000,
      "is_active": true

    },

    {
      "imageUrl": "/img4.jpg",
      "title": "Iphone 16",
      "descreption": "Lorem ipsum dolor sit amet.",
      "price": 50000,
      "is_active": true

    },

    {
      "imageUrl": "/img4.jpg",
      "title": "Iphone 16",
      "descreption": "Lorem ipsum dolor sit amet.",
      "price": 50000,
      "is_active": true

    },

    {
      "imageUrl": "/img4.jpg",
      "title": "Iphone 16",
      "descreption": "Lorem ipsum dolor sit amet.",
      "price": 50000,
      "is_active": true

    },
  ];

  return (
    <>

      {
        items.length > 0 ? (
          <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id='product-list'>
            {
              items.map((item, index) => (
                <div className='col'>
                  <Product key={index} productObj={item} />
                </div>
              ))
            }
          </div>
        ) :
          (
            <p>Şu anda satışta olan ürünümüz bulunmamaktadır</p>
          )
      }

    </>
  );
}


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