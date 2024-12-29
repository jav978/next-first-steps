import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords:['About Page','Jose','Información sobre about']
};

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-xl">Hola mundo</h1>
    <span className="text-7xl">About Page</span>
    </div>
  )
}

export default AboutPage
