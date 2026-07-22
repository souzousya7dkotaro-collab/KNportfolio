function getGCD(gram,ml){
    if(ml === 0) return gram;
    return getGCD(ml,gram % ml);
}
