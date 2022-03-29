import React from 'react'
import { Accordion } from 'react-bootstrap';
import { FAQ_DATA } from '../../constants';
import img_plus from '../../assets/images/plus-lg.svg'
import img_minus from '../../assets/images/dash-lg.svg'

export default function AccDropDown() {
  return (
    <Accordion>
      {FAQ_DATA.map((i, index) => (
        <Accordion.Item eventKey={i} className='my-4' key={index}>
          <Accordion.Header>
            <span className='fs-3 fw-bolder text-black'>{i.question}</span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="fs-5">
              {i.answer}
            </span>
          </Accordion.Body>
        </Accordion.Item>
      ))}

      <style jsx>{`
        .accordion-button:not(.collapsed)::after {
          background: url(${img_plus}) no-repeat center;
          background-size: contain;
          content: '';
          height: 20px; 
          width: 20px;
        }
        .accordion-button.collapsed::after {
          background: url(${img_minus}) no-repeat center;
          background-size: contain;
          content: '';
          height: 20px; 
          width: 20px;
        }
        `}</style>
    </Accordion>
  )
}
