
const dividir = (dividendo, divisor) => {
    if ( divisor === 0 ){
        return "no se puede dividir por cero";
    }

    const resultado = dividendo / divisor; 

    return resultado;
}

module.exports = dividir;
