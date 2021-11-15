import Image from "next/image";
import { Carousel } from "antd";

const SliderDescription = () => {
 return (
  <section className="slider">
   <div className="slider_container">
    <Carousel autoplay effect="fade" autoplaySpeed={5000} pauseOnHover={false}>
     <div className="slider_item">
      <Image
       src="/images/baners/BANNER_PRINCIPAL_2.png"
       alt=""
       width={1000}
       height={400}
       layout="responsive"
       objectFit="contain"
      />
     </div>
     <div className="slider_item">
      <Image
       src="/images/baners/BANNER_PRINCIPAL_1.png"
       alt="banner principal"
       layout="fill"
       objectFit="contain"
      />
     </div>
    </Carousel>
   </div>
   <div className="slider_lateral">
    <Image
     src="/images/baners/lateral.jpg"
     alt=""
     layout="fill"
     objectFit="contain"
    />
   </div>{" "}
   <style jsx>{`
    .slider {
     min-height: 400px;
     background-color: #f5e6d8;

     padding: 2rem 3rem;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     gap: 2rem;
    }
    .slider_container {
     height: 400px;
     width: 75%;
     position: relative;
    }
    .slider_item {
     width: 100%;
     height: 400px;
    }
    .slider_lateral {
     height: 400px;
     width: 20%;
     position: relative;
    }
   `}</style>
  </section>
 );
};

export default SliderDescription;
