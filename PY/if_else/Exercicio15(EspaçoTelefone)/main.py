gb = int(input("Armazenamento em Gb: "))
preco = float(input("Preço em €: "))

if gb >= 256 and preco <= 800:
  print("Excelente relação preço/qualidade")
elif gb >=128 and preco <=1000:
  print("Bom equilibrio")
else:
  print("Caro para o que oferece")