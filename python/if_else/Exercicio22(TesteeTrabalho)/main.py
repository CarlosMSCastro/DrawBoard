teste = float(input("Insira a nota do teste: "))
trabalho = float(input("Insira a nota do trabalho: "))
faltas = int(input("Insira o número de faltas: "))

media = (0.7 * teste )+ (0.3 * trabalho)
if media < 9.5:
  print("Reprovado")
elif media == 20 and faltas == 0:
  print("Aluno Excecional")
elif faltas <= 3:
  print("Aprovado")
else:
  print("Aprovado com penalização ")