// Alcancia
// Concepto de closures implementado para recordar el valor de una variables sin usarla globalmemte


// Metodo no funcional
// const moneyBox = (coins) => {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money Box: ${saveCoins}`);
// }
// moneyBox(300)


// Metodo funcional
const moneyBox = () =>{

    let saveCoins = 0;
    const saveMoney = (coins) => {
        saveCoins += coins;
        console.log(`Tienes ${saveCoins} dinero ahorrado`);
    }
    return saveMoney
}

const alcanciaNicolas = moneyBox();
alcanciaNicolas(5);
alcanciaNicolas(5);
alcanciaNicolas(5);

const alcanciaAnaMaria = moneyBox();
alcanciaAnaMaria(10);
alcanciaAnaMaria(10);
alcanciaAnaMaria(10);
