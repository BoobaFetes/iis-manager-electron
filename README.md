# iis-manager-electron

help to publish, deploy and manage IIS web sites

## For the moment

no IIS code is set, this projet has a blank server, it will comes soon with dot net core

In futur version, I hope that every app pool and web site will be managed.

There are no ready to use app yet.

**Do not hesitate to send me your ideas or suggestions to help with its development or better target future or immediate needs!**

## client

## server

created with theses commands (powershell) :

```powershell
mkdir server; cd server
dotnet new gitignore
dotnet new sln -n IISManager
dotnet new webapi -lang C# -n IISManager.WebApi
dotnet new classlib -lang C# -n IISManager.Core
dotnet new xunit -lang C# -n IISManager.Core.Tests
dotnet new classlib -lang C# -n IISManager.Commands
cd .\IISManager.WebApi\;
dotnet add package Swashbuckle.AspNetCore --version 6.2.3
cd ..
```

you can execute with from root folder :

```
cd ./server
dotnet build IISManager.sln
dotnet run -p IISManager.WebApi/IISManager.WebApi.csproj
```

if no error occurs, you should be able to see the swagger at `https://localhost:5001/swagger/index.html`:

```
start-process -FilePath 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe' -ArgumentList "https://localhost:5001/swagger/index.html"
```
