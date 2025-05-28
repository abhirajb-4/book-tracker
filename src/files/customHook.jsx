import { useState } from "react"


export const userSearchHook =(books) =>{
    const [results, setResults] = useState([]);
    const [loading,setLoading] = useState(false);

    const search =(query) =>{
        setLoading(true);
        setTimeout(
            () =>{
                const lowerQuery = query.toLowerCase();
                setResults(
                    books.filter(
                        (b) => b.title.toLowerCase().includes(lowerQuery)||
                        b.author.toLowerCase().includes(lowerQuery)     
                            )
                );
                setLoading(false);
            }

        ,1000)
    };
    return {results,search,loading};
};