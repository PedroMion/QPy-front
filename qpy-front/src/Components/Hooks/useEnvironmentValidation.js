
import { OPEN } from '../../Constants/networkConstants';
import { toast } from 'react-toastify';

export const useEnvironmentValidation = (onError) => {
    const showErrorToUser = (message) => {
        toast.error(message);

        onError();
    };

    const isResponseValid = (response) => {
        if(response !== null) {
            return true;
        };

        showErrorToUser('Something went wrong with the simulation. Please, try again later.');
        return false;
    };

    const isRequestValid = (request) => {        
        if(!verifyServers(request.devices.servers)) {
            return false;
        }

        if(request.networkConfiguration.networkType === OPEN) {
            if(!verifyArrivals(request.devices.arrivals)) {
                return false;
            }
        } else {
            if(!verifyClosedNetwork(request)) {
                return false;
            }
        }

        return true;
    };

    const verifyServers = (servers) => {
        if(invalidArray(servers)) {
            showErrorToUser('At least one server must be provided');
            return false;
        }

        return true;
    };

    const verifyClosedNetwork = (request) => {
        if(fieldNegativeOrZero(request.networkConfiguration.numberOfTerminals)) {
            showErrorToUser('Invalid network configuration: Number of terminals');
            return false;
        }

        if(nullOrUndefined(request.terminalsConfiguration) || invalidArray(request.terminalsConfiguration.routes)) {
            showErrorToUser('Invalid network configuration: Terminals must have at least one connection');
            return false;
        }
        
        return true;
    };

    const verifyArrivals = (arrivals) => {
        if(invalidArray(arrivals)) {
            showErrorToUser('At least one arrival must be provided and configured for open networks');
            return false;
        }

        return true;
    };

    const nullOrUndefined = (param) => {
        if(param === undefined || param === null) {
            return true;
        }
    }

    const invalidArray = (array) => {
        return (!Array.isArray(array) || array.length === 0)
    };

    const fieldNegativeOrZero = (field) => {
        return field <= 0;
    };

    return {
        isRequestValid,
        isResponseValid,
    };
}