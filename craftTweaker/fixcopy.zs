import crafttweaker.api.events.CTEventManager;
//这里面填命名空间
var blocklist = [
    'storagedrawers'
] as string[];
CTEventManager.register<crafttweaker.api.event.block.BlockBreakEvent>((event) => {
    if(event.state.block.registryName.getNamespace() in blocklist && event.player.name.getContents() == "Deployer"){
        // event.getPlayer().sendMessage(event.state.block.registryName.getNamespace()); //如不知道该物品的命名空间，请解除本行注释
        // event.world.setBlockAndUpdate(event.getPos(), <blockstate:minecraft:air>); // 机械手破坏方块后方块消失
        event.cancel(); // 二选一，解除本行注释并注释掉上一行即为禁止破坏
    }
});