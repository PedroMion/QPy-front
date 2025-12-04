import { useState, useCallback } from "react";
import { OPEN, CLOSED } from '../../Constants/networkConstants';

export function useNetworkConfiguration(setEnvironmentWhenNetworkChanges) {
    const [networkType, setNetworkType] = useState(OPEN);
    const [numberOfTerminals, setNumberOfTerminals] = useState(1);
    const [thinkTimeDistribution, setThinkTimeDistribution] = useState({});
    const [terminalsPriorityDistribution, setTerminalsPriorityDistribution] = useState(null);

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
        networkType,
        setNetworkType,
        numberOfTerminals,
        setNumberOfTerminals,
        thinkTimeDistribution,
        setThinkTimeDistribution,
        terminalsPriorityDistribution,
        setTerminalsPriorityDistribution,
        handleNetworkChange,
        getNetworkConfiguration,
    };
}