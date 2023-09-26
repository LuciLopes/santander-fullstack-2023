# santander-fullstack-2023
Desafio de códigos

## 01. EQUILIBRANDO O SALDO
**Descrição**

Para esse desafio, considere que você foi contratado por uma empresa bancária para auxiliar nas implementações e melhorias do sistema empresarial. Em uma análise inicial, foi identificado pela equipe financeira a necessidade de desenvolver uma solução que permita ao cliente equilibrar seu saldo bancário. Dessa forma, o programa deve solicitar uma entrada que representa o saldo atual do funcionário, e após, seja informado o valor de duas transações, sendo elas: um _**depósito**_ e um _**saque**_. O programa deve atualizar o saldo com base nas transações e exibir o saldo final.

**Informação:** As transações de depósito e retirada devem ser tratadas como valores positivos e negativos, respectivamente, para garantir que o cálculo do saldo final seja realizado corretamente.

**Entrada**

* **saldoAtual:** um número decimal representando o saldo atual da conta bancária.
* **valorDeposito:** um número decimal representando o valor a ser depositado na conta.
* **valorRetirada:** um número decimal representando o valor a ser retirado da conta.

**Regra de Formatação:** Considere apenas **uma casa decimal** para esse desafio.

**Saída**

 Um número decimal que representa o saldo atualizado na conta bancária após o processamento das transações.

**Exemplos**
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	| Saída
:--------|:-------:
1000    | Saldo atualizado na conta: 1300.0
500     |
200	    |
-|-
100     | Saldo atualizado na conta: 60.0
10      |
50	    | 
-|-        
4000    | Saldo atualizado na conta: 5300.0
1500    |
200     | 

**Solução:**
<https://github.com/LuciLopes/santander-fullstack-2023/blob/main/desafio001.js>


## 2. ORGANIZANDO SEUS ATIVOS
**Descrição**

Após uma análise cuidadosa realizada pela equipe de desenvolvimento de uma empresa bancária, foi identificado a necessidade de uma nova funcionalidade para otimizar os processos e melhorias da experiência dos usuários. Agora, sua tarefa é implementar uma solução que organize em ordem alfabética uma lista de ativos que será informada pelos usuários. Os ativos são representados por strings que representam seus tipos, como por exemplo: Reservas de liquidez, Ativos intangiveis e dentre outros.

**Entrada**

A primeira entrada consiste em um número inteiro que representa a  quantidade de ativos que o usuário possui. Em seguida, o usuário deverá  informar, em linhas separadas, os tipos (strings) dos respectivos ativos.

**Saída**

Seu programa deve exibir a lista de Ativos organizada em ordem alfabética. Cada ativo deve ser apresentado em uma linha separada.
Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.


Entrada	| Saída
:--------|:-------
3       | Depósito
Financiamento de imóvel    | Financiamento de imóvel
Depósito    | Reservas bancárias
Reservas bancárias |
-|-
3    | 
Carteiras de crédito | Carteiras de crédito
Investimentos em títulos | Derivativos financeiros
Derivativos financeiros | Investimentos em títulos
-|-    
3 | 
Reservas de liquidez | Ativos intangíveis
Ativos intangíveis | Fundos de investimento 
Fundos de investimento | Reservas de liquidez


**Solução:**
<https://github.com/LuciLopes/santander-fullstack-2023/blob/main/desafio002.js>


## 3. CONDICIONALMENTE RICO
**Descrição**

Uma nova feature para um sistema bancário foi analisada pela equipe de desenvolvimento e será uma das tarefas a serem trabalhadas durante a sprint, como desenvolvedor da empresa você recebeu os requisitos para a nova implementação que consiste em uma solução algorítmica que permita aos clientes realizarem saques em caixas eletrônicos. No entanto, existem algumas regras a serem seguidas para garantir que um saque possa ser realizado com sucesso.

**Regras do saque:**

