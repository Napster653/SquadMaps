var modal = document.getElementById("modal_background")

var map_dict = {
	Al_Basrah_Insurgency_v1: ["GB", "200", "FV432 APC", "FV432 APC", "FV510 IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "INS", "600", "Armored Technical DshK", "Armored Technical SPG-9", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Technical DshK", "Technical DshK", "Technical DshK", "Technical SPG-9", "Technical SPG-9", "ZU-23 Anti-Air Truck"],
	Al_Basrah_Invasion_v1: ["GB", "150", "FV432 APC", "FV432 APC", "FV510 IFV", "FV510 UA IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "INS", "800", "Armored Technical DshK", "Armored Technical SPG-9", "Armored Technical SPG-9", "BMP-1 IFV", "BRDM-2 Scout Car", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Technical DshK", "Technical SPG-9", "ZU-23 Anti-Air Truck"],
	Al_Basrah_Invasion_v2: ["GB", "150", "FV4034 MBT", "FV432 APC", "FV432 APC", "FV510 IFV", "FV510 UA IFV", "FV510 UA IFV", "FV510 UA IFV", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Logistics Truck", "HX60 Transport Truck", "Delayed 06:00", "INS", "800", "Armored Technical DshK", "Armored Technical SPG-9", "Armored Technical SPG-9", "BMP-1 IFV", "BRDM-2 Scout Car", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Logistics Technical", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "Minsk Motorcycle", "T-62 MBT", "Technical DshK", "Technical SPG-9", "Transport Technical", "ZU-23 Anti-Air Truck"],
}

