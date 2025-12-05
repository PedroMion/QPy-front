import axios from "axios";

export const useRequests = () => {
    const simulateNetwork = async (simulationData) => {
        try {
            const response = await axios.post(
                "/.netlify/functions/simulate",
                simulationData,
                { headers: { "Content-Type": "application/json" } }
            );

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