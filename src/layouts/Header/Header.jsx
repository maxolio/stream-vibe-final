import './Header.scss'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {

  const {url} = props

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Movies & Shows',
      href: '/movies',
    },
    {
      label: 'Support',
      href: '/support',
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions',
    },
  ]

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map((menuItem, index) => (
              <li className="header__menu-item"
                  key={index}>
                <a className={clsx('header__menu-link', {
                  'is-active': menuItem.href === url,
                })}
                   href={menuItem.href}>
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button className="header__button"
                  disabled
                  label="Search" />
          <Button className="header__link"
                  label="Notification"

                  href="#" />
        </div>
      </div>
    </header>
  )
}