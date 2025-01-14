import { useEffect, useState } from 'react';

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection]= useState("up")
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        let lastScrollY = window.scrollY;

        const updateScrollDirection = ()=>{
            const scroll_IN_Y = window.scrollY
            const direction = scroll_IN_Y > lastScrollY ? "down":"up"

        if(direction !== scrollDirection && Math.abs(scroll_IN_Y - lastScrollY)>10){
            setScrollDirection(direction)
        }
        setIsScrolled(scroll_IN_Y>0)

        lastScrollY = scroll_IN_Y> 0 ? scroll_IN_Y:0
        }

        window.addEventListener("scroll", updateScrollDirection)
        return()=>{
            window.removeEventListener("scroll", updateScrollDirection)
        }
        
    },[scrollDirection])

    return {scrollDirection, isScrolled}
};

export default useScrollDirection;