cat = input("Insira M se for Mulher, ou H se for Homem: ").lower()
tempo = float(input("Insira o seu tempo nos 100m: "))


if cat == "m":
  if tempo <= 11:
    print("Nivel Olímpico")
  elif tempo <= 12:
    print("Atleta Nacional")
  else:
    print("Amadora")

if cat == "h":
  if tempo <= 10:
    print("Nivel Olímpico")
  elif tempo <= 11:
    print("Atleta Nacional")
  else:
    print("Amador")


