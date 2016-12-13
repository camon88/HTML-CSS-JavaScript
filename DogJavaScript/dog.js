function Dog(name, year, month, day) {
        this.name = name;
        this.birthdate = new Date(parseInt(year), parseInt(month) - 1,
                parseInt(day));
        console.log(this.birthdate);
        this.setBirthdate = function(setYear, setMonth, setDay) {
                console.log(setYear);
                console.log(setMonth);
                console.log(setDay);
                this.birthdate = new Date(parseInt(setYear),
                        parseInt(setMonth) - 1,
                        parseInt(setDay));
        };
        this.idle = function() {
                this.ret = "" + this.name + " is idle.";
                return this.ret;
        };
        this.sit = function() {
                this.ret = "" + this.name + " is sitting.";
                return this.ret;
        };
        this.fetch = function() {
                this.ret = "" + this.name + " is fetching.";
                return this.ret;
        };
        this.shake = function() {
                this.ret = "" + this.name +
                        " is shaking hands.";
                return this.ret;
        };
        this.down = function() {
                this.ret = "" + this.name + " is lying down.";
                return this.ret;
        };
}