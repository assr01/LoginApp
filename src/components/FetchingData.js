import React from 'react'

const FetchingData = () => {
    const [urlData, setUrlData] = useState([]);

    const handleOnSubmit = async() =>{
        const response = await fetch("get/userData",{method: "GET"});
        if(!response.ok){
            throw new Error("Fail to fetch");
        }
        const data = response.data();
        setUrlData(data);
    }


    return (
        <div>
            {urlData.map((data) )}
            <button onSubmit={handleOnSubmit}> Fetch Data</button>
        </div>
    )
}

export default FetchingData
