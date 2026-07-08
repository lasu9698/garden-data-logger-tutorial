loops.everyInterval(60000, function () {
    basic.showString("logging data")
    datalogger.log(datalogger.createCV("Air_Temperature", input.temperature()))
    datalogger.log(datalogger.createCV("Soil_Moisture", Environment.ReadSoilHumidity(AnalogPin.P1)))
    datalogger.log(datalogger.createCV("Light_Intensity", Environment.ReadLightIntensity(AnalogPin.P3)))
    datalogger.log(datalogger.createCV("Soil_Temperature", Environment.Ds18b20Temp(DigitalPin.P2, Environment.ValType.DS18B20_temperature_C)))
    basic.pause(5000)
    basic.clearScreen()
})
