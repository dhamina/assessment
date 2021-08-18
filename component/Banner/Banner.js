import Link from "next/link";
import { useEffect, useState } from "react";
import { ExpButton } from "../ExpButton/ExpButton";

export const Banner = () => {
    const images =['image1','image2','image3']
    const [image,setImage] = useState('image1')
    const [active,setActive] = useState(1)
    useEffect(()=>{
     setInterval(() => {
    //    console.log(active)
        setImage(images[Math.floor(Math.random() * images.length)] )
     }, 10000);
    },[])
      console.log(image)

  return (
    <div className="b__cn">
      <img src={`/image/${image}.png`} />
      <div className="b__cn__txt__cn">
        <p className="tle">INTERACTIVE CONCERT EXPERIENCE</p>
        <p className="sbtle">
          Experience your favourite artists like never before and from the
          comfort of your own home.
        </p>
        <div className="btn__cls">
            <Link href="/pricing">
        <ExpButton customClass="gradient" label="TRY IT NOW" />
            </Link>
        </div>
      </div>
      <style jsx>
        {`
          .b__cn {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
          }
          .tle {
            font-size: 50px;
          }

          .sbtle {
            font-size: 32px;
            width: 40%;
            text-align: center;
          }
          .b__cn__txt__cn {
            position: relative;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 300px 150px;
            font-family: sans-serif;
          }
          .b__cn img {
            width: 100%;
            position: absolute;
          }
          .btn__cls{
              width:200px;
          }
        `}
      </style>
    </div>
  );
};
