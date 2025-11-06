temp = float(input("Digite a temperatura corporal : "))

if temp < 35:
  print("Hipotermia")
elif temp < 37.5:
  print("Temperatura Normal")
elif temp < 39:
  print("Febre")
else:
  print("Febre alta.")
