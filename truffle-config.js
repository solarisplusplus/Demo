module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // Configuration of the Deploymend Network named solaris
     networks: {
          solaris: {
               host: "167.71.47.69",
               port: 42421,
               network_id: "*" // Match any network id
          },
     
          ganache: {
               host: "127.0.0.1",
               port: 7545,
               network_id: "*" // Match any network id 
          }
     }
};
