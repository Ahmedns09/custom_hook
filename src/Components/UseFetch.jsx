import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        if (!url) return; // prevent fetch if url is empty or undefined
        fetch(url).then(res => res.json())
            .then(data => setData(data))
    }, [])
    return [data]
}

export default UseFetch
