import { createServer } from "miragejs"
import vansData from "./db.json";


console.log(vansData)
let server = createServer()
server.get("/vans/data", vansData)
server.get("/vans/data/:id", (schema, request) => {
    return vansData.users[request.params.id];
  })

server.get("/host/vans/:id", (schema, request) =>{
    const id = request.params.id;
    const hostVanObj = vansData.hosts.find(hostObj => hostObj.id === parseInt(id))
    return hostVanObj.item.map(everyItem => vansData.users.find(userObj => userObj.id === everyItem))
})

export default server;