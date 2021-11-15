import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { BackTop } from "antd";
import SliderDescription from "../components/Slider";
import EcomerceFeature from "../components/EcomerceFeature";
import ProductSlider from "../components/ProductSlider";

const productos = [
 {
  categoria: "collares",
  products: [
   {
    id: 12,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ad",
    price: 234,
   },
   {
    id: 13,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ads",
    price: 234,
   },
   {
    id: 14,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adsgf",
    price: 234,
   },
   {
    id: 15,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adasdf",
    price: 234,
   },
   {
    id: 124,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ad",
    price: 234,
   },
   {
    id: 133,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ads",
    price: 234,
   },
   {
    id: 142,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adsgf",
    price: 234,
   },
   {
    id: 151,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adasdf",
    price: 234,
   },
  ],
 },
 {
  categoria: "collares",
  products: [
   {
    id: 12,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ad",
    price: 234,
   },
   {
    id: 13,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ads",
    price: 234,
   },
   {
    id: 14,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adsgf",
    price: 234,
   },
   {
    id: 15,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adasdf",
    price: 234,
   },
   {
    id: 124,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ad",
    price: 234,
   },
   {
    id: 133,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ads",
    price: 234,
   },
   {
    id: 142,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adsgf",
    price: 234,
   },
   {
    id: 151,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adasdf",
    price: 234,
   },
  ],
 },
 {
  categoria: "collares",
  products: [
   {
    id: 12,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ad",
    price: 234,
   },
   {
    id: 13,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ads",
    price: 234,
   },
   {
    id: 14,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adsgf",
    price: 234,
   },
   {
    id: 15,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adasdf",
    price: 234,
   },
   {
    id: 124,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ad",
    price: 234,
   },
   {
    id: 133,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "ads",
    price: 234,
   },
   {
    id: 142,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adsgf",
    price: 234,
   },
   {
    id: 151,
    category: "anillos",
    image: "/images/baners/lateral.jpg",
    name: "adasdf",
    price: 234,
   },
  ],
 },
];

const Home: NextPage = () => {
 return (
  <div>
   <Head>
    <title>Xua accesorios </title>
    <meta
     name="description"
     content="XUA, es una empresa Colombiana, que nace de mi pasión de estar conectada con el mundo de la moda, ver desfiles, revistas, conocer distintas marcas y las novedades que estas ofrecen.."
    />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Header />
   <main>
    <SliderDescription />
    <EcomerceFeature />
    <ProductSlider title="Nuestros productos" products={productos} />
    <ProductSlider
     title="Productos mas vendidos"
     products={[
      {
       categoria: "",
       products: [
        {
         id: 12,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "ad",
         price: 234,
        },
        {
         id: 13,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "ads",
         price: 234,
        },
        {
         id: 14,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "adsgf",
         price: 234,
        },
        {
         id: 15,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "adasdf",
         price: 234,
        },
        {
         id: 124,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "ad",
         price: 234,
        },
        {
         id: 133,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "ads",
         price: 234,
        },
        {
         id: 142,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "adsgf",
         price: 234,
        },
        {
         id: 151,
         category: "anillos",
         image: "/images/baners/lateral.jpg",
         name: "adasdf",
         price: 234,
        },
       ],
      },
     ]}
    />
   </main>
   <BackTop duration={1500} />
  </div>
 );
};

export default Home;
