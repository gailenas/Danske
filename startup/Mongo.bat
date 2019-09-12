cd C:\Users\%username%\Desktop\Danske
if not exist "C:\Users\%username%\Desktop\Danske\mongo-data\" mkdir "C:\Users\%username%\Desktop\Danske\mongo-data"

cd C:\Program Files\MongoDB\Server\4.2\bin
mongod.exe --dbpath "C:\Users\%username%\Desktop\Danske\mongo-data"