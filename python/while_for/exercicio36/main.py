
for i in range(3):
  nome = input(f"Nome do {i+1}º aluno: ").capitalize()
  nota1 = float(input("1ª nota: "))
  nota2 = float(input("2ª nota: "))
  media = (nota1 + nota2)/(2)
  if media >= 10:
    print("\nAprovado")
    print(f"Média : {media}\n")
  else:
    print("Reprovado.")
    print(f"Média : {media}")

