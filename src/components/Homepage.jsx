import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import Loader from './Loader'
import News from './News'
const {Title} = Typography

const Homepage = () => {

  const  {data, isFetching} = useGetCryptosQuery(10);
  const globalStats= data?.data?.stats
  
  
  
  if (isFetching) return <Loader/>
  return (
    <>
    <Title level={2} className='heading'>Global Crypto Stats
    </Title>
<Row>
  <Col span={12}>
    <Statistic title='Total Cryptocurrencies' value={globalStats.total}></Statistic>
  </Col>

   <Col span={12}>
    <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}></Statistic>
  </Col>
   <Col span={12}>
    <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}></Statistic>
  </Col>
   <Col span={12}>
    <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}></Statistic>
  </Col>
   <Col span={12}>
    <Statistic title='Total Market' value={millify(globalStats.totalMarkets)}></Statistic>
  </Col>
</Row>
<div className='home-heading-container'>
  <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
   <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
</div>

<Cryptocurrencies/>
<div className='home-heading-container'>
  <Title level={2} className='home-title'>Latest Crypto News</Title>
   <Title level={3} className='show-more'><Link to='/news'>Show more</Link></Title>
</div>
<News/>

    </>
  )
}

export default Homepage
