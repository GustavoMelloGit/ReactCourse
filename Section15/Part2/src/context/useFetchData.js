import { useState } from "react";

const useFetchData = async (link, headers = null, callbackFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = async () => {
        console.log("alo");
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(link, headers ? headers : undefined);

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            callbackFunction(data)
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useFetchData;