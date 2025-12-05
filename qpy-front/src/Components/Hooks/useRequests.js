import axios from "axios"; 


export const useRequests = () => { 
    const backendUrl = process.env.REACT_APP_API_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    
    const api = axios.create({ 
        baseURL: backendUrl, 
        headers: { 
            "Content-Type": "application/json", 
            "x-api-key": apiKey,
        }, 
    }); 
    
    const simulateNetwork = async (simulationData) => { 
        try { 
            const response = await api.post("/simulate", simulationData); 
            return response.data; 
        } catch (error) { 
            console.error("Simulation error:", error); 
            return null; 
        } 
    }; 
    
    return { 
        simulateNetwork 
    }; 
};