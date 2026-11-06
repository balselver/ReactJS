import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Index.css'

function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
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
  ];

  return (
    <>
      <h2 className='title'>Product List </h2>
      {
        items.length > 0 ? (
          <div id='product-list'>
            {
              items.map((item, index) => (
                <Product key={index} productObj={item} />
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
    <div>
      <img src={productObj.imageUrl} alt='' />
      <h2> {productObj.title} </h2>
      <p> {productObj.descreption} </p>
      <span className={`f20 ${productObj.price < 40000 ? " discount" : " price"}`}>
        {productObj.price} TL
      </span>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {
        isOpen ? (
          <p>Akşam {closeHour}'e kadar sipariş verebilirsiniz. </p>
        ) : (
          <p>İşletmemiz şuan kapalıdır. Açılış saatimiz : {openHour}</p>
        )
      }
    </footer>
  )
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