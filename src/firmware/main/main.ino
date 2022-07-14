#define sensorIR 15

void setup() 
{
  Serial.begin(9600);
  pinMode (sensorIR, INPUT);
  Serial.println("SETUP");
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
  if(diff > 100){Serial.println(diff);}
  
}
