Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.network :private_network, ip: "192.168.5.50"

  config.vm.network "forwarded_port", guest: 3000, host: 3020
  config.vm.network "forwarded_port", guest: 2375, host: 2375

  config.vm.synced_folder ".", ENV['PWD'], nfs: true

  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 2
  end

  config.vm.provision "shell", run: "once", inline: <<-SHELL
    cd #{ENV['PWD']} && sudo make bootstrap
    echo 'DOCKER_OPTS="--host 0.0.0.0:2375 --host unix:///var/run/docker.sock"' >> /etc/default/docker
    service docker restart > /dev/null

    echo '>>>'
    echo '>>> Now run `make` and `make run`'
    echo '>>>'
  SHELL

end
