function Stats(prev, total, stats) {
    this.prev = prev;
    this.total = total; 
    this.stats = stats;
  };
  
Stats.prototype.increment = function(route) {
    console.log("got to stats increment with route " + route);
    switch (route) {
        case "prev":
            this.prev++;
            break;
        case "total":
            this.total++;
            break;
        case "stats":
            this.stats++;
            break;
        default:
            console.log("No field " + route + " exists in Stats object!");
    }
  };
 
Stats.prototype.toString = function()
{
    return "Prev: " + this.prev + ", Total: " + this.total + ", Stats: " + this.stats;
};

module.exports = Stats;