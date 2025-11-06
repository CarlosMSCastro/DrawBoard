salario_base = float(input("Digite o seu salário base: "))
desempenho = int(input("Digite a sua pontuação de desempenho: "))
faltas = int(input("Digite o número de faltas: "))
bonus=0

if desempenho < 50:
  print("Desempenho insuficiente, sem bónus")
elif desempenho <=79:
  bonus = salario_base * 0.05
elif desempenho <=94:
  bonus = salario_base * 0.10
elif desempenho >=95:
  bonus = salario_base * 0.20

bonus -= 0.02*faltas*salario_base
if bonus<0:
  bonus=0

print(f"Salário final: {salario_base + bonus:.2f}€")
print(f"Salário base: {salario_base:.2f}€")
print(f"Bónus: {bonus:.2f}€")
print(f"Faltas: {faltas}")
