import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Detects the current route path

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the path changes
    }, [pathname]); // Effect runs every time the route path changes

    return null; // No UI to render
};

export default ScrollToTop;
