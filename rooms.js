rooms = {
    "entrance": {
        "name": "Entranceway",
        "description": "A few rays of sunlight light the entrance staircase.",
        "objects": [{
                "obj_name": "Arched Doorway",
                "obj_description": "The ornately carved archway leads into a Passageway.",
                "obj_actions": ["LOOK", "ENTER"],
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
        }]
    }
};