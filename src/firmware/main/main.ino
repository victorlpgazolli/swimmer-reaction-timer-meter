#include <ESP8266WiFi.h>
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

int statusBotao;
int cronometro = 0;

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
}

void loop()
{
  conecaoWiFi();
  delay(2000);
  tempoSensor();
  exibirTempo();
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
 statusBotao = digitalRead(botao);
  if (statusBotao == LOW )
  {
    Serial.println("botão apertado");
    while (digitalRead(sensorIR) ==LOW)
    {
      digitalWrite(ledSensor, HIGH);
      cronometro = cronometro+1;
      Serial.println(cronometro);
      delay(1000);
    }
    digitalWrite(ledSensor, LOW);
  }
}

void exibirTempo()
{
  Serial.print("Salto realizado em");
  Serial.print(cronometro);
  Serial.println("segundos");
  digitalWrite(ledSensor, LOW);
}
