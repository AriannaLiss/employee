function parseIfNumber(str){
    return isNaN(str) ? str : parseFloat(str);
}

function descendingComparator(a, b, orderBy) {
    const first = parseIfNumber(a[orderBy]);
    const second = parseIfNumber(b[orderBy]);
    if (second<first) return -1;
    if (second>first) return 1;
    return 0;
}
  
export function getComparator(order, orderBy) {
    return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function getLists(data, column){
    const result = data.map(x => x[column]);
    return Array.from(new Set(result)).sort();
}

export function hasError(errors, field){
    return errors&&errors.some(error => error.field==field);
}

export function getErrorMsg(errors, field){
    return errors&&errors.find(error => error.field==[field])?.message;
}
