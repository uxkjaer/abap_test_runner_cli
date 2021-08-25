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


## Ascii-Art credit to [Uwe](https://twitter.com/se38)
8888888888888888888888@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
8888888888888888888888@@@@@@@@@@@@@@@@@@@@@@00GGttiiLL@@@@8800@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
8888888888888888888888@@@@@@@@@@@@@@@@@@88GGiiii;;;;;;CC88LLiitt00@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
8888888888888888888888@@@@@@8800tt11CC@@@@11;;00@@LL;;ttLLffLL11ff@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
88888888888888888888GGLLCC8888CC;;;;;;00@@tt;;0088ff;;ttLLttffffCC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
888888GG888888CCff;;;;;;;;11@@LL;;ii;;11@@tt;;ii;;;;;;GG88LLffii;;00@@@@@@@@@@@@@@@@@@@@@@@@@@@@
8888CC;;11ttGG11iiiiffLL;;;;88CC;;LL11;;LLffii;;11ff00@@GG11CCCC;;GG@@@@@@@@@@@@@@@@@@@@@@@@@@@@
88LL11ii;;GGff;;iiff88GG;;tt@@ff;;CCGG;;;;CC;;;;8888@@@@88ffii11LL@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
GG1100ffLL1188ff;;;;ii;;;;;;tttt;;ii;;;;iiLLii;;00@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ffCC88tt88iiCC00;;iiffGGGG;;;;ii;;iiffCCCCLL1111GG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ttGG00iitt11;;ff;;;;CC8800;;;;ii;;00@@@@00CC00@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
LLCCCC;;;;GGCCtt;;;;ii;;;;;;ttfftt88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
0011GG;;GG8888tt11;;;;;;11CCGG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
88GG11;;GGGGttCCGGLL00CCCCLL00@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@00LLttff88@@@@@@@@
8888GG;;ttLL0088888888GGii1188@@@@@@@@@@@@@@@@@@@@@@88@@@@@@@@@@@@@@@@@@88tt;;;;;;;;;;ii00@@@@@@
888888LL888888888888LL;;;;CC@@@@@@@@@@@@@@@@@@88@@88@@@@@@@@8888LLffff@@@@ii;;11CCCCii;;tt@@@@@@
888888888888888800ffttGGffii88@@@@@@@@@@@@@@@@0088@@888800ff88GGii;;;;GG@@ff;;ff@@@@00;;;;88@@@@
0088888888888800iitt11GG88GGtt@@@@@@@@@@@@@@@@GG11ii;;iiCC118800;;;;;;ii88CC;;tt@@@@@@;;;;00@@88
00888888888811LLiiGG88ttGG@@110000@@88GGLLffGGGG;;;;ttLL88@@@@88;;11ff;;tt88;;ii88@@88;;;;CCffCC
00888888GG88ff;;;;GG88ttLL@@88GGGG11;;;;;;;;;;ff;;;;0000CCtt00GG;;tt88;;;;CC111188GGLL;;ii00;;tt
008888GGLLiittii;;iiiiii000000@@GG;;;;ffCCtt;;;;;;;;;;;;;;;;CCCC;;iiii;;;;iitt11ii;;;;iiGG880088
00888888CCfftt11;;LLCC00GG88@@@@88;;;;88@@@@tt;;;;;;;;ffLL88@@CC;;;;ttffff11ii;;11ffGG@@@@@@@@@@
0088888800iiCCCC11CC00GG88@@@@@@@@11;;GG@@@@CC;;;;;;ii@@00CCtt11;;LL@@@@88LLGG88@@@@@@@@@@@@@@@@
0088888888GGiiGG88GG888888@@@@@@@@ff;;LL@@@@CC;;ii;;11CCii;;;;ii11GG8888@@@@@@@@@@@@@@@@@@@@@@@@
008888888888GG00GG88888888@@@@@@@@GG;;ff880011;;LL11;;;;iittGG88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
00888888888888888888888888@@@@88880011ttii;;;;1188CCGGGG0000@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
00888888888888888888888888@@8888LLffii;;11ff00@@@@@@@@00CC@@@@@@@@@@@@@@@@@@@@@@@@@@8888@@880088
00888888888888888888888888@@@@@@00000088@@@@@@@@@@88@@88@@@@@@@@@@@@@@@@@@@@@@@@@@@@88GG00GGGG00
00888888888888888888888888@@8888@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88@@@@@@@@
