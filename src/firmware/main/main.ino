#include <ESP8266WiFi.h>
#include <WebSocketsClient.h>
//#include <Timer.h>

/* 
* Id e password do Wi-fi 
*/
#define ssid "VINICIUS_2G"
#define password  "vini2014"

#define botao 16
#define sensorIR 15
#define ledON_OFF 14
#define ledWiFI 13
#define ledSensor 12

WebSocketsClient webSocket;

int statusBotao;
int cronometro = 0;
long int t1,t2;
//Websocket

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {

  switch (type) {
    case WStype_DISCONNECTED:
      Serial.printf("[WSc] Disconnected!\n");
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

void setup() {
  Serial.begin(9600);

  pinMode (botao, INPUT_PULLUP);
  pinMode (sensorIR, INPUT);
  pinMode (ledON_OFF, OUTPUT);
  pinMode (ledWiFI, OUTPUT);

/*
*Status do Microcontrolador
*/
  
  digitalWrite(ledON_OFF, HIGH);

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  digitalWrite(ledWiFI, HIGH);


//Iniciando o Websocket
  webSocket.begin("swimmer-reaction-timer-meter.herokuapp.com", 43, "/"); // "ip",porta
  webSocket.onEvent(webSocketEvent);
    
}


/*
 * Métodos
 */
void conecaoWiFi()
{
   if (digitalRead(WiFi.status() != WL_CONNECTED))
  {
    digitalWrite(ledWiFI, LOW);
  }
}

void tempoSensor()
{
/*
 * Sensor
 * HIGH = Qunado tira o pé da base
 * LOW = Quando o pé está na base
 * 
 */
 cronometro = 0;
 /* 
 statusBotao = digitalRead(botao);
  if (statusBotao == HIGH )
  {
      Serial.println("botão apertado");

 */
    while (digitalRead(sensorIR) ==LOW)
    {/*
      digitalWrite(ledSensor, HIGH);
      cronometro = cronometro+1;
      Serial.println(cronometro);
      delay(1000);
      */
      t2=millis();
      Serial.println(t2-t1);

    }
    digitalWrite(ledSensor, LOW);
  }
//}

void exibirTempo()
{
  Serial.print("Salto realizado em");
  //Serial.print(cronometro);
  Serial.print(t2-t1);
  Serial.println("segundos");
  digitalWrite(ledSensor, LOW);
}


void loop()
{

 if (true){
        Serial.println("enviando a letra: ");
        Serial.println(webSocket.sendTXT("hello"));
         } 

  conecaoWiFi();
  delay(2000);
  t1=millis();
  tempoSensor();
  exibirTempo();
}
