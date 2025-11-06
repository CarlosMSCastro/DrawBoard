
nums = []
while True:
  num = int(input("Insira um numero: "))
  if num == 0:
    print(f"Total de numeros digitados previamente: {len(nums)}")
    print(f"Soma total: {sum(nums)}")
    print(f"Média total: {sum(nums)/len(nums)}")
    maior = ""
    for i in range(len(nums)):
      if nums[i] > nums[i+1]:
        maior = nums[i]
      else:
        maior = nums[i+1]
    print(f"Maior número: {maior}")
    menor = ""
    for i in range(len(nums)):
      if nums[i] < nums[i+1]:
        menor = nums[i]
      else:
        menor = num[i+1]
    print(f"Menor número: {menor}")
    break
    
  nums.append(num)

  

