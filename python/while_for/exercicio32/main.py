numero1 = int(input("Insira o 1º numero: "))
numero2 = int(input("Insira o 2º numero: "))
numero3 = int(input("Insira o 3º numero: "))
numero4 = int(input("Insira o 4º numero: "))
numero5 = int(input("Insira o 5º numero: "))

numeros = [numero1, numero2, numero3, numero4, numero5]

pares = []
impares = []

for i in range(len(numeros)):
  if numeros[i] % 2 == 0:
    pares.append(numeros[i])
  else:
    impares.append(numeros[i])

print(f"Pares : {pares}")
print(f"Impares : {impares}")
