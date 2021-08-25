# Abap test runner CLI 

A simple CLI package that allows you to execute unit tests directly from command line.

## Installation

```
npm install -g abap_test_runner_cli
```

## Usage
The CLI takes arguments or reads from .env file
* ADT_URL       : string - Path to your system, ie: https://localhost:50001 
* ADT_USER      : string - Username                                         
* ADT_PASS      : string - Password                                         
* ABAP_PACKAGE  : string - Abap Package                                     
* ABAP_CLASS    : string - Abap Class name                     

One of either the abap_package or the abap_class has to be provided
### Example
```
abaptr --class zcl_test --ADT_URL https://localhost:50001 --ADT_USER developer --ADT_PASS Ldtf5432 --ABAP_PACKAGE ztest
```
To skip the image add argument skip_image

Credit goes to Marcell Urbani for creating the [API](https://github.com/marcellourbani/abap-adt-api)

