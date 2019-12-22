export function Must(value) {
    if (value && value.length === 0) {
        return `this field is required.`;
    }
    return '';
}

export function Min(value, limit) {
    if (value && value.length <= limit) {
        return `this field limit is ${limit}.`;
    }
    return '';
}

export function Max(value, limit) {
    if (value && value.length >= limit) {
        return `this field limit is ${limit}.`;
    }
    return '';
}

export function Number(value) {
    if (typeof(value) !== 'number') {
        return `this field only take number.`; 
    }
    return '';
}