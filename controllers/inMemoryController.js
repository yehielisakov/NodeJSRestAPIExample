'use strict';

const Stats = require('../dataObjects/stats.js');
var requestIp = require('request-ip');

var ipList = []
var statsDict = {}
var callerIp = ""

exports.getPrev = function(req, res) {
  if (typeof ipList !== 'undefined' && ipList.length > 0) {
    res.send(ipList[ipList.length - 1].toString());
}
else { 
  res.send(null); 
}
callerIp = requestIp.getClientIp(req);
ipList.push(callerIp);
updateStatsDict(callerIp, req.originalUrl.substr(1));
}

exports.getTotal = function(req, res) {
  if (typeof ipList !== 'undefined' && ipList.length > 0) {
    res.send(ipList.length.toString());
}
else { 
  res.send('0'); 
}
callerIp = requestIp.getClientIp(req);
updateStatsDict(callerIp, req.originalUrl.substr(1));
}

exports.getStats = function(req, res) {
  if (typeof statsDict !== 'undefined' && Object.keys(statsDict).length > 0) {
    res.send(statsDict);
}
else { 
  res.send(null);
}
callerIp = requestIp.getClientIp(req);
updateStatsDict(callerIp, req.originalUrl.substr(1));
}

function updateStatsDict(callerIp, route) {
  var stats = null;
  if (callerIp in statsDict)
  {
    stats = statsDict[callerIp];
    stats.increment(route);
  }
  else
  {
    if (route == "prev")
      stats = new Stats(1, 0, 0);
    if (route == "total")
      stats = new Stats(0, 1, 0);
    if (route == "stats")
      stats = new Stats(0, 0, 1);    
    statsDict[callerIp] = stats;
  }
}



