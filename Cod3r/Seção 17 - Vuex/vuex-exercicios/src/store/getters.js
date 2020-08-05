/*** Exemplo de como uma store pode ser dividada em varias arquivos responsavel por funções especificas  ***/
export const getNome = state => state.nome;
export const getNomeCompleto = state => state.nome + state.sobrenome;