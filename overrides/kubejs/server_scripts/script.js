// priority: 0


ServerEvents.recipes(event => {

	 event.remove({output: 'thermal:machine_frame'})
	event.remove({output: 'mekanism:steel_casing'})
	event.remove({output: 'rftoolsbase:machine_frame'})
	event.remove({output: 'industrialforegoing:machine_frame_pity'})
	event.remove({output: 'integrateddynamics:squeezer'})
	event.remove({output: 'totemic:totem_whittling_knife'})
	event.remove({output: 'botania:apothecary_default'})
	
	
	
	//spawner via pneumaticcraft and cyclic
	  event.shaped('1x minecraft:spawner', [
    'BBB',
    'BSB',
    'BBB'
  ], {
    B: 'cyclic:netherite_bars',
    S: 'pneumaticcraft:spawner_core'
  })
  
  //thermal via chemlib
  	  event.shaped('1x thermal:machine_frame', [
    'IGI',
    'IEI',
    'IGI'
  ], {
    E: 'chemlib:caffeine',
    I: 'minecraft:iron_nugget',
	G: '#forge:glass'
  })
  
  
  //rftools via pneumaticcraft
    	  event.shaped('1x rftoolsbase:machine_frame', [
    'IDI',
    'GPG',
    'IDI'
  ], {
    D: 'minecraft:lapis_block',
    I: 'minecraft:iron_ingot',
	P: 'pneumaticcraft:spawner_agitator',
	G: 'minecraft:gold_ingot'
  })
  
  //IF via hexerei and evilcraft
      	  event.shaped('1x industrialforegoing:machine_frame_pity', [
    'SIS',
    'ICI',
    'SIS'
  ], {
    S: 'hexerei:selenite_shard',
    I: 'hexerei:infused_fabric',
	C: 'evilcraft:dark_blood_brick'
  })
  
    //meka via all chassis
      	  event.shaped('1x mekanism:steel_casing', [
    'ABC',
    'BRB',
    'CBA'
  ], {
    A: 'thermal:machine_frame',
    B: 'rftoolsbase:machine_frame',
	C: 'industrialforegoing:machine_frame_pity',
	R: 'totemic:cedar_log'
  })
  
      //warden via many
      	  event.shaped('1x minecraft:warden_spawn_egg', [
    'WSD',
    'ASE',
    'RSN'
  ], {
	W: 'thermal_extra:twinite_coin',
	A: 'pylons:player_filter',
	R: 'quark:bamboo_bookshelf',
	D: 'supplementaries:blackboard',
	E: 'mahoutsukai:powdered_gold',
	N: 'apotheosis:inert_trident',
	S: 'tombstone:tablet_of_home'
  })
  
        //alternative of ballon
      	  event.shaped('1x cloudstorage:balloon', [
    ' R ',
    'RSR',
    'WR '
  ], {
	W: 'minecraft:string',
	R: 'thermal:red_rockwool',
	S: 'supplementaries:soap'
  })
	
	        //integrateddynamics via botania
      	  event.shaped('1x integrateddynamics:squeezer', [
    'SBS',
    'SGS',
    'LML'
  ], {
	S: 'minecraft:stick',
	B: 'botania:manasteel_block',
	L: 'botania:livingwood_log',
	G: 'botania:mana_glass',
	M: 'botania:manasteel_ingot'
  })
  
  	        //botania via ars
      	  event.shaped('1x botania:apothecary_default', [
    '   ',
    'SAS',
    '   '
  ], {
	S: 'supplementaries:pedestal',
	A: 'ars_nouveau:arcane_pedestal'
  })
	
	
	  	        //totemic via create
      	  event.shaped('1x totemic:totem_whittling_knife', [
    '  P',
    ' C ',
    'S  '
  ], {
	S: 'minecraft:stick',
	C: 'crossroads:clutch',
	P: 'create:precision_mechanism'
  })
	
	
//saplings
event.stonecutting('hexerei:mahogany_sapling','naturesaura:ancient_sapling')
event.stonecutting('silentgear:netherwood_sapling','naturesaura:ancient_sapling')
event.stonecutting('ars_nouveau:green_archwood_sapling','naturesaura:ancient_sapling')
event.stonecutting('ars_nouveau:blue_archwood_sapling','naturesaura:ancient_sapling')
event.stonecutting('ars_nouveau:purple_archwood_sapling','naturesaura:ancient_sapling')
event.stonecutting('ars_nouveau:red_archwood_sapling','naturesaura:ancient_sapling')
event.stonecutting('integrateddynamics:menril_sapling','naturesaura:ancient_sapling')
//bushes

event.stonecutting('hexerei:belladonna_flower','rootsclassic:aesthetic_standing_stone')
event.stonecutting('hexerei:yellow_dock_bush','rootsclassic:aesthetic_standing_stone')
event.stonecutting('hexerei:mugwort_bush','rootsclassic:aesthetic_standing_stone')
event.stonecutting('hexerei:mandrake_flower','rootsclassic:aesthetic_standing_stone')
event.stonecutting('ars_nouveau:source_berry','rootsclassic:aesthetic_standing_stone')

	
	  event.custom({
    type: 'exnihilosequentia:compost',
    input: [
      Ingredient.of('#rootsclassic:berries').toJson()
    ],
    amount: 100
  })
	
	
})

ServerEvents.tags('item', event => {

	event.get('extractinator:rare_drops').add('extractinator:slush')
	event.get('extractinator:rare_drops').add('extractinator:silt')
	event.get('extractinator:rare_drops').add('evilcraft:dark_gem')
	event.get('extractinator:rare_drops').add('hexerei:selenite_shard')
	
	
	
	
})