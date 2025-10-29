# Cabula de Python

## 1. Sintaxe básica
```python
# Comentário
print("Olá Mundo")
```
- Indentação define blocos (4 espaços).
- Python diferencia maiúsculas/minúsculas.

---

## 2. Tipos e variáveis
```python
x = 10          # int
y = 3.14        # float
nome = "Ana"    # str
ativo = True    # bool
```
- `type(x)` → mostra o tipo.
- Conversões: `int()`, `float()`, `str()`, `bool()`.

---

## 3. Operadores
| Tipo        |      Símbolos     |  Exemplo      | Resultado |
|-------------|-------------------|---------------|
| Aritméticos |  + - * / // % **  |  5 // 2       | 2         |
| Comparação  |  == != > < >= <=  | 5 > 3         | True      |
| Lógicos     | and, or, not      | a>0 and b<10  | True      |
| Atribuição  | += -= *= /=       | x += 2        | soma 2    |
| Pertinência |    in, not in     | "a" in "casa" | True      |

---

## 4. Condicionais
```python
idade = 20
if idade < 18:
    print("Menor")
elif idade < 65:
    print("Adulto")
else:
    print("Sénior")
```
- Combinar: `if x > 0 and y < 10:`
- Ternário: `msg = "Positivo" if n > 0 else "Negativo"`

---

## 5. Loops
### While
```python
i = 0
while i < 3:
    print(i)
    i += 1
```

### For
```python
for i in range(5):
    print(i)
```
- `range(início, fim, passo)`
- `break` sai, `continue` salta a iteração.

---

## 6. Listas
```python
nums = [1, 2, 3]
nums.append(4)
nums.remove(2)
print(nums[0])      # acesso
print(len(nums))    # tamanho
```
- `in` / `not in`
- `sum(nums)`, `max(nums)`, `min(nums)`
- `nums.sort()` / `nums.reverse()`

---

## 7. Tuplos e conjuntos
```python
t = (1, 2, 3)        # tuplo (imutável)
s = {1, 2, 3, 3}     # conjunto (sem duplicados)
```
- `len(t)`, `len(s)`
- `s.add(4)`, `s.remove(2)`
- Operações: `|` união, `&` interseção, `-` diferença.

---

## 8. Dicionários
```python
aluno = {"nome": "Ana", "nota": 18}
print(aluno["nome"])
aluno["curso"] = "Python"
```
- `keys()`, `values()`, `items()`
- `if "nota" in aluno:`
- `del aluno["nota"]`

---

## 9. Funções
```python
def soma(a, b=0):
    return a + b

print(soma(2, 3))
```
- Parâmetro padrão (`b=0`)
- `return` devolve valor
- Pode chamar por nome: `soma(b=2, a=5)`

---

## 10. Strings
```python
s = "Python"
print(s.lower(), s.upper())
print(s[0:3])        # fatia
print(len(s))
```
- `s.strip()` remove espaços
- `s.replace("Py","My")`
- `s.split(",")` separa, `",".join(lista)` junta
- `f"{nome} tem {idade} anos"`

---

## 11. Input e Output
```python
nome = input("Nome: ")
idade = int(input("Idade: "))
print(f"{nome} tem {idade} anos.")
```
- `input()` devolve sempre string.
- Converter antes de cálculos.

---

## 12. Programação Orientada a Objetos (POO)
### Criar uma classe
```python
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def apresentar(self):
        print(f"Sou {self.nome} e tenho {self.idade} anos.")
```

### Usar objetos
```python
p1 = Pessoa("Ana", 30)
p1.apresentar()
```

### Herança simples
```python
class Aluno(Pessoa):
    def __init__(self, nome, idade, curso):
        super().__init__(nome, idade)
        self.curso = curso
```
- `self` referencia o objeto.
- `super()` chama o construtor da classe-mãe.

---

## 13. Boas práticas e truques
- Nomear variáveis de forma clara (`idade_aluno`).
- Usar indentação consistente.
- Comentar apenas o necessário.
- Testar partes pequenas do código.
- `print()` para depurar, depois remover.
- Guardar scripts com `.py` e correr com `python nome.py`.

---

## Extra — Funções e operadores úteis
```python
abs(x)     # valor absoluto
round(x,2) # arredonda
max(lista)
min(lista)
sorted(lista)
```
```python
# operador ternário
resultado = "par" if n % 2 == 0 else "ímpar"
```
