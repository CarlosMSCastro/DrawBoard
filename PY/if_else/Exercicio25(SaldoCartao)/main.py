saldo = float(input("Digite o saldo do cartão: "))
compra = float(input("Digite o valor da compra: "))
cartao = input("Possui cartão premium (s/n)? ").strip().lower().replace("sim","s").replace("não","n")
fim_de_semana = input("É fim de semana (s/n)? ").strip().lower().replace("sim","s").replace("não","n")

if compra > saldo:
  print("Saldo insuficiente.")
else:
  if cartao == "s":
    compra = compra*0.9
  if fim_de_semana == "s":
    compra = compra*0.95
  print(f"Preço Final: {compra:.2f}€.\nSaldo do cartão: {saldo - compra:.2f}€.")


