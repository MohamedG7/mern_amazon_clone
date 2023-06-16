import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { useCart } from '../Server/Context/Hooks/cartHook';
import { useUser } from '../Server/Context/Hooks/userHook';
import '../style/style.css'

function Header() {
  const { cartItems } = useCart();
  const { currentUser, logout } = useUser();
  const user = currentUser;
  const handleAuth = () => {
    if(user) {
      logout();
    }
  };
    return (
        <div className = 'header'>
           <Link to = '/'>
              <img className = 'header__logo' src = "https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt = "" />
           </Link>
           <div className = 'header__search'>
              <input type = 'text' className = 'search__inp' />
              <SearchIcon className = 'search__icon' />
           </div>
           <div className = 'header__Nav'>
               <Link to = {!user && '/login'} className = 'header__link'>
                 <div onClick = {handleAuth} className = 'header__opt'>
                   <span className = 'header__optLineOne'>Hello {!user? "Guest" : user.username}</span>
                   <span className = 'header__optLineTwo'>{user? 'Sign Out': 'Sign In'}</span>
                 </div>
                </Link>
               
               <Link to = '/login' className = 'header__link'>
                 <div className = 'header__opt'>
                   <span className = 'header__optLineOne'>Returns</span>
                   <span className = 'header__optLineTwo'>orders</span>
                 </div>
               </Link>
               
               <Link to = '/' className = 'header__link'>
                 <div className = 'header__opt'>
                   <span className = 'header__optLineOne'>Your</span>
                   <span className = 'header__optLineTwo'>Prime</span>
                 </div>
               </Link>

               <Link to = '/checkout' className = 'header__link'>
                 <div className = 'header__bascket'>
                    <ShoppingBasketOutlinedIcon />
                    <span className = 'header__optLineTwo bascket'>{cartItems?.length}</span>
                 </div>
               </Link>
           </div>
        </div>
    )
}

export default Header
