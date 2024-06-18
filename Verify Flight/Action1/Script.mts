'To run test, open the Flight API (OpenText Flights Service APIs) from UFT One 2023.4 or greater
' This test will automatically open the Flight GUI to do the verification via Record and Run settings
'
' Also, make sure to run the API test since the Verify Flight test needs data from it to run successfully

WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john"
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "5b9ab6318c2e602d40ff"
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1963626264_;_script infofile_;_ZIP::ssf4.xml_;_
Print("Order Number = " & Parameter("aOrderNum"))
Print("Passenger Name = " & Parameter("aPassengerName"))
WpfWindow("OpenText MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_1956950776_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_1965489784_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("byNumberWatermark").Set Parameter("aOrderNum") @@ hightlight id_;_1962125584_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("SEARCH").Click @@ hightlight id_;_1962123040_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Check CheckPoint("passengerName") @@ hightlight id_;_1963628136_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("OpenText MyFlight Sample").Close @@ hightlight id_;_1705096_;_script infofile_;_ZIP::ssf10.xml_;_
