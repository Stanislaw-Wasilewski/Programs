tab = input("Podaj tablice max 10 liczb: ").split()
for i in range(len(tab)):
    tab[i] = int(tab[i])

if(len(tab) > 10):
    print("Podaj max 10 liczb")

class klasa:
    tab = []

    def __init__(self):
        self.tab = tab

    def __szukaj_najwyzsza(self,start):
        najwyzsza = start
        for i in range(start +1, len(self.tab)):
            if(self.tab[i] > self.tab[najwyzsza]):
                najwyzsza = i
        return(najwyzsza)

    def sortuj(self):
        for i in range (len(self.tab)):
            najwyzsza = self.__szukaj_najwyzsza(i)
            self.tab[i], self.tab[najwyzsza] = self.tab[najwyzsza], self.tab[i]
       
    def wypisz(self):
        for j in (self.tab):
            print(j, end = " ")

o = klasa()
o.sortuj()
o.wypisz()  
