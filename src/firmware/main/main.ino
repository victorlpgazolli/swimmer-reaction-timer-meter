#include <ESP8266WiFi.h>

// Id e password do Wi-fi
#define ssid "VINICIUS_2G"
#define password  "vini2014"

int sensorIR    = 15;
int ledON_OFF   = 14;
int ledWiFI     = 13;
int ledSensor   = 12;

int WiFiConectado = LOW;

//"alledraB_2.4G";
//"15072000";


void setup() {
 
  Serial.begin(115200);
  pinMode (sensorIR, OUTPUT);
  pinMode (ledON_OFF, OUTPUT);
  pinMode (ledWiFI, OUTPUT);

  //Status do Microcontrolador
  digitalWrite(ledON_OFF, HIGH);
    
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("WiFi connected");
  digitalWrite(ledWiFI,HIGH);
  
}

void loop() {
  
  if (digitalRead(WiFi.status() != WL_CONNECTED))
  {
    digitalWrite(ledWiFI, LOW); 
    Serial.println("wifi conetadoo"); 
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
