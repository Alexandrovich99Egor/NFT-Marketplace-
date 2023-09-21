import '../Variables/Variables.scss'
import './Header.scss'
import LogoHeader from './HeaderLogo.png'
import Button from '../Button/Button'


function Header() {
    return (
        <header className='header'>
            <div className="container header__container">
                <div className='header__image'>
                    <img className='header__logo' src={LogoHeader} alt="header-logo" />
                </div>
                <nav className='header__nav'>
                    <ul className='header__menu'>
                        <li className="header__menu-item">
                            <a className="header__menu-link" href="">Explore</a></li>
                        <li className="header__menu-item">
                            <a className="header__menu-link" href="">Creators</a></li>
                        <li className="header__menu-item">
                            <a className="header__menu-link" href="">Community</a></li>
                    </ul>
                    <Button
                        className={'header-button'}
                        textButton={'Connect Wallet'}
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header;