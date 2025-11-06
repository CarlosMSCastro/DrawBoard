elo = int(input("Introduza o elo atual: "))
seq = int(input("Introduza a sequencia de vitórias seguida: "))

if elo >= 5000 and seq >= 5:
  print("Promoção Garantida")
elif elo >4500 or seq >= 5:
  print("Quase lá")
else: 
  print("Precisa treinar mais")