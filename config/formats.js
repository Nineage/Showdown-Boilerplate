// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "XY Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "OU",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite']
	},
	{
		name: "Ubers",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Swagger Clause', 'Team Preview'],
		banlist: []
	},
	{
		name: "UU",
		section: "XY Singles",

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Alakazite', 'Heracronite', 'Gardevoirite', 'Medichamite', 'Drizzle', 'Drought', 'Shadow Tag', 'Geomancy']
	},
	{
		name: "RU",
		section: "XY Singles",

		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
	{
		name: "NU",
		section: "XY Singles",

		ruleset: ['RU'],
		banlist: ['RU', 'BL3']
	},
	{
		name: "PU",
		section: "XY Singles",

		ruleset: ['NU'],
		banlist: ['NU']
	},
	{
		name: "LC",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Gligar']
	},
	{	
		name: "LC UU",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Archen', 'Bellsprout', 'Bunnelby', 'Carvanha', 'Chinchou', 'Corphish', 'Cottonee', 'Cranidos',
			'Croagunk', 'Diglett', 'Drilbur', 'Dwebble', 'Ferroseed', 'Fletchling', 'Foongus', 'Gastly', 'Honedge', 'Houndour',
			'Larvesta', 'Lileep', 'Magnemite', 'Mienfoo', 'Misdreavus', 'Munchlax', 'Onix', 'Pawniard', 'Ponyta', 'Porygon',
			'Scraggy', 'Snubbull', 'Spritzee', 'Staryu', 'Timburr', 'Tirtouga', 'Trubbish', 'Vullaby', 'Vulpix', 'Zigzagoon',
			'Omanyte']
	},
	{
		name: "Battle Spot Singles",
		section: "XY Singles",

		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The necessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 3) return ['You must bring at least three Pokémon.'];
		}
	},
	/*{
		name: "CAP 19 Playtest",
		section: "XY Singles",

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Soul Dew',
			'Tomohawk', 'Necturna', 'Mollux', 'Aurumoth', 'Malaconda', 'Cawmodore', 'Volkraken', 'Syclant', 'Revenankh', 'Pyroak', 'Fidgit', 'Stratagem', 'Arghonaut', 'Kitsunoh', 'Cyclohm', 'Colossoil', 'Krilowatt', 'Voodoom'
		]
	},*/
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////
	
	{
		name: "[Gen 5] OU",
		section: "Past Generations",
		column: 3,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		section: "Past Generations",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "Past Generations",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning']
	},
	{
		name: "[Gen 5] RU",
		section: "Past Generations",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "Past Generations",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		section: "Past Generations",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Scyther', 'Sneasel', 'Tangela']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "Past Generations",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},
	{
		name: "[Gen 4] OU",
		section: "Past Generations",
		column: 3,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 4] Ubers",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus']
	},
	{
		name: "[Gen 4] UU",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] LC",
		section: "Past Generations",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma']
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: []
	},
	{
		name: "[Gen 3] OU",
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain']
	},
	{
        	name: "[Gen 3] LC",
        	section: "Past Generations",
    
        	maxLevel: 5,
        	mod: 'gen3',
        	ruleset: ['Pokemon', 'Standard', 'Little Cup', 'HP Percentage Mod'],
        	banlist: ['Dragon Rage', 'Sonic Boom', 'Scyther', 'Chansey', 'Meditite', 'Omanyte', 'Wynaut', 'Zigzagoon']
    	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "[Gen 2] OU",
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber',
			'Hypnosis + Perish Song + Mean Look',
			'Hypnosis + Perish Song + Spider Web',
			'Lovely Kiss + Perish Song + Mean Look',
			'Lovely Kiss + Perish Song + Spider Web',
			'Sing + Perish Song + Mean Look',
			'Sing + Perish Song + Spider Web',
			'Sleep Powder + Perish Song + Mean Look',
			'Sleep Powder + Perish Song + Spider Web',
			'Spore + Perish Song + Mean Look',
			'Spore + Perish Song + Spider Web']
	},
	{
		name: "[Gen 2] LC",
        	section: "Past Generations",
    
        	maxLevel: 5,
        	mod: 'gen2',
        	ruleset: ['Pokemon', 'Standard', 'Little Cup', 'HP Percentage Mod'],
        	banlist: ['Dragon Rage', 'Sonic Boom', 'Wrap', 'Bind', 'Clamp', 'Fire Spin', 'Whirlpool', 'Scyther', 'Chansey']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "[Gen 1] OU",
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber',
			'Kakuna + Poison Sting + Harden', 'Kakuna + String Shot + Harden',
			'Beedrill + Poison Sting + Harden', 'Beedrill + String Shot + Harden',
			'Nidoking + Fury Attack + Thrash',
			'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp', 'Exeggutor + Stun Spore + Stomp',
			'Eevee + Tackle + Growl',
			'Vaporeon + Tackle + Growl',
			'Jolteon + Tackle + Growl', 'Jolteon + Focus Energy + Thunder Shock',
			'Flareon + Tackle + Growl', 'Flareon + Focus Energy + Ember']
	},
	{	
		name: "[Gen 1] LC",
        	section: "Past Generations",
    
        	maxLevel: 5,
        	mod: 'gen1',
        	ruleset: ['Pokemon', 'Standard', 'Little Cup', 'HP Percentage Mod'],
        	banlist: ['Dragon Rage', 'Sonic Boom', 'Wrap', 'Bind', 'Clamp', 'Fire Spin']
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
		
	},	

	// XY Doubles
	///////////////////////////////////////////////////////////////////


	{
		name: "Random Doubles Battle",
		section: "XY Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Soul Dew', 'Dark Void',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
			'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
		]
	},
	{
		name: "Smogon Doubles Ubers",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void']
	},
	{
		name: "Smogon Doubles UU",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Smogon Doubles'],
		banlist: ['Abomasnow', 'Aegislash', 'Amoonguss', 'Aromatisse', 'Azumarill', 'Bisharp', 'Breloom', 'Chandelure', 'Charizard', 'Conkeldurr',
			'Cresselia', 'Diancie', 'Dragonite', 'Dusclops', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir', 'Gengar', 'Greninja',
			'Gyarados', 'Heatran', 'Hitmontop', 'Hydreigon', 'Jellicent', 'Kangaskhan', 'Keldeo', 'Kyurem-Black', 'Landorus-Therian', 'Latios',
			'Ludicolo', 'Mamoswine', 'Manectric', 'Mawile', 'Politoed', 'Rhyperior', 'Rotom-Heat', 'Rotom-Wash', 'Sableye', 'Salamence',
			'Scizor', 'Scrafty', 'Shaymin-Sky', 'Sylveon', 'Talonflame', 'Terrakion', 'Thundurus', 'Thundurus-Therian', 'Togekiss', 'Tyranitar',
			'Venusaur', 'Weavile', 'Whimsicott', 'Zapdos'
		]
	},
	{
		name: "Battle Spot Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
		}
	},
	{
		name: "VGC 2014",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The necessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
		}
	},
	{
		name: "Doubles Challenge Cup",
		section: 'XY Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Triples Battle",
		section: "XY Triples",

		gameType: 'triples',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Triples",
		section: "XY Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Perish Song'
		]
	},
	{
		name: "Battle Spot Triples",
		section: "XY Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		validateTeam: function (team, format) {
			if (team.length < 6) return ['You must have six Pokémon.'];
		}
	},
	{
		name: "Triples Challenge Cup",
		section: "XY Triples",

		gameType: 'triples',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Triples Custom Game",
		section: "XY Triples",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////
	{
		name: "D-rank LC",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Gligar', 'Fletchling', 'Mienfoo', 'Pawniard', 'Abra', 'Archen', 'Chinchou', 'Drilbur', 'Magnemite', 'Ponyta', 'Timburr', 'Tirtouga', 'Carvanha', 'Cottonee', 'Ferroseed', 'Foongus', 'Porygon', 'Spritzee', 'Croagunk', 'Diglett', 'Gastly', 'Gothita', 'Omanyte', 'Snubbull', 'Vullaby', 'Bunnelby', 'Dwebble', 'Munchlax', 'Scraggy', 'Trubbish', 'Vulpix', 'Zigzagoon', 'Corphish', 'Cranidos', 'Doduo', 'Hippopotas', 'Houndour', 'Larvesta', 'Lickitung', 'Onix', 'Shellder', 'Staryu', 'Taillow', 'Bellsprout', 'Drifloon', 'Elekid', 'Pumpkaboo', 'Riolu', 'Shellos', 'Slowpoke', 'Stunky', 'Torchic', 'Wynaut', 'Aipom', 'Amaura', 'Aron', 'Binacle', 'Darumaka', 'Honedge', 'Koffing', 'Lileep', 'Magby', 'Spinarak', 'Surskit', 'Tentacool', 'Axew', 'Bulbasaur', 'Chespin', 'Clamperl', 'Dratini', 'Frillish', 'Growlithe', 'Mantyke', 'Meowth', 'Pancham', 'Poliwag', 'Purrloin', 'Remoraid', 'Sandshrew', 'Snover', 'Anorith', 'Buneary', 'Cacnea', 'Cubone', 'Froakie', 'Goldeen', 'Grimer', 'Inkay', 'Kabuto', 'Litleo', 'Natu', 'Nosepass', 'Oddish', 'Shelmet', 'Teddiursa', 'Tyrunt', 'Wooper']
	},
	{	
		name: "CAP",
		section: "Other Metagames",
		column: 2,

		ruleset: ['CAP Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function () {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Clause', 'OHKO Clause', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Arena Trap', 'Huge Power', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Wonder Guard']
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview 1v1'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal',
			'Zekrom', 'Focus Sash', 'Kangaskhanite', 'Soul Dew'
		],
		validateTeam: function (team, format) {
			if (team.length > 3) return ['You may only bring up to three Pokémon.'];
		},
		onBegin: function () {
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Monotype",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Gengarite', 'Kangaskhanite', 'Lucarionite'
		]
	},
	{
		name: "Tier Shift",
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU']
	},
	{
		name: "LC 1v1",
		section: 'Other Metagames',

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview 1v1', 'LC'],
		banlist: ['LC Uber', 'Focus Sash', 'Sturdy + Berry Juice'],
		validateTeam: function (team, format) {
			if (team.length > 3) return ['You may only bring up to three Pokémon.'];
		},
		onBegin: function () {
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Almost Any Ability",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities', 'Arceus', 'Archeops', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram',
			'Shedinja + Sturdy', 'Slaking', 'Smeargle + Baton Pass', 'Weavile', 'Xerneas', 'Yveltal', 'Zekrom',
			'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Soul Dew'
		],
		validateSet: function(set) {
			var bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Simple':1, 'Speed Boost': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				var template = this.getTemplate(set.species || set.name);
				var legalAbility = false;
				for (var i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pokémon that do not naturally have it.'];
			}
		}
	},
	{
		name: "Almost Any Ability LC",
		section: "Other Metagames",
		
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Ignore Illegal Abilities', 'Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Gligar', 'Archen', 'Damp Rock', 'Smooth Rock', 'Heat Rock'],
		validateSet: function(set) {
			var bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Gale Wings': 1, 'Imposter': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Sand Veil': 1, 'Shadow Tag': 1, 'Simple':1, 'Snow Cloak':1, 'Speed Boost': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				var template = this.getTemplate(set.species || set.name);
				var legalAbility = false;
				for (var i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pokémon that do not naturally have it.'];
			}
		}
	},
	{
		name: "350 Cup",
		section: "Other Metagames",

		mod: '350cup',
		searchShow: false,
		ruleset: ['Ubers', 'Evasion Moves Clause'],
		banlist: ['Darumaka', 'Pawniard', 'Spritzee', 'DeepSeaScale', 'DeepSeaTooth', 'Light Ball', 'Thick Club'],
		validateSet: function(set) {
			var template = Tools.getTemplate(set.species);
			var item = this.getItem(set.item);
			if (item.name === 'Eviolite' && Object.values(template.baseStats).sum() <= 350) {
				return ['Eviolite is banned on Pokémon with 350 or lower BST.'];
			}
		}
	},
	{
		name: "Averagemons",
		section: "Other Metagames",

		mod: 'averagemons',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Evasion Abilities Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Shedinja', 'Smeargle', 'DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Light Ball', 'Mawilite', 'Medichamite', 'Soul Dew', 'Thick Club', 'Huge Power', 'Pure Power']
	},
	{
		name: "Classic Hackmons",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['HP Percentage Mod'],
		validateSet: function (set) {
			var template = this.getTemplate(set.species);
			var item = this.getItem(set.item);
			var problems = [];

			if (set.species === set.name) delete set.name;
			if (template.isNonstandard) {
				problems.push(set.species + ' is not a real Pokemon.');
			}
			if (item.isNonstandard) {
				problems.push(item.name + ' is not a real item.');
			}
			var ability = {};
			if (set.ability) ability = this.getAbility(set.ability);
			if (ability.isNonstandard) {
				problems.push(ability.name + ' is not a real ability.');
			}
			if (set.moves) {
				for (var i = 0; i < set.moves.length; i++) {
					var move = this.getMove(set.moves[i]);
					if (move.isNonstandard) {
						problems.push(move.name + ' is not a real move.');
					}
				}
				if (set.moves.length > 4) {
					problems.push((set.name || set.species) + ' has more than four moves.');
				}
			}
			if (set.level && set.level > 100) {
				problems.push((set.name || set.species) + ' is higher than level 100.');
			}
			return problems;
		}
	},
	{
		name: "Hidden Type",
		section: "Other Metagames",

		mod: 'hiddentype',
		searchShow: false,
		ruleset: ['OU'],
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			var type = pokemon.hpType || 'Dark';
			if (!pokemon.hasType(type)) pokemon.addType(type);
		}
	},
	{
		name: "Middle Cup",
		section: "Other Metagames",

		searchShow: false,
		maxLevel: 50,
		defaultLevel: 50,
		validateSet: function (set) {
			var template = this.getTemplate(set.species || set.name);
			if (!template.evos || template.evos.length === 0 || !template.prevo) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Eviolite']
	},
	{	
		name: "LC Ubers",
        	section: "Other Metagames",
        	           
        	maxLevel: 5,
        	ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup']
	},
	{
		name: "OM Mashup",
		section: "Other Metagames",

		mod: 'inverse',
		searchShow: false,
		ruleset: ['Pokemon', 'Ability Clause', 'OHKO Clause', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Arena Trap', 'Huge Power', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Wonder Guard']
	},
	{
		name: "[Gen 5] Glitchmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		mimicGlitch: true,
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased']
	},
	{
                name: "RBY LC UU Monotype 1v1",
        	section: "Other Metagames",
    
        	maxLevel: 5,
        	mod: 'gen1',
        	ruleset: ['Pokemon', 'Standard', 'Little Cup', 'HP Percentage Mod', 'Team Preview 1v1'],
        	banlist: ['Dragon Rage', 'Sonic Boom', 'Wrap', 'Bind', 'Clamp', 'Fire Spin']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{	
		name: "[Gen 5] Smogon Doubles",
		section: 'Other Metagames',
		column: 3,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus',
			'Reshiram',
			'Zekrom',
			'Kyurem-White']
	},

];
