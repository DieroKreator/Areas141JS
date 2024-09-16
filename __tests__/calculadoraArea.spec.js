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

test('calcular area triangulo 5 * 3', () => {

    const base = 5
    console.log(`base = ${base}`)
    const altura = 3
    console.log(`altura = ${altura}`)
    const resultadoEsperado = 7.5
    console.log(`resultadoEsperado = ${resultadoEsperado}`)

    const resultadoObtido = calculadoraArea.calcularAreaTriangulo(base, altura)
    console.log(`resultadoObtido = ${resultadoObtido}`)

    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`${resultadoObtido} = ${resultadoEsperado}`)
})

// Teste Direcionado por Dados
let massaAreaParalelogramo = [
    [7, 5, 35],
    [10, 7, 70],
    [20, 16, 320],
    [40, 32, 1280],
    [100, 70, 7000]
]

test.each(massaAreaParalelogramo)('calcular area paralelogramo %f / %f', (base, altura, resultadoEsperado) => {
    
    const resultadoObtido = calculadoraArea.calcularAreaParalelogramo(base, altura)

    expect(resultadoObtido).toBe(resultadoEsperado)
    console.log(`${resultadoObtido} = ${resultadoEsperado}`)
})