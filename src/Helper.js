export function getYearValue(y){
    return new Date().getFullYear() - y
}

export function calculateBrand(b){
    let i;

    switch(b){
       case 'european':
           i = 1.30;
           break;
       case 'american':
           i = 1.15;
           break;
       case 'asian':
           i = 1.05;
           break;
        default:
            break;
    }

    return i;
}

export function getPlan(p){
    return (p === 'basic') ? 1.20 : 1.50;
}

export function firstToUpp(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}