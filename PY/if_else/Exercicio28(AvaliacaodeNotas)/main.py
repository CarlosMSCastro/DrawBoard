import os

nota1 = float(input("Nota do 1º teste: "))
nota2 = float(input("Nota do 2º teste: "))
nota3 = float(input("Nota do 3º teste: "))
nota4 = float(input("Nota do 4º teste: "))
nota5 = float(input("Nota do 5º teste: "))

notas = [nota1,nota2,nota3,nota4,nota5]
media = sum(notas)/len(notas)
classificacao = ""
if media < 9.5:
  classificacao = "Reprovado"
elif media <14:
  classificacao = "Suficiente"
elif media <17:
  classificacao = "Bom"
else:
  classificacao = "Excelente"
print(f"{classificacao} - Média :{media:.2f}")

#cria pasta no root
pasta = "PY/if_else/Exercicio28(AvaliacaodeNotas)/dados"
os.makedirs(pasta, exist_ok=True)
#cria .txt pasta
with open(f"{pasta}/saida.txt", "w", encoding="utf-8") as f:
  f.write(f"Notas: {notas}\n")
  f.write(f"Média: {media:.2f}\n")
  f.write(f"Classificação: {classificacao}\n")

print("Ficheiro gravado em dados/saida.txt")
