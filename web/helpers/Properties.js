"use strict";

/**@author
 * Zoltan_Biro
 * Created on 2/19/2015.
 */

/**@class Constants
 Create some constant values.*/

var Constants = (function () {
    /**@lends Constants*/

    //https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?locale=en_US&dataById=true&api_key=b0e2d67c-bb60-45e1-bb25-90806016c163
    var fallbackChampList = { //champList.data[1]
        "type": "champion",
        "version": "5.5.2",
        "data": {
            "35": {"id": 35, "key": "Shaco", "name": "Shaco", "title": "the Demon Jester"},
            "36": {"id": 36, "key": "DrMundo", "name": "Dr. Mundo", "title": "the Madman of Zaun"},
            "33": {"id": 33, "key": "Rammus", "name": "Rammus", "title": "the Armordillo"},
            "34": {"id": 34, "key": "Anivia", "name": "Anivia", "title": "the Cryophoenix"},
            "157": {"id": 157, "key": "Yasuo", "name": "Yasuo", "title": "the Unforgiven"},
            "39": {"id": 39, "key": "Irelia", "name": "Irelia", "title": "the Will of the Blades"},
            "37": {"id": 37, "key": "Sona", "name": "Sona", "title": "Maven of the Strings"},
            "154": {"id": 154, "key": "Zac", "name": "Zac", "title": "the Secret Weapon"},
            "38": {"id": 38, "key": "Kassadin", "name": "Kassadin", "title": "the Void Walker"},
            "150": {"id": 150, "key": "Gnar", "name": "Gnar", "title": "the Missing Link"},
            "43": {"id": 43, "key": "Karma", "name": "Karma", "title": "the Enlightened One"},
            "42": {"id": 42, "key": "Corki", "name": "Corki", "title": "the Daring Bombardier"},
            "41": {"id": 41, "key": "Gangplank", "name": "Gangplank", "title": "the Saltwater Scourge"},
            "40": {"id": 40, "key": "Janna", "name": "Janna", "title": "the Storm's Fury"},
            "201": {"id": 201, "key": "Braum", "name": "Braum", "title": "the Heart of the Freljord"},
            "22": {"id": 22, "key": "Ashe", "name": "Ashe", "title": "the Frost Archer"},
            "23": {"id": 23, "key": "Tryndamere", "name": "Tryndamere", "title": "the Barbarian King"},
            "24": {"id": 24, "key": "Jax", "name": "Jax", "title": "Grandmaster at Arms"},
            "25": {"id": 25, "key": "Morgana", "name": "Morgana", "title": "Fallen Angel"},
            "26": {"id": 26, "key": "Zilean", "name": "Zilean", "title": "the Chronokeeper"},
            "27": {"id": 27, "key": "Singed", "name": "Singed", "title": "the Mad Chemist"},
            "28": {"id": 28, "key": "Evelynn", "name": "Evelynn", "title": "the Widowmaker"},
            "29": {"id": 29, "key": "Twitch", "name": "Twitch", "title": "the Plague Rat"},
            "161": {"id": 161, "key": "Velkoz", "name": "Vel'Koz", "title": "the Eye of the Void"},
            "3": {"id": 3, "key": "Galio", "name": "Galio", "title": "the Sentinel's Sorrow"},
            "2": {"id": 2, "key": "Olaf", "name": "Olaf", "title": "the Berserker"},
            "1": {"id": 1, "key": "Annie", "name": "Annie", "title": "the Dark Child"},
            "30": {"id": 30, "key": "Karthus", "name": "Karthus", "title": "the Deathsinger"},
            "7": {"id": 7, "key": "Leblanc", "name": "LeBlanc", "title": "the Deceiver"},
            "6": {"id": 6, "key": "Urgot", "name": "Urgot", "title": "the Headsman's Pride"},
            "5": {"id": 5, "key": "XinZhao", "name": "Xin Zhao", "title": "the Seneschal of Demacia"},
            "32": {"id": 32, "key": "Amumu", "name": "Amumu", "title": "the Sad Mummy"},
            "4": {"id": 4, "key": "TwistedFate", "name": "Twisted Fate", "title": "the Card Master"},
            "31": {"id": 31, "key": "Chogath", "name": "Cho'Gath", "title": "the Terror of the Void"},
            "9": {"id": 9, "key": "FiddleSticks", "name": "Fiddlesticks", "title": "the Harbinger of Doom"},
            "8": {"id": 8, "key": "Vladimir", "name": "Vladimir", "title": "the Crimson Reaper"},
            "19": {"id": 19, "key": "Warwick", "name": "Warwick", "title": "the Blood Hunter"},
            "17": {"id": 17, "key": "Teemo", "name": "Teemo", "title": "the Swift Scout"},
            "18": {"id": 18, "key": "Tristana", "name": "Tristana", "title": "the Yordle Gunner"},
            "15": {"id": 15, "key": "Sivir", "name": "Sivir", "title": "the Battle Mistress"},
            "16": {"id": 16, "key": "Soraka", "name": "Soraka", "title": "the Starchild"},
            "13": {"id": 13, "key": "Ryze", "name": "Ryze", "title": "the Rogue Mage"},
            "14": {"id": 14, "key": "Sion", "name": "Sion", "title": "The Undead Juggernaut"},
            "11": {"id": 11, "key": "MasterYi", "name": "Master Yi", "title": "the Wuju Bladesman"},
            "12": {"id": 12, "key": "Alistar", "name": "Alistar", "title": "the Minotaur"},
            "21": {"id": 21, "key": "MissFortune", "name": "Miss Fortune", "title": "the Bounty Hunter"},
            "20": {"id": 20, "key": "Nunu", "name": "Nunu", "title": "the Yeti Rider"},
            "107": {"id": 107, "key": "Rengar", "name": "Rengar", "title": "the Pridestalker"},
            "106": {"id": 106, "key": "Volibear", "name": "Volibear", "title": "the Thunder's Roar"},
            "105": {"id": 105, "key": "Fizz", "name": "Fizz", "title": "the Tidal Trickster"},
            "104": {"id": 104, "key": "Graves", "name": "Graves", "title": "the Outlaw"},
            "103": {"id": 103, "key": "Ahri", "name": "Ahri", "title": "the Nine-Tailed Fox"},
            "99": {"id": 99, "key": "Lux", "name": "Lux", "title": "the Lady of Luminosity"},
            "102": {"id": 102, "key": "Shyvana", "name": "Shyvana", "title": "the Half-Dragon"},
            "101": {"id": 101, "key": "Xerath", "name": "Xerath", "title": "the Magus Ascendant"},
            "412": {"id": 412, "key": "Thresh", "name": "Thresh", "title": "the Chain Warden"},
            "98": {"id": 98, "key": "Shen", "name": "Shen", "title": "Eye of Twilight"},
            "222": {"id": 222, "key": "Jinx", "name": "Jinx", "title": "the Loose Cannon"},
            "96": {"id": 96, "key": "KogMaw", "name": "Kog'Maw", "title": "the Mouth of the Abyss"},
            "92": {"id": 92, "key": "Riven", "name": "Riven", "title": "the Exile"},
            "91": {"id": 91, "key": "Talon", "name": "Talon", "title": "the Blade's Shadow"},
            "90": {"id": 90, "key": "Malzahar", "name": "Malzahar", "title": "the Prophet of the Void"},
            "429": {"id": 429, "key": "Kalista", "name": "Kalista", "title": "the Spear of Vengeance"},
            "10": {"id": 10, "key": "Kayle", "name": "Kayle", "title": "The Judicator"},
            "421": {"id": 421, "key": "RekSai", "name": "Rek'Sai", "title": "the Void Burrower"},
            "89": {"id": 89, "key": "Leona", "name": "Leona", "title": "the Radiant Dawn"},
            "79": {"id": 79, "key": "Gragas", "name": "Gragas", "title": "the Rabble Rouser"},
            "117": {"id": 117, "key": "Lulu", "name": "Lulu", "title": "the Fae Sorceress"},
            "114": {"id": 114, "key": "Fiora", "name": "Fiora", "title": "the Grand Duelist"},
            "78": {"id": 78, "key": "Poppy", "name": "Poppy", "title": "the Iron Ambassador"},
            "115": {"id": 115, "key": "Ziggs", "name": "Ziggs", "title": "the Hexplosives Expert"},
            "77": {"id": 77, "key": "Udyr", "name": "Udyr", "title": "the Spirit Walker"},
            "112": {"id": 112, "key": "Viktor", "name": "Viktor", "title": "the Machine Herald"},
            "113": {"id": 113, "key": "Sejuani", "name": "Sejuani", "title": "the Winter's Wrath"},
            "110": {"id": 110, "key": "Varus", "name": "Varus", "title": "the Arrow of Retribution"},
            "111": {"id": 111, "key": "Nautilus", "name": "Nautilus", "title": "the Titan of the Depths"},
            "119": {"id": 119, "key": "Draven", "name": "Draven", "title": "the Glorious Executioner"},
            "432": {"id": 432, "key": "Bard", "name": "Bard", "title": "the Wandering Caretaker"},
            "82": {"id": 82, "key": "Mordekaiser", "name": "Mordekaiser", "title": "the Master of Metal"},
            "83": {"id": 83, "key": "Yorick", "name": "Yorick", "title": "the Gravedigger"},
            "80": {"id": 80, "key": "Pantheon", "name": "Pantheon", "title": "the Artisan of War"},
            "81": {"id": 81, "key": "Ezreal", "name": "Ezreal", "title": "the Prodigal Explorer"},
            "86": {"id": 86, "key": "Garen", "name": "Garen", "title": "The Might of Demacia"},
            "84": {"id": 84, "key": "Akali", "name": "Akali", "title": "the Fist of Shadow"},
            "85": {"id": 85, "key": "Kennen", "name": "Kennen", "title": "the Heart of the Tempest"},
            "67": {"id": 67, "key": "Vayne", "name": "Vayne", "title": "the Night Hunter"},
            "126": {"id": 126, "key": "Jayce", "name": "Jayce", "title": "the Defender of Tomorrow"},
            "69": {"id": 69, "key": "Cassiopeia", "name": "Cassiopeia", "title": "the Serpent's Embrace"},
            "127": {"id": 127, "key": "Lissandra", "name": "Lissandra", "title": "the Ice Witch"},
            "68": {"id": 68, "key": "Rumble", "name": "Rumble", "title": "the Mechanized Menace"},
            "121": {"id": 121, "key": "Khazix", "name": "Kha'Zix", "title": "the Voidreaver"},
            "122": {"id": 122, "key": "Darius", "name": "Darius", "title": "the Hand of Noxus"},
            "120": {"id": 120, "key": "Hecarim", "name": "Hecarim", "title": "the Shadow of War"},
            "72": {"id": 72, "key": "Skarner", "name": "Skarner", "title": "the Crystal Vanguard"},
            "236": {"id": 236, "key": "Lucian", "name": "Lucian", "title": "the Purifier"},
            "74": {"id": 74, "key": "Heimerdinger", "name": "Heimerdinger", "title": "the Revered Inventor"},
            "238": {"id": 238, "key": "Zed", "name": "Zed", "title": "the Master of Shadows"},
            "75": {"id": 75, "key": "Nasus", "name": "Nasus", "title": "the Curator of the Sands"},
            "76": {"id": 76, "key": "Nidalee", "name": "Nidalee", "title": "the Bestial Huntress"},
            "134": {"id": 134, "key": "Syndra", "name": "Syndra", "title": "the Dark Sovereign"},
            "59": {"id": 59, "key": "JarvanIV", "name": "Jarvan IV", "title": "the Exemplar of Demacia"},
            "133": {"id": 133, "key": "Quinn", "name": "Quinn", "title": "Demacia's Wings"},
            "58": {"id": 58, "key": "Renekton", "name": "Renekton", "title": "the Butcher of the Sands"},
            "57": {"id": 57, "key": "Maokai", "name": "Maokai", "title": "the Twisted Treant"},
            "56": {"id": 56, "key": "Nocturne", "name": "Nocturne", "title": "the Eternal Nightmare"},
            "55": {"id": 55, "key": "Katarina", "name": "Katarina", "title": "the Sinister Blade"},
            "64": {"id": 64, "key": "LeeSin", "name": "Lee Sin", "title": "the Blind Monk"},
            "62": {"id": 62, "key": "MonkeyKing", "name": "Wukong", "title": "the Monkey King"},
            "268": {"id": 268, "key": "Azir", "name": "Azir", "title": "the Emperor of the Sands"},
            "63": {"id": 63, "key": "Brand", "name": "Brand", "title": "the Burning Vengeance"},
            "131": {"id": 131, "key": "Diana", "name": "Diana", "title": "Scorn of the Moon"},
            "60": {"id": 60, "key": "Elise", "name": "Elise", "title": "The Spider Queen"},
            "267": {"id": 267, "key": "Nami", "name": "Nami", "title": "the Tidecaller"},
            "266": {"id": 266, "key": "Aatrox", "name": "Aatrox", "title": "the Darkin Blade"},
            "61": {"id": 61, "key": "Orianna", "name": "Orianna", "title": "the Lady of Clockwork"},
            "143": {"id": 143, "key": "Zyra", "name": "Zyra", "title": "Rise of the Thorns"},
            "48": {"id": 48, "key": "Trundle", "name": "Trundle", "title": "the Troll King"},
            "45": {"id": 45, "key": "Veigar", "name": "Veigar", "title": "the Tiny Master of Evil"},
            "44": {"id": 44, "key": "Taric", "name": "Taric", "title": "the Gem Knight"},
            "51": {"id": 51, "key": "Caitlyn", "name": "Caitlyn", "title": "the Sheriff of Piltover"},
            "53": {"id": 53, "key": "Blitzcrank", "name": "Blitzcrank", "title": "the Great Steam Golem"},
            "54": {"id": 54, "key": "Malphite", "name": "Malphite", "title": "Shard of the Monolith"},
            "254": {"id": 254, "key": "Vi", "name": "Vi", "title": "the Piltover Enforcer"},
            "50": {"id": 50, "key": "Swain", "name": "Swain", "title": "the Master Tactician"}
        }
    };
    //https://global.api.pvp.net/api/lol/static-data/euw/v1.2/rune?locale=en_US&dataById=true&api_key=b0e2d67c-bb60-45e1-bb25-90806016c163
    var fallbackRuneList = {
        "type": "rune",
        "version": "5.9.1",
        "data": {
            "5235": {
                "id": 5235,
                "name": "Quintessence of Ability Power",
                "description": "+3.85 ability power",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5234": {
                "id": 5234,
                "name": "Quintessence of Scaling Cooldown Reduction",
                "description": "-0.21% cooldowns per level (-3.9% at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5233": {
                "id": 5233,
                "name": "Quintessence of Cooldown Reduction",
                "description": "-1.95% cooldowns",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5370": {
                "id": 5370,
                "name": "Greater Seal of Scaling Energy Regeneration",
                "description": "+0.064 Energy regen/5 sec per level (+1.15 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5230": {
                "id": 5230,
                "name": "Quintessence of Scaling Health Regeneration",
                "description": "+0.22 health regen / 5 sec. per level (+3.96 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "8016": {
                "id": 8016,
                "name": "Quintessence of the Speedy Specter",
                "description": "+1.39% movement speed",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5374": {
                "id": 5374,
                "name": "Greater Quintessence of Energy",
                "description": "+5.4 Energy",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "8015": {
                "id": 8015,
                "name": "Quintessence of Bountiful Treats",
                "description": "+24 health",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5373": {
                "id": 5373,
                "name": "Greater Quintessence of Energy Regeneration",
                "description": "+1.575 Energy regen/5 sec",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5372": {
                "id": 5372,
                "name": "Greater Glyph of Scaling Energy",
                "description": "+0.161 Energy/level (+2.89 at level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "8017": {
                "id": 8017,
                "name": "Quintessence of the Witches Brew",
                "description": "+4.56 ability power",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5371": {
                "id": 5371,
                "name": "Greater Glyph of Energy",
                "description": "+2.2 Energy",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "8012": {
                "id": 8012,
                "name": "Glyph of the Soaring Slalom",
                "description": "-0.75% cooldowns",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "8011": {
                "id": 8011,
                "name": "Lesser Glyph of the Challenger",
                "description": "+0.66 ability power",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "8014": {
                "id": 8014,
                "name": "Quintessence of the Piercing Screech",
                "description": "+1.85 magic penetration",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "8013": {
                "id": 8013,
                "name": "Quintessence of the Headless Horseman",
                "description": "+2.37 armor penetration",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5368": {
                "id": 5368,
                "name": "Greater Quintessence of Experience",
                "description": "+2% experience gained",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5369": {
                "id": 5369,
                "name": "Greater Seal of Energy Regeneration",
                "description": "+0.63 Energy regen/5 sec",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "8008": {
                "id": 8008,
                "name": "Mark of the Combatant",
                "description": "+2% critical damage",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "8009": {
                "id": 8009,
                "name": "Lesser Seal of the Medalist",
                "description": "+3.56 health",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5229": {
                "id": 5229,
                "name": "Quintessence of Health Regeneration",
                "description": "+2.1 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5227": {
                "id": 5227,
                "name": "Quintessence of Magic Resist",
                "description": "+3.11 magic resist",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5228": {
                "id": 5228,
                "name": "Quintessence of Scaling Magic Resist",
                "description": "+0.29 magic resist per level (+5.22 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5225": {
                "id": 5225,
                "name": "Quintessence of Armor",
                "description": "+3.32 armor",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5226": {
                "id": 5226,
                "name": "Quintessence of Scaling Armor",
                "description": "+0.29 armor per level (+5.22 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "8021": {
                "id": 8021,
                "name": "Greater Quintessence of Frosty Health",
                "description": "+26 health",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "8020": {
                "id": 8020,
                "name": "Greater Quintessence of the Deadly Wreath",
                "description": "+2.56 armor penetration",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5221": {
                "id": 5221,
                "name": "Quintessence of Armor Penetration",
                "description": "+1.99 armor penetration",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5224": {
                "id": 5224,
                "name": "Quintessence of Scaling Health",
                "description": "+2.1 health per level (+37.8 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5223": {
                "id": 5223,
                "name": "Quintessence of Health",
                "description": "+20 health",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5361": {
                "id": 5361,
                "name": "Greater Quintessence of Mana Regeneration",
                "description": "+1.25 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5360": {
                "id": 5360,
                "name": "Greater Quintessence of Scaling Mana",
                "description": "+4.17 mana per level (+75.06 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5363": {
                "id": 5363,
                "name": "Greater Quintessence of Magic Penetration",
                "description": "+2.01 magic penetration",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5362": {
                "id": 5362,
                "name": "Greater Quintessence of Scaling Mana Regeneration",
                "description": "+0.24 mana regen / 5 sec. per level (+4.32 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5365": {
                "id": 5365,
                "name": "Greater Quintessence of Movement Speed",
                "description": "+1.5% movement speed",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5367": {
                "id": 5367,
                "name": "Greater Quintessence of Gold",
                "description": "+1 gold / 10 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "8022": {
                "id": 8022,
                "name": "Greater Quintessence of Sugar Rush",
                "description": "+1.5% movement speed",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5366": {
                "id": 5366,
                "name": "Greater Quintessence of Revival",
                "description": "-5% time dead",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5357": {
                "id": 5357,
                "name": "Greater Quintessence of Ability Power",
                "description": "+4.95 ability power",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5358": {
                "id": 5358,
                "name": "Greater Quintessence of Scaling Ability Power",
                "description": "+0.43 ability power per level (+7.74 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5359": {
                "id": 5359,
                "name": "Greater Quintessence of Mana",
                "description": "+37.5 mana",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "8019": {
                "id": 8019,
                "name": "Greater Quintessence of the Piercing Present",
                "description": "+2.01 magic penetration",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5219": {
                "id": 5219,
                "name": "Quintessence of Critical Chance",
                "description": "+1.44% critical chance",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5214": {
                "id": 5214,
                "name": "Quintessence of Scaling Attack Damage",
                "description": "+0.19 attack damage per level (+3.42 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5215": {
                "id": 5215,
                "name": "Quintessence of Attack Speed",
                "description": "+3.51% attack speed",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5217": {
                "id": 5217,
                "name": "Quintessence of Critical Damage",
                "description": "+3.47% critical damage",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5253": {
                "id": 5253,
                "name": "Greater Mark of Armor Penetration",
                "description": "+1.28 armor penetration",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5251": {
                "id": 5251,
                "name": "Greater Mark of Critical Chance",
                "description": "+0.93% critical chance",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5257": {
                "id": 5257,
                "name": "Greater Mark of Armor",
                "description": "+0.91 armor",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5256": {
                "id": 5256,
                "name": "Greater Mark of Scaling Health",
                "description": "+0.54 health per level (+9.72 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5255": {
                "id": 5255,
                "name": "Greater Mark of Health",
                "description": "+3.47 health",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5356": {
                "id": 5356,
                "name": "Greater Quintessence of Scaling Cooldown Reduction",
                "description": "-0.28% cooldowns per level (-5% at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5355": {
                "id": 5355,
                "name": "Greater Quintessence of Cooldown Reduction",
                "description": "-2.5% cooldowns",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "8035": {
                "id": 8035,
                "name": "Greater Quintessence of Studio Rumble",
                "description": "+1.5% movement speed",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5352": {
                "id": 5352,
                "name": "Greater Quintessence of Scaling Health Regeneration",
                "description": "+0.28 health regen / 5 sec. per level (+5.04 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5351": {
                "id": 5351,
                "name": "Greater Quintessence of Health Regeneration",
                "description": "+2.7 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5350": {
                "id": 5350,
                "name": "Greater Quintessence of Scaling Magic Resist",
                "description": "+0.37 magic resist per level (+6.66 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5348": {
                "id": 5348,
                "name": "Greater Quintessence of Scaling Armor",
                "description": "+0.38 armor per level (+6.84 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5349": {
                "id": 5349,
                "name": "Greater Quintessence of Magic Resist",
                "description": "+4 magic resist",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5346": {
                "id": 5346,
                "name": "Greater Quintessence of Scaling Health",
                "description": "+2.7 health per level (+48.6 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5347": {
                "id": 5347,
                "name": "Greater Quintessence of Armor",
                "description": "+4.26 armor",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5249": {
                "id": 5249,
                "name": "Greater Mark of Critical Damage",
                "description": "+2.23% critical damage",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5247": {
                "id": 5247,
                "name": "Greater Mark of Attack Speed",
                "description": "+1.7% attack speed",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5240": {
                "id": 5240,
                "name": "Quintessence of Scaling Mana Regeneration",
                "description": "+0.19 mana regen / 5 sec. per level (+3.42 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5241": {
                "id": 5241,
                "name": "Quintessence of Magic Penetration",
                "description": "+1.56 magic penetration",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5243": {
                "id": 5243,
                "name": "Quintessence of Movement Speed",
                "description": "+1.17% movement speed",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5246": {
                "id": 5246,
                "name": "Greater Mark of Scaling Attack Damage",
                "description": "+0.13 attack damage per level (+2.43 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5245": {
                "id": 5245,
                "name": "Greater Mark of Attack Damage",
                "description": "+0.95 attack damage",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5343": {
                "id": 5343,
                "name": "Greater Quintessence of Armor Penetration",
                "description": "+2.56 armor penetration",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5345": {
                "id": 5345,
                "name": "Greater Quintessence of Health",
                "description": "+26 health",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5341": {
                "id": 5341,
                "name": "Greater Quintessence of Critical Chance",
                "description": "+1.86% critical chance",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5339": {
                "id": 5339,
                "name": "Greater Quintessence of Critical Damage",
                "description": "+4.46% critical damage",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5335": {
                "id": 5335,
                "name": "Greater Quintessence of Attack Damage",
                "description": "+2.25 attack damage",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5336": {
                "id": 5336,
                "name": "Greater Quintessence of Scaling Attack Damage",
                "description": "+0.25 attack damage per level (+4.5 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5337": {
                "id": 5337,
                "name": "Greater Quintessence of Attack Speed",
                "description": "+4.5% attack speed",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5236": {
                "id": 5236,
                "name": "Quintessence of Scaling Ability Power",
                "description": "+0.34 ability power per level (+6.12 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5237": {
                "id": 5237,
                "name": "Quintessence of Mana",
                "description": "+29.17 mana",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5238": {
                "id": 5238,
                "name": "Quintessence of Scaling Mana",
                "description": "+3.24 mana per level (+58.32 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5239": {
                "id": 5239,
                "name": "Quintessence of Mana Regeneration",
                "description": "+0.97 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5330": {
                "id": 5330,
                "name": "Greater Seal of Scaling Mana",
                "description": "+1.17 mana per level (+21.06 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5129": {
                "id": 5129,
                "name": "Mark of Critical Chance",
                "description": "+0.72% critical chance",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5127": {
                "id": 5127,
                "name": "Mark of Critical Damage",
                "description": "+1.74% critical damage",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5331": {
                "id": 5331,
                "name": "Greater Seal of Mana Regeneration",
                "description": "+0.41 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5400": {
                "id": 5400,
                "name": "Lesser Mark of Hybrid Penetration",
                "description": "+0.5 Armor Penetration / +0.34 Magic Penetration",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5332": {
                "id": 5332,
                "name": "Greater Seal of Scaling Mana Regeneration",
                "description": "+0.065 mana regen / 5 sec. per level (+1.17 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5327": {
                "id": 5327,
                "name": "Greater Seal of Ability Power",
                "description": "+0.59 ability power",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5131": {
                "id": 5131,
                "name": "Mark of Armor Penetration",
                "description": "+1 armor penetration",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5325": {
                "id": 5325,
                "name": "Greater Seal of Cooldown Reduction",
                "description": "-0.36% cooldowns",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5135": {
                "id": 5135,
                "name": "Mark of Armor",
                "description": "+0.71 armor",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5329": {
                "id": 5329,
                "name": "Greater Seal of Mana",
                "description": "+6.89 mana",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5134": {
                "id": 5134,
                "name": "Mark of Scaling Health",
                "description": "+0.42 health per level (+7.56 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5328": {
                "id": 5328,
                "name": "Greater Seal of Scaling Ability Power",
                "description": "+0.1 ability power per level (+1.8 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5133": {
                "id": 5133,
                "name": "Mark of Health",
                "description": "+2.7 health",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5115": {
                "id": 5115,
                "name": "Lesser Quintessence of Mana",
                "description": "+20.83 mana",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5116": {
                "id": 5116,
                "name": "Lesser Quintessence of Scaling Mana",
                "description": "+2.31 mana per level (+41.58 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5117": {
                "id": 5117,
                "name": "Lesser Quintessence of Mana Regeneration",
                "description": "+0.69 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5118": {
                "id": 5118,
                "name": "Lesser Quintessence of Scaling Mana Regeneration",
                "description": "+0.14 mana regen / 5 sec. per level (+2.52 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5410": {
                "id": 5410,
                "name": "Lesser Quintessence of Life Steal",
                "description": "+0.84% Life Steal",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5320": {
                "id": 5320,
                "name": "Greater Seal of Scaling Magic Resist",
                "description": "+0.1 magic resist per level (+1.8 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5119": {
                "id": 5119,
                "name": "Lesser Quintessence of Magic Penetration",
                "description": "+1.11 magic penetration",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5411": {
                "id": 5411,
                "name": "Quintessence of Life Steal",
                "description": "+1.17% Life Steal",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5321": {
                "id": 5321,
                "name": "Greater Seal of Health Regeneration",
                "description": "+0.56 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5322": {
                "id": 5322,
                "name": "Greater Seal of Scaling Health Regeneration",
                "description": "+0.11 health regen / 5 sec. per level (+1.98 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5409": {
                "id": 5409,
                "name": "Greater Quintessence of Spell Vamp",
                "description": "+2% Spellvamp.",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5404": {
                "id": 5404,
                "name": "Lesser Quintessence of Percent Health",
                "description": "+0.84% increased health.",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5403": {
                "id": 5403,
                "name": "Greater Seal of Gold",
                "description": "+0.25 gold / 10 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5402": {
                "id": 5402,
                "name": "Greater Mark of Hybrid Penetration",
                "description": "+0.9 Armor Penetration / +0.62 Magic Penetration",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5316": {
                "id": 5316,
                "name": "Greater Seal of Scaling Health",
                "description": "+1.33 health per level (+24 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5121": {
                "id": 5121,
                "name": "Lesser Quintessence of Movement Speed",
                "description": "+0.83% movement speed",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5401": {
                "id": 5401,
                "name": "Mark of Hybrid Penetration",
                "description": "+0.7 Armor Penetration / +0.48 Magic Penetration",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5315": {
                "id": 5315,
                "name": "Greater Seal of Health",
                "description": "+8 health",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5408": {
                "id": 5408,
                "name": "Quintessence of Spell Vamp",
                "description": "+1.56% Spellvamp.",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5318": {
                "id": 5318,
                "name": "Greater Seal of Scaling Armor",
                "description": "+0.16 armor per level (+3 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5123": {
                "id": 5123,
                "name": "Mark of Attack Damage",
                "description": "+0.74 attack damage",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5407": {
                "id": 5407,
                "name": "Lesser Quintessence of Spell Vamp",
                "description": "+1.12% Spellvamp.",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5317": {
                "id": 5317,
                "name": "Greater Seal of Armor",
                "description": "+1 armor",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5406": {
                "id": 5406,
                "name": "Greater Quintessence of Percent Health",
                "description": "+1.5% increased health.",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5125": {
                "id": 5125,
                "name": "Mark of Attack Speed",
                "description": "+1.32% attack speed",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5405": {
                "id": 5405,
                "name": "Quintessence of Percent Health",
                "description": "+1.17% increased health.",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5319": {
                "id": 5319,
                "name": "Greater Seal of Magic Resist",
                "description": "+0.74 magic resist",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5124": {
                "id": 5124,
                "name": "Mark of Scaling Attack Damage",
                "description": "+0.1 attack damage per level (+1.89 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5311": {
                "id": 5311,
                "name": "Greater Seal of Critical Chance",
                "description": "+0.42% critical chance",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5108": {
                "id": 5108,
                "name": "Lesser Quintessence of Scaling Health Regeneration",
                "description": "+0.16 health regen / 5 sec. per level (+2.88 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5106": {
                "id": 5106,
                "name": "Lesser Quintessence of Scaling Magic Resist",
                "description": "+0.21 magic resist per level (+3.78 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5107": {
                "id": 5107,
                "name": "Lesser Quintessence of Health Regeneration",
                "description": "+1.5 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5104": {
                "id": 5104,
                "name": "Lesser Quintessence of Scaling Armor",
                "description": "+0.21 armor per level (+3.78 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5105": {
                "id": 5105,
                "name": "Lesser Quintessence of Magic Resist",
                "description": "+2.22 magic resist",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5007": {
                "id": 5007,
                "name": "Lesser Mark of Critical Chance",
                "description": "+0.52% critical chance",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5005": {
                "id": 5005,
                "name": "Lesser Mark of Critical Damage",
                "description": "+1.24% critical damage",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5213": {
                "id": 5213,
                "name": "Quintessence of Attack Damage",
                "description": "+1.75 attack damage",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5210": {
                "id": 5210,
                "name": "Seal of Scaling Mana Regeneration",
                "description": "+0.05 mana regen / 5 sec. per level (+0.9 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5009": {
                "id": 5009,
                "name": "Lesser Mark of Armor Penetration",
                "description": "+0.72 armor penetration",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5206": {
                "id": 5206,
                "name": "Seal of Scaling Ability Power",
                "description": "+0.08 ability power per level (+1.44 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5011": {
                "id": 5011,
                "name": "Lesser Mark of Health",
                "description": "+1.93 health",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5205": {
                "id": 5205,
                "name": "Seal of Ability Power",
                "description": "+0.46 ability power",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5203": {
                "id": 5203,
                "name": "Seal of Cooldown Reduction",
                "description": "-0.29% cooldowns",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5015": {
                "id": 5015,
                "name": "Lesser Mark of Magic Resist",
                "description": "+0.43 magic resist",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5209": {
                "id": 5209,
                "name": "Seal of Mana Regeneration",
                "description": "+0.32 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5208": {
                "id": 5208,
                "name": "Seal of Scaling Mana",
                "description": "+0.91 mana per level (+16.38 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5013": {
                "id": 5013,
                "name": "Lesser Mark of Armor",
                "description": "+0.51 armor",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5207": {
                "id": 5207,
                "name": "Seal of Mana",
                "description": "+5.36 mana",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5012": {
                "id": 5012,
                "name": "Lesser Mark of Scaling Health",
                "description": "+0.3 health per level (+5.4 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5309": {
                "id": 5309,
                "name": "Greater Seal of Critical Damage",
                "description": "+0.78% critical damage",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5114": {
                "id": 5114,
                "name": "Lesser Quintessence of Scaling Ability Power",
                "description": "+0.24 ability power per level (+4.32 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5113": {
                "id": 5113,
                "name": "Lesser Quintessence of Ability Power",
                "description": "+2.75 ability power",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5307": {
                "id": 5307,
                "name": "Greater Seal of Attack Speed",
                "description": "+0.76% attack speed",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5112": {
                "id": 5112,
                "name": "Lesser Quintessence of Scaling Cooldown Reduction",
                "description": "-0.15% cooldowns per level (-2.8% at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5306": {
                "id": 5306,
                "name": "Greater Seal of Scaling Attack Damage",
                "description": "+0.06 attack damage per level (+1.09 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5111": {
                "id": 5111,
                "name": "Lesser Quintessence of Cooldown Reduction",
                "description": "-1.4% cooldowns",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5305": {
                "id": 5305,
                "name": "Greater Seal of Attack Damage",
                "description": "+0.43 attack damage",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5303": {
                "id": 5303,
                "name": "Greater Glyph of Magic Penetration",
                "description": "+0.63 magic penetration",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5302": {
                "id": 5302,
                "name": "Greater Glyph of Scaling Mana Regeneration",
                "description": "+0.06 mana regen / 5 sec. per level (+1.2 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5300": {
                "id": 5300,
                "name": "Greater Glyph of Scaling Mana",
                "description": "+1.42 mana per level (+25.56 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5301": {
                "id": 5301,
                "name": "Greater Glyph of Mana Regeneration",
                "description": "+0.33 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5200": {
                "id": 5200,
                "name": "Seal of Scaling Health Regeneration",
                "description": "+0.09 health regen / 5 sec. per level (+1.62 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5002": {
                "id": 5002,
                "name": "Lesser Mark of Scaling Attack Damage",
                "description": "+0.08 attack damage per level (+1.35 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5001": {
                "id": 5001,
                "name": "Lesser Mark of Attack Damage",
                "description": "+0.53 attack damage",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5003": {
                "id": 5003,
                "name": "Lesser Mark of Attack Speed",
                "description": "+0.94% attack speed",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5101": {
                "id": 5101,
                "name": "Lesser Quintessence of Health",
                "description": "+14.5 health",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5103": {
                "id": 5103,
                "name": "Lesser Quintessence of Armor",
                "description": "+2.37 armor",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5102": {
                "id": 5102,
                "name": "Lesser Quintessence of Scaling Health",
                "description": "+1.5 health per level (+27 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5168": {
                "id": 5168,
                "name": "Glyph of Scaling Magic Resist",
                "description": "+0.13 magic resist per level (+2.34 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5169": {
                "id": 5169,
                "name": "Glyph of Health Regeneration",
                "description": "+0.21 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5167": {
                "id": 5167,
                "name": "Glyph of Magic Resist",
                "description": "+1.04 magic resist",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5164": {
                "id": 5164,
                "name": "Glyph of Scaling Health",
                "description": "+0.42 health per level (+7.56 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5165": {
                "id": 5165,
                "name": "Glyph of Armor",
                "description": "+0.55 armor",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5163": {
                "id": 5163,
                "name": "Glyph of Health",
                "description": "+2.08 health",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5021": {
                "id": 5021,
                "name": "Lesser Mark of Cooldown Reduction",
                "description": "-0.11% cooldowns",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5025": {
                "id": 5025,
                "name": "Lesser Mark of Mana",
                "description": "+3.28 mana",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5026": {
                "id": 5026,
                "name": "Lesser Mark of Scaling Mana",
                "description": "+0.65 mana per level (+11.7 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5023": {
                "id": 5023,
                "name": "Lesser Mark of Ability Power",
                "description": "+0.33 ability power",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5024": {
                "id": 5024,
                "name": "Lesser Mark of Scaling Ability Power",
                "description": "+0.06 ability power per level (+1.08 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5016": {
                "id": 5016,
                "name": "Lesser Mark of Scaling Magic Resist",
                "description": "+0.04 magic resist per level (+0.72 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5159": {
                "id": 5159,
                "name": "Glyph of Critical Chance",
                "description": "+0.22% critical chance",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5177": {
                "id": 5177,
                "name": "Glyph of Mana",
                "description": "+8.75 mana",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5178": {
                "id": 5178,
                "name": "Glyph of Scaling Mana",
                "description": "+1.1 mana per level (+19.8 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5179": {
                "id": 5179,
                "name": "Glyph of Mana Regeneration",
                "description": "+0.26 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5173": {
                "id": 5173,
                "name": "Glyph of Cooldown Reduction",
                "description": "-0.67% cooldowns",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5174": {
                "id": 5174,
                "name": "Glyph of Scaling Cooldown Reduction",
                "description": "-0.07% cooldowns per level (-1.3% at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5175": {
                "id": 5175,
                "name": "Glyph of Ability Power",
                "description": "+0.92 ability power",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5176": {
                "id": 5176,
                "name": "Glyph of Scaling Ability Power",
                "description": "+0.13 ability power per level (+2.34 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5031": {
                "id": 5031,
                "name": "Lesser Glyph of Attack Damage",
                "description": "+0.16 attack damage",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5032": {
                "id": 5032,
                "name": "Lesser Glyph of Scaling Attack Damage",
                "description": "+0.02 attack damage per level (+0.36 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5033": {
                "id": 5033,
                "name": "Lesser Glyph of Attack Speed",
                "description": "+0.35% attack speed",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5035": {
                "id": 5035,
                "name": "Lesser Glyph of Critical Damage",
                "description": "+0.31% critical damage",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5037": {
                "id": 5037,
                "name": "Lesser Glyph of Critical Chance",
                "description": "+0.15% critical chance",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "10001": {
                "id": 10001,
                "name": "Razer Mark of Precision",
                "description": "+2.23% critical damage",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5027": {
                "id": 5027,
                "name": "Lesser Mark of Mana Regeneration",
                "description": "+0.15 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "10002": {
                "id": 10002,
                "name": "Razer Quintessence of Speed",
                "description": "+1.5% movement speed",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5029": {
                "id": 5029,
                "name": "Lesser Mark of Magic Penetration",
                "description": "+0.49 magic penetration",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5418": {
                "id": 5418,
                "name": "Greater Quintessence of Hybrid Penetration",
                "description": "+1.79 Armor Penetration / +1.4 Magic Penetration",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5143": {
                "id": 5143,
                "name": "Mark of Cooldown Reduction",
                "description": "-0.16% cooldowns",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5416": {
                "id": 5416,
                "name": "Lesser Quintessence of Hybrid Penetration",
                "description": "+0.99 Armor Penetration / +0.78 Magic Penetration",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5417": {
                "id": 5417,
                "name": "Quintessence of Hybrid Penetration",
                "description": "+1.39 Armor Penetration / +1.09 Magic Penetration",
                "rune": {"isRune": true, "tier": "2", "type": "black"}
            },
            "5414": {
                "id": 5414,
                "name": "Seal of Percent Health",
                "description": "+0.39% Health.",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5146": {
                "id": 5146,
                "name": "Mark of Scaling Ability Power",
                "description": "+0.08 ability power per level (+1.44 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5415": {
                "id": 5415,
                "name": "Greater Seal of Percent Health",
                "description": "+0.5% Health.",
                "rune": {"isRune": true, "tier": "3", "type": "yellow"}
            },
            "5147": {
                "id": 5147,
                "name": "Mark of Mana",
                "description": "+4.59 mana",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5412": {
                "id": 5412,
                "name": "Greater Quintessence of Life Steal",
                "description": "+1.5% Life Steal.",
                "rune": {"isRune": true, "tier": "3", "type": "black"}
            },
            "5413": {
                "id": 5413,
                "name": "Lesser Seal of Percent Health",
                "description": "+0.28% Health.",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5145": {
                "id": 5145,
                "name": "Mark of Ability Power",
                "description": "+0.46 ability power",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5047": {
                "id": 5047,
                "name": "Lesser Glyph of Health Regeneration",
                "description": "+0.15 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5045": {
                "id": 5045,
                "name": "Lesser Glyph of Magic Resist",
                "description": "+0.74 magic resist",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5046": {
                "id": 5046,
                "name": "Lesser Glyph of Scaling Magic Resist",
                "description": "+0.09 magic resist per level (+1.68 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5043": {
                "id": 5043,
                "name": "Lesser Glyph of Armor",
                "description": "+0.39 armor",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5041": {
                "id": 5041,
                "name": "Lesser Glyph of Health",
                "description": "+1.49 health",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5042": {
                "id": 5042,
                "name": "Lesser Glyph of Scaling Health",
                "description": "+0.3 health per level (+5.4 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5138": {
                "id": 5138,
                "name": "Mark of Scaling Magic Resist",
                "description": "+0.06 magic resist per level (+1.08 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5137": {
                "id": 5137,
                "name": "Mark of Magic Resist",
                "description": "+0.6 magic resist",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5151": {
                "id": 5151,
                "name": "Mark of Magic Penetration",
                "description": "+0.68 magic penetration",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5153": {
                "id": 5153,
                "name": "Glyph of Attack Damage",
                "description": "+0.22 attack damage",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5154": {
                "id": 5154,
                "name": "Glyph of Scaling Attack Damage",
                "description": "+0.03 attack damage per level (+0.57 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5051": {
                "id": 5051,
                "name": "Lesser Glyph of Cooldown Reduction",
                "description": "-0.47% cooldowns",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5155": {
                "id": 5155,
                "name": "Glyph of Attack Speed",
                "description": "+0.5% attack speed",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5157": {
                "id": 5157,
                "name": "Glyph of Critical Damage",
                "description": "+0.43% critical damage",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5056": {
                "id": 5056,
                "name": "Lesser Glyph of Scaling Mana",
                "description": "+0.79 mana per level (+14.22 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5057": {
                "id": 5057,
                "name": "Lesser Glyph of Mana Regeneration",
                "description": "+0.19 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5058": {
                "id": 5058,
                "name": "Lesser Glyph of Scaling Mana Regeneration",
                "description": "+0.04 mana regen / 5 sec. per level (+0.67 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5059": {
                "id": 5059,
                "name": "Lesser Glyph of Magic Penetration",
                "description": "+0.35 magic penetration",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5052": {
                "id": 5052,
                "name": "Lesser Glyph of Scaling Cooldown Reduction",
                "description": "-0.05% cooldowns per level (-0.93% at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5053": {
                "id": 5053,
                "name": "Lesser Glyph of Ability Power",
                "description": "+0.66 ability power",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5054": {
                "id": 5054,
                "name": "Lesser Glyph of Scaling Ability Power",
                "description": "+0.1 ability power per level (+1.8 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5055": {
                "id": 5055,
                "name": "Lesser Glyph of Mana",
                "description": "+6.25 mana",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "5149": {
                "id": 5149,
                "name": "Mark of Mana Regeneration",
                "description": "+0.2 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5148": {
                "id": 5148,
                "name": "Mark of Scaling Mana",
                "description": "+0.91 mana per level (+16.38 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5065": {
                "id": 5065,
                "name": "Lesser Seal of Critical Damage",
                "description": "+0.43% critical damage",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5259": {
                "id": 5259,
                "name": "Greater Mark of Magic Resist",
                "description": "+0.77 magic resist",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5063": {
                "id": 5063,
                "name": "Lesser Seal of Attack Speed",
                "description": "+0.42% attack speed",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5067": {
                "id": 5067,
                "name": "Lesser Seal of Critical Chance",
                "description": "+0.23% critical chance",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5062": {
                "id": 5062,
                "name": "Lesser Seal of Scaling Attack Damage",
                "description": "+0.03 attack damage per level (+0.61 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5061": {
                "id": 5061,
                "name": "Lesser Seal of Attack Damage",
                "description": "+0.24 attack damage",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5260": {
                "id": 5260,
                "name": "Greater Mark of Scaling Magic Resist",
                "description": "+0.07 magic resist per level (+1.26 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5267": {
                "id": 5267,
                "name": "Greater Mark of Ability Power",
                "description": "+0.59 ability power",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5268": {
                "id": 5268,
                "name": "Greater Mark of Scaling Ability Power",
                "description": "+0.1 ability power per level (+1.8 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5265": {
                "id": 5265,
                "name": "Greater Mark of Cooldown Reduction",
                "description": "-0.2% cooldowns",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5075": {
                "id": 5075,
                "name": "Lesser Seal of Magic Resist",
                "description": "+0.41 magic resist",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5269": {
                "id": 5269,
                "name": "Greater Mark of Mana",
                "description": "+5.91 mana",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5074": {
                "id": 5074,
                "name": "Lesser Seal of Scaling Armor",
                "description": "+0.09 armor per level (+1.68 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5077": {
                "id": 5077,
                "name": "Lesser Seal of Health Regeneration",
                "description": "+0.31 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5076": {
                "id": 5076,
                "name": "Lesser Seal of Scaling Magic Resist",
                "description": "+0.05 magic resist per level (+0.9 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5078": {
                "id": 5078,
                "name": "Lesser Seal of Scaling Health Regeneration",
                "description": "+0.06 health regen / 5 sec. per level (+1.08 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5071": {
                "id": 5071,
                "name": "Lesser Seal of Health",
                "description": "+4.48 health",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5073": {
                "id": 5073,
                "name": "Lesser Seal of Armor",
                "description": "+0.56 armor",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5072": {
                "id": 5072,
                "name": "Lesser Seal of Scaling Health",
                "description": "+0.75 health per level (+13.44 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5270": {
                "id": 5270,
                "name": "Greater Mark of Scaling Mana",
                "description": "+1.17 mana per level (+21.06 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5271": {
                "id": 5271,
                "name": "Greater Mark of Mana Regeneration",
                "description": "+0.26 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5273": {
                "id": 5273,
                "name": "Greater Mark of Magic Penetration",
                "description": "+0.87 magic penetration",
                "rune": {"isRune": true, "tier": "3", "type": "red"}
            },
            "5275": {
                "id": 5275,
                "name": "Greater Glyph of Attack Damage",
                "description": "+0.28 attack damage",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5276": {
                "id": 5276,
                "name": "Greater Glyph of Scaling Attack Damage",
                "description": "+0.04 attack damage per level (+0.73 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5277": {
                "id": 5277,
                "name": "Greater Glyph of Attack Speed",
                "description": "+0.64% attack speed",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5279": {
                "id": 5279,
                "name": "Greater Glyph of Critical Damage",
                "description": "+0.56% critical damage",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5183": {
                "id": 5183,
                "name": "Seal of Attack Damage",
                "description": "+0.33 attack damage",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5088": {
                "id": 5088,
                "name": "Lesser Seal of Scaling Mana Regeneration",
                "description": "+0.036 mana regen / 5 sec. per level (+0.65 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5087": {
                "id": 5087,
                "name": "Lesser Seal of Mana Regeneration",
                "description": "+0.23 mana regen / 5 sec.",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5181": {
                "id": 5181,
                "name": "Glyph of Magic Penetration",
                "description": "+0.49 magic penetration",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5086": {
                "id": 5086,
                "name": "Lesser Seal of Scaling Mana",
                "description": "+0.65 mana per level (+11.7 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5180": {
                "id": 5180,
                "name": "Glyph of Scaling Mana Regeneration",
                "description": "+0.05 mana regen / 5 sec. per level (+0.94 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "5085": {
                "id": 5085,
                "name": "Lesser Seal of Mana",
                "description": "+3.83 mana",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5187": {
                "id": 5187,
                "name": "Seal of Critical Damage",
                "description": "+0.61% critical damage",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5084": {
                "id": 5084,
                "name": "Lesser Seal of Scaling Ability Power",
                "description": "+0.06 ability power per level (+1.08 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5083": {
                "id": 5083,
                "name": "Lesser Seal of Ability Power",
                "description": "+0.33 ability power",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5185": {
                "id": 5185,
                "name": "Seal of Attack Speed",
                "description": "+0.59% attack speed",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5184": {
                "id": 5184,
                "name": "Seal of Scaling Attack Damage",
                "description": "+0.05 attack damage per level (+0.85 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5081": {
                "id": 5081,
                "name": "Lesser Seal of Cooldown Reduction",
                "description": "-0.2% cooldowns",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "5189": {
                "id": 5189,
                "name": "Seal of Critical Chance",
                "description": "+0.32% critical chance",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5281": {
                "id": 5281,
                "name": "Greater Glyph of Critical Chance",
                "description": "+0.28% critical chance",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5289": {
                "id": 5289,
                "name": "Greater Glyph of Magic Resist",
                "description": "+1.34 magic resist",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5287": {
                "id": 5287,
                "name": "Greater Glyph of Armor",
                "description": "+0.7 armor",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5285": {
                "id": 5285,
                "name": "Greater Glyph of Health",
                "description": "+2.67 health",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5286": {
                "id": 5286,
                "name": "Greater Glyph of Scaling Health",
                "description": "+0.54 health per level (+9.72 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5097": {
                "id": 5097,
                "name": "Lesser Quintessence of Critical Chance",
                "description": "+1.03% critical chance",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5194": {
                "id": 5194,
                "name": "Seal of Scaling Health",
                "description": "+1.04 health per level (+18.72 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5099": {
                "id": 5099,
                "name": "Lesser Quintessence of Armor Penetration",
                "description": "+1.42 armor penetration",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5193": {
                "id": 5193,
                "name": "Seal of Health",
                "description": "+6.24 health",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5196": {
                "id": 5196,
                "name": "Seal of Scaling Armor",
                "description": "+0.13 armor per level (+2.34 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5093": {
                "id": 5093,
                "name": "Lesser Quintessence of Attack Speed",
                "description": "+2.52% attack speed",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5195": {
                "id": 5195,
                "name": "Seal of Armor",
                "description": "+0.78 armor",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5092": {
                "id": 5092,
                "name": "Lesser Quintessence of Scaling Attack Damage",
                "description": "+0.14 attack damage per level (+2.52 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5198": {
                "id": 5198,
                "name": "Seal of Scaling Magic Resist",
                "description": "+0.08 magic resist per level (+1.44 at champion level 18)",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5095": {
                "id": 5095,
                "name": "Lesser Quintessence of Critical Damage",
                "description": "+2.48% critical damage",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5197": {
                "id": 5197,
                "name": "Seal of Magic Resist",
                "description": "+0.58 magic resist",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5199": {
                "id": 5199,
                "name": "Seal of Health Regeneration",
                "description": "+0.43 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "2", "type": "yellow"}
            },
            "5091": {
                "id": 5091,
                "name": "Lesser Quintessence of Attack Damage",
                "description": "+1.25 attack damage",
                "rune": {"isRune": true, "tier": "1", "type": "black"}
            },
            "5290": {
                "id": 5290,
                "name": "Greater Glyph of Scaling Magic Resist",
                "description": "+0.16 magic resist per level (+3 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "8001": {
                "id": 8001,
                "name": "Mark of the Crippling Candy Cane",
                "description": "+2% critical damage",
                "rune": {"isRune": true, "tier": "2", "type": "red"}
            },
            "5291": {
                "id": 5291,
                "name": "Greater Glyph of Health Regeneration",
                "description": "+0.27 health regen / 5 sec.",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "8002": {
                "id": 8002,
                "name": "Lesser Mark of the Yuletide Tannenbaum ",
                "description": "+0.62% critical chance",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "8003": {
                "id": 8003,
                "name": "Glyph of the Special Stocking",
                "description": "-0.75% cooldowns",
                "rune": {"isRune": true, "tier": "2", "type": "blue"}
            },
            "8005": {
                "id": 8005,
                "name": "Lesser Glyph of the Gracious Gift",
                "description": "+0.12 ability power per level (+2.16 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "blue"}
            },
            "8006": {
                "id": 8006,
                "name": "Lesser Seal of the Stout Snowman",
                "description": "+0.72 health per level (+12.96 at champion level 18)",
                "rune": {"isRune": true, "tier": "1", "type": "yellow"}
            },
            "8007": {
                "id": 8007,
                "name": "Lesser Mark of Alpine Attack Speed",
                "description": "+1.13% attack speed",
                "rune": {"isRune": true, "tier": "1", "type": "red"}
            },
            "5298": {
                "id": 5298,
                "name": "Greater Glyph of Scaling Ability Power",
                "description": "+0.17 ability power per level (+3.06 at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5299": {
                "id": 5299,
                "name": "Greater Glyph of Mana",
                "description": "+11.25 mana",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5295": {
                "id": 5295,
                "name": "Greater Glyph of Cooldown Reduction",
                "description": "-0.83% cooldowns",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5296": {
                "id": 5296,
                "name": "Greater Glyph of Scaling Cooldown Reduction",
                "description": "-0.09% cooldowns per level (-1.67% at champion level 18)",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            },
            "5297": {
                "id": 5297,
                "name": "Greater Glyph of Ability Power",
                "description": "+1.19 ability power",
                "rune": {"isRune": true, "tier": "3", "type": "blue"}
            }
        }
    };
    //https://global.api.pvp.net/api/lol/static-data/euw/v1.2/mastery?locale=en_US&masteryListData=masteryTree&api_key=b0e2d67c-bb60-45e1-bb25-90806016c163
    var fallbackMasteryList = {
        "type": "mastery",
        "version": "5.9.1",
        "data": {
            "4353": {
                "id": 4353,
                "name": "Intelligence",
                "description": ["+2% Cooldown Reduction and reduces the cooldown of Activated Items by 4%", "+3.5% Cooldown Reduction and reduces the cooldown of Activated Items by 7%", "+5% Cooldown Reduction and reduces the cooldown of Activated Items by 10%"],
                "masteryTree": "Utility"
            },
            "4352": {
                "id": 4352,
                "name": "Bandit",
                "description": ["Melee - Grants +15 Gold on champion kill or assist<br>Ranged - Grants +3 Gold each time an enemy champion is attacked. This cannot trigger on the same champion more than once every 5 seconds"],
                "masteryTree": "Utility"
            },
            "4253": {
                "id": 4253,
                "name": "Runic Blessing",
                "description": ["Start the game with a 50 Health shield. This shield regenerates each time after respawning"],
                "masteryTree": "Defense"
            },
            "4113": {
                "id": 4113,
                "name": "Sorcery",
                "description": ["+1.25% Cooldown Reduction", "+2.5% Cooldown Reduction", "+3.75% Cooldown Reduction", "+5% Cooldown Reduction"],
                "masteryTree": "Offense"
            },
            "4251": {
                "id": 4251,
                "name": "Second Wind",
                "description": ["Increases self-healing, Health Regen, Lifesteal, and Spellvamp by 10% when below 25% Health"],
                "masteryTree": "Defense"
            },
            "4112": {
                "id": 4112,
                "name": "Fury",
                "description": ["+1.25% Attack Speed", "+2.5% Attack Speed", "+3.75% Attack Speed", "+5% Attack Speed"],
                "masteryTree": "Offense"
            },
            "4252": {
                "id": 4252,
                "name": "Legendary Guardian",
                "description": ["+1 Armor and 0.5 Magic Resist for each nearby enemy champion", "+2 Armor and 1 Magic Resist for each nearby enemy champion", "+3 Armor and 1.5 Magic Resist for each nearby enemy champion", "+4 Armor and 2 Magic Resist for each nearby enemy champion"],
                "masteryTree": "Defense"
            },
            "4111": {
                "id": 4111,
                "name": "Double-Edged Sword",
                "description": ["Melee - Deal an additional 2% damage and receive an additional 1% damage<br>Ranged - Deal an additional 1.5% damage and receive an additional 1.5% damage"],
                "masteryTree": "Offense"
            },
            "4152": {
                "id": 4152,
                "name": "Devastating Strikes",
                "description": ["+2% Armor and Magic Penetration", "+4% Armor and Magic Penetration", "+6% Armor and Magic Penetration"],
                "masteryTree": "Offense"
            },
            "4212": {
                "id": 4212,
                "name": "Recovery",
                "description": ["+1 Health per 5 seconds", "+2 Health per 5 seconds"],
                "masteryTree": "Defense"
            },
            "4211": {
                "id": 4211,
                "name": "Block",
                "description": ["Reduces incoming damage from champion basic attacks by 1", "Reduces incoming damage from champion basic attacks by 2"],
                "masteryTree": "Defense"
            },
            "4151": {
                "id": 4151,
                "name": "Frenzy",
                "description": ["Critical hits grant +5% Attack Speed for 3 seconds (stacks up to 3 times)"],
                "masteryTree": "Offense"
            },
            "4154": {
                "id": 4154,
                "name": "Arcane Blade",
                "description": ["Basic Attacks also deal bonus magic damage equal to 5% of Ability Power"],
                "masteryTree": "Offense"
            },
            "4311": {
                "id": 4311,
                "name": "Phasewalker",
                "description": ["Reduces the casting time of Recall by 1 second<br><br>Dominion - Reduces the casting time of Enhanced Recall by 0.5 seconds"],
                "masteryTree": "Utility"
            },
            "4314": {
                "id": 4314,
                "name": "Scout",
                "description": ["Increases the cast range of trinket items by 15%"],
                "masteryTree": "Utility"
            },
            "4362": {
                "id": 4362,
                "name": "Wanderer",
                "description": ["+5% Movement Speed out of combat"],
                "masteryTree": "Utility"
            },
            "4313": {
                "id": 4313,
                "name": "Meditation",
                "description": ["+1 Mana Regen per 5 seconds", "+2 Mana Regen per 5 seconds", "+3 Mana Regen per 5 seconds"],
                "masteryTree": "Utility"
            },
            "4312": {
                "id": 4312,
                "name": "Fleet of Foot",
                "description": ["+0.5% Movement Speed", "+1% Movement Speed", "+1.5% Movement Speed"],
                "masteryTree": "Utility"
            },
            "4213": {
                "id": 4213,
                "name": "Enchanted Armor",
                "description": ["Increases bonus Armor and Magic Resist by 2.5%", "Increases bonus Armor and Magic Resist by 5%"],
                "masteryTree": "Defense"
            },
            "4214": {
                "id": 4214,
                "name": "Tough Skin",
                "description": ["Reduces damage taken from neutral monsters by 1<br><br>This does not affect lane minions", "Reduces damage taken from neutral monsters by 2<br><br>This does not affect lane minions"],
                "masteryTree": "Defense"
            },
            "4114": {
                "id": 4114,
                "name": "Butcher",
                "description": ["Basic attacks and single target spells deal an additional 2 damage to minions and monsters<br><br>This does not trigger off of area of effect damage or damage over time effects"],
                "masteryTree": "Offense"
            },
            "4122": {
                "id": 4122,
                "name": "Brute Force",
                "description": ["+4 Attack Damage at level 18 (+0.22 Attack Damage per level)", "+7 Attack Damage at level 18 (+0.39 Attack Damage per level)", "+10 Attack Damage at level 18 (+0.55 Attack Damage per level)"],
                "masteryTree": "Offense"
            },
            "4121": {
                "id": 4121,
                "name": "Expose Weakness",
                "description": ["Damaging an enemy with a spell increases allied champions' damage to that enemy by 1% for the next 3 seconds"],
                "masteryTree": "Offense"
            },
            "4124": {
                "id": 4124,
                "name": "Feast",
                "description": ["Killing a unit restores 3 Health and 1 Mana"],
                "masteryTree": "Offense"
            },
            "4262": {
                "id": 4262,
                "name": "Tenacious",
                "description": ["Reduces the duration of crowd control effects by 15%"],
                "masteryTree": "Defense"
            },
            "4123": {
                "id": 4123,
                "name": "Mental Force",
                "description": ["+6 Ability Power at level 18 (+0.33 Ability Power per level)", "+11 Ability Power at level 18 (+0.61 Ability Power per level)", "+16 Ability Power at level 18 (+0.89 Ability Power per level)"],
                "masteryTree": "Offense"
            },
            "4221": {
                "id": 4221,
                "name": "Unyielding",
                "description": ["Melee - Reduces all incoming damage from champions by 2<br>Ranged - Reduces all incoming damage from champions by 1"],
                "masteryTree": "Defense"
            },
            "4162": {"id": 4162, "name": "Havoc", "description": ["+3% increased damage"], "masteryTree": "Offense"},
            "4222": {
                "id": 4222,
                "name": "Veteran's Scars",
                "description": ["+12 Health", "+24 Health", "+36 Health"],
                "masteryTree": "Defense"
            },
            "4322": {
                "id": 4322,
                "name": "Summoner's Insight",
                "description": ["Reduces the cooldown of Summoner Spells by 4%", "Reduces the cooldown of Summoner Spells by 7%", "Reduces the cooldown of Summoner Spells by 10%"],
                "masteryTree": "Utility"
            },
            "4333": {
                "id": 4333,
                "name": "Vampirism",
                "description": ["+1% Lifesteal and Spellvamp", "+2% Lifesteal and Spellvamp", "+3% Lifesteal and Spellvamp"],
                "masteryTree": "Utility"
            },
            "4332": {
                "id": 4332,
                "name": "Runic Affinity",
                "description": ["Increases the duration of shrine, relic, quest, and neutral monster buffs by 20%"],
                "masteryTree": "Utility"
            },
            "4224": {
                "id": 4224,
                "name": "Bladed Armor",
                "description": ["Taking Basic Attack Damage from neutral monsters cause them to bleed, dealing physical damage equal to 1% of their current Health each second<br>This does not work against lane minions"],
                "masteryTree": "Defense"
            },
            "4331": {
                "id": 4331,
                "name": "Greed",
                "description": ["+0.5 Gold every 10 seconds", "+1 Gold every 10 seconds", "+1.5 Gold every 10 seconds"],
                "masteryTree": "Utility"
            },
            "4134": {
                "id": 4134,
                "name": "Executioner",
                "description": ["Increases damage dealt to champions below 20% Health by 5%", "Increases damage dealt to champions below 35% Health by 5%", "Increases damage dealt to champions below 50% Health by 5%"],
                "masteryTree": "Offense"
            },
            "4132": {
                "id": 4132,
                "name": "Martial Mastery",
                "description": ["+4 Attack Damage"],
                "masteryTree": "Offense"
            },
            "4133": {
                "id": 4133,
                "name": "Arcane Mastery",
                "description": ["+6 Ability Power"],
                "masteryTree": "Offense"
            },
            "4234": {
                "id": 4234,
                "name": "Resistance",
                "description": ["+2 Magic Resist", "+3.5 Magic Resist", "+5 Magic Resist"],
                "masteryTree": "Defense"
            },
            "4131": {
                "id": 4131,
                "name": "Spell Weaving",
                "description": ["Damaging an enemy champion with a Basic Attack increases Spell Damage by 1%, stacking up to 3 times (max 3% damage increase)"],
                "masteryTree": "Offense"
            },
            "4233": {
                "id": 4233,
                "name": "Hardiness",
                "description": ["+2 Armor", "+3.5 Armor", "+5 Armor"],
                "masteryTree": "Defense"
            },
            "4232": {"id": 4232, "name": "Juggernaut", "description": ["+3% Maximum Health"], "masteryTree": "Defense"},
            "4323": {
                "id": 4323,
                "name": "Strength of Spirit",
                "description": ["+1 Health Regen per 5 seconds for every 300 maximum Mana"],
                "masteryTree": "Utility"
            },
            "4231": {
                "id": 4231,
                "name": "Oppression",
                "description": ["Reduces damage taken by 3% from enemies that have impaired movement (slows, snares, taunts, stuns, etc.)"],
                "masteryTree": "Defense"
            },
            "4324": {
                "id": 4324,
                "name": "Alchemist",
                "description": ["Increases the duration of potions and elixirs by 10%"],
                "masteryTree": "Utility"
            },
            "4342": {"id": 4342, "name": "Wealth", "description": ["+40 Starting Gold"], "masteryTree": "Utility"},
            "4341": {
                "id": 4341,
                "name": "Scavenger",
                "description": ["+1 Gold each time an ally kills a nearby lane minion"],
                "masteryTree": "Utility"
            },
            "4344": {
                "id": 4344,
                "name": "Inspiration",
                "description": ["+5 Experience every 10 seconds while near a higher level allied champion", "+10 Experience every 10 seconds while near a higher level allied champion"],
                "masteryTree": "Utility"
            },
            "4343": {
                "id": 4343,
                "name": "Expanded Mind",
                "description": ["+2% increased maximum Mana", "+3.5% increased maximum Mana", "+5% increased maximum Mana"],
                "masteryTree": "Utility"
            },
            "4143": {
                "id": 4143,
                "name": "Archmage",
                "description": ["Increases Ability Power by 2%", "Increases Ability Power by 3.5%", "Increases Ability Power by 5%"],
                "masteryTree": "Offense"
            },
            "4144": {
                "id": 4144,
                "name": "Dangerous Game",
                "description": ["Champion kills and assists restore 5% missing Health and Mana"],
                "masteryTree": "Offense"
            },
            "4241": {
                "id": 4241,
                "name": "Perseverance ",
                "description": ["Regenerates 0.35% of missing Health every 5 seconds", "Regenerates 0.675% of missing Health every 5 seconds", "Regenerates 1% of missing Health every 5 seconds"],
                "masteryTree": "Defense"
            },
            "4334": {
                "id": 4334,
                "name": "Culinary Master",
                "description": ["Health potions are upgraded into Biscuits that restore an additional 20 Health and 10 Mana instantly upon consumption"],
                "masteryTree": "Utility"
            },
            "4243": {
                "id": 4243,
                "name": "Reinforced Armor",
                "description": ["Reduces the total damage taken from critical strikes by 10%"],
                "masteryTree": "Defense"
            },
            "4242": {
                "id": 4242,
                "name": "Swiftness",
                "description": ["Reduces the effectiveness of slows by 10%"],
                "masteryTree": "Defense"
            },
            "4141": {
                "id": 4141,
                "name": "Blade Weaving",
                "description": ["Damaging an enemy champion with a spell increases Basic Attack Damage by 1%, stacking up to 3 times (max 3% damage increase)"],
                "masteryTree": "Offense"
            },
            "4142": {
                "id": 4142,
                "name": "Warlord",
                "description": ["Increases bonus Attack Damage by 2%", "Increases Bonus Attack Damage by 3.5%", "Increases Bonus Attack Damage by 5%"],
                "masteryTree": "Offense"
            },
            "4244": {
                "id": 4244,
                "name": "Evasive",
                "description": ["Reduces damage taken by 4% from Area of Effect magic damage"],
                "masteryTree": "Defense"
            }
        }
    };

    var nullStat = '{"summonerId":0,"modifyDate":0,"champions":[{"id":0,"stats":{"totalSessionsPlayed":0,"totalSessionsLost":0,"totalSessionsWon":0,"totalChampionKills":0,"totalDamageDealt":0,"totalDamageTaken":0,"mostChampionKillsPerSession":0,"totalMinionKills":0,"totalDoubleKills":0,"totalTripleKills":0,"totalQuadraKills":0,"totalPentaKills":0,"totalUnrealKills":0,"totalDeathsPerSession":0,"totalGoldEarned":0,"mostSpellsCast":0,"totalTurretsKilled":0,"totalPhysicalDamageDealt":0,"totalMagicDamageDealt":0,"totalFirstBlood":0,"totalAssists":0,"maxChampionsKilled":0,"maxNumDeaths":0}}]}';
    var champList = fallbackChampList;
    var runeList = fallbackRuneList;
    var masteryList = fallbackMasteryList;

    /**
     * Download champions from Riot API if fail fallback to predefined list
     * @private
     * @memberOf Constants# */
    function setChamps() {
        $.get(window.location.origin + "/champlist")
            .done(
            function (data) {
                var obj = JSON.parse(data);
                champList = obj;
            })
            //.fail(
            //function () {
            //    champList = fallbackChampList;
            //});
    };

    /**Download runes from Riot API if fail fallback to predefined list
     * @private
     * @memberOf Constants# */
    function setRunes() {
        $.get(window.location.origin + "/runelist")
            .done(
            function (data) {
                var obj = JSON.parse(data);
                runeList = obj;
            })
            //.fail(
            //function () {
            //    runeList = fallbackRuneList;
            //});
    };

    /**Download masteries from Riot API if fail fallback to predefined list
     * @private
     * @memberOf Constants# */
    function setMasteries() {
        $.get(window.location.origin + "/masterylist")
            .done(
            function (data) {
                var obj = JSON.parse(data);
                masteryList = obj;
            })
            //.fail(
            //function () {
            //    runeList = fallbackMasteryList;
            //});
    };

    return {
        /**Start the async downloads
         * @public
         * @memberOf Constants# */
        init: function () {
            setChamps();
            setMasteries();
            setRunes();
            return this;
        },
        /**Public getter for runeList
         * @public
         * @memberOf Constants#
         * @returns {object} - runeList*/
        getRuneList: function () {
            return runeList;
        },
        /**Public getter for masteryList
         * @public
         * @memberOf constants#
         * @returns {object} - masteryList*/
        getMasteryList: function () {
            return masteryList;
        },
        /**Public getter for champList
         * @public
         * @memberOf Constants#
         * @returns {object} - champList*/
        getChamps: function () {
            return champList;
        },
        /**Public getter for nullStat
         * @public
         * @memberOf Constants#
         * @returns {object} - nullStat*/
        getNullStats: function () {
            return nullStat;
        }
    };
});