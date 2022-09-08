for i in range(1, 101):
    v = ""
    if i % 3 == 0 and i % 5 == 0:
        v = "FizzBuzz"
        print(v)
    elif i % 3 == 0:
        v = "Fizz"
        print(v)
    elif i % 5 == 0:
        v = "Buzz"
        print(v)
    else:
        print(i)