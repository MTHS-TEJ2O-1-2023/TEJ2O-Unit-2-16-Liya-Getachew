"""
Created by: Liya G
Created on: Dec 2023
This module is a Micro:bit MicroPython program that sends message through bluetooth.
"""
from microbit import *
import radio
from machine import time_pulse_us


# choose pins
trig = pin1
echo = pin2

# setup
trig.write_digital(0)
echo.read_digital()
radio.on()
radio.config(group=1)
display.show(Image.HEART)

# infinite loop
while True:
    if button_a.is_pressed():
        # output
        trig.write_digital(1)
        trig.write_digital(0)

        # Measure the echo pulse in miroseconds then convert to seconds
        micros = time_pulse_us(echo, 1)
        t_echo = micros / 1000000

        # Calculate distance in cm
        dist_cm = (t_echo / 2) * 34300
        display.scroll(str(int(dist_cm)))

        if dist_cm <= 10:
            display.show(dist_cm)
            sleep(1000)
            radio.send("TOO CLOSE")
            sleep(500)

        if dist_cm > 10:
            display.show(dist_cm)
            sleep(1000)
            radio.send("SAFE")
            sleep(500)
