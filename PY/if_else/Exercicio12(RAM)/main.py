ram = int(input("Insira o tamanho da sua Memória RAM: "))

if ram >= 32:
  print("High-End")
elif ram >= 16:
  print("Médio")
else:
  print("Básico")