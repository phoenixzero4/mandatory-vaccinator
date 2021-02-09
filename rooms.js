rooms = {
    "entrance": {
        "name": "Entranceway",
        "description": "A few rays of sunlight light the entrance staircase.",
        "objects": [{
                "obj_name": "Arched Doorway",
                "obj_description": "The ornately carved archway leads into a Passageway.",
                "obj_actions": ["LOOK", "ENTER", "BACK"],
                "obj_destination": "passage"
            },
            {
                "obj_name": "Ruined Staircase",
                "obj_description": "The staircase you entered from has collapsed. Light peeks through small gaps in the rubble.",
                "obj_actions": ["LOOK"]
            }
        ]
    },
    "passage": {
        "name": "Passageway",
        "description": "The light dims in this passageway. The air here is cool and still, and a thick coat of dust blankets the hall.",
        "objects": [{
            "obj_name": "Arched Doorway",
            "obj_description": "The ornately carved archway leads into the Entranceway.",
            "obj_actions": ["LOOK", "ENTER"],
            "obj_destination": "entrance"
        }
      ,{
        "obj_name": "small door",
        "obj_description": "The doorway is just big enough to struggle through",
        "obj_actions": ["LOOK", "ENTER"],
        "obj_destination": "room1"
      }
    ]
    },
    "room1": {
      "name" : "room1",  // TODO add more descriptive room names later
      "description": "The room has an open doorway on one wall and a very small door on the opposite. A sign is posted next to the open doorway.",
      "objects": [{
        "obj_name": "small door",
        "obj_description": "The doorway is just big enough to struggle through",
        "obj_actions": ["LOOK", "ENTER"],
        "obj_destination": "passage"
      },
    {
      "obj_name": "open doorway",
      "obj_description": "The doorway is open with no door on its hinges. A sign next to it reads 'Welcome Covidiot'. You have been presented with the unique opportunity to look behind the veil of disinformation surrounding Covid-19 and the 'Pandemic'. Find your way out of the maze by solving puzzles and remaining a free-thinker. Your reward? A return to normalcy. Fail and you remain a sheep in 'the New Normal'. Avoid the evil Dr. Fauci, the hideous Dr. Tam, and other minions with power on their minds and deceit on their tongues. We have a small gift to help you get started. So put on your mask, wash your hands are prepare for <h1 style='color:red'; 'align-self:center'>Mandatory Vaccinator</h1>",
      "obj_actions": ["LOOK", "ENTER", "TAKE"],
      "obj_destination": "room2" //laboratory
    }]
    }
};