import { useEffect, useState } from 'react';


export function useResources() {
    // 1. state
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);  // so we can conditionally render e.g. loading msg
    const [error, setError]         = useState(null);  // so we can conditionally render error msgs

    // 2. fetch function
    async function fetchResources() {
        
    }

    // 3. effect
    useEffect(
        // param 1: the callback
        () => {
            fetchResources();
        },
        // param 2: dependency array
        []  // -> only fire effect when page loads
    )

    // 4. function to refresh data
    function refetch() {
        // from this hook, I also want to return a way to refresh resources
        fetchResources();
    }

    // I'm returning an overall object from this hook that contains:
    return { resources, isLoading, error, refetch }
}