function view_vehicles (map)
{
	var body = document.getElementsByTagName("BODY")[0];
	body.style.overflow = "hidden";

	var ul_blufor = document.getElementById("list_blufor");
	var ul_opfor = document.getElementById("list_opfor");

	map_data = map_dict[map].slice(0);
	map_data.reverse();

	var team_blufor = map_data.pop();
	document.getElementById("team_blufor").innerHTML = team_blufor;

	switch (team_blufor)
	{
		case "CA":
			document.getElementById("img_blufor").src = "img/flag_CA.png";
			break;
		case "GB":
			document.getElementById("img_blufor").src = "img/flag_GB.png";
			break;
		case "INS":
			document.getElementById("img_blufor").src = "img/flag_INS.png";
			break;
		case "MIL":
			document.getElementById("img_blufor").src = "img/flag_MIL.png";
			break;
		case "RUS":
			document.getElementById("img_blufor").src = "img/flag_RUS.png";
			break;
		case "USA":
			document.getElementById("img_blufor").src = "img/flag_USA.png";
			break;
		default:
			document.getElementById("img_blufor").src = "img/flag_USA.png";
			break;
	}

	document.getElementById("tickets_blufor").innerHTML = map_data.pop() + " tickets";

	do
	{
		var element = map_data.pop();
		var li = document.createElement("li");
		var img = document.createElement("img");
		var p = document.createElement("p");

		if (element.includes("Delayed"))
		{
			small = document.createElement("SMALL");
			small.innerHTML = element;
			ul_blufor.lastChild.lastChild.appendChild(small);
			continue;
		}

		switch (element)
		{
			case "BMP-1 ZU-23 Anti-Air APC":
				img.src = "img/map_antiair.png";
				p.innerHTML = element;
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				img.src = "img/map_apc.png";
				p.innerHTML = element;
				break;
			case "BTR-82A IFV":
				img.src = "img/map_ifv.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
				img.src = "img/map_jeep.png";
				p.innerHTML = element;
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				img.src = "img/map_jeep_antitank.png";
				p.innerHTML = element;
				break;
			case "Technical UB-32 Rocket Artillery":
				img.src = "img/map_jeep_artillery.png";
				p.innerHTML = element;
				break;
			case "Logistics Technical":
				img.src = "img/map_jeep_logistics.png";
				p.innerHTML = element;
				break;
			case "Transport Technical":
				img.src = "img/map_jeep_transport.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				img.src = "img/map_jeep_turret.png";
				p.innerHTML = element;
				break;
			case "Minsk Motorcycle":
				img.src = "img/map_motorcycle.png";
				p.innerHTML = element;
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
				img.src = "img/map_tank.png";
				p.innerHTML = element;
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
				img.src = "img/map_trackedapc.png";
				p.innerHTML = element;
				break;
			case "M2A2 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				img.src = "img/map_trackedifv.png";
				p.innerHTML = element;
				break;
			case "ZU-23 Anti-Air Truck":
				img.src = "img/map_truck_antiair.png";
				p.innerHTML = element;
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				img.src = "img/map_truck_logistics.png";
				p.innerHTML = element;
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				img.src = "img/map_truck_transport.png";
				p.innerHTML = element;
				break;

			case "CA":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_CA.png";
				break;
			case "GB":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_GB.png";
				break;
			case "INS":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_INS.png";
				break;
			case "MIL":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_MIL.png";
				break;
			case "RUS":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_RUS.png";
				break;
			case "USA":
				document.getElementById("team_opfor").innerHTML = element;
				document.getElementById("img_opfor").src = "img/flag_USA.png";
				break;

			default:
				break;
		}

		li.appendChild(img);
		li.appendChild(p);
		ul_blufor.appendChild(li);
	} while (element != "CA" && element != "GB" && element != "INS" && element != "MIL" && element != "RUS" && element != "USA");

	document.getElementById("tickets_opfor").innerHTML = map_data.pop() + " tickets";

	var element = map_data.pop();
	while (typeof element !== 'undefined')
	{
		var li = document.createElement("li");
		var img = document.createElement("img");
		var p = document.createElement("p");

		if (element.includes("Delayed"))
		{
			small = document.createElement("SMALL");
			small.innerHTML = element;
			ul_blufor.lastChild.lastChild.appendChild(small);
			continue;
		}

		switch (element)
		{
			case "BMP-1 ZU-23 Anti-Air APC":
				img.src = "img/map_antiair.png";
				p.innerHTML = element;
				break;
			case "BTR-80 APC":
			case "M1126 M2HB APC":
			case "M1126 M240 APC":
				img.src = "img/map_apc.png";
				p.innerHTML = element;
				break;
			case "BTR-82A IFV":
				img.src = "img/map_ifv.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB":
			case "BRDM-2 Scout Car":
			case "Technical DshK":
			case "Armored Technical DshK":
				img.src = "img/map_jeep.png";
				p.innerHTML = element;
				break;
			case "Armored Technical SPG-9":
			case "Technical SPG-9":
			case "M-ATV TOW":
			case "BRDM-2 Spandrel":
				img.src = "img/map_jeep_antitank.png";
				p.innerHTML = element;
				break;
			case "Technical UB-32 Rocket Artillery":
				img.src = "img/map_jeep_artillery.png";
				p.innerHTML = element;
				break;
			case "Logistics Technical":
				img.src = "img/map_jeep_logistics.png";
				p.innerHTML = element;
				break;
			case "Transport Technical":
				img.src = "img/map_jeep_transport.png";
				p.innerHTML = element;
				break;
			case "M-ATV M2HB CROWS":
			case "M-ATV M240 CROWS":
				img.src = "img/map_jeep_turret.png";
				p.innerHTML = element;
				break;
			case "Minsk Motorcycle":
				img.src = "img/map_motorcycle.png";
				p.innerHTML = element;
				break;
			case "M1A2 MBT":
			case "T-62 MBT":
			case "T-72B3 MBT":
			case "FV4034 MBT":
				img.src = "img/map_tank.png";
				p.innerHTML = element;
				break;
			case "FV432 APC":
			case "MT-LB VMK APC":
			case "MT-LB APC":
				img.src = "img/map_trackedapc.png";
				p.innerHTML = element;
				break;
			case "M2A2 IFV":
			case "BMP-1 IFV":
			case "BMP-2 IFV":
			case "FV510 IFV":
			case "FV510 UA IFV":
			case "MT-LBM 6MB IFV":
				img.src = "img/map_trackedifv.png";
				p.innerHTML = element;
				break;
			case "ZU-23 Anti-Air Truck":
				img.src = "img/map_truck_antiair.png";
				p.innerHTML = element;
				break;
			case "M939 Logistics Truck":
			case "Ural 4320 Logistics Truck":
			case "Ural 375 Logistics Truck":
			case "HX60 Logistics Truck":
				img.src = "img/map_truck_logistics.png";
				p.innerHTML = element;
				break;
			case "M939 Transport Truck":
			case "Ural 4320 Transport Truck":
			case "Ural 375 Transport Truck":
			case "HX60 Transport Truck":
				img.src = "img/map_truck_transport.png";
				p.innerHTML = element;
				break;

			default:
				break;
		}

		li.appendChild(img);
		li.appendChild(p);
		ul_opfor.appendChild(li);

		element = map_data.pop();
	}

	modal.style.display = "block";
}

window.onclick = function (event)
{
	if (event.target == modal)
	{
		var body = document.getElementsByTagName("BODY")[0];
		body.style.overflow = "auto";

		modal.style.display = "none";

		var ul_blufor = document.getElementById("list_blufor");
		var ul_opfor = document.getElementById("list_opfor");

		ul_blufor.innerHTML = "";
		ul_opfor.innerHTML = "";
	}
}

