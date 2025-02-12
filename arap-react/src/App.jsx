import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState({ message: "", year: "" });

    useEffect(() => {
        fetch("http://localhost:8081/admin/message") // Yeni API endpoint
            .then((response) => response.json()) // JSON formatında al
            .then((data) => setData(data)) // Veriyi state'e kaydet
            .catch((error) => console.error("Error fetching message:", error));
    }, []);

    return (
        <div>
            <h1>{data.message || "Loading..."}</h1>
            <p>Year: {data.year}</p>
        </div>
    );
}

export default App;