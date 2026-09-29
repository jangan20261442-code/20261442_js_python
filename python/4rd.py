##print("%d" % 123)

##print("100")
##print("%d" % 100)
##print("100 + 100")
##print("%d" % (100 + 100))
##print("%d %d" % (100, 200))
##print("%d" % (100))


##print("%d/ %d = %d" % (100, 200, 0.5))
##print("%d/ %d = %5.1f" % (100, 200, 0.5))

##print("%d" % 123)
##print("%5d" % 123)
##print("%05d" % 123)
## 5d는 전체 5칸 확보후 우측 정렬 05d는 전체 5칸 확보후 우측 정렬, 빈칸은 0으로##
##print("%f" % 123.45)
##print("%7.1f" % 123.45)
##print("%7.3f" % 123.45)
## 7.1f는 전체 7칸 확보후 소수점 1자리까지 7.3f는 전체 7칸 확보후 소수점 3자리까지##
##print("%s" % "Python")
##print("%10s" % "Python")
## 10s는 전체 10칸 확보후 우측 정렬 ##

##print("한 행입니다. \n 또 한 행입니다.")

##for i in range(1, 6):
    ##print(" "*(5-i), "*"*(2*i-1))
##for i in range(4,0,-1):
    ##print(" "*(5-i), "*"*(2*i-1))


a=9
b=2
print(a//b)
print(a%b)
print(a**b)

a += 3
print(a)
a -= 3
print(a)
a *= 3
print(a)
a /= 3
print(a)
a %= 3
print(a)
a **= 3
print(a)


print(a==b)
print(a!=b)
print(a>b)
print(a<b)
print(a>=b)
print(a<=b)

s1, s2, s3 = "100", "100.123", "999999999999999"
print(int(s1)+1, float(s2)+1, int(s3)+1)


money, c500, c100, c50, c10 = 0, 0, 0, 0, 0
money = int(input("교환할 돈은 얼마인가요?"))
c500 = money // 500
money %= 500

c100 = money // 100
money %= 100

c50 = money // 50
money %= 50

c10 = money // 10
money %= 10

print("\n500원짜리 : %d개" % c500)
print("100원짜리 : %d개" % c100)
print("50원짜리 : %d개" % c50)
print("10원짜리 : %d개" % c10)
print("바꾸지 못한 잔돈 : %d원" % money)

money1, c10000, c5000, c1000 = 0, 0, 0, 0

money1 = int(input("교환할 돈은 얼마인가요? "))

c10000 = money1 // 10000
money1 %= 10000

c5000 = money1 // 5000
money1 %= 5000

c1000 = money // 1000
money1 %= 1000

print("\n10000원짜리 : %d장" % c10000)
print("5000원짜리 : %d장" % c5000)
print("1000원짜리 : %d장" % c1000)
print("바꾸지 못한 잔돈 : %d원" % money1)

a1 = int(input("정수를 입력하세요 : "))
if a1 % 2 == 0:
    print("짝수입니다.")
else:
    print("홀수입니다.")

print("프로그램 끝")

a2=75

if a2 > 50:
    if a2 < 100:
        print("50보다 크고 100보다 작습니다.")
    else:
        print("와~~~100보다 크군요")
else:
    print("에고....50보다 작군요")


score = int(input("점수를 입력하세요 : "))

if score >= 95:
    print("A+")
else:
    if score >= 90:
        print("A0")
    else:
        if score >= 85:
            print("B+")
        else:
            if score >= 80:
                print("B0")
            else:
                if score >= 75:
                    print("C+")
                else:
                    if score >= 70:
                        print("C0")
                    else:
                        if score >= 65:
                            print("D+")
                        else:
                            if score >= 60:
                                print("D0")
                            else:
                                print("F")

print("학점입니다.^^")