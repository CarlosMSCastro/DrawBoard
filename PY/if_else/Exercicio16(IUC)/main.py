combustivel = input("Indique o tipo de combustivel(diesel/gasolina/eletrico): ").lower()
ano = int(input("Indique o ano do carro: "))

if combustivel == "eletrico":
  print("Isento de IUC")
elif combustivel == "diesel" or combustivel== "gasolina":
  if(ano > 2015):
    print("IUC Reduzido.")
  else:
    print("IUC Completo.")
else:
  print("Combustivel Invalido")
