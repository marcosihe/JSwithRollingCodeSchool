class BankAccount {
    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.balance = 0;
    }
    get showAccountHolder(){
        return this.accountHolder;
    }
    get showBalance(){
        return this.balance;
    }
    
    //ingresar dinero
    deposit(money){
        this.balance += money;
        document.write(`<h4>Ingreso de dinero</h4>
        Su nuevo saldo es: $${this.balance}`);
    }
    
    //extraer dinero
    withdraw(money){
        document.write('<h4>Retiro de dinero</h4>');
        if (this.balance > money) {
            this.balance -= money;
            document.write(`Su saldo es: $${this.balance}`);
        }else{document.write(`El monto ingresado es mayor al disponible en su cuenta.
        <br>Ingrese un monto menor o igual a $${this.balance}`);}
        
    }

    //informar estado de la cuenta
    report(){
        document.write(`<h4>Estado de cuenta</h4>
        Titular: ${this.accountHolder}
        <br>Saldo disponible: $${this.balance}`);
    }
}

let cuenta001 = new BankAccount('Alex');

document.write('Titular: ' + cuenta001.showAccountHolder);
document.write('<br>Saldo: $' + cuenta001.balance);

cuenta001.deposit(50000);

cuenta001.withdraw(30000);

cuenta001.withdraw(40000);

cuenta001.report();