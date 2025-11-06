
nums = []
while True:
  num = int(input("Insira um numero: "))
  if num == 0:
    print(f"Total de numeros digitados previamente: {len(nums)-1}")
    print(f"Soma total: {sum(nums)}")
    break
  nums.append(num)

  

