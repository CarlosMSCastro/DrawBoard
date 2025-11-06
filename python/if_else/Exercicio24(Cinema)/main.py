idade = int(input("Digite a sua idade: "))
preco = 8

if idade < 4:
  print("Entrada proibida.")
else:
  estudante = input("É estudante (Sim/Não)? ").strip().lower().replace("não","nao")
  dia_semana = input("Indique o dia da semana: ").strip().lower()
  if3d = input("O filme é 3D (Sim/Não)? ").strip().lower().replace("não","nao")

  if idade <= 12:
    preco = preco * 0.5
  elif idade >= 65:
    preco = preco * 0.7
  
  if estudante == "sim":
    preco = preco * 0.8

  if dia_semana == "sabado" or dia_semana == "domingo":
    preco += 1

  if if3d == "sim":
    preco += 2

print(f"O preço do bilhete é: {preco} euros.")