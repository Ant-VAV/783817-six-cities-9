import { Link } from 'react-router-dom';
import { AuthorizationStatus, Page } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/state';
import React from 'react';
import { logoutAction } from '../../../store/api-actions';

interface HeaderProps {
  isMainPage?: boolean;
  isLoginPage?: boolean;
}

export function Header(props: HeaderProps) {
  const { isMainPage = false, isLoginPage = false } = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Authorized;

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(logoutAction());
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to={Page.Main} className={`header__logo-link ${isMainPage && 'header__logo-link--active'}`}>
              <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41'/>
            </Link>
          </div>
          {!isLoginPage && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <Link className='header__nav-link header__nav-link--profile' to={Page.Favorites}>
                    <div className='header__avatar-wrapper user__avatar-wrapper'/>
                    {isLoggedIn ? (
                      <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                    ) : (
                      <span className='header__login'>Sign in</span>
                    )}
                  </Link>
                </li>
                {isLoggedIn && (
                  <li className='header__nav-item'>
                    <a className='header__nav-link' href='/#' onClick={handleLogoutClick}>
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
