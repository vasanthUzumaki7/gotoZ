import React from 'react'

const ThirdComponent = () => {

    const arr = [
        {
          id: 1,
          title: "Product Packaging",
          img: "https://ar-code.com/images/product-packaging.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 2,
          title: "Beverage Packaging",
          img: "https://ar-code.com/images/food-packaging.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 3,
          title: "Event Banners & Posters",
          img: "https://ar-code.com/images/banners-posters.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 4,
          title: "business-cards",
          img: "https://ar-code.com/images/business-cards.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 5,
          title: "brochures-flyers",
          img: "https://ar-code.com/images/brochures-flyers.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 6,
          title: "banners-posters",
          img: "https://ar-code.com/images/banners-posters.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 7,
          title: "books",
          img: "https://ar-code.com/images/books.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 8,
          title: "bottles-cans",
          img: "https://ar-code.com/images/bottles-cans.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 9,
          title: "clothing",
          img: "https://ar-code.com/images/clothing.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 10,
          title: "displays-windows",
          img: "https://ar-code.com/images/displays-windows.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 11,
          title: "newspapers-magazines",
          img: "https://ar-code.com/images/newspapers-magazines.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 12,
          title: "machinery-equipment",
          img: "https://ar-code.com/images/machinery-equipment.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 13,
          title: "tickets",
          img: "https://ar-code.com/images/tickets.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 14,
          title: "vehicles",
          img: "https://ar-code.com/images/vehicles.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        },
        {
          id: 15,
          title: "websites",
          img: "https://ar-code.com/images/websites.webp",
          description: "Integrate AR Codes on packaging for Augmented Reality digital experiences, easily scanned on Android and iOS devices"
        }
      ];
      
      
  return (
    <div className='third-container'>
        <h1>Add Augmented Reality Experiences Anywhere</h1>
        <p className='third-container-p'>AR Code technology has the  potential to enhance a wide variety of products and materials. <strong>By using AR QR Codes, businesses and organizations can easily add interactive, digital experiences to these materials,</strong> making them more engaging and informative for users.</p>
        <div className='third-container-cards'>
            {arr.map((item)=>(
                <ol key={item.id}>
                    <h3>{item.title}</h3>
                   <img src={item.img}/>
                   <p>{item.description}</p>
                </ol>
            ))}
      </div>
    </div>
  )
}

export default ThirdComponent
