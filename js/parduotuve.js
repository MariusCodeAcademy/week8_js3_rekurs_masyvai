"use strict";
console.log("Parduotuve");

let prekes = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "a",
    quantity: 200,
    shipping: 2.99,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "a",
    quantity: 20,
    shipping: 2.99,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "a",
    quantity: 34,
    shipping: 12.99,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "a",
    quantity: 45,
    shipping: 1.99,
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "b",
    quantity: 0,
    shipping: 2.99,
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "b",
    quantity: 10,
    shipping: 4.99,
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "b",
    quantity: 13,
    shipping: 2.99,
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "b",
    quantity: 101,
    shipping: 10.99,
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "c",
    quantity: 33,
    shipping: 2.99,
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "c",
    quantity: 30,
    shipping: 2.99,
  },
];

let categories = {
  a: "men clothing",
  b: "jewelery",
  c: "electronics",
};

// 1 uzd parasyti funkcija kuri grazina preke pagal jos ID

prekeInfo(5); // > objekta kurio id yra 5 + kategorijos pavadinima

// 2 uzd sukurti funkcija kuri grazina visas prekias pigesnias uz uzduota reiksme

getPrekesLessThan(50);

// 3. Parasyti funkcija kuri grazina prekes, kuriu siuntimas kainuoja 2.99
getTwooNineNinePrekes(); //

// 4. parasyti funkcija kuriai padavus kategorija kaip argumenta ji grazina
// tik prekias priklausancias tai kategorijiai
// jei tokios kategorijos nera turetu pranesti vartotojui
getPreskesInCategory("jewelery");

// 5. Parasyti funkcija kuri grazina masyva su objektais kuriame su prekes kategorija
// ir kiekis
// pvz
// [{
//   cat: "men clothing",
//   quantity: 3,
// },
// {
//   cat: "jewelery",
//   quantity: 2,
// },...]
