#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>

ESP8266WiFiMulti WiFiMulti;

#define ssid "alledraB_2.4G"
#define password  "15072000"

#define sensorIR 12
#define botao 14
#define buzina 5
#define ledSensor 4
#define ledWiFi 0
#define ledOnOff 2

String serverName = "http://swimmer-reaction-timer-meter.brazilsouth.cloudapp.azure.com:8082";

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
  pinMode (ledOnOff, OUTPUT);
  pinMode (ledWiFi, OUTPUT);
  pinMode (ledSensor,OUTPUT);
  digitalWrite(buzina,LOW);

  digitalWrite (ledOnOff, HIGH);

  WiFiMulti.addAP(ssid, password);
  
  while(WiFiMulti.run() != WL_CONNECTED) {
    delay(100);
  }
  
  if (WiFiMulti.run() == WL_CONNECTED){
    digitalWrite(ledWiFi, HIGH);
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
  delay(500);
  digitalWrite(buzina,HIGH);
  digitalWrite(ledSensor,HIGH);
  return false;
}


void loop() 
{

  while(aguardandoBotao ()){};
  while(aguardandoBuzina()){};
  long tempoQuandoUsuarioApertouBotao = millis();
  Serial.println("Pronto para saltar!");
  while(digitalRead(sensorIR) == LOW){
    
    long tempoQuandoUsuarioTirouPe = millis();
    long diff = tempoQuandoUsuarioTirouPe - tempoQuandoUsuarioApertouBotao;
    bool limiteDeTempo = (diff > 400);
    bool precisaDesligarBuzina = (digitalRead(buzina) == HIGH && limiteDeTempo);
    if(!precisaDesligarBuzina)continue;
    digitalWrite(buzina,LOW);
    };
  long tempoQuandoUsuarioTirouPe = millis();
  long diff = tempoQuandoUsuarioTirouPe - tempoQuandoUsuarioApertouBotao;
  Serial.println("Salto Realizado em: ");
  Serial.print(diff);
  Serial.println(" ms");
  digitalWrite(buzina,LOW);
  digitalWrite(ledSensor,LOW);
  httpGETRequest(diff);
  
}
