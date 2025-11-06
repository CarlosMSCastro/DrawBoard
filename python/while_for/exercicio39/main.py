import os

nomes = []
idades = []

for i in range(3):
  nome = (input(f"{i+1}º - Primeiro e último nome: "))
  idade = int(input(f"{i+1}º - Idade: "))
  nomes.append(nome)
  idades.append(idade)
  pasta = "PY/while_for/exercicio39/dados"
  os.makedirs(pasta, exist_ok=True)
  
  with open (f"{pasta}/pessoas.txt", "a", encoding="utf-8")as f:
    f.write(f"Nome: {nomes[i]}\n")
    f.write(f"Idade: {idades[i]}\n\n")
  
print("Dados gravados!\n")

