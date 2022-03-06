class wierzcholekDrzewa:
    lewo = None
    prawo = None
    wartosc = None

    def wstaw(self, liczba):
        if self.wartosc == None:
            self.wartosc = liczba
        elif liczba >= self.wartosc:
            if self.prawo == None:
                nowy = wierzcholekDrzewa()
                self.prawo = nowy
            self.prawo.wstaw(liczba)
        elif liczba < self.wartosc:
            if self.lewo == None:
                nowy = wierzcholekDrzewa()
                self.lewo = nowy
            self.lewo.wstaw(liczba)

    def preOrder(self):
        print(self.wartosc)
        if self.lewo != None :
            self.lewo.preOrder()
        if self.prawo != None:
            self.prawo.preOrder()

    def inOrder(self):
        if self.lewo != None:
            self.lewo.inOrder()
        print(self.wartosc)
        if self.prawo != None:
            self.prawo.inOrder()

    def postOrder(self):
        if self.lewo != None:
            self.lewo.inOrder()
        if self.prawo != None:
            self.prawo.preOrder()
        print(self.wartosc)

drzewo =  wierzcholekDrzewa()
lista = [7, 9, 4, 6, 3, 14, 8, 10, 16, 5]

for el in lista:
    drzewo.wstaw(el)

drzewo.preOrder()
print("----")
drzewo.inOrder()
print("----")
drzewo.postOrder()