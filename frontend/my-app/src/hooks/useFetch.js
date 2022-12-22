import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData]  = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
            .then(res => {
                if(res.ok)
                    return res.json()
                else
                    throw new Error('Server Error')
            })
            .then((data) => {
                console.log(data.blogs);
                setData(data.blogs);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
            if(err.name === 'AbortError') return;
                setError(err.message);
                setIsPending(false);
            })
        }, 1000);

        return () => abortController.abort();

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;