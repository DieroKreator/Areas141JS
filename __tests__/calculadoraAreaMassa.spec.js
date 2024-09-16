const calculadoraArea = require('../src/calculadoraArea')
const massa = require('../fixtures/massa')

test.each(massa.array.map(bloco => [
    bloco.base,
    bloco.altura,
    bloco.esperadoAreaTriangulo]))
    ('calcular area triangulo %f + %f com massa', (base, altura, resultadoEsperado) => {
        // Executa
        const resultadoObtido = calculadoraArea.calcularAreaTriangulo(base, altura)
        // Valida
        expect(resultadoObtido).toBe(resultadoEsperado)
    })