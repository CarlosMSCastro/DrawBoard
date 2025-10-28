idade = int(input("Insira a sua idade: "))
elo = int(input("Insira o seu elo na faceit: "))

if idade >= 18 and elo >= 4000 :
  print("Apto para jogar em ambiente profissional")
elif idade < 18 and elo >= 3000 :
  print("Possivel carreira profissional")
elif elo > 3000:
  print("Medir espectativas")
else:
  print("Casual")
