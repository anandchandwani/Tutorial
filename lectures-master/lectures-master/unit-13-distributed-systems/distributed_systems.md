#Distributed Systems

---

#Basics


Splitting up aspects of a server into micro processes

Ex. one process that handles database transactions

---

#Why?

Things grow at different rates, you may be paying for resources you don't need.

---

#Practically

1. Split server up into services, split them up and proxy
1.  Certain  services can be duplicated and reduced: Load Balancer and Auto Scale
1.  The work a service provides can be separated from how it handles the requests

---

#Facts


1.     Some Services will be requested more than others 
1.     Some Services will not be needed to be duplicated more than others 
1.     Under Predictable Scenarios, Some Services will be needed to  be duplicated more than others 
1.     Synchronization can be done if there is one source for all data
1.     If multiple services need to listen to the same events, its easier to emit them from one source


---

#Anatomy of a service

## Different type of service oriented architecture

---

#Request Response

1.     Client sends Request to Server
1.     Server directs request to a "Route"
1.     Route does work
1.     Route sends Client the response
1.     Request/Response ends




---

Persistent Connections

1.     Client requests persistent connection to Server
1.     Server directs request to a "Route"
1.     Route does initial work on coming in
1.     Listen for Client message
1.     Listen for alternative events
1.     Can Send the Client messages
1.     Listen for Client `end`

---

#Cron Jobs


1. Time Event occurs
1. Do Work

---

# Work

1. Work may be cpu/gpu intensive (transform data)
1. Work may modify/request synchronized data 
  * Memory
  * Filesystem
  * Custom handling of data -Need to be able to get the data on demand
  * Mulitple similar requests consolidated into one

---

Work may trigger other events -Need a manner for listeners to be added -need a manner for listeners to be removed


