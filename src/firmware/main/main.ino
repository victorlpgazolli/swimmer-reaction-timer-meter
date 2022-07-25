#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>


ESP8266WiFiMulti WiFiMulti;


/*
#define ssid "VINICIUS_2G"
#define password  "vini2014"
*/

#define ssid "alledraB_2.4G"
#define password  "15072000"


#define sensorIR 14
#define botao 15
#define buzina 16

String serverName = "http://swimmer-reaction-timer-meter.herokuapp.com";

void httpGETRequest(long int diff) {
  WiFiClient client;
  HTTPClient http;
   String serverPath = serverName + "/api/v1/training?reaction_time_diff_in_milliseconds="+ String(diff);
  // Your IP address with path or Domain name with URL path 
  http.begin(client, serverPath);
  
  // Send HTTP POST request
  int httpResponseCode = http.GET();
  
  
  http.end();  
}

void setup() 
{
  Serial.begin(9600);
  pinMode (sensorIR, INPUT);
  pinMode (buzina,OUTPUT);
  digitalWrite(buzina,LOW);

  WiFiMulti.addAP(ssid, password);

    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }
  Serial.println("");
  Serial.println("WiFi connected");
  
}
bool aguardandoBotao()
{
  yield();
  return !(digitalRead(botao) == HIGH);
}

bool aguardandoBuzina()
{
  delay(5000);
  digitalWrite(buzina,HIGH);
  return false;
}


void loop() 
{
  
  while(aguardandoBotao ()){};
  while(aguardandoBuzina()){};
  long tempoQuandoUsuarioApertouBotao = millis();
  Serial.println("Pronto para saltar!");
  while(digitalRead(sensorIR) == LOW){yield();};
  long tempoQuandoUsuarioTirouPe = millis();
  long diff = tempoQuandoUsuarioTirouPe - tempoQuandoUsuarioApertouBotao;
  //Serial.println("4");
  Serial.println("Salto Realizado em: ");
  Serial.print(diff);
  Serial.println(" ms");
  digitalWrite(buzina,LOW);
  httpGETRequest(diff);
  
  
}
