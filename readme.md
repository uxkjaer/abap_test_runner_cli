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
88888888888888888888@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
88888888888888888888@@@@@@@@@@@@@@@@@@88CCff;;1100@@00GG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
88888888888888888888@@@@@@@@880088@@88ff;;ff11;;tt00tt;;1188@@@@@@@@@@@@@@@@@@@@@@@@@@
88888888888888888888@@@@880011;;tt@@88;;tt8800;;iiLLLL00CC00@@@@@@@@@@@@@@@@@@@@@@@@@@
8888888888888800LL11ii1188GGii;;;;CC@@11iiCCtt;;ttGGii;;;;LL@@@@@@@@@@@@@@@@@@@@@@@@@@
8888LLffCC00ttii;;iiii;;LL88;;ttii;;0011;;;;;;tt8888CC88ffii@@@@@@@@@@@@@@@@@@@@@@@@@@
88CCii;;ttffiiiiff88CC;;CC00;;ffCC;;11ff;;LL88@@@@0011;;iiCC@@@@@@@@@@@@@@@@@@@@@@@@@@
GGttLLCCii00LL;;ii11;;;;11CC;;ii11;;iiLL;;tt@@@@@@@@8888@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
ffGGCCCCLLtt88iiiiffGGff;;ii;;iiffCCCCff11tt@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
tt00CCiitt;;ttii;;CC00ff;;ii;;CC@@@@00GG88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
LLCCtt;;LL88ff;;;;;;;;;;iiCCLL88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
0011CC118888tttt;;11iiCC8800@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88@@@@@@@@@@
880011iittttGG88888800ttLL88@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@00LLtt;;;;1188@@@@@@
8888CCff8888888888GG11ii00@@@@@@@@@@@@@@@@@@@@8888@@@@@@8800CC@@@@ii;;ii11ii;;11@@@@@@
8888888888888888GGttLL;;CC@@@@@@@@@@@@@@00@@@@@@@@88GG88GG;;;;CC@@ff;;CC@@8811;;GG@@@@
88888888888888tt11ii88GGff00@@@@@@@@@@@@88fffftt11CC11@@LL;;;;;;00GG;;ff@@@@LL;;LL@@@@
8888888888CCLL;;GG00tt88GGff8888@@00CCLL8811;;iiff8888@@CC;;LL;;1188;;11@@@@LL;;ffLLGG
00888800GGGG;;;;CC88110088GGGGttii;;;;;;;;tt;;CC00CCtt88ff;;00tt;;LL11tt88GG11;;GGiitt
008888CCtt11tt;;iiiitt88GG8888;;;;LLGGtt;;;;;;;;;;;;ii00tt;;ii;;;;ii1111;;;;iiLL880088
00888888ffLLtt;;ff000000@@@@@@11;;00@@@@ii;;;;;;CCGG@@8811;;ffCCGG1111ttLLGG@@@@@@@@@@
00888888GG1100CCGGGG88@@@@@@@@LL;;CC@@@@tt;;;;;;00LL11;;iiii@@88@@00@@@@@@@@@@@@@@@@@@
0088888888ffCC00008888@@@@@@@@GG;;ff@@88ii;;tt11tt;;;;ttCCGG@@@@@@@@@@@@@@@@@@@@@@@@@@
008888888888008888888888@@@@@@8811LLfftt;;ttCC11ttLLGG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
0088888888888888888888@@@@88GGff;;;;;;ttCC88@@@@00CC88@@@@@@@@@@@@@@@@@@@@@@@@@@@@8888
0088888888888888888888@@@@8800GGGGGG88@@@@@@@@8888@@@@@@@@@@@@@@@@@@@@@@@@@@0000GGGG00
0088888888888888888888888888@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@88@@@@@@
