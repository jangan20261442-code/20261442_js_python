for i in range(0, 3, 1):
    print("안녕하세요? for 문을 공부중입니다.^^")

for _ in range(0, 3, 1):
    print("안녕하세요? for 문을 공부중입니다.^^")

for i in range(1, 100, 2):
    print("%d" % i, end=" ")

for i in range(2, 101, 2):
    print("%d" % i, end=" ")

i, hap = 0, 0

for i in range(1, 100, 2):
    hap = hap + i

print("1~100까지의 홀수 합 : %d" % hap)

i, hap = 0, 0

for i in range(2, 101, 2):
    hap = hap + i

print("1~100까지의 짝수 합 : %d" % hap)

i, hap = 0, 0

for i in range(501, 1001, 2):
    hap = hap + i

print("501~1000까지의 홀수 합 : %d" % hap)


##i,dan = 0, 0

##dan = int(input("단을 입력하세요 : "))

##for i in range(1, 10, 1):
    ##print("%d x %d = %2d" % (dan, i, dan*i))

##for i in range(0, 3, 1):
    ##for k in range(0, 2, 1):
        ##print("파이썬은 꿀잼입니다.^^ (i값: %d, k값: %d)" % (i, k))


##i,dan = 0, 0

##dan = int(input("단을 입력하세요 : "))

##for i in range(1, 10, 1):
    ##print("%d x %d = %2d" % (dan, i, dan*i))

for k in range(1, 10):
    for i in range(2, 10):
        print ("%d x %d = %2d" % (i, k, i*k), end="\t")
    print()

for k in range(9, 0, -1):
    for i in range(9, 1, -1):
        print ("%d x %d = %2d" % (i, k, i*k), end="\t")
    print()

i,hap = 0, 0
i=1
while i < 11:
    hap = hap + i
    i = i + 1
print("1~10까지의 합 : %d" % hap)

##while True:
    ##print("ㅋ", end=" ")

for i in range (1,100):
    print("for 문을 %d번 실행했습니다." % i)
    break

hap = 0
a,b=0,0
while True:
    a=int(input("더할 첫 번째 수를 입력하세요:"))
    if a==0:
        break
    b=int(input("더할 두 번째 수를 입력하세요:"))
    hap=a+b
    print("%d + %d = %d" % (a,b,hap))

print("0을 입력하여 반복문을 탈출했습니다.")

hap, i = 0, 0

for i in range(1, 101):
    if i % 3 == 0:
        continue
    hap += i

print("1~100까지의 3의 배수를 제외한 수의 합 : %d" % hap)

for i in range(1, 51):
    print("*" * i)

print("\n\n\n")

for i in range(50, 0, -2):
    space = (50 - i) // 2
    print(" " * space + "*" * i)

for i in range(2, 51, 2):
    space = (50 - i) // 2
    print(" " * space + "*" * i)