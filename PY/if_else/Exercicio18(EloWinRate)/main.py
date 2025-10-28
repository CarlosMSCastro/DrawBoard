elo = int(input("Insira o seu elo: "))
winrate = int(input("Insira a sua percentagem de vitórias: "))

if elo >= 6000:
  if winrate >= 70:
    print("Jogador de elite")
  else:
    print("Resistente mas inconsistente")
elif elo > 4000 and winrate >= 60:
  print("Competitivo Estável")
elif elo < 4000 and winrate >= 50:
  print("Casual forte")
else:
  print("Precisa Melhorar")