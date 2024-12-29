import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Product',
  description: 'SEO Product',
  keywords:['Product Page','Jose','Información sobre product']
};

const ProductPage = () => {
  return (
    <div>
     <span className="text-7xl">Pricing Page</span>
    </div>
  )
}

export default ProductPage
