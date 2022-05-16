export class ContaCorrente{
    agencia;
    cliente;
    saldo;

    sacar(valor){
        if(this.saldo >= valor)
            this.saldo -= valor;
            return valor;
    }
    depositar(valor){
        if(valor <= 0)return; //se o if tem só uma linha, nao precisa de chaves
        this.saldo += valor;    // se o valor for menor que 0, executa o return que já para a função
    }
    transferir(valor, conta){
        const ValorSacado = this.sacar(valor);
        conta.depositar(ValorSacado);
    }
}