vel = int(input("A que velocidade seguia: "))

if(vel > 150):
  print("Multa Grave")
elif(vel > 120):
  print("Multa Leve")
else:
  print("Dentro do limite")