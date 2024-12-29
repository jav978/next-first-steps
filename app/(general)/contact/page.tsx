import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
 title: 'SEO Contact',
 description: 'SEO Contact',
 keywords:['Contact Page','Jose','Información sobre contact']   
};
const ContactPage = () => {
  return (
    <div>
     <span className="text-7xl">Contact Page</span>
    </div>
  )
}

export default ContactPage
