import React from 'react'
import styles from './style.module.css';
import Header from '../../components/Header';
import Btn from '../../components/Btn';
import { img_sampleLogo } from '../../assets';
import AccDropDown from '../../components/AccDropDown';
import TeamCard from '../../components/TeamCard';

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      {/* hero */}
      <div className='container pb-5'>
        <Header />
        <div className="d-flex justify-content-center align-items-end" style={{ marginTop: "60vh" }}>
          <Btn>JOIN DISCORD</Btn>
        </div>
      </div>

      {/* about */}
      <div style={{ backgroundColor: "#FCF0FC" }} className="py-5">
        <div className="my-5 container">
          <h1 className="text-center fw-bold">ABOUT</h1>
          <div className="text-center fs-5 fw-bold mt-5 px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida purus nisi. Integer ut neque placerat, pellentesque ex et, egestas purus. Donec eu dignissim nisl, eget viverra nisi. Sed posuere neque augue., nisi. Sed posuere neque augue.
          </div>
          <div className="row pt-5">
            <div className="col-3 p-4">
              <img src={img_sampleLogo} alt="" className='img-fluid' />
            </div>
            <div className="col-3 p-4">
              <img src={img_sampleLogo} alt="" className='img-fluid' />
            </div>
            <div className="col-3 p-4">
              <img src={img_sampleLogo} alt="" className='img-fluid' />
            </div>
            <div className="col-3 p-4">
              <img src={img_sampleLogo} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>


      {/* blooom plan */}
      <div style={{ backgroundColor: "#D7D6EA" }} className="py-5">
        <div className="my-5 container">
          <h1 className="text-center fw-bolder">BLOOM PLAN</h1>
          <div className="row align-items-center mt-5">
            <div className="col-8">
              <div className="fs-5 fw-bold px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida purus nisi. Integer ut neque placerat, pellentesque ex et, egestas purus. Donec eu dignissim nisl, eget viverra nisi. Sed posuere neque augue., nisi. Sed posuere neque augue.
              </div>
            </div>
            <div className="col-4">
              <Btn>DISCORD</Btn>
            </div>
          </div>
        </div>
      </div>


      {/* FAQ */}
      <div style={{ backgroundColor: "#FCF0FC" }} className="py-5">
        <div className="my-5 container">
          <h1 className="text-center fw-bolder">FAQ</h1>
          <div className="mt-5 px-5">
            <AccDropDown />
          </div>
        </div>
      </div>


      {/* team */}
      <div style={{ backgroundColor: "#E8CAEF" }} className="py-5">
        <div className="my-5 container">
          <h1 className="text-center fw-bolder">TEAM</h1>
          <div className="mt-5 px-5">
            <div className="text-center fs-5 fw-bold p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida purus nisi. Integer ut neque placerat, pellentesque ex et, egestas purus. Donec eu dignissim nisl, eget viverra nisi. Sed posuere neque augue., nisi. Sed posuere neque augue.
            </div>
            <br />
            <div className="row">
              {Array(4).fill(0).map((_, i) => (
                <div className="col-6 d-flex justify-content-center align-items-center p-3">
                  <TeamCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* footer */}
      <div style={{ backgroundColor: "#FCF0FC" }} className="py-5">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <img src={img_sampleLogo} alt="" className='img-fluid' style={{width:"130px"}}/>
          </div>
        </div>
      </div>
    </div >
  )
}
