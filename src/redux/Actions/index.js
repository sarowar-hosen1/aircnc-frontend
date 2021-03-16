export const location = (place) => {
    return{
        type: 'DESTINATION',
        payload:place
    }
}

export const arrival = (date) => {
    return {
        type: 'ARRIVAL_DATE',
        payload:date,
    }
}
export const checkout = (date) => {
    return {
        type: 'CHECKOUT_DATE',
        payload:date,
    }
}
export const adult = (numOfAdult) => {
    return {
        type: 'ADULT',
        payload:numOfAdult
    }
}

export const child = (numOfChild) => {
    return {
        type: 'CHILD',
        payload:numOfChild
    }
}