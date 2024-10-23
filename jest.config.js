module.exports = {
    preset: 'ts-jest',                          // Usa ts-jest para compilar arquivos TS
    testEnvironment: 'node',                    // Ambiente de execução dos testes no Node.js
    roots: ['./'],                              // Define onde estão os arquivos de teste
    testMatch: ['**/*.test.ts'],                // Especifica os arquivos de teste
    moduleFileExtensions: ['ts', 'js'],         // Extensões suportadas
    transform: {                                // Garante a transformação dos arquivos TypeScript
      '^.+\\.ts$': 'ts-jest'
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'                // Aponta para o arquivo de configuração do TypeScript
      }
    }
  };
  