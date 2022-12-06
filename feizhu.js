*******************************
[rewrite_local]
^http[s]?:\/\/xrckeji\/.com\/itally\/app\/user\/query\/.+$ url script-response-body https://raw.githubusercontent.com/S063/-/main/feizhu.js
[mitm] 
hostname = *.xrckeji.*
*******************************
*******************************/
var obj = JSON.parse($response.body);
    obj.vipType= 1;
obj.vipStatus= 1;
    $done({body: JSON.stringify(obj)});
