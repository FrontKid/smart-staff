import { FC } from 'react'
import { Link } from 'react-router-dom'
import { v4 as getRandomKey } from 'uuid'
//interface IHeader { }
const navBar = [['Цены', 'price', 'drop'], ['Компаниям', 'company'], ['Частным лицам', 'private-person'], ['Работа у нас', 'work-us'], ['Контакты', 'contacts'],]

export const Header: FC = () => {


  return (
    <header>
      <div className="header__top ">
        <div className="container">
          <p className='header__top-text'>Мы снизили цены на 20%. Успейте заказать по самой выгодной цене!</p>
          <ul className='header__top-list'>
            <li className='header__top-item active'>Одесса</li>
            <li className='header__top-item'>Киев</li>
            <li className='header__top-item'>Львов</li>
          </ul>
          <div className="header__top-phone"><a href="/">(048) 677-95-80</a></div>
        </div>
      </div>
      <div className="header__main">
        <div className='header__main-logo-div'>
          <img className='header__main-logo' src='../../../image/header/logo.png' alt="logotype" />
        </div>
        <nav>
          <ul>
            {navBar.map(([title, link]) => (
              <li key={getRandomKey()}><Link onClick={() => { }} to={`/${link}`}>{title}</Link></li>)
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}