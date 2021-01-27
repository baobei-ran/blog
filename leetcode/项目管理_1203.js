/*
 * @Author: 清风
 * @Date: 2021-01-12 09:48:34
 * @Description: 
 */

 /**
    公司共有 n 个项目和  m 个小组，每个项目要不无人接手，要不就由 m 个小组之一负责。

    group[i] 表示第 i 个项目所属的小组，如果这个项目目前无人接手，那么 group[i] 就等于 -1。（项目和小组都是从零开始编号的）小组可能存在没有接手任何项目的情况。

    请你帮忙按要求安排这些项目的进度，并返回排序后的项目列表：

    同一小组的项目，排序后在列表中彼此相邻。
    项目之间存在一定的依赖关系，我们用一个列表 beforeItems 来表示，其中 beforeItems[i] 表示在进行第 i 个项目前（位于第 i 个项目左侧）应该完成的所有项目。
    如果存在多个解决方案，只需要返回其中任意一个即可。如果没有合适的解决方案，就请返回一个 空列表 。

     

    示例 1：

        |———————————————————————————|
        | Item  |  Group | Before   |
        |———————————————————————————|
            0       -1        
            1       -1          6
            2        1          5
            3        0          6
            4        0        3,6
            5        1
            6        0
            7       -1
        |———————————————————————————|

        输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
        输出：[6,3,4,1,5,2,0,7]

    
    示例 2：

        输入：n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
        输出：[]
        解释：与示例 1 大致相同，但是在排序后的列表中，4 必须放在 6 的前面。
     

    提示：

        1 <= m <= n <= 3 * 104
        group.length == beforeItems.length == n
        -1 <= group[i] <= m - 1
        0 <= beforeItems[i].length <= n - 1
        0 <= beforeItems[i][j] <= n - 1
        i != beforeItems[i][j]
        beforeItems[i] 不含重复元素

*/





/**
 * // 
 *      方法一：拓扑排序
            思路与算法

            做出这道题首先需要了解「拓扑排序」的相关知识。

            拓扑排序简单来说，是对于一张有向图 GG，我们需要将 GG 的 nn 个点排列成一组序列，使得图中任意一对顶点 <u,v><u,v>，如果图中存在一条 u\rightarrow vu→v 的边，那么 uu 在序列中需要出现在 vv 的前面。整个算法的具体过程这里不再展开赘述。如果对相关的知识还不是很熟悉，可以参考「207. 课程表的官方题解」(https://leetcode-cn.com/problems/course-schedule/solution/ke-cheng-biao-by-leetcode-solution/)。

            回到题目中，我们可以将项目抽象成点，项目间依赖关系的抽象成边，即如果进行项目 ii 前需要完成项目 jj，那么就存在一条 j\rightarrow ij→i 的边。然后判断图中是否可以拓扑排序。

            但这样的方法忽略了题目中的一个关键条件：「同一小组的项目，排序后在列表中彼此相邻」。这意味着组与组之间也存在依赖关系，故还要解决组之间的拓扑排序。基于此，解决这道题其实可以分成两步：

            首先解决组与组的依赖关系。我们将组抽象成点，组与组的关系抽象成边，建图后判断是否存在一个拓扑排序。
            如果存在拓扑顺序 \textit{groupTopSort}groupTopSort，我们只要再确定组内的依赖关系。遍历组间的拓扑序 \textit{groupTopSort}groupTopSort，对于任意的组 gg，对所有属于组 gg 的点再进行拓扑排序。如果能够拓扑排序，则将组 gg 内部的拓扑序按顺序放入答案数组即可。
            实现细节

            注意到某些项目存在无人接手的情况，由于这些 \textit{groupId}groupId 都为 -1−1，为了编码方便，我们重新将其编号。由于已有的小组编号不会超过 m-1m−1，因此可以将这些项目从 mm 开始正序编号，这样能保证不会与已存在的小组编号冲突。

            为了减少编码的复杂度，我们可以将拓扑排序抽成一个函数进行复用，定义 topSort(deg, graph, items) 表示当前待拓扑排序的点集为 \textit{items}items，点的入度数组为 \textit{deg}deg，点的连边关系为 \textit{graph}graph，\textit{graph}[i]graph[i] 表示点 ii 连出点组成的集合，如果不存在冲突，返回拓扑排序后的数组，否则返回一个空数组。

            在建图的过程中，如果发现两个项目属于不同的项目组，则在组间的关系图中添加对应的边，否则在组内的关系图中添加对应的边。编码细节请看下面的代码。

            代码
 */



