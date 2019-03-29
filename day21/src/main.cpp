#include <Arduino.h>
#include <LiquidCrystal.h>

LiquidCrystal lcd(12,11,5,4,3,2);
const int switchPin = 6;
int switchState = 0;
int prevSwitchState = 0;
int reply;

void setup() {
  lcd.begin(16,2);
  pinMode(switchPin, INPUT);
  lcd.setCursor(6,0);
  lcd.print("Hugo");
  lcd.setCursor(4,1);
  lcd.print("Perdomo");
}

void loop() {

}