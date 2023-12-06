/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya G.
 * Created on: Dec 2023
 * This program does bluetooth
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

    if (distanceToObject < 10) {
      radio.sendString('Too Close')
    } else {
      radio.sendString('Safe zone')
    }
  }

  // recieve from other microbit
  radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
  })
}
