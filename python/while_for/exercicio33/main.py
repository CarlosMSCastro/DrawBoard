total = 0

for i in range(5):
  numero = int(input(f"Insira o {i+1}º número:"))
  total += numero


print(f"Total: {total}")
print(f"Média: {total/5:.2f}")