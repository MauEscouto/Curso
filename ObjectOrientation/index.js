class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
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
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 15878963578;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 15779943578;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)

const ValorSacado = contaCorrenteRicardo.sacar(50);
console.log(ValorSacado);

console.log(contaCorrenteRicardo);
