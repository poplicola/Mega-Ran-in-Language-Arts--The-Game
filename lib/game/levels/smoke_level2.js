ig.module( 'game.levels.smoke_level2' )
.requires('impact.image','game.entities.megaran','game.entities.castrocopter','game.entities.castrocopter','game.entities.castrocopter','game.entities.castrocopter','game.entities.castrocopter','game.entities.castrocopter','game.entities.castrocopter','game.entities.castrocopter','game.entities.Teleporter','game.entities.ceilingdropper','game.entities.CameraLockXY','game.entities.camerastopleft','game.entities.camerastopright','game.entities.camerastopright','game.entities.camerastopleft','game.entities.camerastopleft','game.entities.camerastopright','game.entities.camerastopright','game.entities.camerastopleft','game.entities.camerastopleft','game.entities.camerastopleft','game.entities.camerastopleft','game.entities.camerastopright','game.entities.camerastopright','game.entities.camerastopright','game.entities.CameraLockXY','game.entities.CameraLockXY','game.entities.camerastopleft','game.entities.camerastopleft','game.entities.camerastopright','game.entities.camerastopright','game.entities.CameraLockY','game.entities.CameraLockY','game.entities.DoorOpenTrigger','game.entities.SlidingDoor','game.entities.SlidingDoor','game.entities.DoorOpenTrigger','game.entities.SlidingDoor','game.entities.SlidingDoor','game.entities.Elevator','game.entities.SlidingDoor','game.entities.DoorOpenTrigger','game.entities.SlidingDoor','game.entities.DoorOpenTrigger','game.entities.SlidingDoor','game.entities.Elevator','game.entities.camerastopleft','game.entities.camerastopleft','game.entities.camerastopleft','game.entities.camerastopright','game.entities.camerastopleft','game.entities.CameraLockY','game.entities.CameraLockY','game.entities.CameraLockY','game.entities.ceilingdropper','game.entities.ceilingdropper','game.entities.ceilingdropper','game.entities.castrocopter','game.entities.castrocopter','game.entities.OneShotTrigger','game.entities.ElevatorTrigger','game.entities.ElevatorLimitChangeTrigger','game.entities.ElevatorLimitChangeTrigger','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmogPipe','game.entities.SmogPipe','game.entities.SmogPipe','game.entities.TrashTosser','game.entities.OneShotTrigger','game.entities.SmokeBlockhead','game.entities.SmokeBlockhead','game.entities.SmokeBlockhead','game.entities.SmokeBlockhead','game.entities.SmokeBlockhead','game.entities.SmokemanSpawnzone','game.entities.OneShotTrigger','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.Checkpoint','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.SmokeGears','game.entities.PickupBlueprint','game.entities.PickupOneUp','game.entities.SmogPipe','game.entities.Table','game.entities.SmokeBlockhead','game.entities.SmokeBlockhead','game.entities.PickupOneUp','game.entities.SmogPipe','game.entities.ceilingdropper','game.entities.SmokeBlockhead','game.entities.TrashTosser','game.entities.ceilingdropper','game.entities.ceilingdropper','game.entities.castrocopter','game.entities.ceilingdropper','game.entities.ceilingdropper','game.entities.ceilingdropper','game.entities.castrocopter','game.entities.castrocopter','game.entities.OneShotTrigger','game.entities.SmogPipe','game.entities.SmogPipe','game.entities.SmogPipe','game.entities.SmokeBlockhead','game.entities.castrocopter','game.entities.SmogPipe','game.entities.SmokeGears','game.entities.SmogPipe','game.entities.ceilingdropper','game.entities.Checkpoint','game.entities.camerastopright','game.entities.camerastopleft','game.entities.Table','game.entities.PickupBlueprint','game.entities.Teleporter','game.entities.DoorOpenTrigger','game.entities.WarpZone','game.entities.camerastopright','game.entities.WarpZone','game.entities.Table','game.entities.PickupBook','game.entities.CameraLockY','game.entities.camerastopleft','game.entities.Checkpoint','game.entities.PickupHealth','game.entities.PickupCrate','game.entities.BossDoor','game.entities.BossDoor','game.entities.PickupBook','game.entities.Table')
.defines(function(){
LevelSmoke_level2=/*JSON[*/{
	"entities": [
		{
			"type": "EntityMegaran",
			"x": 50,
			"y": 126,
			"settings": {
				"name": "megaran",
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 209,
			"y": 125,
			"settings": {
				"flip": "true",
				"range": 100,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 869,
			"y": 1029,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 485,
			"y": 1005,
			"settings": {
				"range": 100,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 249,
			"y": 989,
			"settings": {
				"range": 100,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 657,
			"y": 1285,
			"settings": {
				"flip": "true",
				"range": 64,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 37,
			"y": 805,
			"settings": {
				"flip": "true",
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 637,
			"y": 85,
			"settings": {
				"range": 100,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 461,
			"y": 285,
			"settings": {
				"range": 100,
				"reset": false
			}
		},
		{
			"type": "EntityTeleporter",
			"x": 40,
			"y": 174,
			"settings": {
				"destination": "MegaBase",
				"reset": false,
				"active": "true"
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 276,
			"y": 256,
			"settings": {
				"dropRange": 1,
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockXY",
			"x": 0,
			"y": 1680,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 0,
			"y": 0,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 822,
			"y": 0,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 822,
			"y": 240,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 0,
			"y": 240,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 0,
			"y": 480,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 918,
			"y": 480,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 918,
			"y": 720,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 0,
			"y": 720,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 0,
			"y": 960,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 0,
			"y": 1200,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 0,
			"y": 1440,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 918,
			"y": 960,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 918,
			"y": 1200,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 918,
			"y": 1440,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockXY",
			"x": 320,
			"y": 1680,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockXY",
			"x": 640,
			"y": 1680,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 1056,
			"y": 480,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 960,
			"y": 240,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 1462,
			"y": 480,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 1462,
			"y": 240,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockY",
			"x": 1120,
			"y": 240,
			"settings": {
				"size": {
					"x": 340,
					"y": 240
				},
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockY",
			"x": 1216,
			"y": 480,
			"settings": {
				"size": {
					"x": 244,
					"y": 240
				},
				"reset": false
			}
		},
		{
			"type": "EntityDoorOpenTrigger",
			"x": 212,
			"y": 1760,
			"settings": {
				"size": {
					"x": 120,
					"y": 112
				},
				"target": {
					"0": "SmokeManDoor1",
					"1": "SmokeManDoor1b"
				},
				"reset": false
			}
		},
		{
			"type": "EntitySlidingDoor",
			"x": 304,
			"y": 1776,
			"settings": {
				"name": "SmokeManDoor1",
				"reset": false
			}
		},
		{
			"type": "EntitySlidingDoor",
			"x": 644,
			"y": 1776,
			"settings": {
				"name": "SmokeManDoor2",
				"reset": 1,
				"active": 1
			}
		},
		{
			"type": "EntityDoorOpenTrigger",
			"x": 584,
			"y": 1776,
			"settings": {
				"size": {
					"x": 100,
					"y": 48
				},
				"target": {
					"0": "SmokeManDoor2",
					"1": "SmokeManDoor2b"
				},
				"reset": false
			}
		},
		{
			"type": "EntitySlidingDoor",
			"x": 324,
			"y": 1776,
			"settings": {
				"name": "SmokeManDoor1b",
				"reset": false
			}
		},
		{
			"type": "EntitySlidingDoor",
			"x": 624,
			"y": 1776,
			"settings": {
				"name": "SmokeManDoor2b",
				"reset": false
			}
		},
		{
			"type": "EntityElevator",
			"x": 976,
			"y": 880,
			"settings": {
				"maxY": 880,
				"preferredY": 880,
				"minY": 672,
				"name": "BacktrackElevator2",
				"reset": false
			}
		},
		{
			"type": "EntitySlidingDoor",
			"x": 944,
			"y": 1584,
			"settings": {
				"name": "Backtrack3",
				"active": 0,
				"reset": false
			}
		},
		{
			"type": "EntityDoorOpenTrigger",
			"x": 864,
			"y": 816,
			"settings": {
				"size": {
					"x": 112,
					"y": 64
				},
				"target": {
					"0": "Backtrack2"
				},
				"reset": false
			}
		},
		{
			"type": "EntitySlidingDoor",
			"x": 912,
			"y": 832,
			"settings": {
				"name": "Backtrack2",
				"active": 0,
				"reset": false
			}
		},
		{
			"type": "EntityDoorOpenTrigger",
			"x": 932,
			"y": 144,
			"settings": {
				"size": {
					"x": 76,
					"y": 48
				},
				"target": {
					"0": "Backtrack1"
				},
				"reset": false
			}
		},
		{
			"type": "EntitySlidingDoor",
			"x": 944,
			"y": 144,
			"settings": {
				"name": "Backtrack1",
				"active": 0,
				"reset": false
			}
		},
		{
			"type": "EntityElevator",
			"x": 1616,
			"y": 672,
			"settings": {
				"minY": 192,
				"maxY": 672,
				"preferredY": 672,
				"name": "BacktrackElevator1",
				"reset": false,
				"actionText": "Activate Elevator"
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 1600,
			"y": 480,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 1600,
			"y": 240,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 1600,
			"y": 0,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 1462,
			"y": 0,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 960,
			"y": 0,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockY",
			"x": 896,
			"y": 480,
			"settings": {
				"size": {
					"x": 20,
					"y": 240
				},
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockY",
			"x": 844,
			"y": 1200,
			"settings": {
				"size": {
					"x": 72,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntityCameraLockY",
			"x": 864,
			"y": 720,
			"settings": {
				"size": {
					"x": 52,
					"y": 96
				},
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 792,
			"y": 496,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 20,
			"y": 256,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 284,
			"y": 1456,
			"settings": {
				"dropRange": 5,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 377,
			"y": 1497,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 585,
			"y": 1497,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityOneShotTrigger",
			"x": 768,
			"y": 820,
			"settings": {
				"size": {
					"x": 96,
					"y": 60
				},
				"target": {
					"0": "Backtrack1",
					"1": "Backtrack2"
				},
				"reset": false,
				"triggered": false
			}
		},
		{
			"type": "EntityElevatorTrigger",
			"x": 976,
			"y": 1632,
			"settings": {
				"size": {
					"x": 64,
					"y": 16
				},
				"target": {
					"0": "Backtrack3"
				},
				"reset": false
			}
		},
		{
			"type": "EntityElevatorLimitChangeTrigger",
			"x": 624,
			"y": 1024,
			"settings": {
				"size": {
					"x": 96,
					"y": 128
				},
				"target": {
					"0": "BacktrackElevator2"
				},
				"maxY": 1440,
				"preferredY": 1440,
				"reset": false
			}
		},
		{
			"type": "EntityElevatorLimitChangeTrigger",
			"x": 736,
			"y": 1456,
			"settings": {
				"size": {
					"x": 32,
					"y": 64
				},
				"target": {
					"0": "BacktrackElevator2"
				},
				"maxY": 1632,
				"preferredY": 1632,
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 528,
			"y": 416,
			"settings": {
				"size": {
					"x": 32,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 288,
			"y": 432,
			"settings": {
				"size": {
					"x": 64,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 480,
			"y": 416,
			"settings": {
				"size": {
					"x": 32,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 576,
			"y": 848,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 352,
			"y": 912,
			"settings": {
				"size": {
					"x": 128,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 624,
			"y": 1376,
			"settings": {
				"size": {
					"x": 240,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 192,
			"y": 896,
			"settings": {
				"size": {
					"x": 112,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 80,
			"y": 1104,
			"settings": {
				"size": {
					"x": 208,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 496,
			"y": 1136,
			"settings": {
				"size": {
					"x": 288,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 224,
			"y": 1360,
			"settings": {
				"size": {
					"x": 32,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 400,
			"y": 576,
			"settings": {
				"size": {
					"x": 15,
					"y": 48
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 656,
			"y": 144,
			"settings": {
				"size": {
					"x": 15,
					"y": 48
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 288,
			"y": 1072,
			"settings": {
				"size": {
					"x": 15,
					"y": 48
				},
				"interval": 10,
				"reset": false
			}
		},
		{
			"type": "EntityTrashTosser",
			"x": 56,
			"y": 320,
			"settings": {
				"flip": 1,
				"name": "BigTosser",
				"reset": false
			}
		},
		{
			"type": "EntityOneShotTrigger",
			"x": 160,
			"y": 304,
			"settings": {
				"size": {
					"x": 28,
					"y": 48
				},
				"target": {
					"0": "BigTosser"
				},
				"reset": false,
				"triggered": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 576,
			"y": 415,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 240,
			"y": 655,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 496,
			"y": 1535,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 464,
			"y": 1615,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 480,
			"y": 1312,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokemanSpawnzone",
			"x": 916,
			"y": 1704,
			"settings": {
				"name": "BossSpawn",
				"size": {
					"x": 16,
					"y": 20
				},
				"deathTarget": {
					"0": "BossCompleteDoor1",
					"1": "BossCompleteDoor2"
				},
				"reset": 0
			}
		},
		{
			"type": "EntityOneShotTrigger",
			"x": 684,
			"y": 1696,
			"settings": {
				"size": {
					"x": 24,
					"y": 176
				},
				"target": {
					"0": "BossSpawn",
					"1": "SmokeManDoor2"
				},
				"reset": 1,
				"triggered": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 864,
			"y": 256,
			"settings": {
				"size": {
					"x": 64,
					"y": 176
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 48,
			"y": 496,
			"settings": {
				"size": {
					"x": 80,
					"y": 176
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 816,
			"y": 768,
			"settings": {
				"size": {
					"x": 48,
					"y": 112
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 16,
			"y": 976,
			"settings": {
				"size": {
					"x": 52,
					"y": 96
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 864,
			"y": 1216,
			"settings": {
				"size": {
					"x": 80,
					"y": 112
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 16,
			"y": 1456,
			"settings": {
				"size": {
					"x": 48,
					"y": 96
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 816,
			"y": 1552,
			"settings": {
				"size": {
					"x": 80,
					"y": 80
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 16,
			"y": 1696,
			"settings": {
				"size": {
					"x": 64,
					"y": 176
				},
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 40,
			"y": 104,
			"settings": {
				"size": {
					"x": 44,
					"y": 92
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 1456,
			"y": 1600,
			"settings": {
				"size": {
					"x": 64,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 1280,
			"y": 1632,
			"settings": {
				"size": {
					"x": 96,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 1380,
			"y": 1616,
			"settings": {
				"size": {
					"x": 48,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntityPickupBlueprint",
			"x": 1708,
			"y": 1592,
			"settings": {
				"style": 0,
				"reset": false,
				"name": "Smoke Activator"
			}
		},
		{
			"type": "EntityPickupOneUp",
			"x": 1280,
			"y": 432,
			"settings": {
				"style": 0,
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 1264,
			"y": 1600,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityTable",
			"x": 1712,
			"y": 1616,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 352,
			"y": 1312,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 641,
			"y": 415,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityPickupOneUp",
			"x": 24,
			"y": 592,
			"settings": {
				"style": 0,
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 416,
			"y": 608,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 698,
			"y": 544,
			"settings": {
				"dropRange": 25,
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 832,
			"y": 655,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityTrashTosser",
			"x": 230,
			"y": 832,
			"settings": {
				"name": "tosser_2",
				"flip": 1,
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 764,
			"y": 1248,
			"settings": {
				"dropRange": 10,
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 196,
			"y": 1264,
			"settings": {
				"dropRange": 2,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 893,
			"y": 1149,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 560,
			"y": 1568,
			"settings": {
				"dropRange": 10,
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 524,
			"y": 1568,
			"settings": {
				"dropRange": 10,
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 488,
			"y": 1568,
			"settings": {
				"dropRange": 10,
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 237,
			"y": 1709,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 205,
			"y": 1741,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityOneShotTrigger",
			"x": 400,
			"y": 816,
			"settings": {
				"size": {
					"x": 32,
					"y": 64
				},
				"target": {
					"0": "tosser_2"
				},
				"reset": false,
				"triggered": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 112,
			"y": 1840,
			"settings": {
				"size": {
					"x": 15,
					"y": 32
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 128,
			"y": 1824,
			"settings": {
				"size": {
					"x": 15,
					"y": 48
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 416,
			"y": 1280,
			"settings": {
				"size": {
					"x": 15,
					"y": 32
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeBlockhead",
			"x": 1249,
			"y": 175,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCastrocopter",
			"x": 669,
			"y": 349,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 560,
			"y": 624,
			"settings": {
				"size": {
					"x": 15,
					"y": 48
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmokeGears",
			"x": 480,
			"y": 656,
			"settings": {
				"size": {
					"x": 48,
					"y": 16
				},
				"reset": false
			}
		},
		{
			"type": "EntitySmogPipe",
			"x": 720,
			"y": 832,
			"settings": {
				"size": {
					"x": 15,
					"y": 32
				},
				"reset": false
			}
		},
		{
			"type": "EntityCeilingdropper",
			"x": 604,
			"y": 976,
			"settings": {
				"dropRange": 10,
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 468,
			"y": 1776,
			"settings": {
				"size": {
					"x": 36,
					"y": 48
				},
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 1254,
			"y": 1680,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 960,
			"y": 1680,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityTable",
			"x": 1168,
			"y": 1840,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityPickupBlueprint",
			"x": 1166,
			"y": 1820,
			"settings": {
				"style": 0,
				"reset": false,
				"name": "Electronic Trigger"
			}
		},
		{
			"type": "EntityTeleporter",
			"x": 1296,
			"y": 1806,
			"settings": {
				"destination": "MegaBase",
				"active": 1,
				"reset": false,
				"actionText": "Warp to MegaBase"
			}
		},
		{
			"type": "EntityDoorOpenTrigger",
			"x": 888,
			"y": 1776,
			"settings": {
				"size": {
					"x": 160,
					"y": 48
				},
				"target": {
					"0": "BossCompleteDoor1",
					"1": "BossCompleteDoor2"
				},
				"reset": false
			}
		},
		{
			"type": "EntityWarpZone",
			"x": 1392,
			"y": 544,
			"settings": {
				"reset": false,
				"size": {
					"x": 32,
					"y": 32
				},
				"name": "SecretRoomA",
				"destination": "SecretRoomB",
				"actionText": "Enter Storeroom"
			}
		},
		{
			"type": "EntityCamerastopright",
			"x": 1510,
			"y": 800,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityWarpZone",
			"x": 1424,
			"y": 864,
			"settings": {
				"reset": false,
				"size": {
					"x": 32,
					"y": 32
				},
				"destination": "SecretRoomA",
				"name": "SecretRoomB",
				"actionText": "Leave Storeroom"
			}
		},
		{
			"type": "EntityTable",
			"x": 1432,
			"y": 976,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityPickupBook",
			"x": 1432,
			"y": 960,
			"settings": {
				"reset": false,
				"style": 2,
				"name": "The Grapes of Wrath",
				"bonus": "attack",
				"value": 1
			}
		},
		{
			"type": "EntityCameraLockY",
			"x": 1420,
			"y": 800,
			"settings": {
				"reset": false,
				"size": {
					"x": 40,
					"y": 100
				}
			}
		},
		{
			"type": "EntityCamerastopleft",
			"x": 1152,
			"y": 800,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityCheckpoint",
			"x": 952,
			"y": 496,
			"settings": {
				"reset": false,
				"size": {
					"x": 32,
					"y": 48
				}
			}
		},
		{
			"type": "EntityPickupHealth",
			"x": 1180,
			"y": 920,
			"settings": {
				"reset": false
			}
		},
		{
			"type": "EntityPickupCrate",
			"x": 1348,
			"y": 652,
			"settings": {
				"style": 0,
				"reset": false,
				"name": "Copper Wire"
			}
		},
		{
			"type": "EntityBossDoor",
			"x": 944,
			"y": 1776,
			"settings": {
				"reset": true,
				"name": "BossCompleteDoor1",
				"active": false
			}
		},
		{
			"type": "EntityBossDoor",
			"x": 964,
			"y": 1776,
			"settings": {
				"reset": true,
				"name": "BossCompleteDoor2",
				"active": false
			}
		},
		{
			"type": "EntityPickupBook",
			"x": 908,
			"y": 1488,
			"settings": {
				"reset": false,
				"style": 1,
				"bonus": "attack",
				"value": 2,
				"name": "Machinery's Handbook"
			}
		},
		{
			"type": "EntityTable",
			"x": 908,
			"y": 1504,
			"settings": {
				"reset": false
			}
		}
	],
	"layer": [
		{
			"name": "deepbg",
			"width": 10,
			"height": 6,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/stars.png",
			"repeat": false,
			"preRender": false,
			"distance": "20",
			"tilesize": 40,
			"foreground": false,
			"data": [
				[1,2,3,4,5,6,7,8,9,10],
				[11,12,13,14,15,16,17,18,19,20],
				[21,22,23,24,25,26,27,28,29,30],
				[31,32,33,34,35,36,37,38,39,40],
				[41,42,43,44,45,46,47,48,49,50],
				[51,52,53,54,55,56,57,58,59,60]
			]
		},
		{
			"name": "city",
			"width": 23,
			"height": 12,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/city.png",
			"repeat": false,
			"preRender": true,
			"distance": "15",
			"tilesize": 20,
			"foreground": false,
			"data": [
				[12,13,14,15,16,17,18,19,20,21,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,24,25,26,27,28,29,30,31,32,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115],
				[116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138],
				[139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161],
				[162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184],
				[185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207],
				[208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230],
				[231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253],
				[254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276],
				[254,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275],
				[255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,276]
			]
		},
		{
			"name": "background",
			"width": 120,
			"height": 120,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/smokeman_level.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,97,97,97,97,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,56,97,97,80,97,100,97,98,97,97,97,100,97,97,98,97,97,97,97,80,97,97,97,97,100,97,97,97,98,97,97,97,97,97,97,97,80,97,97,97,97,97,99,97,97,97,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,101,101,101,101,101,101,101,57,101,57,57,57,101,101,57,57,51,57,57,101,101,101,101,101,57,101,57,57,57,101,101,57,50,57,57,57,101,101,52,57,101,101,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,101,57,57,52,101,101,101,101,57,101,101,50,57,101,101,101,57,101,101,57,52,101,101,101,101,57,101,101,51,57,101,101,101,101,101,101,57,57,101,57,57,57,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,57,101,101,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,5,101,101,101,49,50,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,97,56,97,97,100,97,97,97,97,97,97,56,100,58,56,97,97,97,56,97,98,97,97,99,97,58,56,97,97,97,97,56,97,97,97,97,97,97,56,97,97,101,49,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,87,90,90,88,89,86,50,101,56,55,53,64,49,97,97,97,55,101,85,89,89,86,101,72,49,97,97,97,97,55,87,90,88,101,101,97,55,101,101,101,49,101,57,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,49,49,0,0,49,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,109,97,97,97,56,97,97,97,97,97,97,109,97,97,97,100,97,97,97,97,80,97,97,97,97,97,97,97,97,97,80,97,97,97,97,97,97,97,97,56,97,97,80,97,97,97,97,97,97,56,80,101,101,56,97,97,101,101,101,49,0,0,0,0,0,109,98,97,97,80,97,97,80,97,97,98,97,97,99,97,97,97,97,80,97,97,100,97,97,97,99,97,97,80,97,100,97,97,97,101,49,51,101,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,101,97,80,97,57,101,101,101,56,55,101,101,57,101,57,101,101,101,101,101,101,57,101,101,101,57,50,101,57,101,101,101,101,101,101,99,97,55,101,101,101,57,101,57,97,97,97,55,101,101,101,49,101,101,101,101,101,49,0,0,0,0,0,49,101,101,57,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,52,101,101,57,101,101,101,101,101,101,101,101,49,49,57,101,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,57,101,101,101,101,97,97,101,101,49,101,101,101,101,57,57,101,57,101,101,57,57,52,101,57,57,101,57,57,57,101,57,57,57,57,101,101,101,101,101,57,57,101,101,101,101,101,101,101,101,101,101,49,101,101,101,101,101,0,0,0,0,0,0,49,101,57,57,51,101,101,101,57,101,101,57,57,57,57,57,101,57,57,57,57,57,57,101,57,57,57,50,57,57,57,101,101,101,49,49,101,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,101,101,57,57,57,101,97,97,55,57,101,57,57,101,101,57,57,57,57,57,57,101,57,57,101,57,101,57,101,57,101,101,101,77,78,101,57,101,101,101,101,57,51,101,101,57,57,101,101,97,97,55,57,101,97,97,101,0,0,0,0,0,0,49,57,101,101,101,57,57,101,57,57,50,101,57,101,101,52,57,57,57,57,57,57,101,101,57,101,57,57,101,57,57,52,101,57,49,49,101,51,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,57,101,57,101,57,101,101,101,101,101,51,101,57,101,101,57,101,101,101,57,101,57,101,101,57,101,101,57,101,101,57,101,101,83,84,101,101,101,57,57,101,101,57,101,57,101,101,101,101,101,101,103,108,104,101,101,101,101,0,0,0,0,0,49,57,57,50,57,101,101,101,57,101,57,101,57,57,57,57,57,51,101,101,57,101,101,51,57,57,57,57,57,101,57,57,101,57,49,49,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,52,101,101,57,101,57,101,101,57,101,101,57,101,101,101,101,57,101,101,101,57,101,101,101,101,101,101,57,101,57,57,101,57,57,57,101,57,57,101,101,101,101,101,101,57,101,101,101,101,101,101,101,96,57,91,104,101,101,101,0,0,0,0,0,49,101,101,101,57,57,57,52,101,57,57,101,101,101,57,57,57,57,101,101,57,57,101,57,57,50,101,101,57,101,57,57,101,101,49,49,52,101,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,101,101,101,49,101,101,101,101,101,57,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,57,101,101,101,57,101,49,101,101,57,57,57,101,57,57,57,57,57,57,57,101,101,96,57,57,95,101,101,101,0,0,0,0,0,49,52,57,101,101,57,101,101,101,101,57,101,57,51,101,101,101,101,49,57,101,57,101,101,101,101,101,57,57,57,49,101,101,101,49,49,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,57,101,101,101,49,57,101,101,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,101,57,57,101,97,97,55,101,57,101,57,101,57,57,57,101,101,57,101,101,57,101,96,57,85,94,101,101,101,0,0,0,0,0,49,101,101,101,101,101,101,101,49,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,49,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,101,101,101,49,101,101,101,0,0,0,0,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,49,101,101,101,101,101,52,101,101,101,57,101,49,101,101,101,57,57,101,101,57,57,57,57,93,107,94,101,101,101,101,0,0,0,0,101,101,101,101,101,101,101,101,101,49,101,101,57,101,97,97,97,80,97,97,97,100,97,97,97,80,97,97,97,97,80,97,97,97,97,97,49,50,101,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,57,101,101,101,49,57,101,101,0,0,0,0,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,49,101,101,101,101,57,57,57,57,101,80,97,55,101,57,101,101,101,57,57,101,101,57,57,101,101,57,101,97,97,101,0,0,0,101,101,101,101,101,101,101,101,101,101,49,101,57,57,101,57,101,101,101,101,101,101,101,101,101,101,101,101,57,101,101,101,101,101,101,101,49,49,101,57,52,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,57,101,101,101,49,101,101,101,0,0,0,0,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,49,101,101,49,101,57,49,101,101,101,101,101,101,101,57,101,101,101,101,57,101,57,101,101,101,101,101,101,101,101,101,0,0,0,101,101,101,101,101,101,101,101,101,101,49,101,57,51,57,57,101,57,101,101,101,101,57,57,101,101,101,57,101,101,101,101,101,101,101,101,49,49,101,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,57,101,101,101,49,57,101,0,0,0,0,0,101,101,101,101,101,101,0,0,0,55,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55,101,101,101,101,101,55,55,55,55,55,55,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,49,101,101,101,101,101,101,57,57,57,57,101,57,57,57,57,101,101,101,52,101,57,57,57,101,101,49,49,51,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,101,101,101,49,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,49,57,101,101,101,101,101,49,101,52,101,101,57,57,57,101,57,57,57,101,57,101,52,57,57,101,49,49,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,101,101,101,49,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,55,55,101,101,101,101,101,101,101,55,97,97,109,55,101,101,101,97,97,109,55,101,101,101,57,57,101,57,101,101,101,101,57,57,101,57,101,101,101,101,49,101,50,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,97,97,97,55,101,101,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,55,97,97,97,101,101,101,101,101,55,97,97,56,55,101,101,101,101,101,101,49,57,101,101,101,57,57,57,101,57,57,52,57,101,57,50,57,57,57,101,101,49,57,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,85,107,107,107,107,86,97,80,80,97,97,97,97,80,80,80,80,97,97,97,97,97,80,97,100,97,97,98,97,100,80,97,98,97,97,100,97,80,98,97,97,97,101,101,97,97,56,80,80,100,97,98,97,97,97,100,97,80,98,97,80,97,97,80,80,97,97,97,80,97,55,57,101,101,101,97,97,109,55,57,57,57,51,101,101,57,57,101,57,57,57,57,57,101,101,101,101,101,101,49,52,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,91,108,104,103,108,96,101,101,101,101,101,101,101,101,101,101,101,57,52,101,77,78,101,101,57,57,101,101,52,101,57,57,57,101,50,101,101,101,101,101,101,97,101,101,101,101,49,101,101,101,101,101,57,101,57,57,57,101,101,57,57,51,57,57,101,57,101,77,78,57,57,101,101,101,97,97,56,55,101,57,52,57,57,57,101,101,57,57,57,57,57,101,101,101,57,57,57,101,101,49,57,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,85,86,95,93,86,93,86,57,101,85,89,86,57,57,57,57,57,101,57,101,83,84,101,52,57,101,57,51,57,85,107,86,101,57,101,57,101,57,52,101,101,101,101,101,56,97,55,57,52,101,101,101,101,57,101,101,50,52,101,101,101,57,101,101,57,57,57,83,84,101,101,101,101,80,98,97,55,57,57,57,57,57,57,101,85,89,89,86,57,101,57,57,101,101,101,101,57,101,101,49,57,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,95,96,95,101,96,101,96,101,101,95,101,96,101,101,57,57,57,101,101,101,101,101,57,57,50,101,57,101,101,95,101,93,86,101,52,103,108,104,57,57,101,101,80,97,55,57,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,101,57,57,57,101,101,101,101,101,57,101,57,57,57,101,101,57,95,0,0,96,101,57,57,101,101,101,57,101,101,101,101,49,101,57,52,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,95,96,95,101,96,101,96,57,101,95,57,96,85,107,107,86,57,51,101,1,101,101,101,49,101,57,101,85,107,94,103,108,92,57,57,93,86,91,88,101,101,52,101,51,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,101,101,57,52,101,101,101,101,57,101,101,50,57,101,101,95,0,0,96,101,57,57,57,57,101,101,101,52,101,57,49,51,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,91,108,108,108,92,101,96,101,57,95,57,96,95,57,101,96,57,57,101,1,101,0,101,49,101,51,52,91,108,108,92,101,101,101,57,50,96,101,91,104,101,101,50,57,101,101,101,101,101,101,101,101,101,101,101,101,56,101,101,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,5,101,101,101,101,101,101,101,101,101,101,101,101,101,101,57,57,57,101,57,57,57,101,57,101,49,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,50,85,107,107,86,96,101,101,91,108,92,95,57,57,96,57,57,101,101,101,0,101,49,101,57,57,57,51,101,101,101,101,101,57,101,96,101,51,95,57,101,101,101,101,101,101,101,101,101,101,101,101,56,99,98,55,97,8,95,87,92,96,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,56,58,20,22,58,56,57,101,57,101,101,101,101,57,57,101,49,101,51,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,49,91,90,108,108,92,101,57,57,101,101,95,57,87,92,57,101,101,101,101,0,0,49,52,101,101,57,57,101,57,57,51,101,101,57,93,107,107,94,101,101,101,101,101,101,101,101,101,101,101,101,56,55,77,78,101,101,101,101,101,101,101,101,101,97,97,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,59,101,101,101,57,57,57,101,57,57,52,57,101,57,50,49,57,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,101,101,49,101,101,57,57,57,57,101,101,101,57,91,108,92,57,57,101,101,101,101,0,0,49,101,101,49,101,57,52,101,101,57,57,57,101,51,101,101,101,50,57,57,97,100,97,98,97,98,97,100,97,55,101,83,84,57,101,101,56,97,100,97,98,97,97,97,100,97,97,98,97,97,97,97,97,97,97,97,97,100,97,97,97,97,97,100,97,97,98,97,97,97,97,97,97,97,97,97,55,101,57,57,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,101,101,49,57,101,57,57,101,57,57,101,101,57,57,101,57,101,101,101,101,101,101,0,0,49,101,9,49,101,49,57,57,57,49,57,50,101,57,101,101,57,57,57,57,57,101,101,50,52,101,101,50,101,101,51,101,57,57,101,101,49,52,101,101,101,57,101,57,57,57,101,101,57,57,51,57,57,101,101,101,101,101,57,101,57,101,57,57,57,101,101,57,57,51,57,57,101,101,101,101,57,57,101,52,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,49,50,101,57,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,49,101,101,49,101,49,57,101,57,49,101,57,101,49,57,101,51,101,57,101,57,101,57,101,57,51,57,101,57,57,101,57,101,101,101,101,49,101,101,101,101,101,57,101,101,50,57,101,101,101,57,101,101,57,52,101,101,101,101,57,101,101,101,101,57,101,101,50,57,101,101,101,57,101,101,57,57,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,55,1,101,101,101,49,101,101,101,49,101,101,101,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,50,101,101,49,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,57,101,101,101,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,55,55,55,55,55,55,55,55,55,55,55,0,0,0,0,0,0,101,101,101,101,1,101,101,55,55,55,55,55,55,55,55,55,55,49,55,55,55,55,55,55,55,55,55,55,55,101,101,101,101,101,101,49,57,101,101,101,49,101,57,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,1,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,101,101,101,101,101,101,49,50,57,101,101,49,101,51,57,101,55,55,55,55,55,55,55,55,55,55,55,55,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,58,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,101,101,101,101,101,101,49,101,57,101,101,49,101,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,56,97,99,98,109,100,97,80,98,97,97,100,97,97,98,97,99,80,100,97,97,98,80,97,100,101,0,101,101,101,109,98,97,99,97,97,97,97,56,97,100,97,101,101,0,0,0,0,101,101,101,101,101,56,97,55,57,57,101,49,49,101,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,101,101,49,101,57,57,57,101,103,104,101,101,101,101,101,52,101,57,57,57,101,50,101,101,101,101,101,101,49,101,57,57,50,101,57,97,55,57,101,101,101,101,101,101,101,101,101,101,101,101,101,49,52,57,101,101,101,49,49,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,56,101,57,57,49,57,101,57,57,52,96,95,101,57,57,57,85,107,86,57,57,51,57,57,101,101,101,101,101,101,49,57,51,101,57,57,101,51,101,101,57,101,97,97,97,97,97,97,101,101,56,97,97,55,57,57,101,101,101,49,49,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,51,56,80,55,52,57,103,108,108,92,95,101,57,57,51,91,88,96,57,57,57,57,101,101,101,101,101,56,97,55,57,57,101,101,101,101,101,49,49,101,101,52,57,51,57,101,101,101,101,49,51,57,57,50,57,101,101,101,101,49,101,101,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,101,57,101,57,50,93,107,86,57,95,103,104,57,57,57,95,96,52,101,101,57,57,101,101,101,101,49,101,52,50,57,57,101,101,101,80,101,49,52,101,101,101,57,101,101,97,97,97,55,101,57,101,101,101,101,101,101,101,49,101,57,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,101,57,57,57,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,57,52,57,57,101,101,101,96,57,91,92,95,101,57,85,94,96,57,57,57,101,57,101,80,99,97,55,77,78,57,57,101,101,101,101,101,101,101,101,101,101,101,49,101,52,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,101,57,0,0,0,0,0,0,0,0,56,80,80,80,97,80,80,80,100,80,80,97,80,99,80,80,80,80,98,80,97,80,80,80,80,97,80,80,80,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,57,101,101,51,57,57,93,107,89,107,94,57,57,91,90,92,57,57,57,101,51,57,101,101,101,101,83,84,101,101,101,101,101,101,101,101,101,101,101,101,101,49,52,101,101,50,101,101,51,101,97,97,97,97,97,97,97,55,51,57,57,0,0,0,0,0,0,0,0,49,57,57,57,101,57,101,57,57,57,101,57,57,101,101,101,57,57,57,101,57,101,57,57,57,101,57,57,52,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,51,101,57,52,101,101,101,101,101,57,52,101,101,101,101,57,101,101,57,57,50,57,57,101,57,57,57,51,57,52,57,101,101,101,101,101,101,101,101,101,101,101,101,49,57,51,57,101,57,57,101,57,52,101,101,50,101,101,51,101,57,57,101,0,0,0,0,0,0,0,0,49,57,57,57,101,57,57,57,101,57,101,101,101,101,57,85,89,89,86,57,101,57,101,57,57,57,101,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,57,101,101,101,101,101,49,101,57,57,101,101,101,101,49,101,101,101,101,49,101,101,57,101,57,101,57,57,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,52,101,101,101,101,57,57,51,57,101,57,57,101,57,101,101,57,0,0,0,0,0,0,0,0,49,57,57,57,101,101,101,57,57,57,101,101,101,57,57,95,0,0,96,57,101,57,101,57,57,57,101,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,101,101,101,101,101,101,49,101,101,101,80,80,97,55,101,101,101,101,49,57,50,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,101,101,55,0,0,0,0,0,0,0,49,57,57,101,57,57,57,101,101,57,50,57,57,57,101,95,0,0,96,101,57,101,101,57,57,57,101,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,50,101,57,101,101,101,101,101,101,101,49,101,101,101,101,101,101,101,101,101,49,101,101,100,80,97,98,97,101,101,101,101,101,101,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,52,101,57,55,0,0,0,0,0,0,0,49,101,101,57,57,57,57,57,101,101,57,57,57,101,57,57,101,101,101,57,57,101,57,52,57,101,57,57,101,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,101,57,101,101,101,101,101,101,101,101,101,55,55,55,55,55,55,101,101,101,49,101,52,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,49,57,57,101,55,0,0,0,0,0,0,0,49,101,101,57,51,57,101,57,57,57,57,101,101,57,101,101,57,57,101,57,57,57,101,57,57,57,57,101,52,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,101,51,52,101,101,101,101,101,101,101,101,55,55,55,55,55,55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,49,57,101,57,55,0,0,0,0,0,0,0,49,101,101,101,101,101,57,101,57,101,57,57,57,101,57,57,57,57,57,57,57,57,57,57,101,101,101,52,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,101,57,57,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,49,57,57,52,55,0,0,0,0,0,0,0,49,57,57,57,57,57,57,57,101,57,57,101,57,101,101,101,101,101,101,57,101,101,101,101,52,57,52,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,52,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,80,101,101,101,101,101,101,101,101,101,0,0,80,0,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,101,0,0,0,0,0,0,0,0,49,57,57,57,101,57,57,57,57,57,57,57,101,57,57,52,57,101,57,57,57,52,52,52,57,57,57,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,101,57,101,97,97,100,97,98,97,97,80,99,97,97,98,97,80,80,100,97,97,98,97,99,80,100,97,97,80,100,97,97,98,97,99,97,80,97,97,97,97,97,97,97,97,97,80,97,98,97,97,100,80,80,99,97,97,101,101,49,101,57,57,0,0,0,0,0,0,0,0,49,101,101,101,101,101,101,101,101,101,101,57,57,101,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,57,101,101,101,101,101,101,101,57,101,52,101,101,101,101,101,57,101,57,101,57,101,101,101,101,57,101,101,101,101,101,101,101,101,101,101,97,101,101,101,101,101,101,56,101,101,101,57,101,57,57,52,101,101,101,101,101,49,101,101,101,101,0,0,0,0,0,0,0,57,57,57,57,57,57,57,57,57,57,101,101,57,57,57,57,57,57,57,57,57,57,57,57,101,101,57,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,52,50,57,57,87,108,90,108,90,108,88,57,101,101,50,101,57,57,57,101,51,57,101,101,101,101,101,101,57,57,57,101,57,52,57,57,101,101,101,97,80,101,101,101,56,55,101,57,57,51,57,57,57,56,101,109,101,101,101,49,51,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,101,101,57,101,101,57,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,57,57,57,57,96,85,107,107,107,107,94,57,51,57,101,57,57,57,50,57,57,101,57,57,101,51,101,57,101,57,101,57,101,57,50,57,57,101,57,101,101,98,97,100,55,101,101,57,57,57,57,97,97,55,101,49,97,101,101,49,57,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,57,101,101,57,57,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,57,57,57,105,106,101,101,101,101,101,57,101,101,101,49,101,101,57,101,101,57,101,57,51,57,52,101,57,101,57,52,57,103,108,108,108,104,57,57,101,57,101,101,101,50,101,52,101,101,57,57,57,101,57,49,101,101,101,49,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,101,101,101,57,57,101,101,101,49,57,101,101,101,101,49,101,101,101,101,49,101,57,57,57,57,101,57,57,49,57,57,101,96,51,101,101,91,108,104,57,103,108,108,108,104,57,57,77,78,101,57,57,101,97,55,101,101,101,49,101,51,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,101,101,101,101,49,57,101,101,101,101,49,101,101,101,101,101,49,57,101,101,101,101,101,101,49,101,101,101,101,101,49,101,57,52,93,86,101,101,49,101,91,108,92,101,101,49,95,57,57,83,84,101,51,57,101,57,101,101,101,101,49,101,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,101,101,49,101,101,97,80,97,55,101,101,80,80,97,55,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,57,57,96,97,97,55,101,51,52,101,101,97,55,95,101,57,57,50,57,57,101,101,101,57,101,101,101,49,101,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,101,49,101,57,101,101,57,101,57,57,57,101,101,57,101,101,101,0,0,101,101,101,101,101,101,101,56,55,50,101,101,101,93,107,107,107,86,101,101,49,85,107,107,94,50,101,101,101,101,49,101,52,101,101,57,101,49,49,101,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,0,101,101,101,101,101,101,101,101,49,101,101,50,52,101,101,50,101,96,51,97,55,95,57,57,57,101,101,101,101,101,49,101,57,101,57,57,101,49,49,57,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,49,51,57,101,57,51,57,101,57,93,107,107,107,94,57,57,50,57,101,101,101,101,49,57,101,57,57,57,101,49,49,50,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,0,101,101,101,49,101,101,50,52,101,101,101,49,101,57,52,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,56,97,97,97,97,97,97,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,49,101,101,101,57,101,101,101,49,101,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,49,57,51,57,57,101,101,101,49,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,50,57,57,101,101,101,101,49,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,97,97,97,56,97,97,97,56,97,98,80,97,97,80,97,97,98,97,99,97,100,80,97,97,100,80,97,100,97,97,97,97,97,97,97,97,97,97,56,97,80,97,55,57,101,101,57,101,101,101,49,101,50,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,101,101,101,49,101,101,101,49,101,101,101,101,101,57,101,57,101,57,101,101,57,57,101,101,52,101,57,57,57,101,97,101,101,101,101,101,56,101,49,101,101,101,101,101,57,101,101,101,101,101,49,57,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,97,97,55,101,50,101,57,57,57,101,51,57,101,101,101,57,101,57,51,85,107,107,86,101,57,101,101,56,101,109,101,49,97,55,57,50,57,101,101,52,101,57,101,101,101,49,101,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,101,101,101,101,101,97,56,80,100,97,80,98,97,55,101,101,57,101,57,101,57,57,57,50,57,57,101,57,57,101,50,101,57,101,91,104,101,96,57,101,101,97,55,101,49,97,55,101,57,57,101,57,57,101,57,101,101,101,101,101,49,57,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[97,109,80,97,98,97,97,55,101,57,101,57,101,57,101,101,57,101,50,101,101,101,101,101,101,101,101,101,49,101,101,101,57,101,85,89,94,101,96,101,57,52,101,101,97,55,101,87,108,88,101,101,101,101,101,57,101,57,101,101,101,49,57,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,52,101,101,101,101,101,57,57,101,51,57,101,101,57,57,101,101,101,50,52,101,101,101,101,101,101,49,101,101,101,51,52,91,108,108,108,92,57,101,101,57,101,101,101,101,96,85,94,51,57,52,101,101,57,50,57,101,101,49,49,57,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,101,50,101,57,57,57,50,57,57,101,57,57,101,101,101,51,57,101,57,101,101,101,101,101,101,101,101,49,101,57,57,57,51,101,101,57,101,101,57,57,101,101,57,101,96,95,57,57,57,101,101,101,101,57,101,101,101,49,49,50,57,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,51,57,101,57,57,57,57,57,57,101,57,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,87,108,108,108,92,91,88,101,57,57,101,101,101,101,101,101,101,49,49,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,101,101,101,57,57,57,101,101,101,101,101,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,96,85,107,89,89,107,94,57,101,57,101,101,101,101,101,101,101,101,49,101,101,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,101,101,57,101,101,50,57,101,101,101,101,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,57,93,94,101,101,49,101,101,57,101,51,101,101,101,101,0,101,101,101,49,57,101,52,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,50,101,101,101,101,49,101,101,101,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,55,101,57,101,101,97,97,55,57,57,50,57,57,101,101,101,101,0,101,101,101,49,101,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,101,101,101,101,101,49,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,55,55,55,101,101,101,101,101,101,101,101,101,101,101,101,0,0,101,101,101,49,101,51,57,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,0,0,0,0,0,101,101,49,49,101,57,101,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,49,52,101,57,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,49,101,101,101,101,101,97,97,97,97,97,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,101,55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,101,97,80,97,99,97,80,80,80,97,101,101,101,97,109,80,97,80,97,101,101,101,101,56,97,97,80,97,97,101,101,101,56,97,97,80,97,80,97,97,97,100,97,97,98,80,97,97,97,97,97,80,97,97,97,97,97,101,49,57,57,57,55,0,0,0,0,0,0,0,0,97,97,56,97,80,97,97,97,56,97,100,80,97,97,100,80,97,100,97,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,51,57,101,101,57,57,101,101,101,101,101,101,101,101,49,52,101,57,101,101,101,101,101,49,52,57,57,57,101,97,97,97,55,101,101,57,101,51,101,101,101,57,101,57,101,101,101,57,101,50,101,57,57,57,57,101,101,101,49,101,101,57,0,0,0,0,0,0,0,0,0,0,0,49,101,57,101,101,57,49,101,101,101,101,101,57,101,57,57,101,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,57,57,57,57,57,57,52,57,51,97,97,80,97,97,55,57,57,50,101,97,97,97,97,55,57,57,101,57,101,101,52,57,57,57,57,57,57,57,101,57,101,57,101,57,52,57,101,57,57,57,57,57,57,51,57,57,101,101,49,101,57,101,0,0,0,109,97,99,97,97,97,98,97,55,57,97,101,52,57,49,57,57,101,52,57,101,57,50,57,57,101,97,80,98,97,97,100,80,97,80,97,97,97,98,97,100,97,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,101,57,57,57,101,101,101,101,57,57,101,57,57,101,101,101,57,101,101,101,51,101,57,57,57,57,57,57,101,101,101,101,57,101,57,57,57,57,57,101,101,101,57,57,57,101,57,57,101,101,101,57,101,57,57,101,101,101,49,101,101,57,0,0,0,49,57,57,57,57,57,57,57,57,57,57,57,56,97,55,101,101,101,57,101,57,57,52,101,77,78,57,57,101,57,57,57,57,57,57,57,51,57,57,57,101,101,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,52,57,101,101,101,101,101,101,49,57,50,57,57,101,101,101,101,101,49,57,101,57,57,50,57,57,51,57,101,101,101,49,57,50,57,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,57,101,101,101,101,101,101,49,51,57,57,0,0,0,49,57,57,50,57,57,51,101,57,57,50,97,55,51,101,101,57,57,51,57,57,57,101,101,83,84,57,101,57,52,57,101,101,101,50,101,57,57,57,57,101,101,0,0,0,0,56,0,0,0,0,0],
				[101,49,101,101,101,101,101,101,101,101,101,101,49,51,57,57,101,101,101,101,101,101,49,101,101,57,57,101,101,101,101,101,101,101,101,49,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,49,101,57,57,101,101,101,101,101,101,49,101,57,57,0,0,0,49,57,57,101,57,57,57,57,52,57,101,101,57,101,57,57,101,101,57,101,57,50,57,101,101,101,101,57,57,57,57,101,101,101,52,57,57,57,101,57,57,57,0,56,0,0,49,57,57,0,0,0],
				[101,49,101,101,101,101,101,101,101,101,101,101,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,56,97,80,97,97,80,97,97,55,57,57,101,50,97,80,97,97,101,49,101,101,57,0,0,0,49,52,101,101,57,57,57,101,57,57,52,57,101,57,50,57,101,51,57,57,57,101,49,57,101,101,101,57,57,57,101,57,57,57,101,0,49,101,101,57,57,57,98,55,0,0,49,101,57,0,101,0],
				[101,56,100,97,97,98,80,97,101,101,101,97,56,80,97,80,97,100,97,80,97,97,97,100,80,97,98,97,80,97,97,98,97,97,100,80,97,99,97,97,97,97,97,55,101,50,101,57,101,57,101,57,57,57,57,101,101,101,101,101,101,49,57,101,101,0,0,0,49,101,101,57,57,101,57,101,101,101,101,57,57,101,77,78,101,101,101,57,57,101,49,101,101,101,57,57,101,57,101,101,101,56,57,97,55,101,57,57,101,57,57,51,0,0,49,101,101,101,0,0],
				[101,49,77,78,50,101,101,101,101,101,101,56,55,57,57,57,52,101,101,101,51,101,57,57,57,57,57,57,57,101,101,101,57,101,57,57,52,101,57,51,57,57,101,57,57,57,57,57,57,57,51,57,57,57,57,101,101,57,57,97,97,55,52,101,57,97,80,97,55,101,101,57,57,57,101,57,57,49,57,101,57,50,83,84,101,101,57,101,57,50,49,101,101,101,57,57,57,101,57,57,52,49,101,101,101,49,57,57,57,57,57,0,0,0,49,57,101,0,0,0],
				[101,49,83,84,101,101,50,52,99,97,97,57,57,57,57,57,101,57,57,57,57,101,57,57,50,57,57,51,101,101,57,57,51,57,57,57,101,101,57,57,57,101,57,52,57,101,101,101,50,101,57,57,57,57,101,57,57,57,101,101,101,101,57,57,101,57,57,101,57,57,51,101,101,57,57,101,57,49,57,57,57,101,101,57,57,51,57,57,57,101,72,49,57,51,101,101,57,57,101,57,57,49,57,57,57,49,101,101,57,57,0,0,0,0,49,101,57,0,0,0],
				[101,49,101,101,51,57,101,57,57,57,52,57,101,57,101,101,101,101,49,57,101,101,57,57,101,101,101,101,57,57,57,57,101,101,57,57,101,101,57,101,57,101,101,101,101,101,57,57,57,101,101,101,101,57,101,57,101,101,101,101,101,101,57,101,57,101,57,57,57,57,57,101,101,57,57,109,0,49,101,101,57,101,57,52,57,57,57,101,101,101,72,49,57,57,57,101,101,57,57,57,57,57,101,52,49,49,57,101,101,57,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,55,55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,57,101,101,101,101,101,101,101,101,101,49,57,57,52,0,0,0,0,0,0,57,101,101,57,55,0,49,101,0,101,101,57,101,101,101,57,101,101,101,101,49,101,101,101,0,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,57,57,101,101,101,101,0,0,55,55,55,0,0,0,101,101,101,101,101,101,101,55,101,101,101,101,101,101,101,101,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,101,101,101,101,101,101,101,101,0,55,55,50,57,101,44,0,0,0,0,0,0,0,0,0,97,97,56,100,97,101,57,57,57,57,101,101,101,52,101,57,57,49,57,101,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,57,52,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,56,98,97,97,97,0,0,0,0,0,56,97,97,97,61,0,49,101,101,101,57,57,57,101,57,101,57,101,57,101,52,49,101,101,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,49,101,57,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,101,101,101,101,101,101,101,101,101,97,101,101,97,101,97,101,0,0,49,57,57,101,57,97,100,80,97,97,97,97,100,97,97,97,97,97,100,80,97,97,97,97,100,80,101,56,97,101,109,55,57,101,0,63,56,100,80,97,98,97,97,100,98,97,97,100,80,97,98,97,97,97,97,97,97,100,80],
				[0,49,57,57,101,97,99,80,97,97,97,98,97,97,97,100,97,80,97,97,97,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,109,100,97,98,97,100,80,97,98,97,97,100,97,80,98,80,98,97,57,50,49,57,57,101,57,57,101,101,57,52,52,101,57,57,57,57,57,57,101,101,57,52,52,101,57,101,57,49,57,50,49,50,57,101,97,97,55,50,57,101,51,57,57,57,101,101,101,101,57,101,57,57,57,52,57,101,101,57,101],
				[0,49,57,101,101,52,101,57,52,101,101,51,57,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,101,101,49,101,101,101,52,101,57,57,57,101,50,101,101,101,101,101,101,101,101,57,49,57,57,57,57,57,50,57,57,101,87,104,57,57,101,57,80,80,80,80,80,97,97,97,97,100,57,49,57,101,49,57,101,101,101,101,101,57,101,101,101,57,57,57,52,57,101,101,57,101,57,57,101,57,57,52,57,101,57],
				[0,49,101,57,57,87,108,108,108,88,57,57,101,101,52,101,57,57,101,101,101,101,0,0,0,0,0,0,101,101,77,78,101,101,101,0,0,0,101,101,101,49,50,101,51,57,85,89,86,50,57,101,87,108,88,52,101,51,101,50,57,49,101,101,57,101,57,101,57,87,90,92,95,57,101,101,57,57,101,51,101,101,101,57,57,57,57,57,101,101,101,49,101,101,101,101,101,101,57,101,101,101,57,57,101,57,57,52,57,101,57,101,57,101,101,101,101,57,57,101],
				[0,49,51,57,101,96,52,57,101,95,57,101,57,57,101,57,101,52,101,101,101,101,0,0,0,0,0,0,101,101,83,84,101,101,101,101,101,101,101,101,101,49,85,86,101,101,95,51,93,86,101,52,96,101,95,57,57,101,50,101,101,50,57,57,50,57,57,101,57,93,86,85,94,50,57,57,101,101,101,51,101,101,101,57,101,101,101,97,97,97,97,55,101,101,57,101,101,101,101,57,57,51,101,57,101,101,101,101,57,57,101,57,101,57,57,52,57,101,57,50],
				[49,49,57,101,57,93,86,50,101,91,88,57,101,101,57,57,101,57,101,101,101,101,101,101,21,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,95,93,89,89,94,101,57,96,57,57,93,86,91,88,101,101,101,0,0,101,57,57,101,57,57,57,57,101,93,94,57,101,57,57,57,57,101,52,57,101,57,50,50,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,57,57,51,101,93,89,89,89,94,57,52,57,101,57,50,57,101,97,97,100,98,99,80,98,97,100,97,98,97,80,97,100,98,97,99,80,100,97,97,55,91,108,90,108,90,108,88,96,52,57,87,92,57,91,88,52,101,57,57,57,57,57,101,57,57,57,57,57,57,101,57,101,57,57,101,101,101,57,101,57,57,52,101,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,52,57,57,101,101,51,57,101,101,57,51,52,57,57,101,101,101,57,50,101,52,57,57,101,57,50,51,52,57,101,52,50,57,51,101,57,101,50,101,101,52,101,57,51,101,101,91,92,101,57,96,85,107,89,94,57,52,57,57,101,57,101,57,57,101,51,101,57,57,57,57,57,57,101,101,57,57,51,57,57,57,101,101,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,57,101,57,52,101,101,57,101,49,101,57,57,101,101,51,57,101,57,57,51,57,50,52,101,50,57,101,57,52,51,101,57,52,57,50,51,101,101,101,101,57,57,57,57,101,57,57,51,101,101,93,94,57,57,57,101,101,57,101,101,57,57,101,57,57,57,57,52,57,101,101,57,101,57,57,101,101,57,101,57,50,57,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[49,49,51,101,57,57,101,57,57,101,49,51,101,57,57,101,52,51,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,49,57,101,101,57,52,101,101,57,57,57,101,51,57,51,57,57,57,101,101,57,57,57,101,57,57,57,101,57,57,52,57,101,57,50,57,101,51,57,57,50,57,57,50,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,57,57,101,101,49,101,101,49,57,101,57,101,49,57,57,57,101,101,101,101,101,101,55,55,55,55,55,55,55,55,55,101,101,101,101,101,101,101,49,101,51,101,52,57,101,50,57,51,57,57,101,57,101,57,57,101,101,101,57,57,57,57,57,101,57,50,57,57,101,57,57,101,77,78,101,101,101,57,101,50,57,101,50,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,101,101,101,101,49,101,101,101,49,101,49,101,49,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,101,49,50,57,101,57,101,101,101,101,101,101,101,101,101,52,101,50,57,101,57,57,101,57,57,57,57,101,101,57,57,57,101,57,50,83,84,101,101,57,101,101,101,57,101,101,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,49,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,55,55,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,57,57,101,101,101,57,57,101,57,57,57,57,57,101,101,57,57,51,57,57,57,101,57,57,101,57,57,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,55,55,55,55,55,55,55,55,55,101,101,101,101,101,101,101,101,55,0,0,57,57,57,101,101,57,57,57,57,101,101,101,57,101,57,52,57,57,57,101,101,57,57,101,57,57,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 120,
			"height": 120,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "foreground",
			"width": 120,
			"height": 120,
			"linkWithCollision": true,
			"visible": 1,
			"tilesetName": "media/smokeman_level.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[25,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[43,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,43,44,0,0,0,0,0,0,0,0,0,37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,41,41,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,20,15,15,15,15,15,15,16,14,15,15,45,44,15,15,15,15,1,15,15,15,15,15,10,15,15,15,15,15,21,15,4,15,43,48,48,46,15,15,15,15,15,15,15,16,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,1,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[36,0,0,0,0,0,0,0,0,0,0,0,0,37,38,25,0,0,0,0,0,0,0,0,0,0,0,0,0,37,38,29,1,0,0,37,41,38,0,37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,14,15,22,43,5,7,14,15,5,16,0,0,0,0,0,0,0,0,2,43,46,35,14,15,16,47,102,42,7,43,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,37,41,41,14,15,15,16,38,1,1,14,16,5,17,6,5,37,12,41,38,13,1,1,5,1,1,14,74,16,1,1,1,25,1,43,48,46,14,15,16,1,37,38,1,1,8,1,14,41,15,41,38,1,0,0,0,14,22,3,15,15,1,15,15,15,15,15,1,15,15,15,15,15,37,24,38,15,15,15,8,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,5,15,15,15,15,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,43,48,48,46,8,1,43,44,5,10,37,38,76,17,11,18,43,17,48,44,19,1,14,15,16,1,1,1,1,1,14,15,16,1,1,1,9,1,1,1,1,43,44,1,9,14,16,1,18,1,43,44,58,0,0,0,58,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,43,36,46,0,0,0,0,0,0,0,0,0,13,14,21,22,0,0,0,0,0,0,17,0,0,3,1,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[3,14,16,1,1,14,16,14,15,17,16,43,44,17,16,17,1,14,16,1,1,1,1,1,17,14,15,15,15,15,16,1,1,1,1,1,1,1,37,38,1,1,1,1,1,1,1,37,41,38,1,1,70,69,0,0,0,65,70,1,0,0,0,0,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,61,62,62,64,37,38,68,62,62,66,66,63,1,1,1,1,14,15,15,15,15,15,15,15,15,15,15,16,1,1,1,1,14,15,15,15,15,47,42,15,15,15,15,15,15,15,15,15,15,16,1,59,64,0,0,0,72,60,1,15,15,15,15,15,15,15,15,27,27,27,27,15,15,15,15,15,15,15,15,15,15,15,16,14,15,15,15,15,15,15,15,15,15,15,15,15,15,16,6,1,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,71,43,44,37,38,23,72,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,44,0,0,0,0,0,0,0,43,48,44,0,0,70,72,0,0,0,65,67,1,1,14,15,15,15,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,43,44,29,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,69,0,0,0,65,69,14,16,58,3,1,1,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,5,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,0,0,0,0,0,0,0,0,35,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,59,60,0,0,0,59,60,37,15,59,62,62,63,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,17,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,37,41,40,1,1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,16,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,47,25,42,1,1,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,5,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,47,102,42,1,1,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,11,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,26,27,28,0,0,37,38,1,14,15,15,15,15,16,1,1,65,72,1,14,15,15,15,15,38,25,1,0,0,0,0,0,0,14,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,47,1,42,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,61,54,0,0,0,58,11,0,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,3,1,1,0,0,43,44,1,31,1,1,56,100,97,58,56,72,72,56,98,97,97,99,81,17,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,38,38,1,42,1,1,1,1,1,37,38,1,14,15,16,0,0,0,0,0,61,62,62,62,68,62,62,62,62,62,62,62,62,62,62,62,68,62,62,62,64,11,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,8,24,1,0,0,1,24,1,56,1,1,49,101,61,68,62,68,64,49,101,51,57,57,17,1,1,23,0,0,0,0,0,0,0,0,0,0,20,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,44,48,44,1,37,38,1,1,43,5,7,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,30,5,0,0,10,30,1,49,14,16,49,52,97,97,97,97,71,49,57,57,101,57,1,1,1,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,1,1,1,47,42,1,1,5,17,6,1,1,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,17,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,6,36,12,0,0,1,36,1,49,1,1,1,37,41,38,49,57,97,55,1,37,38,1,1,1,1,29,0,0,23,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,1,1,1,43,44,1,1,76,17,11,1,1,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,11,1,17,0,0,1,1,1,6,14,15,16,43,48,46,49,57,57,57,1,43,5,7,1,3,1,29,1,1,29,37,38,29,1,1,5,37,74,15,15,15,16,1,14,79,15,41,74,15,16,13,32,33,34,7,14,15,16,1,1,1,1,1,1,16,17,16,17,1,1,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,11,37,38,0,0,39,41,38,75,1,25,1,1,1,9,1,1,1,1,1,5,17,6,1,1,1,35,1,1,35,45,44,35,1,5,17,17,1,1,6,1,10,1,1,2,1,17,37,38,1,1,7,1,2,1,1,5,32,33,34,1,6,13,10,1,1,2,1,1,1,1,0,0,0,0,14,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,17,43,44,0,0,47,102,42,11,15,16,1,1,1,1,1,1,1,1,1,76,17,11,1,1,1,1,1,37,38,1,4,1,1,76,14,74,16,14,11,15,16,1,14,21,15,15,47,42,15,15,15,16,13,1,1,76,14,74,16,14,75,15,16,1,25,20,15,1,1,0,0,0,0,37,38,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,43,48,44,43,15,15,15,15,15,15,15,15,15,15,16,17,16,17,1,14,21,16,13,43,44,1,7,1,8,17,19,1,1,9,17,1,1,1,1,1,1,1,43,44,1,1,1,1,1,1,1,17,19,1,1,9,17,8,1,1,3,1,1,1,0,0,0,0,0,47,14,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,12,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,43,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,3,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,17,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,38,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,15,73,74,15,15,15,22,14,48,15,15,15,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,15,16,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,4,9,26,33,28,1,4,1,1,3,15,16,20,15,15,15,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,61,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,79,16,14,74,22,14,21,22,19,0,3,15,15,22,58,20,15,15,15,15,15,15,15,15,5,15,15,5,15,15,15,15,15,15,15,24,15,15,15,15,15,15,24,15,15,15,15,15,15,16,11,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,56,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,41,40,32,33,34,9,13,19,0,0,0,0,6,0,61,62,60,56,0,0,0,0,0,0,0,0,17,0,0,11,0,0,0,0,0,0,0,30,0,0,0,0,0,0,30,0,0,0,0,0,0,0,11,11,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,37,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,17,61,62,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,45,46,19,1,13,8,1,0,0,0,0,0,12,14,15,15,15,15,15,15,15,15,15,16,14,15,15,15,15,17,15,15,16,14,15,15,15,36,16,59,62,62,60,14,36,15,15,15,16,14,15,16,18,17,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,47,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,53,63,56,97,72,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,47,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,65,63,61,62,64,1,6,8,5,6,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[24,43,44,0,0,0,0,0,0,0,0,0,0,0,0,0,14,15,16,58,65,63,19,1,72,9,45,79,46,12,0,0,0,72,0,0,0,70,0,0,0,0,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,47,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,1,1,1,20,15,15,15,15,15,21,15,15,15,15,38,7,53,66,66,64,56,99,97,72,2,56,58,19,18,53,62,54,72,53,67,54,72,67,62,62,62,62,62,62,62,66,62,62,66,63,19,3,4,5,9,0,0,0,11,5,0,0,0,0,37,22,39,38,6,37,41,15,73,15,41,15,15,22,6,14,15,15,15,16,26,33,28,32,27,34,14,15,15,79,15,41,74,15,16,13,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[36,1,1,14,15,15,15,16,1,14,22,1,37,38,1,11,1,69,68,69,65,62,63,3,72,13,49,59,62,62,69,62,65,69,64,62,69,62,60,32,33,34,10,32,27,34,72,1,1,72,3,14,16,2,76,8,0,0,0,12,11,0,0,0,0,11,6,45,44,82,47,42,14,15,16,17,15,73,15,12,15,16,10,1,8,1,2,1,7,1,2,39,38,1,2,1,17,37,38,1,1,14,15,15,16,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,14,74,16,14,6,15,16,1,25,19,1,43,44,1,17,1,71,56,71,59,62,62,62,64,58,49,99,97,98,59,62,68,66,62,62,60,65,69,62,62,62,62,62,62,62,66,62,62,66,63,1,2,13,82,1,0,0,0,76,11,0,0,0,0,11,43,15,16,17,45,44,20,15,15,15,15,21,22,18,15,15,15,16,1,10,13,3,1,1,19,43,44,14,21,15,16,47,42,14,15,15,15,15,15,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,19,1,58,9,17,8,1,1,3,1,26,33,28,1,10,1,1,1,1,1,1,1,1,59,66,67,54,3,1,1,1,1,71,1,1,1,71,72,7,19,1,3,4,61,62,69,62,62,64,1,53,54,1,18,4,0,0,0,17,11,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,0,0,59,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,59,60,59,63,1,6,0,0,0,0,0,0,0,71,0,0,0,0,2,31,1,71,1,1,71,4,59,60,9,0,0,0,0,0,3,17,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,61,67,62,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,1,31,12,0,0,0,0,0,0,0,0,0,0,0,0,19,13,1,4,1,1,1,2,32,33,34,0,0,0,0,0,37,38,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,0,72,61,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,1,3,1,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,40,19,0,0,0,0,0,0,53,63,47,42,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[19,0,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10,9,0,0,0,0,0,0,24,14,15,22,24,0,0,0,0,0,0,0,0,43,44,1,0,0,0,0,0,0,59,54,45,44,0,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,34,0,0,0,0,0,0,30,56,99,97,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,71,37,38,0,0,0,0,23,26,27,28,0,0,0,37,41,15,73,15,41,15,15,22,6,14,15,15,15,16,26,33,28,32,27,34,14,15,15,79,15,41,74,15,16,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,49,57,101,30,14,21,21,15,40,0,0,0,0,0,0,0,0,0,1,1,9,4,3,43,44,0,0,0,0,29,3,1,1,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,4,30,49,57,50,30,58,3,10,4,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,8,24,1,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,2,36,49,101,57,36,59,62,62,63,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,1,30,5,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[13,0,0,0,0,10,37,41,38,0,0,0,0,0,8,25,9,0,0,53,67,54,0,0,0,0,0,0,0,0,0,0,0,82,13,1,1,10,1,26,27,28,2,5,19,5,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,6,36,12,0,0,0,11,61,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[24,0,0,0,0,24,47,102,42,7,0,0,0,0,0,0,0,0,0,72,71,72,0,0,0,14,16,25,3,20,15,21,15,44,17,37,41,41,41,38,9,1,10,75,14,15,21,73,22,3,3,26,33,28,23,3,23,19,23,4,23,0,0,0,0,29,11,1,17,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,0,0,0,0,30,45,48,46,1,3,1,0,0,0,0,0,0,0,72,31,72,0,0,0,0,0,0,0,0,58,1,6,8,1,43,48,37,40,44,3,5,1,11,1,17,13,37,41,41,41,40,2,1,35,16,35,14,35,2,35,0,0,0,0,35,11,37,38,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,62,62,63,0,0,0,0,61,63,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,0,0,0,0,30,10,13,3,10,14,15,15,21,22,1,3,25,1,71,58,72,0,0,0,0,0,0,0,0,65,63,12,1,3,3,1,43,44,1,1,11,1,17,6,8,10,45,48,48,48,44,13,1,1,10,1,1,1,13,5,0,0,0,0,5,17,43,44,0,0,0,75,0,0,0,0,0,0,0,0,0,0,61,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,0,0,0,0,36,8,5,32,33,34,1,6,13,10,1,1,2,1,10,59,60,1,31,1,1,1,8,1,1,71,14,15,15,79,15,16,16,1,7,8,17,14,15,12,15,15,16,1,19,3,4,5,9,3,32,33,28,19,1,11,0,0,0,0,11,1,0,0,0,0,0,1,61,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,0,0,0,0,3,1,76,14,74,16,14,75,15,16,1,25,20,15,15,15,16,1,14,22,23,37,38,23,3,14,16,76,8,2,1,1,1,1,1,1,1,1,8,18,9,1,1,1,14,16,2,76,8,1,2,19,13,1,1,11,0,0,0,0,11,6,0,0,0,0,0,1,0,0,0,0,0,0,61,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,63,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[30,0,0,0,0,19,1,17,19,1,1,9,17,8,1,1,3,1,1,1,1,1,1,1,19,35,43,44,35,3,1,3,18,1,19,1,1,1,1,1,25,3,1,5,1,3,5,1,1,1,2,13,82,1,1,13,15,16,58,1,11,0,0,0,0,11,12,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,75,1,1,11,1,0,0,0,0,0,0,0,0,53,66,66,1,17,0,0,0,0,11,18,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,81,1,8,17,0,0,0,0,0,0,0,53,62,69,68,69,5,19,0,0,0,0,11,1,0,0,0,0,0,37,41,15,73,15,41,15,15,22,6,14,15,15,15,16,26,33,28,32,27,34,14,15,15,79,15,41,74,15,16,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,1,2,0,0,0,0,0,0,0,61,60,0,72,56,71,75,14,0,0,0,0,11,1,0,0,0,0,0,47,42,14,15,16,17,15,73,15,12,15,16,10,1,8,1,2,1,7,1,2,39,38,1,2,1,17,37,38,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,0,0,76,1,0,0,0,0,75,1,0,0,0,0,0,45,44,20,15,15,15,15,21,22,18,15,15,15,16,1,10,13,3,1,1,19,43,44,14,21,15,16,47,42,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,0,0,17,6,0,0,0,0,11,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,19,1,0,0,0,1,13,1,0,0,53,67,54,0,0,0,0,0,0,0,31,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,12,0,0,0,0,11,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,37,21,15,38,0,0,0,8,3,9,0,0,0,8,3,9,0,0,72,72,65,62,62,54,0,0,0,0,58,58,0,0,0,0,0,0,3,1,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,8,18,0,0,0,0,82,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,18,31,25,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,59,69,71,56,97,65,62,62,67,62,66,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,2,13,3,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,64,56,55,52,72,56,97,72,56,72,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,37,41,38,8,0,0,0,0,0,0,3,76,0,0,0,0,81,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,19,1,9,14,74,16,1,14,21,21,15,22,23,10,37,15,73,15,16,25,1,14,16,31,37,38,26,27,34,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,102,42,1,0,0,0,0,0,0,1,11,0,0,0,0,18,1,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[37,40,8,1,1,19,1,1,58,3,10,4,9,35,10,75,14,15,21,73,22,3,3,37,38,43,44,1,1,1,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,43,46,24,0,0,0,0,0,0,24,11,0,0,0,0,24,1,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[43,44,1,1,1,61,62,62,68,62,62,63,3,5,1,11,1,17,13,37,41,41,38,43,44,58,20,15,15,15,22,1,10,1,2,23,1,37,38,1,1,31,7,26,27,28,1,23,1,65,62,63,30,0,0,0,0,0,0,30,11,0,0,0,0,30,1,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,39,38,1,0,0,0,0,0,0,0,1,82,1,17,6,8,10,45,48,48,44,1,53,69,62,62,62,62,62,62,63,1,1,35,20,15,15,15,15,22,1,1,4,1,1,35,1,71,2,7,36,0,0,0,0,0,0,36,11,0,0,0,0,36,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,47,42,1,1,1,1,1,1,1,1,8,17,14,15,12,15,15,16,1,1,3,1,59,68,62,62,62,62,63,3,3,1,1,1,1,43,44,1,9,1,1,3,2,1,1,1,1,2,19,1,10,0,0,0,0,0,0,6,81,0,0,0,0,5,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,45,44,1,1,1,1,1,1,1,1,1,1,1,8,18,1,1,1,1,1,1,1,1,1,1,1,19,3,1,14,15,16,26,27,28,1,3,1,13,10,58,1,19,58,8,1,3,1,26,27,28,0,0,0,0,0,0,12,82,0,0,0,0,11,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,14,15,21,73,22,3,1,1,37,38,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,69,67,62,68,62,62,54,0,0,0,0,0,0,0,0,0,0,81,75,0,0,0,0,76,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,4,1,17,13,37,41,41,41,40,47,42,0,0,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,59,67,62,54,0,71,0,0,0,0,0,0,0,0,0,0,18,17,0,0,0,0,11,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,3,1,19,1,8,10,45,48,48,48,44,43,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,0,72,0,71,0,0,0,0,0,0,0,0,0,0,0,0,37,16,0,0,0,0,17,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[37,15,15,15,16,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,6,0,0,0,0,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,70,70,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,11,0,0,0,0,75,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,72,72,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,18,0,0,0,0,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,65,64,58,23,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,16,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,31,39,38,26,27,34,59,68,65,64,35,1,1,3,10,13,1,10,14,15,41,21,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,23,1,1,1,1,5,0,0,0,0,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[76,0,0,0,0,0,0,0,0,0,3,1,23,9,0,0,37,38,43,44,1,1,1,31,19,71,71,1,1,1,1,8,5,32,33,34,1,12,13,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,29,1,1,1,1,11,0,0,0,0,17,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,0,0,0,0,0,0,0,0,0,1,10,35,3,0,0,45,44,58,56,14,15,15,22,19,23,3,23,1,23,1,23,76,14,74,16,14,75,15,16,0,0,0,0,0,3,3,0,0,0,0,0,0,0,1,29,1,32,34,1,11,0,0,0,0,5,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,37,41,38,0,0,0,1,10,75,3,1,1,1,53,69,62,62,62,62,63,19,29,2,29,1,29,2,29,17,1,1,1,9,17,8,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,29,1,58,58,24,11,0,0,0,0,81,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,39,38,26,33,34,7,26,33,28,1,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,47,102,42,7,0,0,1,1,11,8,1,1,1,59,68,62,62,62,62,63,1,29,8,29,1,29,4,29,19,1,1,14,16,1,14,21,21,16,1,8,1,20,41,15,74,15,15,15,15,22,1,35,1,59,60,30,76,0,0,0,0,11,1,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,102,15,73,16,1,1,2,1,1,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,45,20,15,15,74,15,1,16,17,2,37,38,1,37,38,5,1,3,3,1,1,35,1,35,1,35,10,35,1,1,1,19,1,1,58,3,10,4,1,32,27,28,17,1,32,33,34,1,1,1,1,14,15,15,16,36,11,0,0,0,0,82,1,0,0,0,0,72,0,0,0,3,3,1,1,1,1,1,1,3,1,1,1,43,44,1,9,1,1,3,2,1,1,82,1,20,41,15,74,22,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[5,0,0,0,2,1,3,13,1,19,14,15,15,21,22,42,1,47,14,15,15,79,15,16,1,1,1,1,1,1,1,1,4,1,1,61,62,62,68,62,62,63,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,32,28,1,11,0,0,0,0,11,3,0,0,0,53,69,63,0,0,14,15,16,26,27,28,1,1,3,1,1,1,1,1,1,1,37,38,20,15,21,15,44,1,1,17,1,32,33,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
				[11,0,0,0,20,15,15,15,79,16,1,14,38,1,47,42,1,43,44,17,8,2,1,1,1,1,1,1,3,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,10,1,1,1,3,1,1,1,1,1,1,1,1,1,1,11,0,0,0,0,11,1,0,61,62,68,69,62,62,63,3,14,15,19,1,58,9,15,16,14,15,15,15,15,15,16,43,46,3,58,1,6,8,44,58,20,15,15,15,22,1,10,1,2,23,37,41,41,41,38,1,37,41,38,9],
				[12,0,0,0,0,0,0,0,0,0,0,0,11,1,47,42,1,0,0,0,0,0,1,10,1,1,0,0,0,0,0,0,19,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,42,0,0,0,0,18,1,1,61,62,62,68,62,62,63,1,0,0,0,0,59,54,0,0,0,0,0,0,0,0,0,0,0,0,65,63,12,1,53,69,62,62,62,62,62,62,63,1,1,35,47,102,102,102,42,2,43,102,42,1],
				[11,0,0,0,0,0,0,0,0,0,0,0,17,4,43,44,13,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,17,0,0,0,0,58,37,38,1,1,1,1,1,1,1,8,0,0,61,67,62,64,0,0,0,0,0,0,0,0,0,0,0,0,71,14,15,16,59,68,62,62,62,62,63,3,3,1,1,1,43,48,48,48,44,13,58,43,46,1],
				[75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,1,0,0,0,0,72,45,44,0,0,0,0,0,0,0,0,0,0,0,72,61,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,58,109,97,97,58,56,65,62,63,5],
				[11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,72,37,16,0,0,0,0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,69,67,62,62,68,63,71,2,7,17],
				[17,0,0,0,0,0,0,23,2,23,1,23,0,0,0,0,0,3,23,4,23,4,0,0,0,0,0,0,0,0,0,0,5,23,3,0,0,0,0,0,0,20,15,21,74,15,15,15,22,37,38,0,0,0,0,0,37,38,1,1,5,0,0,0,0,72,11,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,59,67,54,56,80,97,1,1,17],
				[1,0,0,0,0,0,0,35,25,35,31,35,0,0,0,0,0,3,35,6,35,3,0,0,0,0,0,0,0,0,0,0,12,35,3,0,0,0,0,1,37,22,8,19,14,15,16,4,1,43,44,0,0,0,0,0,43,46,1,1,11,0,0,0,0,71,12,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,71,0,72,72,31,70,70,25,1,1],
				[1,14,15,15,15,15,15,15,15,16,58,14,15,15,15,15,15,15,16,45,15,15,21,15,15,15,73,15,15,21,15,15,44,14,15,15,15,74,15,15,44,20,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,11,0,0,0,0,6,76,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,70,0,0,0,0,0,23,61,1,1,53,54,1,14,22,0,0,0,0,0,0,0,0,71,72,1,72,72,1,1,1],
				[3,0,0,0,0,0,0,0,37,40,65,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,17,0,0,0,0,17,43,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,0,0,0,0,0,35,56,58,56,72,72,0,58,97,0,0,0,0,0,0,0,0,70,72,58,65,64,58,37,38],
				[1,0,0,0,0,0,0,0,43,44,71,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,37,38,0,0,0,0,0,0,0,0,0,0,0,0,72,0,0,0,0,0,53,62,68,62,66,69,62,68,62,54,0,0,0,0,0,0,61,69,60,59,68,65,64,47,42],
				[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,43,44,0,0,0,0,0,0,0,0,0,0,0,0,65,54,0,0,0,0,71,56,97,97,59,64,56,97,97,72,0,0,0,0,0,53,62,68,63,31,19,71,71,43,44],
				[11,0,0,0,0,0,0,0,0,0,0,0,0,14,5,21,15,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,1,8,1,1,58,58,0,0,0,0,0,0,0,0,0,0,0,0,72,72,6,37,41,38,32,33,38,49,97,71,49,1,6,71,0,0,0,0,0,72,37,15,73,15,16,25,1,1,1],
				[17,0,0,0,0,37,41,41,38,1,8,1,1,9,11,2,8,10,1,1,1,1,1,1,1,1,26,33,28,1,26,27,28,1,26,27,28,1,1,23,23,1,37,38,10,1,31,7,1,39,38,26,33,34,7,26,33,28,1,1,1,0,0,0,0,5,2,8,10,1,1,13,10,58,1,72,65,62,63,6,0,0,0,0,0,0,1,37,22,72,72,17,43,102,42,58,0,46,49,57,97,55,1,17,9,1,1,1,14,16,71,75,14,15,21,73,22,1,6,13],
				[17,0,0,0,0,47,1,3,42,14,15,16,13,1,11,19,1,1,1,1,37,38,31,1,1,1,1,2,1,1,1,1,9,1,1,1,1,37,38,29,29,20,15,15,15,15,22,1,1,47,102,15,73,16,1,1,2,1,1,1,1,20,15,21,15,44,19,1,1,1,1,53,62,60,1,72,72,0,0,45,21,15,15,15,73,15,15,44,1,65,68,63,58,43,46,72,0,34,1,25,3,1,5,1,3,5,1,1,1,2,1,11,1,17,13,37,38,14,75,15],
				[23,0,0,0,0,47,10,102,42,1,20,15,15,15,44,1,1,3,1,1,43,48,21,15,16,1,1,19,1,1,1,1,1,1,1,10,1,47,44,35,35,1,43,44,1,9,1,1,1,43,44,1,9,1,1,3,2,1,1,1,1,0,0,0,0,0,1,1,3,1,1,59,62,62,62,68,60,39,38,26,33,34,15,15,73,15,15,44,1,72,65,63,65,62,63,72,0,2,9,1,10,1,26,27,34,1,9,1,1,3,1,17,6,8,10,45,44,9,17,8],
				[29,0,0,0,0,43,48,48,44,32,33,34,9,1,10,1,26,27,34,1,58,56,97,58,56,53,62,62,62,62,62,62,62,62,62,62,54,17,58,1,1,26,33,34,32,27,28,32,33,34,32,33,28,32,33,34,32,27,34,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,102,15,73,16,3,1,1,1,1,53,62,60,72,0,71,2,7,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,72,49,57,65,62,64,56,97,97,97,97,97,97,97,97,97,59,62,64,1,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,1,9,1,3,1,1,1,1,72,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,72,49,101,72,56,72,49,101,53,62,62,62,62,54,77,78,97,97,72,5,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,17,72,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,59,62,62,68,62,64,49,52,72,56,97,97,97,72,83,84,57,101,72,76,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,59,62,62,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,56,97,97,99,97,59,62,62,60,49,101,51,101,59,62,62,62,62,60,12,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,15,15,21,15,73,15,21,15,74,15,79,15,73,15,74,15,15,73,15,44,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[5,0,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,19,3,4,8,9,3,3,31,3,3,26,27,28,3,3,31,3,19,3,4,8,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,62,54,1,1,1,9,1,37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[11,0,0,0,0,0,70,0,0,72,0,0,0,0,70,0,0,0,0,14,56,97,97,97,97,97,97,97,97,32,33,34,97,97,70,97,97,97,97,98,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,70,53,66,62,60,1,1,1,1,1,47,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[17,0,0,0,0,0,72,0,0,65,54,0,70,0,72,0,0,0,0,1,49,53,62,67,62,62,54,57,57,58,58,58,57,70,65,63,70,50,57,57,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,1,1,1,0,0,0,0,0,0,0,0,0,0,70,61,64,72,72,39,38,1,1,1,9,1,43,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[19,3,4,53,62,54,72,53,67,64,72,67,69,62,69,20,15,15,16,2,49,71,70,72,57,70,59,62,62,66,68,60,57,59,69,62,59,67,62,63,23,32,33,34,39,41,79,16,53,62,62,54,20,15,41,38,32,33,34,23,1,26,27,28,1,26,27,28,1,1,61,62,62,66,62,64,71,72,47,102,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[14,58,53,69,62,65,69,66,69,69,62,60,65,67,66,54,56,58,39,38,49,61,68,68,62,60,57,57,57,59,62,62,62,62,60,61,62,60,57,57,29,7,2,19,47,42,58,53,69,67,62,65,54,58,47,42,19,13,7,29,1,1,1,9,1,1,1,1,37,38,26,27,28,59,62,68,62,60,43,44,1,1,1,9,1,6,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,59,60,59,62,68,66,62,68,60,65,69,68,69,68,68,62,60,43,44,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,35,3,19,3,45,44,59,60,59,66,62,68,68,60,43,44,3,3,3,35,1,1,1,1,1,1,10,1,47,44,3,1,1,1,1,26,27,27,27,28,1,1,1,1,1,75,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
LevelSmoke_level2Resources=[new ig.Image('media/stars.png'), new ig.Image('media/city.png'), new ig.Image('media/smokeman_level.png'), new ig.Image('media/smokeman_level.png')];
});