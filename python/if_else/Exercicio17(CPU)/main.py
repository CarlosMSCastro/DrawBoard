marca = input("Insira a marca do cpu: ").lower()
nucleos = int(input("Insira o numero de núcleos: "))

if marca == "intel":
  if nucleos >= 8:
    print("Série i7 ou superior")
  else:
    print("Série i5 ou inferior")
elif marca == "amd":
  if nucleos >= 8:
    print("Ryzen 7 ou superior")
  else:
    print("Ryzen 5 ou inferior")
else:
  print("Processador não reconhecido")