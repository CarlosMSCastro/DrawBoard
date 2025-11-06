frase = input("Insira a sua frase :").lower()
espacos = frase.count(" ")
letras = int(len(frase) - espacos)
vogais = 0
for i in frase:
  if i in "aeiou":
    vogais += 1

print(f"Letras: {letras}")
print(f"Espacos: {espacos}")
print(f"Vogais: {vogais}")


