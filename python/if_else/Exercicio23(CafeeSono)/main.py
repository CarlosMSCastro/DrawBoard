horas_dormidas = int(input("Horas dormidas: "))
cafes = int(input("Número de cafés tomados hoje: "))
exercicio = input("Fez exercício físico hoje(Sim/Nao): ").strip().lower().replace("não","nao")

if horas_dormidas < 5 and exercicio == "nao":
  print("Exausto.")
elif horas_dormidas >= 5 and cafes <=2 and exercicio == "sim":
  print("Energizado")
elif 5 <= horas_dormidas <= 7 and cafes >2:
  print("Dependente de cafeína")
else:
  print("Normal")