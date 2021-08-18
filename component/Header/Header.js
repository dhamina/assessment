import Link from "next/link";
import { useState } from "react";
export default function Header() {
    const [show,setShow] = useState(false)
    const menuHandler = ()=>{
        setShow(!show)
    }
  return (
    <div>
      <div className="h__cn">
        {/* <img className="h__m__icn" src="/icon/menu.svg" /> */}
        <div onClick={menuHandler} className="menu__icn">
          <span className="menu__icn__s"></span>
          <span className="menu__icn__s"></span>
          <span className="menu__icn__s"></span>
        </div>

        <p  className="h__m__tle">
          EXP<span className="brdr">|</span>CON
        </p>
      </div>
      {show && <div className="menu__cn">
        <div >
          <div className="lg__cn">
            <div  onClick={menuHandler}  className="menu__icn">
              <span className="menu__icn__s"></span>
              <span className="menu__icn__s"></span>
              <span className="menu__icn__s"></span>
            </div>

            <p className="h__m__tle">
              EXP<span className="brdr">|</span>CON
            </p>
          </div>
          <div className="mn__itm__cn">
            <Link href="/">WHAT IS IT</Link>
            <Link href="/perks">PERKS</Link>
            <Link href="/pricing">PRICING</Link>
          </div>
        </div>
      </div>}
      <style jsx>
        {`
          .h__cn {
            display: flex;
            align-items: center;
            padding: 20px 50px;
            z-index: 10;
            position: relative;
          }
          .h__m__icn {
            width: 56px;
            height: 44px;
            margin-right: 40px;
          }
          .h__m__tle {
            color: white;
            font: normal normal normal 48px/57px Helvetica Neue;
            font-family: sans-serif;
          }
          .brdr {
            padding: 0px 7px;
          }
          .menu__cn {
            color: white;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 482px;
            height: 100px;
            background: black;
            z-index: 10;
            position: absolute;
            top: 0px;
            height: 500px;
            border-radius: 0px 990px 927px 0px;
            width: 582px;
            height: 582px;
          }
          .menu__icn {
            display: flex;
            flex-direction: column;
            margin-right: 25px;
            margin-bottom: -9px;
            cursor:pointer;
          }
          .menu__icn__s {
            width: 56px;
            border-top: 5px solid white;
            border-radius: 5px;
            margin-bottom: 10px;
          }
          .lg__cn {
            display: flex;
            align-items: center;
            margin-left: 40px;
          }
          .mn__itm__cn {
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            font-size: 40px;
            padding-left: 45px;
          }
        `}
      </style>
    </div>
  );
}
