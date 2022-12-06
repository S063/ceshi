/*******************************

飞猪
脚本名称:飞猪
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
*******************************
[rewrite_local]
^http[s]?:\/\/xrckeji\/.com\/itally\/app\/user\/query.+$ url script-response-body https://raw.githubusercontent.com/S063/ceshi/0e23a1cf6fdf3adfad99d406cbc49a0936b418f7/feizhi.js
[mitm] 
hostname = *.xrckeji.*
*******************************
Surge

[Script]
^http[s]?:\/\/xrckeji.com\/itally\/app\/user\/query.+$ requires-body=1,max-size=0,script-path=xrckeji.js

[MITM]
hostname = *.xrckeji.*

*******************************/
var obj = JSON.parse($response.body);
    obj.vipType= 1;
obj.vipStatus= 1;
    $done({body: JSON.stringify(obj)});
