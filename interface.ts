console.log("=================== *•.¸♡ INTERFACE ♡¸.•* ===================");

interface IUser {
    name: string,
    age: number,
    address?: string, // 선택적 속성
    readonly isNewUser?: boolean // 읽기 전용 속성 - 초기화된 값을 유지
}


console.log("=================== Readonly ===================");
let user1: Readonly<IUser> = {
    name: 'Neo',
    age: 36,
    isNewUser: true
};

// 모든 속성이 readonly일 경우 Utility와 Assertion 이용 가능
interface IUser {
    name: string,
    age: number
}

console.log("let user2: Readonly<IUser> ...");
let user2: Readonly<IUser> = {  // Readonly Utility
    name: 'Neo',
    age: 36,
    isNewUser: true
};
console.log("user2.age = 24; // Error");
console.log("user2.name = 'Sop'; // Error");


console.log("let user3 = { ... } as const");
let user3 = {
    name: 'Neo',
    age: 36
} as const; // Type assertion
console.log("user3.age = 24; // Error");
console.log("user3.name = 'Sop'; // Error");


console.log("=================== As Function Type ===================");
interface ITask {
    date: string,
    taskList: Array<string>
}

interface IGetTask {
    (date: string): ITask | void // 호출 시그니처(Call signature)
}

const task1: ITask = {
    date: '20200903',
    taskList: ['tsc', 'cloud']
}

const task2: ITask = {
    date: '20200904',
    taskList: ['tsc', 'cloud']
}

let taskArr: Array<ITask> = [];
taskArr.push(task1);
taskArr.push(task2);

const getTask: IGetTask = function (date) { // date is string 
    let foundTask: ITask | undefined;
    taskArr.forEach((taskObj) => {
        if (taskObj.date === date) {
            foundTask = taskObj;
        }
    });

    if (foundTask!) {
        return foundTask;
    } else {
        return {
            date: date,
            taskList: ['nothing to do !']
        }
    }
}

console.log("getTask()", getTask('20200904'));
console.log("getTask()", getTask('20200905'));


export default IUser;