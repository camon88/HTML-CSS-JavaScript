var dog = new Dog("Dog", 0000, 00, 00);
$(document).ready(function() {
        $("#dogNameSpot").text(dog.name);
        $("#dogBdaySpot").text(dog.birthdate.toDateString());
        $("#whatDogIsDoing").text(dog.idle());
        $("#spotForName").on("change", function() {
                dog.name = $("#spotForName").val();
                $("#dogNameSpot").text(dog.name);
        });
        $(".bDate").on("change", function() {
                console.log("changed");
                console.log(parseInt($("#year")
                        .val()));
                console.log(parseInt($("#month")
                        .val()));
                console.log(parseInt($("#day").val()));
                dog.setBirthdate(parseInt($(
                                "#year"
                        ).val()),
                        parseInt($(
                                "#month"
                        ).val()),
                        parseInt($(
                                "#day"
                        ).val()));
                $("#dogBdaySpot").text(dog.birthdate
                        .toDateString()
                );
        });
        $("#dogTricks").on("change", function() {
                this.theTrick = $("#dogTricks")
                        .val();
                console.log(this.theTrick);
                switch (true) {
                        case (this.theTrick ==
                                "idle"):
                                $(
                                        "#whatDogIsDoing"
                                ).text(
                                        dog
                                        .idle()
                                );
                                break;
                        case (this.theTrick ==
                                "sit"):
                                $(
                                        "#whatDogIsDoing"
                                ).text(
                                        dog
                                        .sit()
                                );
                                break;
                        case (this.theTrick ==
                                "fetch"):
                                $(
                                        "#whatDogIsDoing"
                                ).text(
                                        dog
                                        .fetch()
                                );
                                break;
                        case (this.theTrick ==
                                "shake"):
                                $(
                                        "#whatDogIsDoing"
                                ).text(
                                        dog
                                        .shake()
                                );
                                break;
                        case (this.theTrick ==
                                "down"):
                                $(
                                        "#whatDogIsDoing"
                                ).text(
                                        dog
                                        .down()
                                );
                                break;
                }
        });
});