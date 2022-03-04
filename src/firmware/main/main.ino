#include "WiFiEsp.h"

int sensorIR    = 15;
int ledON_OFF   = 14;
int ledWiFI     = 13;
int ledSensor   = 12;

int WiFiConectado = LOW;


// Id e password do Wi-fi
char ssid[] = "alledraB_2.4G";
char pass[]= "15072000";
int status = WL_IDLE_STATUS;

void setup() {
 
  Serial.begin(115200);
  pinMode (sensorIR, OUTPUT);
  pinMode (ledON_OFF, OUTPUT);
  pinMode (ledWiFI, OUTPUT);

  //Status do Microcontrolador
  digitalWrite(ledON_OFF, HIGH);
    
  // Conectando no WIFI
  while ( status != WL_CONNECTED) {
    Serial.print("Conecntando no ssid: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
    
    digitalWrite(ledWiFI,LOW);

  }

  Serial.println("Conectado");
  digitalWrite(ledWiFI,HIGH);

}

void loop() {

  //Verificação do status WiFi
  if (digitalRead(WiFi.status() != WL_CONNECTED))
  {
    digitalWrite(ledWiFI, LOW);  
  }

  //Condição do sensor
  if (digitalRead(sensorIR) == HIGH)
  {
   Serial.write("O nadador está na plataforma");
   digitalWrite(ledSensor,HIGH);
  }
  else
  {
  Serial.write("Salto realizado");
  digitalWrite(ledSensor,LOW);
  }
}
