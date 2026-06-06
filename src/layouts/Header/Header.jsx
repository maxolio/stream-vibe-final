import './Header.scss'
import Logo from '@/components/Logo'

export default (props) => {

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo"/>
      </div>
    </header>
  )
}