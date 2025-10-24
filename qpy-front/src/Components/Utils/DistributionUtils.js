export const EXPONENTIAL = "exponential";
export const CONSTANT = "constant";
export const UNIFORM = "uniform";
export const NORMAL = "normal";

export const getScaledDistribution = (distribution, scale) => {
    if(scale === 1 || scale === 0) {
        return distribution;
    }

    switch(distribution.distribution) { 
        case EXPONENTIAL: 
            return {'distribution': EXPONENTIAL, 'params': {'lambda': (Number(distribution.params.lambda) / scale)}}; 
        case CONSTANT: 
            return {'distribution': CONSTANT, 'params': {'constantValue': distribution.params.constantValue / scale}}; 
        case UNIFORM: 
            return {'distribution': UNIFORM, 'params': {'lowerBound': distribution.params.lowerBound / scale, 'upperBound': distribution.params.upperBound / scale}}; 
        case NORMAL: 
            return {'distribution': NORMAL, 'params': {'mu': distribution.params.mu / scale, 'sigma': distribution.params.sigma / scale}}; 
        default: 
            return distribution; 
    }
}