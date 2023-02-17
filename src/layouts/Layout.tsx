//
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

//
import { Header } from '../components/common/header/Header'
import { Footer } from '../components/common/footer/Footer'

//interface ILayout { }

export const Layout: FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  )
}