import React from "react";
import { BrowserRouter,NavLink } from "react-router-dom";
import './navlink.css'
import Products from "./products";
import Home from "./home";


export default function Router3(){
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/'
                    className={({isActive})=>
                        isActive?"active_menu":"menu"}
                    style={({isActive})=>{
                        return{
                        fontWeight:isActive?"bold":""
                        };
                    }}>Home</NavLink> -&nbsp;
                    <NavLink to='/products' className={({isActive})=>isActive?"active-menu":"menu"}>
                        Products</NavLink> -&nbsp;
                    <NavLink to='/member' className={({isActive})=>isActive?"active-menu":"menu"}>
                        Member</NavLink> -&nbsp;
                    <NavLink to='/contact' className={({isActive})=>isActive?"active-menu":"menu"}>
                        Contact Us</NavLink>                  
            </nav>
        </BrowserRouter>
    )
}