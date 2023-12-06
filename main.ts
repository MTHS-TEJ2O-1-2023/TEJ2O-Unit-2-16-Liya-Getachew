/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya G.
 * Created on: Dec 2023
 * This program does bluetooth.
*/

// variables
let distanceToObject: number = 0

// setup
radio.setGroup(1)
basic.showIcon(IconNames.Rabbit)

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    // find distance from sonar
    basic.clearScreen()
    distanceToObject = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
    )

    if (distanceToObject <= 10) {
      basic.showNumber(distanceToObject)
      pause(1000)
      radio.sendString('TOO. CLOSE.')
      pause(500)
    } 

    if (distanceToObject > 10) {
      basic.showNumber(distanceToObject)
      pause(1000)
      radio.sendString('Safe zone')
      pause(500)
    }
  }
}
