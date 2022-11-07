import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import bgImg from "../Images/7593e7b6640822c1.webp"
export default function ProductRecommend(props) {
    console.log(props)
  return (
    <div className='seaction2'>
        <Container fluid>
            <Row>
                <Col lg={12}>
                    <Row>
                        <Col lg={2}>
                            <div className='banner bgIN'>
                                <h2>{props.headerTitle}</h2>
                                <Button>View All</Button>
                                <img src={bgImg} className="bgIN"/>
                            </div>
                        </Col>
                        {props.product.map(data => {
                            return (
                            <Col lg={2}>
                            <div className='cardSin singleRemProduct'>
                               <div classNam="productRecmImg"><img src={data.productImg}  /></div>
                               <br />
                               <span className='productRecmTitle'>{data.productName}</span> 
                               <span  className='productRecmPrice'>{data.priceOrshop}</span> 
                               <span  className='productRecmBrandName'>{data.brandName}</span> 
                            </div>
                        </Col>
                            )
                        })
                            }
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
