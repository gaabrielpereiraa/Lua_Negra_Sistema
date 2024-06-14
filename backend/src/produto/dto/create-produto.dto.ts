import { isStringObject } from "util/types";

export class CreateProdutoDto {
    nome_produto: string;
    descricao: string;
    preco: number;
    estoque: number;
}
