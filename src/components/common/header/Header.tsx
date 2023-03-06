import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as getRandomKey } from 'uuid'

import arrow from '../../../assets/image/header/arrow.svg'
import geo from '../../../assets/image/header/geo.svg'
import logo from '../../../assets/image/header/logo.png'

import style from './Header.module.scss'
//interface IHeader { }

const navBar = [['Цены', 'price', 'drop'], ['Компаниям', 'company'], ['Частным лицам', 'private-person'], ['Работа у нас', 'work-us', 'drop'], ['Контакты', 'contacts'],]
const cities = [{ selected: true, city: 'Одесса' }, { selected: false, city: 'Львов' }, { selected: false, city: 'Киев' }]

export const Header: FC = () => {

  const [isVissible, setIsVissible] = useState<boolean>(false)


  const choiceCity = (city: string) => {

    return cities.map(obj => {
      if (obj.city === city) {
        setIsVissible(!isVissible)
        return obj.selected = true
      }

      return obj.selected = false
    })

  }


  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <div className={`${style.innerTop} container`}>
          <p className='header__top-text'>Мы снизили цены на 20%. Успейте заказать по самой выгодной цене!</p>
          <div className={style.cityInner} onClick={() => setIsVissible(!isVissible)}>
            <img className={style.cityGeoIcon} src={geo} alt="geolocation" />
            <span className={style.activeCity} >{cities.map(obj => obj.selected && obj.city)}</span>
            {isVissible && <ul className={style.cityPopUp}>
              {cities.map(obj =>
                !obj.selected &&
                <li key={getRandomKey()} onClick={() => choiceCity(obj.city)} className={style.cityPopUp_item}>
                  {obj.city}
                </li>)}
            </ul>}
            <img className={`${style.cityArrowIcon} ${isVissible && style.active}`} src={arrow} alt="arrow" />
          </div>
          <div className="header__top-phone">

            <a className={style.phone} href="tel:0486779580">(048) 677-95-80</a>
          </div>
        </div>
      </div>
      <div className={`${style.headerMain} container`}>
        <div className='header__main-logo-div'>
          <img className='header__main-logo' src={logo} alt="logotype" />
        </div>
        <nav className={style.nav}>
          <ul className={style.navList}>
            {navBar.map(([title, link]) => (
              <li key={getRandomKey()}><Link onClick={() => { }} to={`/${link}`}>{title}</Link></li>)
            )}
          </ul>
        </nav>
        <button className='button'>Заказать звонок</button>
      </div>
    </header>
  )
}