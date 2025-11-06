num1 = float(input("Digite o 1º número: "))
num2 = float(input("Digite o 2º número: "))
num3 = float(input("Digite o 3º número: "))

maior = num1
if(num2 > maior):
  maior = num2
if(num3 > maior):
  maior = num3


menor = num1
if(num2 < menor):
  menor = num2
if(num3 < menor):
  menor = num3

print(f"Maior número: {maior}")
print(f"Menor número: {menor}")