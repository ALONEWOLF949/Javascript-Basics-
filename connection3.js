const users = [
    { id: 1,
      name: "John Wick", 
      connections: 445, 
      followers: 667, 
      pendingRequests: [] 
    },
    { 
      id: 2, 
      name: "John Doe", 
      connections: 445, 
      followers: 667, 
      pendingRequests: [] 
    },
    { id: 3, 
      name: "Johnathon", 
      connections: 445, followers: 667, 
      pendingRequests: [] 
    },
    { id: 4, 
      name: "John Oliver", 
      connections: 445, 
      followers: 667, 
      pendingRequests: [] 
    },
    { id: 5, 
      name: "Johnny", 
      connections: 445, 
      followers: 667, 
      pendingRequests: [] 
    },
    { id: 6, 
      name: "Johnpaul", 
      connections: 445, 
      followers: 667, 
      pendingRequests: [] 
    },
    { id: 7, 
      name: "Johnnetta", 
      connections: 445, 
      followers: 667, 
      pendingRequests: [] 
    },
    { id: 8, 
      name: "John Grisham", 
      connections: 445, 
      followers: 667, 
      pendingRequests: [] 
    }
];

function findUserById(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i];
        }
    }
    return null;
}

function sendRequest(request) {
    var sender = findUserById(request.sender);
    var receiver = findUserById(request.receiver);

    if (sender == null || receiver == null) {
        console.log("Sender or Receiver not found");
        return;
    }

    receiver.pendingRequests.push({ senderId: sender.id, requestType: request.requestType });
    console.log("Request sent from " + sender.name + " to " + receiver.name + " for " + request.requestType);
}

function acceptRequest(request) {
    var sender = findUserById(request.sender);
    var receiver = findUserById(request.receiver);

    if (sender == null || receiver == null) {
        console.log("Sender or Receiver not found");
        return;
    }

    var requestIndex = -1;
    for (var i = 0; i < receiver.pendingRequests.length; i++) {
        if (receiver.pendingRequests[i].senderId == sender.id) {
            requestIndex = i;
            break;
        }
    }

    if (requestIndex == -1) {
        console.log("No pending request found");
        return;
    }

    var acceptedRequest = receiver.pendingRequests[requestIndex];
    receiver.pendingRequests.splice(requestIndex, 1);

    updateConnectionsAndFollowers(sender, receiver, acceptedRequest.requestType);
}

function updateConnectionsAndFollowers(sender, receiver, requestType) {
    if (requestType == "connection") {
        sender.connections++;
        receiver.connections++;
        sender.followers++;
        receiver.followers++;
        console.log(sender.name + " and " + receiver.name + " are now connected.");
    } else if (requestType == "follow") {
        receiver.followers++;
        console.log(sender.name + " followed " + receiver.name);
    }
}

function displayUsers() {
    console.log("\n--- Updated Users List ---");
    for (var i = 0; i < users.length; i++) {
        console.log(users[i].name + " -> Connections: " + users[i].connections + ", Followers: " + users[i].followers);
    }
    console.log("--------------------------\n");
}


sendRequest({ sender: 4, receiver: 1, requestType: "connection" });
sendRequest({ sender: 5, receiver: 2, requestType: "follow" });

acceptRequest({ sender: 4, receiver: 1 });
acceptRequest({ sender: 5, receiver: 2 });

displayUsers();
