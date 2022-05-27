const createTree = function (list=[]) {
    const tree = [];
    const map = {};
    const waitPushObj = {};
    list.forEach(item => {
        const newItem = {
            id: item.id,
            pid: item.pid,
            name: item.name,
            code: item.code,
            children: [],
        };

        map[item.id] = newItem;
        // 判断是否是根节点
        if (item.pid === -1) {
            tree.push(newItem);
        } else if (map[item.pid]) {
            map[item.pid].children.push(newItem);
        } else {
            if (!waitPushObj[item.pid]) {
                waitPushObj[item.pid] = [];
            }
            waitPushObj[item.pid].push(newItem);
        }

        // 判断暂存区是否有自己的子节点
        if (waitPushObj[item.id]) {
            newItem.children = waitPushObj[item.id];
            delete waitPushObj[item.id];
        }

        // 可以不加这个判断
        if (!map[item.id]) {
            map[item.id] = newItem;
        }
    });
    return tree;
};

const list = [
    {
        id: 11,
        pid: 1,
        name: '张三11',
        code: '11'
    },
    {
        id: 12,
        pid: 1,
        name: '张三12',
        code: '12'
    },
    {
        id: 13,
        pid: 1,
        name: '张三13',
        code: '13'
    },
    {
        id: 21,
        pid: 2,
        name: '张三2',
        code: '21'
    },
    {
        id: 1,
        pid: -1,
        name: '张三1',
        code: '1'
    },
    {
        id: 211,
        pid: 21,
        name: '张三211',
        code: '211'
    },
    {
        id: 2,
        pid: -1,
        name: '张三2',
        code: '2'
    },
]

console.log(createTree(list));
