n = list (map(int, input("\nInput sizes: ").strip().split()))

a = list (map(int, input("\nEnter the numbers: ").strip().split()))[:n[0]]
b = list (map(int, input("\nEnter the numbers: ").strip().split()))[:n[1]]

a.extend(b)
sor = sorted(a)
print(a, sep = "\n")

