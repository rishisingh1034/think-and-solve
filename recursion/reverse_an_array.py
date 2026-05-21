nums=[1,2,3,4,5,6,7,8]

def func(nums,left,right):
    if left>=right:
        return
    nums[left],nums[right]= nums[right],nums[left]
    func(nums,left+1,right-1)
func(nums,0,len(nums)-1)
print(nums)