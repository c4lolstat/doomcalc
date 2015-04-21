/**
 * Created by Zoltan_Biro on 3/11/2015.
 */

var requestLimit = 10;
var timeLimit = 10000;
var cntrequest = 0;
var requestTimes = [];

function getTimeOut(){
    var timeout=0;
    if (cntrequest<requestLimit){
        cntrequest++;
        requestTimes.push(new Date().getTime());
    }else{
        var interval= new Date().getTime()-requestTimes[0];
        if (interval>timeLimit){
            requestTimes.shift();
            requestTimes.push(new Date().getTime());
        }else{
            timeout=timeLimit-interval;
            requestTimes.shift();
            requestTimes.push(new Date().getTime()+timeout);
        }
    }
    return timeout;
};

