class Game {
    constructor(location_start, rooms) {
        this.location = location_start;
        this.rooms = rooms;
    }

    parse(command) {
        var words = command.toUpperCase();
        var objects = this.rooms[this.location].objects;
        var target = "";
        for (var i = 0; i < objects.length; i++) {
            if (words.includes(objects[i].obj_name.toUpperCase())) {
                target = objects[i]
                break;
            }
        }
        if (target != "") {
            var verbs = target.obj_actions;
            var action = "";
            for (var i = 0; i < verbs.length; i++) {
                if (words.includes(verbs[i].toUpperCase())) {
                    action = verbs[i]
                    break;
                }
            }
            switch (action) {
                case "ENTER":
                    this.location = target.obj_destination;
                    var output = "You enter the " + target.obj_name + " and emerge in the " + this.rooms[target.obj_destination].name + ". ";
                    output += this.rooms[target.obj_destination].description + " ";
                    output += this.listRoomObjects();
                    break;
                case "LOOK":
                    var output = "You look at the " + target.obj_name + ". ";
                    output += target.obj_description;
                    break;
                default:
                    return "You are unsure of what to do."
            }
            return output
        } else {
            return "You are unsure of what to do."
        }

    }

    listRoomObjects() {
        var current_location = this.location;
        var rooms = this.rooms;
        var output = "The room contains a "
        for (var i = 0; i < rooms[current_location].objects.length; i++) {
            output += rooms[current_location].objects[i].obj_name;
            if (i == rooms[current_location].objects.length - 2) {
                output += ", and a "
            } else if (i < rooms[current_location].objects.length - 2) {
                output += ", a "
            } else {
                output += "."
            }
        }
        return output;
    }
}

gameobj = new Game("entrance", rooms)
document.getElementById("log").innerHTML += "<br>" + "You hear a crash as the staircase behind you collapses. You're trapped in here now.";
document.getElementById("log").innerHTML += "<br>" + gameobj.listRoomObjects();
const node = document.getElementById("playerInput");
node.addEventListener('keyup', ({
    key
}) => {
    if (key === "Enter") {
        document.getElementById("log").innerHTML += "<br>" + gameobj.parse(node.value);
        node.value = "";
    }
})