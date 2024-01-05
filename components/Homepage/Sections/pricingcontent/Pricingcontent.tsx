import React, { FC } from 'react'
import { price } from '@/pricingdata'
import "./index.css"

const Pricingcontent:FC = () => {
  return (
    <div className="pricing-content p-10">
    <div className="flex w-full align-item pb-5 ">
      <p className="thin pe-2">Our </p>
      <p className="bold">Pricing</p>
      <p className="bold ps-2">Plan</p>
    </div>
    <div className="flex flex-wrap justify-center py-10">
      {price.map((item) => (
        <div key={item.id} className="card Pricecard m-4 p-5 border border-gray-300 rounded-md ">
          <h3 className="text-lg font-semibold mb-2 span-text">{item.name}</h3>
          <p className="text-gray-600 mb-2 span-text " style={{fontSize:"35px", fontWeight:"bold"}}>{item.price}</p>
         <div>
         <ul className="list-disc ps-4 benefits-text">
            {item.details.split('\n').map((benefit, index) => (
              <li key={index} className='benefits-text '>{benefit}</li>
            ))}
          </ul>
         </div >
         <div style={{textAlign:"center"}}>
         <button className="btn-not-hover text-white  mt-4">{item.more}</button>

         </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Pricingcontent