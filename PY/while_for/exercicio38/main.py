import random

num = random.randint(1,10)
numtrys = 1
tentativa = int(input("Insira um numero: "))
while True:
  if tentativa != num and tentativa > num:
    print("O numero da sorte é menor.")
    tentativa = int(input("Tente outra vez: "))
    numtrys +=1
  elif tentativa != num and tentativa < num:
    print("O numero da sorte é maior.")
    tentativa = int(input("Tente outra vez: "))
    numtrys +=1
  else:
    print("Acertou o numero!")
    print(f"Demorou {numtrys} tentativas!")
    break



