import { Carousel } from "antd";

import { Card } from "antd";

const { Meta } = Card;
import { useState } from "react";
import Image from "next/image";

export type Product = {
 id: number;
 name: string;
 price: number;
 image: string;
 category: string;
};

type Props = {
 title: string;
 products: Array<{ categoria: string; products: Array<Product> }>;
};

const ProductSlider = ({ title, products }: Props) => {
 const [activeIndex, setActiveIndex] = useState(0);
 console.log(products[activeIndex].products.map((product) => product));

 return (
  <section>
   <h2>{title}</h2>
   <div>
    <ul>
     {products.map((product, index) => (
      <li key={index}>
       <button
        type="button"
        onClick={(event) => {
         setActiveIndex(index);
        }}
       >
        {product.categoria}
       </button>
      </li>
     ))}
    </ul>

    <div className="product-slider">
     <Carousel
      autoplay
      autoplaySpeed={6000}
      pauseOnHover={false}
      slidesToShow={4}
     >
      {products[activeIndex].products.map((product) => (
       <Card
        key={product.id}
        hoverable
        style={{ width: 260 }}
        cover={
         <Image
          src={product.image}
          alt={product.name}
          width="260"
          height="230"
         />
        }
       >
        <Meta title={product.name} description={`$${product.price}`} />
       </Card>
      ))}
     </Carousel>
    </div>
   </div>

   <style jsx>{`
    section {
     width: 80%;
     margin: 3rem auto;
    }
    h2 {
     text-align: center;
     text-wrap: wrap;
     font-family: "Relaway", sans-serif;
    }
    ul {
     display: flex;
     justify-content: space-around;
     list-style: none;
     padding: 1rem;
    }
    ul button {
     background: none;
     border: none;
     font-size: 1.3rem;
     font-family: "Quicksand", sans-serif;
     cursor: pointer;
    }
   `}</style>
  </section>
 );
};

export default ProductSlider;
