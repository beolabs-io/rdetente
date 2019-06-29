import os
import getpass
from fabric import Connection, Config

webAppRootFolder  = os.path.dirname(os.path.realpath(__file__))

webAppCodename                    = 'unrdedetente-webapp'     
serverAppContainerPortExposure    = '80'              
deploymentServerUsername          = 'root'              
deploymentServerIpAddress         = '173.199.71.187'    
deploymentServerApiPortExposure   = '80'             

remotePwd = getpass.getpass("Remote Host Password ?")

c = Connection(host="root@173.199.71.187", connect_kwargs={"password": remotePwd})

# NOTE: use c.local() to execute commands locally.
# NOTE: use c.run() to execute commands on host.

#01# Remove existing server app container local instance if so
c.local('docker rm -f ' + webAppCodename, warn=True)

#02# Remove existing server app local image if so
c.local('docker image rm ' + webAppCodename, warn=True)

#03# Build server app docker image
with c.cd('webapp'):
    c.local('docker build -t ' + webAppCodename + ' .', warn=True)

#04# Save server app docker image as a .tar file
c.local('docker save -o ./' + webAppCodename + '.tar ' + webAppCodename, warn=True)

#06# Copy server app docker image .tar file from local host to docker.beolabs.io distant host
c.local('scp -p ./' + webAppCodename + '.tar ' + deploymentServerUsername + '@' + deploymentServerIpAddress + ':./' + webAppCodename + '.tar ',  warn=True)
c.put(webAppCodename + '.tar', remote='./')

#07# Remove server app local docker image .tar
c.local('rm ./' + webAppCodename + '.tar', warn=True)

#08# Remove existing server app container remote instance if so
c.run('docker rm -f ' + webAppCodename, warn=True)

#9# Remove existing server app remote image if so
c.run('docker image rm ' + webAppCodename, warn=True)

#10# Load docker.beolabs.io distant host's server app docker image
c.run('docker load -i ./' + webAppCodename + '.tar', warn=True)

#11# Run server app container
c.run('docker run --name ' + webAppCodename + ' -p ' + deploymentServerApiPortExposure +  ':' + serverAppContainerPortExposure +' -d ' + webAppCodename)

#12# Remove server app remote docker image .tar
c.run('rm ' + webAppCodename +'.tar', warn=True)

#PWD: Me6@N4xWW-Nc@#pm