class Game {
    constructor(location_start, rooms) {
        this.location = location_start;
        this.rooms = rooms;
        this.inventory = ['sword'];
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
        if(target == ""){ 
          for (var i = 0; i < this.inventory.length; i++) { 
                if (words.includes(this.inventory[i].obj_name.toUpperCase())) { 
                    target = this.inventory[i] ;
                    break; 
            } 
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
                    var output = "You enter the <strong style='color:#800080'>" + target.obj_name + "</strong> and emerge in the " + this.rooms[target.obj_destination].name + ". ";
                    output += this.rooms[target.obj_destination].description + " ";
                    output += this.listRoomObjects();
                   
                    break;
                case "LOOK":
                    var output = "You look at the <strong style='color:#2196f3'>" + target.obj_name + "</strong>. ";
                    output += target.obj_description;
                    last = output;
                    break;
                case "TAKE": 
                    for (var i = 0; i < objects.length; i++) { 
                        if(target == objects[i]){ 
                          var output = "You take the " + target.obj_name + ". "; 
                          this.inventory.push(target); 
                          this.rooms[this.location].objects.splice(1, 1); 
                          return output; 
                        } 
                    } 
                default:
                    return "You are unsure of what to do."
            }
            return output
        }
        if(target == ""){ 
          var verbs_user = ["INVENTORY"] 
          for (var i = 0; i < verbs_user.length; i++) { 
                    if (words.includes(verbs_user[i].toUpperCase())) { 
                        action = verbs_user[i] 
                        break; 
                    } 
                } 
          if(action != ""){ 
            switch (action) { 
            case "INVENTORY": 
                        return this.listInventoryObjects(); 
                        break; 
                    default: 
                        return "You are unsure of what to do."; 
            } 
          }else{ 
            return "You are unsure of what to do."; 
          } 
        }  else {
            return "You are unsure of what to do."
        }

    }
    // lists whatever exists in the room for the player to interact with
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
    listInventoryObjects() { 
      var output = "Your inventory contains a "; 
      for (var i = 0; i < this.inventory.length; i++){ 
        output += this.inventory[i].obj_name; 
              if (i == this.inventory.length - 2) { 
                  output += ", and a "; 
              } else if (i < this.inventory.length - 2) { 
                  output += ", a "; 
              } else { 
                  output += "."; 
              } 
      } 
      return output; 
    } 
}
  // kickoff the game
gameobj = new Game("entrance", rooms)
document.getElementById("log").innerHTML += "<br>" + "You hear a crash as the staircase behind you collapses. You're trapped in here now.";
document.getElementById("log").innerHTML += "<br>" + gameobj.listRoomObjects();
const node = document.getElementById("playerInput");

node.addEventListener('keyup', ({
    key
}) => {
    if (key === "Enter") {
        //document.getElementById("log").innerHTML += "<br>"+ gameobj.parse(node.value);
        var log = document.getElementById('log');
        var newlog = "<strong>" + gameobj.parse(node.value) + "</strong>" + "<br><p>" + log.innerHTML + "</p>"; 
        log.innerHTML = "";
        log.innerHTML += newlog;
        node.value = "";
    }
})