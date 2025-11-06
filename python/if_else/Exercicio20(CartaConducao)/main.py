idade = int(input("A sua idade: "))
anos_de_carta = int(input("Número de anos de carta: "))

if idade<18:
  print("Não pode conduzir.")
elif anos_de_carta < 2:
  print("Condutor Inexperiente")
else:
  print("Condutor Experiente")



