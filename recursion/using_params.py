def fn(x,n):
    if n == 0:
        return
    # print(x)
    fn(x,n-1)

fn('rishi',3)

# print from 1 to n using recursion

def func(i,n):
    if i<n:
        return
    func(i-1,n)
    # print(i)

func(5,1)

def funct(total,n):
    if n==0:
        print(total)
        return
    funct(total+n,n-1)

funct(0,5)

def functi(n):
    if n==1:
        return 1
    return n*functi(n-1)

print(functi(5))