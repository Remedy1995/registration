import { useState, useEffect } from 'react';

export const LoadingHooks = (props) => {
    const [loading, setloading] = useState(false);

    const loadingSpinner = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 500)
    }
    useEffect(() => {
        loadingSpinner();
    }, [])

    return { loading };
}

