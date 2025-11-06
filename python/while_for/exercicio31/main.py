senha = "python123"
password = input("Insira a palavra-passe: ").strip()

while senha != password:
  print("Password Errada. Tente Novamente.")
  password = input("Insira a palavra-passe: ").strip()
else:
  print("Acesso concedido.")