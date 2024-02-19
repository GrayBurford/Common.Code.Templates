
def fn(arr):
    prefix = [arr[0]]
  
    for i in range(1, len(arr)):
        # last entry in prefix + next index in arr
        prefix.append(prefix[-1] + arr[i])
    
    return prefix

