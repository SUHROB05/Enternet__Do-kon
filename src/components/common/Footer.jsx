import React from 'react'
import LogoImg from "../../assets/common/logo.png"
import { BodyOne, Caption, CustomeLink, Title } from './CustomComponents'

export const Footer = () => {
  return (
    <>
      <footer className="py-14" >
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <img src={LogoImg} alt="LogoImg" className=' h-7' />
            <div className="flex flex-col gap-2 mt-5">
              <Caption>Address : 451 Wall Street, UK, London</Caption>
              <Caption>Email : suhrobamirov@gmail.com</Caption>
              <Caption>Call : +555 - 555 - 1234</Caption>
            </div>
            <br />
            <BodyOne>Subscribe To Our Newsletter</BodyOne>
            <input
              type='text'
              className=' p-3 w-full border bg-white-100 border-gray-100 rounded-md outline-none'
              placeholder='Enter your email address'
            /> 
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className="flex flex-col gap4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop With Sidebar</CustomeLink>
              <CustomeLink>Shop With Category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>Usefull Links</Title>
            <div className="flex flex-col gap4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop With Sidebar</CustomeLink>
              <CustomeLink>Shop With Category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our Blog</Title>
            <div className="flex flex-col gap4">
              <CustomeLink>Normal</CustomeLink>
              <CustomeLink>Shop With Sidebar</CustomeLink>
              <CustomeLink>Shop With Category</CustomeLink>
              <CustomeLink>Shop Filters Top Bar</CustomeLink>
              <CustomeLink>Shop Wide</CustomeLink>
              <CustomeLink>My Account</CustomeLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
