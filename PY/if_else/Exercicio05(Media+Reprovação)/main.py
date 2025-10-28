nota1 = float(input("Introduza a 1ª Nota: "))
nota2 = float(input("Introduza a 2ª Nota: "))
nota3 = float(input("Introduza a 3ª Nota: "))

media = (nota1 + nota2 + nota3)/3
if(media >= 10):
  print(f"Média de {media}. Aprovado")
else:
  print(f"Média de {media}. Reprovado")