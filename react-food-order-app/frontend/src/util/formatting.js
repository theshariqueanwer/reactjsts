export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
});


export const inrCurrencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
});