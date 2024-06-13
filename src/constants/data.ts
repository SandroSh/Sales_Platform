export interface ProductType {
  name: string;
  image: string;
  price: number;
  isInSale: boolean;
}

export const products: ProductType[] = [
  {
    name: "Apple iPhone 13",
    image:
      "https://th.bing.com/th/id/OIP.KyrBu1s2mkrqDl3Bdo8QtAHaHa?rs=1&pid=ImgDetMain",
    price: 999.99,
    isInSale: false,
  },
  {
    name: "Samsung Galaxy S21",
    image:
      "https://th.bing.com/th/id/OIP.sj7nD_iS2MFNfr79IejP5AHaJF?rs=1&pid=ImgDetMain",
    price: 799.99,
    isInSale: true,
  },
  {
    name: "Dell XPS 13 Laptop",
    image:
      "https://th.bing.com/th/id/R.150b3a742fe025e1112836b556276ee5?rik=irUeER40wjfeXQ&pid=ImgRaw&r=0",
    price: 1299.99,
    isInSale: true,
  },
  {
    name: "Apple Watch Series 5",
    image:
      "https://th.bing.com/th/id/OIP.jIiA9AhFZS2sNeQLuTTo4QHaHa?rs=1&pid=ImgDetMain",
    price: 399.99,
    isInSale: true,
  },
  {
    name: "Sony WH-1000XM4",
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    price: 349.99,
    isInSale: false,
  },
  {
    name: "Google Pixel 5",
    image:
      "https://th.bing.com/th/id/R.763d71da8660c13851a8d37472eb1f2b?rik=NBfUjkwuTjyO%2fw&pid=ImgRaw&r=0",
    price: 599.99,
    isInSale: false,
  },
  {
    name: "Bose QuietComfort 35 II",
    image: "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_SL1500_.jpg",
    price: 299.99,
    isInSale: true,
  },
  {
    name: "Microsoft Surface Pro 7",
    image:
      "https://th.bing.com/th/id/OIP.yppwdGJ7MboM-3cZQ17JngAAAA?rs=1&pid=ImgDetMain",
    price: 749.99,
    isInSale: false,
  },
  {
    name: "JBL Flip 5 Speaker",
    image:
      "https://th.bing.com/th/id/R.e31756f23f1453276dcb36cd6504ef4a?rik=NPJh81at5w7Urw&pid=ImgRaw&r=0",
    price: 119.99,
    isInSale: true,
  },
  {
    name: "Canon EOS R7 Camera",
    image:
      "https://i1.adis.ws/i/canon/eos-r7-frt_related-products_34022781d2e04e5eab9182b5441f321f",
    price: 2499.99,
    isInSale: false,
  },
  {
    name: "Nintendo Switch",
    image: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
    price: 299.99,
    isInSale: true,
  },
  {
    name: "Fitbit Charge 4",
    image: "https://m.media-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg",
    price: 149.99,
    isInSale: false,
  },
  {
    name: "GoPro HERO9",
    image: "https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SL1500_.jpg",
    price: 399.99,
    isInSale: true,
  },
  {
    name: "Kindle Paperwhite",
    image:
      "https://maydocsachtot.com/wp-content/uploads/2017/11/Kindle-Paperwhite-2017-3.jpg",
    price: 129.99,
    isInSale: false,
  },
  {
    name: "Logitech MX Master 3 Mouse",
    image:
      "https://th.bing.com/th/id/OIP.ava7qpYOnNm6Ltfz98TujgHaFj?rs=1&pid=ImgDetMain",
    price: 99.99,
    isInSale: true,
  },
  {
    name: "Logitech G G203 Lightsync",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/logitech_910_005791_g203_lightsync_gaming_mouse_1574403.jpg",
    price: 129.99,
    isInSale: true,
  },
];
