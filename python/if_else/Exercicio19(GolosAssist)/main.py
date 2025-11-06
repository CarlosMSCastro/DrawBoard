goals = int(input("Golos na época: "))
assist = int(input("Assistencias na época: "))

if goals >= 20:
  if assist >= 10:
    print("Temporada de craque")
  else: 
    print("Finalizador nato")
elif assist >= 10:
  print("Criador de jogo.")
else:
  print("Época mediana.")

