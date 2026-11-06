export default function ProductList() {
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