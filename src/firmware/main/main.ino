#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <WebSocketsClient.h>

ESP8266WiFiMulti WiFiMulti;

WebSocketsClient webSocket;

#define ssid "VINICIUS_2G"
#define password  "vini2014"

#define sensorIR 15

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {

  switch (type) {
    case WStype_DISCONNECTED:
      Serial.printf("[WSc] Disconnected \n");

      break;
    case WStype_CONNECTED: 
        Serial.printf("[WSc] Connected to url: %s\n", payload);

        // send message to server when Connected
        //webSocket.sendTXT("Connected");
         break;
    case WStype_TEXT:
      Serial.printf("[WSc] get text: %s\n", payload);

      // send message to server
      // webSocket.sendTXT("message here");
      break;
    case WStype_BIN:
      Serial.printf("[WSc] get binary length: %u\n", length);
      hexdump(payload, length);

      // send data to server
      // webSocket.sendBIN(payload, length);
      break;
    case WStype_PING:
      // pong will be send automatically
      Serial.printf("[WSc] get ping\n");
      break;
    case WStype_PONG:
      // answer to a ping we send
      Serial.printf("[WSc] get pong\n");
      break;
  }

}


void setup() 
{
  Serial.begin(9600);
  pinMode (sensorIR, INPUT);

  WiFiMulti.addAP(ssid, password);

    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }
  Serial.println("");
  Serial.println("WiFi connected");
  
   webSocket.begin("swimmer-reaction-timer-meter.herokuapp.com", 80, "/socket.io/?EIO=4&transport=websocket"); // "ip",porta
   webSocket.onEvent(webSocketEvent);
}
bool aguardandoBotao()
{
  //delay(2000);
  return false;
}


void loop() 
{
  webSocket.loop();
  
  while(aguardandoBotao()){};
  //Serial.println("1");
  long tempoQuandoUsuarioApertouBotao = millis();
  //Serial.println("2");
  while(digitalRead(sensorIR) == LOW){yield();};
  long tempoQuandoUsuarioTirouPe = millis();
  //Serial.println("3");
  long diff = tempoQuandoUsuarioTirouPe - tempoQuandoUsuarioApertouBotao;
  //Serial.println("4");
  if(diff > 100){Serial.println(diff);}
  
}
