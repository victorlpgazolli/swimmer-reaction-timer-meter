int sensorIR = 13;
void setup() {
Serial.begin(9600);
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
