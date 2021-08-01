import {React, useState, useEffect} from 'react'

function Header({search, setQuery}) {

    const [, handleShow] = useState(false) 

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            } else{
                handleShow(false)
            }
        })
    },[])

    return (
        <div className="main">
            <div className="header">
                <h1>Photo Search App</h1>
                <div className="search">
                    <input type="text" className="input" placeholder="Search for images here..." onChange={(e) => setQuery(e.target.value)} />
                    <button className="icon" onClick={search}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3611 15.2778H16.2639L15.875 14.9028C17.2832 13.2695 18.0571 11.1843 18.0556 9.02778C18.0556 7.24226 17.5261 5.49683 16.5341 4.01222C15.5421 2.52761 14.1322 1.37049 12.4826 0.687203C10.833 0.0039116 9.01777 -0.174869 7.26655 0.17347C5.51533 0.521809 3.90674 1.38162 2.64418 2.64418C1.38162 3.90674 0.521809 5.51533 0.17347 7.26655C-0.174869 9.01777 0.0039116 10.833 0.687203 12.4826C1.37049 14.1322 2.52761 15.5421 4.01222 16.5341C5.49683 17.5261 7.24226 18.0556 9.02778 18.0556C11.2639 18.0556 13.3194 17.2361 14.9028 15.875L15.2778 16.2639V17.3611L22.2222 24.2917L24.2917 22.2222L17.3611 15.2778ZM9.02778 15.2778C5.56945 15.2778 2.77778 12.4861 2.77778 9.02778C2.77778 5.56945 5.56945 2.77778 9.02778 2.77778C12.4861 2.77778 15.2778 5.56945 15.2778 9.02778C15.2778 12.4861 12.4861 15.2778 9.02778 15.2778Z" fill="#303030"/>
                        </svg>
                    </button>
                </div>        
            </div>
        </div>
    )
}

export default Header
