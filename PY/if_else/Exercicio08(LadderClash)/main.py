trophies = int(input("Trophies: "))

if(trophies >= 15000):
  print("Ranked")
elif(trophies >= 10000):
  print("Top ladder")
elif(trophies >= 6500):
  print("Mid ladder")
else:
  print("Casual")