const topSort = (deg, graph, items) => {
    const Q = [];
    for (const item of items) {
        if (deg[item] === 0) {
            Q.push(item);
        }
    }
    const res = [];
    while (Q.length) {
        const u = Q.shift(); 
        res.push(u);
        for (let i = 0; i < graph[u].length; ++i) {
            const v = graph[u][i];
            if (--deg[v] === 0) {
                Q.push(v);
            }
        }
    }
    return res.length == items.length ? res : [];
}

var sortItems = function(n, m, group, beforeItems) {
    const groupItem = new Array(n + m).fill(0).map(() => []);

    // 组间和组内依赖图
    const groupGraph = new Array(n + m).fill(0).map(() => []);
    const itemGraph = new Array(n).fill(0).map(() => []);

    // 组间和组内入度数组
    const groupDegree = new Array(n + m).fill(0);
    const itemDegree = new Array(n).fill(0);
    
    const id = new Array(n + m).fill(0).map((v, index) => index);

    let leftId = m;
    // 给未分配的 item 分配一个 groupId
    for (let i = 0; i < n; ++i) {
        if (group[i] === -1) {
            group[i] = leftId;
            leftId += 1;
        }
        groupItem[group[i]].push(i);
    }
    // 依赖关系建图
    for (let i = 0; i < n; ++i) {
        const curGroupId = group[i];
        for (const item of beforeItems[i]) {
            const beforeGroupId = group[item];
            if (beforeGroupId === curGroupId) {
                itemDegree[i] += 1;
                itemGraph[item].push(i);   
            } else {
                groupDegree[curGroupId] += 1;
                groupGraph[beforeGroupId].push(curGroupId);
            }
        }
    }

    // 组间拓扑关系排序
    const groupTopSort = topSort(groupDegree, groupGraph, id); 
    if (groupTopSort.length == 0) {
        return [];
    } 
    const ans = [];
    // 组内拓扑关系排序
    for (const curGroupId of groupTopSort) {
        const size = groupItem[curGroupId].length;
        if (size == 0) {
            continue;
        }
        const res = topSort(itemDegree, itemGraph, groupItem[curGroupId]);
        if (res.length === 0) {
            return [];
        }
        for (const item of res) {
            ans.push(item);
        }
    }
    return ans;
};












//  <-------------------------------- 方法二 -------------------------------------------------->

// 1203.项目管理-组间排序和组内排序

// 参考社区
var sortItems=function(n,m,group,beforeItems){
    const ans=[];
 
    // 用于表示任务是否被执行的哈希表，-1表示未被执行；1表示被执行
    const taskUsed=new Map();

    // 用于表示项目组是否完成所有分配任务，-1表示未完成；1表示完成
    const groupUsed=new Map();
    
    // 根据任务完成先后顺序，对项目组进行组间排序
    const preGroups=new Map();

    // 存储项目组分配的任务列表
    const team_projs=new Map()
   
    
    // 对同一项目组的任务进行优先级排序
    function dfs(team,taskIdx){
        if(taskUsed.has(taskIdx)) 
            return taskUsed.get(taskIdx)===1;


        taskUsed.set(taskIdx,-1)

        // 属于同一项目组，并且当前任务所依赖的任务都完成才能执行当前任务
        for(const task of beforeItems[taskIdx]){
            if(team===group[task] && !dfs(team,task))
                return false;
        }

        taskUsed.set(taskIdx,1);
        ans.push(taskIdx)
        return true;
    }

    
    // 逐项目组进行任务处理，当前项目组完成后则groupUsed标识1
    function df(team){
        if(groupUsed.get(team)) 
            return groupUsed.get(team)===1;
        
        groupUsed.set(team,-1)
        
        // 需要所有前置项目组完成后，才会执行当前项目组
        for(const teamIdx of preGroups.get(team)||new Set()){
            if(!df(teamIdx)) return false;
        }

        // 对属于同一项目组的任务按照优先级排序
        for(const taskId of team_projs.get(team)||new Set() ){
            if(!dfs(team,taskId)) return false;
        }

        // 表示当前项目组任务已经完成
        groupUsed.set(team,1)
        return true;
    }
    
    // 算法初始阶段：任务分组，以及决定项目组的先后顺序
    for(let i=0;i<n;i++){
        for(const pre of beforeItems[i]){
            // 任务i一定在任务pre之后才能开始，因此需要判断
            // 任务i和任务pre是否被分配给同一项目组。如果不是同组任务
            // 则说明pre所属项目组一定在任务i所属的项目组之前处理
            if(group[pre]!==group[i]){
                const set=preGroups.get(group[i])||new Set();
                set.add(group[pre])
                preGroups.set(group[i],set)
            }
        }
        
        // 每个任务进行分组存储，注意未分配的任务统一到-1项目组
        const set=team_projs.get(group[i])||new Set();
        set.add(i)
        team_projs.set(group[i],set)
    }

    // 项目组-1表示虚拟组，用于存储未分配的任务列表
    for(let i=-1;i<m;i++){
        if(!df(i)) return [];
    }
    return ans;
}









