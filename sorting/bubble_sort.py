# nums = [5,8,3,4,5,0,7,3,2]
nums = [1,2,3,4,5,6]

def bubble_sort(nums):
    n = len(nums)

    for i in range(0,n):
        swapped = False
        for j in range(0,n-i-1):
            if(nums[j]>nums[j+1]):
                nums[j],nums[j+1]=nums[j+1],nums[j]
                swapped = True
        if not swapped:
            break
    return nums

print(bubble_sort(nums))
            