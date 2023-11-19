//修复抽屉破坏会复制物品
//blocklist里添加 方块id （方块的！不是物品id！）即可禁止特定触发方式以外的破坏
var blocklist = [
    'storagedrawers:oak_full_drawers_1',
    'storagedrawers:oak_full_drawers_2',
    'storagedrawers:oak_full_drawers_4',
    'storagedrawers:oak_half_drawers_1',
    'storagedrawers:oak_half_drawers_2',
    'storagedrawers:oak_half_drawers_4',
    'storagedrawers:spruce_full_drawers_1',
    'storagedrawers:spruce_full_drawers_2',
    'storagedrawers:spruce_full_drawers_4',
    'storagedrawers:spruce_half_drawers_1',
    'storagedrawers:spruce_half_drawers_2',
    'storagedrawers:spruce_half_drawers_4',
    'storagedrawers:birch_full_drawers_1',
    'storagedrawers:birch_full_drawers_2',
    'storagedrawers:birch_full_drawers_4',
    'storagedrawers:birch_half_drawers_1',
    'storagedrawers:birch_half_drawers_2',
    'storagedrawers:birch_half_drawers_4',
    'storagedrawers:jungle_full_drawers_1',
    'storagedrawers:jungle_full_drawers_2',
    'storagedrawers:jungle_full_drawers_4',
    'storagedrawers:jungle_half_drawers_1',
    'storagedrawers:jungle_half_drawers_2',
    'storagedrawers:jungle_half_drawers_4',
    'storagedrawers:acacia_full_drawers_1',
    'storagedrawers:acacia_full_drawers_2',
    'storagedrawers:acacia_full_drawers_4',
    'storagedrawers:acacia_half_drawers_1',
    'storagedrawers:acacia_half_drawers_2',
    'storagedrawers:acacia_half_drawers_4',
    'storagedrawers:dark_oak_full_drawers_1',
    'storagedrawers:dark_oak_full_drawers_2',
    'storagedrawers:dark_oak_full_drawers_4',
    'storagedrawers:dark_oak_half_drawers_1',
    'storagedrawers:dark_oak_half_drawers_2',
    'storagedrawers:dark_oak_half_drawers_4',
    'storagedrawers:crimson_full_drawers_1',
    'storagedrawers:crimson_full_drawers_2',
    'storagedrawers:crimson_full_drawers_4',
    'storagedrawers:crimson_half_drawers_1',
    'storagedrawers:crimson_half_drawers_2',
    'storagedrawers:crimson_half_drawers_4',
    'storagedrawers:warped_full_drawers_1',
    'storagedrawers:warped_full_drawers_2',
    'storagedrawers:warped_full_drawers_4',
    'storagedrawers:warped_half_drawers_1',
    'storagedrawers:warped_half_drawers_2',
    'storagedrawers:warped_half_drawers_4',
    'storagedrawers:compacting_drawers_3'
    
];
onEvent('block.break',event => {
    //获取方块id
    //Utils.server.tell(event.block.id);
    //获取操作玩家
    // Utils.server.tell(event.getEntity());
    //禁止虚拟玩家对特定方块进行破坏
    if(blocklist.indexOf(event.block.id) != -1 && event.getEntity() == 'Deployer'){
        // event.block.set("minecraft:air");//未做测试，不建议使用。
        event.cancel();//如使用上一行的方法，请注释掉这一行
    }
})
//没什么用但万一有用呢
// onEvent('block.modification', event => {
//     event.modify('storagedrawers:oak_full_drawers_1', block => {
//       block.destroySpeed = 0.00001
//     })
//   })