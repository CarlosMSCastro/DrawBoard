idade = int(input("Idade: "))
escolaridade = input("Escolaridade(9º/12º/licenciatura): ").strip().lower().replace("9º","9").replace("12º","12")
salario = float(input("Salário: "))

if idade < 16:
  print("Não elegível")
elif escolaridade == "9" and salario < 1000:
  print("Bolsa Parcial")
elif escolaridade == "12" and salario < 1500:
  print("Bolsa Total")
elif escolaridade == "licenciatura":
  print("Sem bolsa")
else:
  print("Verificação manual necessária.")