# Check if a string is palindrome or not using recursion (loop)
s= 'rishi'
def func(s):
    n = len(s)
    left = 0
    right = n-1

    while(left<right):
        if(s[left]!=s[right]):
            return False
        left+=1
        right-=1
    return True
print(func(s))

# Using Recursion
r= 'akka'
def recursion_func(s,left,right):
    n=len(s)
    if(left>=right):
        return True
    if(s[left]!=s[right]):
        return False
    return recursion_func(s,left+1,right-1)

print(recursion_func(r,0,len(r)-1))