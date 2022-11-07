import React from 'react'
import { Col } from 'react-bootstrap'

export default function CategoreySection(props) {
  return (
    <Col lg={1}>
        <div className='catSec'>
            <img src={props.img} alt={props.title} className="categoryimg" /> 
            <span className='spTitleCat'>{props.title}</span>   
        </div>
    </Col>
  )
}
