This script is intended to be used withe the sample Micro Focus Flight API and GUI applications that are part of the UFT installation

There are 2 scripts included in this repository

1 - Flight Order API
  Decription:
  This script uses two service calls, Get Flights and CreateFlightOrder. 
  The API script then calls a GUI test to verify the data in the application

  Application: MicroFocus FLights API must be installed and running
  
  Data: 
  The majority of data is read from the included Flight_Info data sheet. 
  Fight Number is created as an output of GetFlights and that is passed as an input to CreateFlightOrder. 
  NOTE: Look at the properties of CreateFlightOrder
  
  
2 - Verify Flight GUI test
  Description:
  This test is a very basic test that logs into the Flight GUI, searches for the order that was created using the web services and verifies the customer name is correct for the order
  
  Application: Micro Focus Flight GUI should be installed and NOT running
  
  Data: 
  Both the order number and the passenger name are set as test parameters, the API test passews in the information when it calls the GUI test.
  Note: Look at the properties of Verify Flight
  
  EXECUTION
  This test should run as configured. You can update the test flow in the Flight API to run over multiple iterations.
  
  BUSINESS VALIUE:
  This script is great for showing customer the value of using API testing with their regression suites. Much of regression testing is setting up specific data secnarios to users can perform the actual test they need. Using API for the setup can drastically reduce the oveall execution time.
