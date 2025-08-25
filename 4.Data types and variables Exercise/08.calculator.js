function calculate(n1, symbol, n2) {
    
    if (symbol === "+") {
        console.log((n1 + n2).toFixed(2));

    }else if (symbol === "-"){
        console.log((n1 - n2).toFixed(2));
        
    } else if (symbol === "*") {
        console.log((n1 * n2).toFixed(2));
        
    } else {
        console.log((n1 / n2).toFixed(2));
        
    }
}