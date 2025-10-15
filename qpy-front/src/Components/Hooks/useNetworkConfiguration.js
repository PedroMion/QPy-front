import { useState, useCallback } from "react";

export function useNetworkConfiguration() {
    const OPEN = "Open";
    const CLOSED = "Closed";

    const [networkType, setNetworkType] = useState(OPEN);
    const [numOfTerminals, setNumOfTerminals] = useState(1);
    const [averageThinkTime, setAverageThinkTime] = useState(0);

    const resetConfiguration = () => {
        setNumOfTerminals(1);
        setAverageThinkTime(0);
    };

    const handleNetworkChange = (value) => {
        setNetworkType(value);
        resetConfiguration();
    };

    const getNetworkConfiguration = useCallback(() => {
        if (networkType === OPEN) {
            return {'type': OPEN}
        } else {
            return {
                'type': CLOSED,
                'numberOfTerminals': numOfTerminals,
                'averageThinkTime': averageThinkTime,
            }
        }
    }, [networkType, numOfTerminals, averageThinkTime]);

    return {
        OPEN,
        CLOSED,
        networkType,
        setNetworkType,
        numOfTerminals,
        setNumOfTerminals,
        averageThinkTime,
        setAverageThinkTime,
        handleNetworkChange,
        getNetworkConfiguration,
    };
}