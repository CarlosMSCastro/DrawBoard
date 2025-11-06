import random
import datetime

lista = ["Aurelio","André Miranda","Rui","Castro","Sami","Jomi","Zé","Vale","Cruz","Linho"]
vencedor = random.choice(lista).lower()
vogais = ["a","e","i","o","u"]

print(f"Vencedor: {vencedor.capitalize()}")
if vencedor[0] in vogais:
  print("Ganhou um Bónus Extra!")
else:
  print("Ganhou o prémio normal.")

print(datetime.date.today().strftime('%Y-%m-%d'))
