n = 1634
nums = n
nod = len(str(nums))
total = 0

while nums>0:
    digit = nums %10
    total = (digit ** nod) +total
    nums = nums//10

print(nums == total)