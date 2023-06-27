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
    console.log('orderBy', orderBy)
    return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}