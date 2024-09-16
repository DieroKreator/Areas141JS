const calculadoraArea = require('../src/calculadoraArea')

test('calcular area cuadrado 6 * 6', () => {

    const num1 = 6
    console.log(`num1 = ${num1}`)

    const resultadoEsperado = 36
    console.log(`resultadoEsperado = ${resultadoEsperado}`)

    const resultadoObtido = calculadoraArea.calcularAreaCuadrado(num1)
    console.log(`resultadoObtido = ${resultadoObtido}`)

    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`${resultadoObtido} = ${resultadoEsperado}`)
})

test('calcular area paralelogramo 8 * 6', () => {

    const base = 8
    console.log(`base = ${base}`)
    const altura = 6
    console.log(`altura = ${altura}`)
    const resultadoEsperado = 48
    console.log(`resultadoEsperado = ${resultadoEsperado}`)

    const resultadoObtido = calculadoraArea.calcularAreaParalelogramo(base, altura)
    console.log(`resultadoObtido = ${resultadoObtido}`)

    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`${resultadoObtido} = ${resultadoEsperado}`)
})