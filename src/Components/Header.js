import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";
  import React, { useEffect } from "react";
  import { useStateValue } from "./StateProvider";
  
  function Header() {
    const [{ cart }, dispatch] = useStateValue();
  
    useEffect(() => {
        const toggleIcon = document.querySelector(".toggleMenu");
        toggleIcon.addEventListener("click", () => {
          document.querySelector(".rightMenu").classList.toggle("active");
        });
      }, []);
    
  
    return (
      <header>
         <img src='https://avatars.dicebear.com/api/gridy/123456.svg'
     alt=''
     className='logo'/>
  
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
  
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
            <p>{cart ? cart.length : ""}</p>
          </div>
        </div>
  
        <div className="profileContainer">
          <div className="imgBox">
            <img src='https://avatars.dicebear.com/api/micah/987.svg'
             alt=''
             className='profilePic'
             />
          </div>
          <h2 className="userName">Vetrivel Ravi</h2>
        </div>
  
        <div className="toggleMenu">
          <BarChart className="toggleIcon" />
        </div>
      </header>
    );
  }
  
  export default Header;
  