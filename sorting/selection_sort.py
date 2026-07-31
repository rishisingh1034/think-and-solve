nums=[5,7,2,3,4,8,0,1]

# ascending order
def selection_sort(nums):
    n = len(nums)
    for i in range(0,n):
        min_index = i
        for j in range(i+1,n):
                if nums[j]<nums[min_index]:
                    min_index=j
        nums[i],nums[min_index]= nums[min_index],nums[i]
    return nums

# print(selection_sort(nums))

# descending order
def selection_sort_desc(nums):
     n=len(nums)
     for i in range(0,n):
          max_value = i
          for j in range(i+1,n):
               if nums[j] > nums[max_value]:
                    max_value = j
          nums[i],nums[max_value]=nums[max_value],nums[i]
     return nums

print(selection_sort_desc(nums))