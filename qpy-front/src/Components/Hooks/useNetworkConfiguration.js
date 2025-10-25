import { useState, useCallback } from "react";

export function useNetworkConfiguration(setEnvironmentWhenNetworkChanges) {
    const OPEN = "Open";
    const CLOSED = "Closed";

    const [networkType, setNetworkType] = useState(OPEN);
    const [numberOfTerminals, setNumberOfTerminals] = useState(1);
    const [thinkTimeDistribution, setThinkTimeDistribution] = useState({});

    const resetConfiguration = () => {
        setNumberOfTerminals(1);
        setThinkTimeDistribution({});
    };

    const handleNetworkChange = (value) => {
        setNetworkType(value);
        resetConfiguration();
        setEnvironmentWhenNetworkChanges(value);
    };

    const getNetworkConfiguration = useCallback(() => {
        if (networkType === OPEN) {
            return {'networkType': OPEN}
        } else {
            return {
                'networkType': CLOSED,
                'numberOfTerminals': numberOfTerminals,
                'thinkTimeDistribution': thinkTimeDistribution,
            }
        }
    }, [networkType, numberOfTerminals, thinkTimeDistribution]);

    return {
        OPEN,
        CLOSED,
        networkType,
        setNetworkType,
        numberOfTerminals,
        setNumberOfTerminals,
        thinkTimeDistribution,
        setThinkTimeDistribution,
        handleNetworkChange,
        getNetworkConfiguration,
    };
}