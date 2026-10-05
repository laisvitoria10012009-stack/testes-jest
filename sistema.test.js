const sistema = require('./Sistema');

describe('verificarMaioridade', () => {
  test('15 anos deve ser menor de idade', () => {
    expect(sistema.verificarMaioridade(15)).toBe(false);
  });

  test('18 anos deve ser maior de idade', () => {
    expect(sistema.verificarMaioridade(18)).toBe(true);
  });

  test('21 anos deve ser maior de idade', () => {
    expect(sistema.verificarMaioridade(21)).toBe(true);
  });
});

describe('calcularIMC', () => {
  test('deve calcular o IMC corretamente', () => {
    expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86);
  });
});

describe('formatarNome', () => {
  test('deve formatar o nome corretamente', () => {
    expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
  });
});

describe('ehPar', () => {
  test('deve identificar número par', () => {
    expect(sistema.ehPar(4)).toBe(true);
  });

  test('deve identificar número ímpar', () => {
    expect(sistema.ehPar(5)).toBe(false);
  });

  test('zero deve ser considerado par', () => {
    expect(sistema.ehPar(0)).toBe(true);
  });
});

describe('celsiusParaFahrenheit', () => {
  test('deve converter 0°C', () => {
    expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
  });

  test('deve converter 100°C', () => {
    expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
  });

  test('deve converter -40°C', () => {
    expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
  });
});

describe('adicionarHobby', () => {
  test('deve adicionar um hobby à lista', () => {
    const lista = ['futebol', 'música'];
    const resultado = sistema.adicionarHobby(lista, 'cinema');

    expect(resultado).toHaveLength(3);
    expect(resultado).toContain('cinema');
  });
});

describe('dividir', () => {
  test('deve realizar uma divisão normal', () => {
    expect(sistema.dividir(10, 2)).toBe(5);
  });

  test('deve gerar erro ao dividir por zero', () => {
    expect(() => sistema.dividir(10, 0))
      .toThrow('Divisão por zero não permitida');
  });
});

describe('criarAluno', () => {
  test('deve criar o aluno corretamente', () => {
    expect(sistema.criarAluno('Lucas', 'Desenvolvimento de Sistemas'))
      .toEqual({
        nome: 'Lucas',
        curso: 'Desenvolvimento de Sistemas',
        ativo: true
      });
  });
});

describe('aplicarDesconto', () => {
  test('deve aplicar desconto de 10%', () => {
    expect(sistema.aplicarDesconto(100, 10)).toBe(90);
  });

  test('deve aplicar desconto de 0%', () => {
    expect(sistema.aplicarDesconto(100, 0)).toBe(100);
  });
});

describe('validarTamanhoSenha', () => {
  test('senha com 5 caracteres deve ser inválida', () => {
    expect(sistema.validarTamanhoSenha('12345')).toBe(false);
  });

  test('senha com 8 caracteres deve ser válida', () => {
    expect(sistema.validarTamanhoSenha('12345678')).toBe(true);
  });
});