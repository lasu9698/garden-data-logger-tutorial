```package
datalogger= github:lancaster-university/microbit-datalogger-ui
environment = github:tinkertanker/pxt-iot-environment-kit

```

# Data Logger: Air Temperature

Let's write a program to record air temperature, light intensity, soil moisture, and soil temperature every 1 minute


## Step 1
 We need to set up how often we want to show the number. In this example, we are going to collect the data every 1 minute, using the Loops ``||loops: every 500 ms||``. 
 After you put this block in the working area, change the number from 500 to 60000 ms.

```blocks
loops.everyInterval(60000, function () {
   
})
 

```

## Step 2
Next, go to the data logger and put block ``||datalogger: log data column value 0 ||`` inside the Loops ``||loops: every 60000 ms||``

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("", ))
})


```

## Step 3
We are going to add the column name by typing to "Air_Temperature" inside the quotation. And, go to Input ``||input: temperature (C)||`` and replace the 0 with this block.
```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Air_Temperature", input.temperature()))
})


```

## Step 4
We are going to repeat step 2 and 3 to log data for light intensity, soil moisture, and soil temperature
Add three more Data Logger  ``||datalogger: log data column value 0 || `` blocks under the Air_Temperature block

In second one, type "Light_Intensity" in the empty quotation. Then, replace 0 with Input  ``||input: light level||`` 

In third one, type "Soil_Moisture" in the empty quotation. Then, replace 0 with  ``||environment: value of soil moisture(0~100) at pin P1 ||`` 

In fourth one, type "Soil_Temperature" in the empty quotation. Then, replace 0 with ``||environment: value of DS18B20 at pin P2 ||``


```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Air_Temperature", input.temperature()))
    datalogger.log(datalogger.createCV("Light_Intensity", input.lightLevel()))
    datalogger.log(datalogger.createCV("Soil_Moisture", Environment.ReadSoilHumidity(AnalogPin.P1)))
    datalogger.log(datalogger.createCV("Soil_Temperature", Environment.Ds18b20Temp(DigitalPin.P2, Environment.ValType.DS18B20_temperature_C)))
})


```