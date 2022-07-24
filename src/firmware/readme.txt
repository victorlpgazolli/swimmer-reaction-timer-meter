
**ESP8266**

Configurando o ESP8266

- Acesse o Arduino IDE e vá em File > Preferences
- No campo **Additional Boards Manager URLs:** insire o link: http://arduino.esp8266.com/stable/package_esp8266com_index.json
- Clique em **Ok**
- Em Tools > Board:"Arduino Uno" > Boards Manager, digite *esp* e instale o **esp8266**

Instalando o drive CH340

- Acesse o site https://sparks.gogo.co.nz/ch340.html e baixe o driver de acordo com o seu sistema operacional
-----------------------------------------------------------------------------

Library ESPWIFI.h
Essa biblioteca vem junto com quando adiciona o ESP no Arduino IDE, então não precisa baixar ou instalar.

WiFI.status() (se precisar)
https://www.arduino.cc/en/Reference/WiFiStatus
