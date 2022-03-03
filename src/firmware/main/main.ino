#include "WiFiEsp.h"
int sensorIR = 13;


// Id e password do Wi-fi
char ssid[] = "alledraB_2.4G";
char pass[]= "15072000";
int status = WL_IDLE_STATUS;

void setup() {
  Serial.begin(115200);

    // Conectando no WIFI

  while ( status != WL_CONNECTED) {
    Serial.print("Conecntando no ssid: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
  }

  Serial.println("Conectado");
  
  pinMode (sensorIR, OUTPUT);
}

void loop() {

  if (digitalRead(sensorIR) == HIGH)
  {
   Serial.write("Ok");
  }
  else
  {
  Serial.write("Não está funcionando");
  }
}
