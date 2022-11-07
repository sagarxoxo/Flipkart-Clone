import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoreySection from '../../components/CategoreySection'
import ProductRecommend from '../../components/ProductRecommend'
import categoreyData from "../../data/CategoreyData"
import ProductRecommendData from "../../data/ProductRecommend"
import "./Home.css"
export default function Home() {
  return (
    <div>
    <div className='seaction1'>
    {categoreyData.map(data => {
        return (
            <CategoreySection 
                img={data.img}
                title={data.title}
            />
        )
    })}
    </div>
    
    {ProductRecommendData.map(data => {
        return (
            <ProductRecommend 
                {...data}
            />
        )
    })}
    
    </div>
  )
}
