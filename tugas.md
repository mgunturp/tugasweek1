1. Algoritma deteksi palindrom
- Mulai
- Buat variable string kataAwal
- Menampilkan “masukan kata”
- Input kataAwal “Malam”
- Menampilkan “kata awal = “ & kataAwal
- Menampilkan “kata kebalikan = “ & ReverseString(kataAwal)
- Jika ReverseString(kataAwal) == kataAwal TRUE menampilakan “kata tersebut palindrom”
- Jila ReverseString(kataAwal) == kataAwal FALSE menampilkan “kata tersebut BUKAN palindrom”
- Selsai

2.Algoritma reverse string
- Mulai
- Input string 
- Menghitung jumlah panjang string
- membuat variable reverseString = “ ”
- membuat variable i = length - 1 
- ulang sampai i>=0:
	- reverseString = reverseString + karakter yang di posisi 'i' 
	- i = i – 1
- print reverseString
- Selsai