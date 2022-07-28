import{Cliente} from "./Cliente.js"
export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
           this._cliente = novoValor; 
        }
    }
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }
    constructor(agencia,cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }
    sacar(valor){
        if(this._saldo >= valor)
            this._saldo -= valor;
            return valor;
    }
    depositar(valor){
        if(valor <= 0){
           return;  
        }
        this._saldo += valor;         
        //se o if tem só uma linha, nao precisa de chaves
            // se o valor for menor que 0, executa o return que já para a função
    }
    transferir(valor, conta){
        const ValorSacado = this.sacar(valor);
        conta.depositar(ValorSacado);
    }
}