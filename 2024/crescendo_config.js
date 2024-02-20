var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter",
      "gsCol": "Scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023vabla",
      "required": "true"
    },
    { "name": "Match Level",
      "gsCol": "MatchLevel",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "po": "Playoffs<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "Match#",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "TeamNumber",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "AutoStartPos",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "gsCol": "A: LeaveStartingZone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "gsCol": "A:AmpScores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "gsCol": "A: SpeakerScores",
      "code": "ass",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "gsCol": "T:AmpScores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "gsCol": "T:SpeakerScores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Times Amplified",
      "gsCol": "TimesAmplified",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Pickup From",
      "gsCol": "Pickupfrom",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "b"
    }
  ],
  "endgame": [
    { "name": "Stage Timer",
      "gsCol": "StageTimer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "gsCol": "FinalStatus",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "s": "Onstage (Spotlit)<br>",
        "h": "Harmony<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Note in Trap",
      "gsCol": "Noteintrap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "gsCol": "DriverSkill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "a"
    },
    { "name": "Defense Rating",
      "gsCol": "DefenseRating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "a"
    },
    { "name": "Speed Rating",
      "gsCol": "SpeedRating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "gsCol": "Died?",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "gsCol": "Tippy?",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Notes (>2)",
      "gsCol": "Dropped?",
      "code": "dn",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "gsCol": "GoodPartner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