// 解题思路
//          其实思路倒是不难，只是写起来比较麻烦，包括小组的拓扑排序和项目的拓扑排序两个部分
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    //graph数组保存组内关系的结构: 小组号: 项目号:[入度，出边到的顶点集合] 
    //由于不同小组间不能交叉完成 所以只保存小组内的项目关系,以节省空间和时间，少做无用功。
    //cross记录跨组的顺序: 项目号:[小组号，出边到的非同组点顶点集合]
    //cross_group_sort 保存小组顺序拓扑关系 result保存最终结果
    //例子 n=8 m=2 group=[-1,-1,1,0,0,1,0,-1] beforeItems=[[],[6],[5],[6],[2,3,6],[],[],[]]
    var graph = [], cross_group = {}, cross_group_sort = {};
    var cross = [], result = [];
    //三遍循环初始化保存图的结构
    for(var i = 0; i<group.length; i++){
        graph[group[i]] = {};
    }
    //[{},{},"-1":{}];
    for(var i = 0; i < n; i++){
        graph[group[i]][i] = [0, []];
        cross_group[i] = [group[i],[]];
    }
    for(var i = 0; i < n; i++){
        for(var j=0; j<beforeItems[i].length;j++){
            //只有同一组才记录入度和出度边
            if(group[i] == group[beforeItems[i][j]]){
                graph[group[i]][i][0]++;
                graph[group[i]][beforeItems[i][j]][1].push(i);
            }
            if(cross_group[beforeItems[i][j]][0] != cross_group[i][0]){
                cross_group[beforeItems[i][j]][1].push(i);
            }
        }
    }
    /*
    [ { '3': [ 1, [4] ], '4': [ 2, [] ], '6': [ 0, [3] ] },
    { '2': [ 1, [] ], '5': [ 0, [2] ] },
    '-1': { '0': [ 0, [] ], '1': [ 0, [] ], '7': [ 0, [] ] } ]

    { '0': [ -1, [] ], '1': [ -1, [] ], '2': [ 1, [ 4 ] ], '3': [ 0, [] ],
    '4': [ 0, [] ], '5': [ 1, [] ], '6': [ 0, [ 1 ] ], '7': [ -1, [] ] }
    */
    //初始化小组拓扑结构
    var number_id;
    for(var i = 0; i < group.length; i++){
        if(!(group[i] in cross_group_sort)){
            cross_group_sort[group[i]] = [0,[]];
        }
    }
    for(var i in cross_group){
        if(cross_group[i][1].length != 0){
            for(var j = 0; j < cross_group[i][1].length; j++){
                number_id = cross_group[cross_group[i][1][j]][0];
                cross_group_sort[cross_group[i][0]][1].push(number_id);
                cross_group_sort[number_id][0]++;
            }
        }
    }

    //小组关系的拓扑关系
    var group_sort = [], falg;
    while(true){
        falg = 1;
        for(var i in cross_group_sort){
            if(cross_group_sort[i][0] == 0){
                group_sort.push(i);
                for(var j=0; j<cross_group_sort[i][1].length;j++){
                    cross_group_sort[cross_group_sort[i][1][j]][0]--;
                }
                delete cross_group_sort[i];
                falg = 0;
            }
        }
        if(falg){
            break;
        }
    }
    //整体项目的拓扑排序，以小组号为关键遍历
    for(var i = 0; i < group_sort.length; i++){
        var temp = group_sort[i];
        while(true){
            falg = 1;
            for(var j in graph[temp]){
                if(graph[temp][j][0] == 0){
                    result.push(j);
                    for(var k = 0; k < graph[temp][j][1].length; k++){
                        graph[temp][graph[temp][j][1][k]][0]--;
                    }
                    delete graph[temp][j];
                    falg = 0;
                }
            }
            if(falg){
                break;
            }
        }
    }
    if(result.length == n){
        return result;
    }else{
        return [];
    }
};
