import { useEffect, useState } from "react";

function useCurrenyinfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates || {}))
            .catch(() => setData({}));
    }, [currency]);
    return data;
}

export default useCurrenyinfo;