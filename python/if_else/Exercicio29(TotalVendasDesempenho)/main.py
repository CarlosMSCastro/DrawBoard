import os

vendas = []
domingo = float(input("Total de Vendas Domingo: "))
vendas.append(domingo)
segunda = float(input("Total de Vendas Segunda-Feira: "))
vendas.append(segunda)
terca = float(input("Total de Vendas Terça-Feira: "))
vendas.append(terca)
quarta = float(input("Total de Vendas Quarta-Feira: "))
vendas.append(quarta)
quinta = float(input("Total de Vendas Quinta-Feira: "))
vendas.append(quinta)
sexta = float(input("Total de Vendas Sexta-Feira: "))
vendas.append(sexta)
sabado = float(input("Total de Vendas Sábado: "))
vendas.append(sabado)


media = sum(vendas)/len(vendas)

if media >= 1000:
  situacao = "Excelente"
elif media >= 500:
  situacao = "Bom"
elif media >= 100:
  situacao = "Regular"
else:
  situacao = "Desempenho Fraco"

pasta = "PY/if_else/Exercicio29(TotalVendasDesempenho)/dados"
os.makedirs(pasta, exist_ok=True)

with open(f"{pasta}/Relatorio Vendas.txt", "w", encoding="utf-8")as f:
  f.write(f"Vendas: {vendas}\n")
  f.write(f"Total: {sum(vendas):.2f}€\n")
  f.write(f"Média: {media:.2f}\n")
  f.write(f"Classificação: {situacao}\n")

print(f"\nVendas: {vendas}\n")
print(f"Total: {sum(vendas):.2f}€\n")
print(f"Média: {media:.2f}\n")
print(f"Classificação: {situacao}\n")
print("Ficheiro criado em dados/Relatorio Vendas.txt")