- Cada cliente digitará o valor do seu _**saldoTotal**_ de sua conta bancária e o _**valorSaque**_.
- Um saque só pode ser realizado se o _**saldoDisponível**_ na conta for _igual_ ou _superior_ ao valor solicitado.
- Se o saldo for suficiente, o valor solicitado deve ser subtraído do saldo disponível, indicando que o saque foi realizado.
- Se o saldo for insuficiente, o saque não deve ser realizado e uma mensagem adequada deve ser exibida.

**Entrada**

A entrada consiste em dois valores inteiros que representam o total do _saldo_ da conta e o _valor_ do saque.

**Saída**

Se o saque for realizado com sucesso, exibir a mensagem "**Saque realizado com sucesso! Novo saldo: {saldo}**", onde **{saldo}** é o novo saldo disponível na conta.
Se o saque não for possível devido a saldo insuficiente, exibir a mensagem "**Saldo insuficiente. Saque nao realizado!**"

**Exemplos**

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	| Saída
:--------|:-------:
1000       | Saque realizado com sucesso. Novo saldo: 800
200 | 
-|-
1500    | Saldo insuficiente. Saque nao realizado!
1800 | 
-|-    
300 | Saque realizado com sucesso. Novo saldo: 100
200 | 

**Solução:**
<https://github.com/LuciLopes/santander-fullstack-2023/blob/main/desafio003.js>


## 4. JUROS COMPOSTOS
**Descrição**

Imagine que você está desenvolvendo um aplicativo para um banco que deseja calcular os juros compostos de um investimento. Seu objetivo é criar uma função que receba três parâmetros: _o valor inicial do investimento_, _a taxa de juros anual_ e _o período de tempo em anos_. A função deve calcular e retornar o valor final do investimento após o período determinado, levando em consideração os juros compostos.

**Entrada:**

A função deve receber os seguintes parâmetros:
- **valor_inicial:** um número inteiro ou decimal representando o valor inicial do investimento.
- **taxa_juros:** um número decimal representando a taxa de juros anual. Por exemplo, se a taxa for de 5%, o valor passado será 0.05.
- **periodo:** um número inteiro representando a quantidade de anos do investimento.

**Saída:**

A função deve retornar o valor final do investimento após o período determinado, considerando os juros compostos. O valor final deve ser arredondado para duas casas decimais.

**Exemplos**
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	| Saída
:--------|:-------:
5000       | Valor final do investimento: R$ 7346.64
0.08 | 
5 |
-|-
1000    | Valor final do investimento: R$ 1191.02
0.06 | 
3 |
-|-    
20000 | Valor final do investimento: R$ 29604.89
0.04 |
10 |

**Solução:**
<https://github.com/LuciLopes/santander-fullstack-2023/blob/main/desafio004.js>


## 5. O GRANDE DEPÓSITO
**Descrição**

Você foi contratado por um banco para desenvolver um programa que auxilie seus clientes a realizar depósitos em suas contas. O programa deve solicitar ao cliente o valor do depósito e verificar se o valor é válido. Se o valor for maior do que zero, o programa deve adicionar o valor ao saldo da conta. Caso contrário, o programa deve exibir uma mensagem de erro. O programa deve solicitar apenas uma vez o valor de depósito.

**Entrada**

O programa deve utilizar o _**Scanner**_ para receber o valor de depósito digitado pelo cliente. Os valor pode ser decimal, representando valor em reais.

**Saída**

O programa deve exibir uma mensagem de sucesso quando um valor de depósito válido for informado e o saldo da conta for atualizado. Se o valor for "0", deverá imprimir uma mensagem encerrando o programa. Caso um valor inválido seja digitado, o programa deve exibir uma mensagem de erro solicitando um novo valor.

**Exemplos**

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	| Saída
:--------|:-------
500.50       | Deposito realizado com sucesso! Saldo atual: R$ 500.50
-100     | Valor invalido! Digite um valor maior que zero.  
0        | Encerrando o programa...

**Solução:**
<https://github.com/LuciLopes/santander-fullstack-2023/blob/main/desafio005.js>


