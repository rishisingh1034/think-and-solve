n=[5,3,2,2,1,5,5,7,5,10]
m=[10,111,1,9,5,67,2]

hash_list = []
hash_list = [0] * 11

for num in n:
    hash_list[num]+=1
for x in m:
    if x<1 or x > 10:
        print(0)
    else:
        print(hash_list[x])

# using dict

hash_map = {}
for i in range(len(n)):
    hash_map[n[i]] = hash_map.get(n[i],0)+1
for x in m:
    print(hash_map.get(x,0))

# character hashing
s = ['a','z','y','x','y','y','z','a','a','a','a']
q=['d','a','y','z']

hash_list=[]
hash_list=[0]*26

for ch in s:
    ascii_val = ord(ch)
    index = ascii_val-97
    hash_list[index]+=1
for ch in q:
    ascii_val = ord(ch)
    index = ascii_val-97
    print(hash_list[index])