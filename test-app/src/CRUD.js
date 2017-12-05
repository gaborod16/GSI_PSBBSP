var data = require('./database.json');

if (localStorage.getItem('database')) {
	console.log("Had something");
	data = JSON.parse(localStorage.getItem('database'));
	console.log(data);
}

export var getJSON = function () {
	return (
		data.data['IBM'].projects
	);
};

export var verifyLogin = function (email, pass) {
	var accounts = data.data.accounts;

	if (accounts[email] && accounts[email].pass === pass) {
		data.data.user = accounts[email];
		updateJSON();
		return (true);
	}
	return (false);
}

export var hasUser = function () {
	if (data.data.user) {
		return (true);
	}
}

export var logout = function () {
	data.data.user = '';
	updateJSON();
}

export var getUser = function () {
	return (data.data.user);
}

export var getProjects = function () {
	return (data.data['IBM'].projects);
}

export var getUsersInOrg = function () {
	var usersId = data.data['IBM'].users;
	var users = [];
	var accounts = data.data.accounts;

	for (var acc in accounts) {
		if(usersId.includes(accounts[acc].id)) {
			users.push(accounts[acc]);
		}
	}
	return (users);
}

export var getUsersInOrgNotProj = function (projId) {
	var usersInOrg = getUsersInOrg();
	var projIndex = findProjIndex(projId);
	var usersInProj = [];

	for (var i = 0; i < data.data["IBM"].projects[projIndex].members.length; i++) {
		usersInProj.push(data.data["IBM"].projects[projIndex].members[i]);
	}
	usersInProj.push(data.data["IBM"].projects[projIndex].secretary);
	usersInProj.push(data.data["IBM"].projects[projIndex].team_leader);

	var users = [];

	console.log(usersInProj)
	console.log(usersInOrg)

	for (var u in usersInOrg) {
		if(!usersInProj.includes(usersInOrg[u].id)) {
			users.push(usersInOrg[u]);
		}
	}
	return (users);
}

export var getProject = function (id) {
	return findProject(id);
}

export var createProject = function (name, secretary, teamLeader) {
	var projId = getNewProjId();

	data.data["IBM"].projects.push({
		"id": projId,
        "name": name,
        "team_leader": data.data.accounts[teamLeader].id,
        "secretary": data.data.accounts[secretary].id,
        "members": [],
        "processes": {},
        "data_classes": {},
        "matrices": {},
        "subsystems": []
	});
	updateJSON();
}

export var removeProject = function (projId) {
	var index = -1;

	for (var p in data.data['IBM'].projects) {
		if (projId === data.data['IBM'].projects[p].id) {
			data.data['IBM'].projects.splice(p, 1);
			updateJSON();
			return;
		}
	}
}

export var findProject = function (id) {
	var projects = data.data['IBM'].projects;

	for (var p in projects) {
		if (id == projects[p].id) {
			return projects[p];
		}
	}
}

export var findUser = function (id) {
	var accounts = data.data.accounts;

	for (var acc in accounts) {
		if(id == accounts[acc].id) {
			return accounts[acc];
		}
	}
}

export var createAccount = function(email, pass) {
	let id = getNewAccountId();

	data.data.accounts[email] = {
		"id": id,
		"email": email,
		"pass": pass
	};

	data.data["IBM"].users.push(id);
	updateJSON();

	console.log(data);
}

export var getOrgUnits = function () {
	return data.data["IBM"].o_units;
}

export var createOrgUnit = function (name) {
	data.data["IBM"].o_units.push({
		"id": getOrgUnitId(),
		"name": name
	});
}

export var getSupportSystems = function () {
	return data.data["IBM"].supp_systems;
}

export var createSupportSystem = function (name) {
	data.data["IBM"].supp_systems.push({
		"id": getSupportSystemId(),
		"name": name
	});
}

export var getSubsystems = function (projId) {
	return data.data["IBM"].projects[findProjIndex(projId)].subsystems;
}

export var createSubsystem = function (projId, subsystemName) {
	var projIndex = findProjIndex(projId);

	data.data["IBM"].projects[projIndex].subsystems.push({
        "id": getNextSubsystemId(projIndex),
        "name": subsystemName,
        "description": "",
        "pairs": [],
        "problems": []
	});
	updateJSON();
}

var getNextSubsystemId = function (projIndex) {
	var subsId = 0;

	for (var sub in data.data['IBM'].projects[projIndex].subsystems) {
		subsId = Math.max(subsId, data.data['IBM'].projects[projIndex].subsystems[sub].id);
	}

	return subsId + 1;
}

var getNewProjId = function () {
	var projId = 0;

	for (var p in data.data['IBM'].projects) {
		projId = Math.max(projId, data.data['IBM'].projects[p].id);
	}

	return projId + 1;
}

var findProjIndex = function (projId) {
	for (var p in data.data['IBM'].projects) {
		if (projId == data.data['IBM'].projects[p].id) {
			return p;
		}
	}
}

var getNewAccountId = function() {
	var accId = 0;

	for (var a in data.data.accounts) {
		accId = Math.max(accId, data.data.accounts[a].id);
	}

	return accId + 1;
}

var getOrgUnitId = function () {
	var orgUnitId = 0;

	for (var o in data.data['IBM'].o_units) {
		orgUnitId = Math.max(orgUnitId, data.data['IBM'].o_units[o].id);
	}

	return orgUnitId + 1;
}

var getSupportSystemId = function () {
	var ssId = 0;

	for (var ss in data.data['IBM'].supp_systems) {
		ssId = Math.max(ssId, data.data['IBM'].supp_systems[ss].id);
	}

	return ssId + 1;
}

var updateJSON = function () {
	localStorage.setItem('database', JSON.stringify(data));
}