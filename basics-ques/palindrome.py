n = 1221

def check_palindrome(num):
    rev = 0
    original = num
    while num>0:
     digit = num % 10
     rev = rev * 10 + digit
     num = num // 10
    
    return rev == original

result = check_palindrome(n)

print(result)