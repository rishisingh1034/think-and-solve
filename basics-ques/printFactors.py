from math import sqrt
n = 15
# arr= []

# for i in range(1,n+1):
#     if(n%i==0):
#         arr.append(i)

# print(arr)

# little bit optimized
# for i in range(1,n//2):
#     if(n%i==0):
#         arr.append(i)
# arr.append(n)

# print(arr)

# more optimal solution

result = []
for i in range(1,int(sqrt(n))+1):
    if n % i == 0:
        result.append(i)
        if n // i != i:
            result.append(n // i)
print(sorted(result))