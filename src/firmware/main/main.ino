#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>


ESP8266WiFiMulti WiFiMulti;

#define ssid "VINICIUS_2G"
#define password  "vini2014"

#define sensorIR 15

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
  pinMode (16,OUTPUT);

  WiFiMulti.addAP(ssid, password);

    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }
  Serial.println("");
  Serial.println("WiFi connected");
  
}
bool aguardandoBotao()
{
  //delay(2000);
  return false;
}


void loop() 
{
  
  while(aguardandoBotao()){};
  //Serial.println("1");
  long tempoQuandoUsuarioApertouBotao = millis();
  //Serial.println("2");
  while(digitalRead(sensorIR) == LOW){yield();};
  long tempoQuandoUsuarioTirouPe = millis();
  //Serial.println("3");
  long diff = tempoQuandoUsuarioTirouPe - tempoQuandoUsuarioApertouBotao;
  //Serial.println("4");
  if(diff > 100){
    Serial.println(diff); 
  httpGETRequest(diff);
  }
  
}
