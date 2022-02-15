interface HeaderProps {
  isLoggedIn?: boolean;
  isMainPage?: boolean;
  isLoginPage?: boolean;
}

export function Header(props: HeaderProps) {
  const { isLoggedIn = false, isMainPage = false, isLoginPage = false } = props;
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <a className={`header__logo-link ${isMainPage && 'header__logo-link--active'}`}
              href={isMainPage ? undefined : 'main.html'}
            >
              <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41'/>
            </a>
          </div>
          {!isLoginPage && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a className='header__nav-link header__nav-link--profile' href='#'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'/>
                    {isLoggedIn ? (
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    ) : (
                      <span className='header__login'>Sign in</span>
                    )}
                  </a>
                </li>
                {isLoggedIn && (
                  <li className='header__nav-item'>
                    <a className='header__nav-link' href='#'>
                      <span className='header__signout'>Sign out</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}