console.log("=================== *•.¸♡ INTERFACE ♡¸.•* ===================");

interface IUser {
    name: string,
    age: number,
    address?: string, // 선택적 속성
    readonly isNewUser?: boolean // 읽기 전용 속성 - 초기화된 값을 유지
}

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


export default IUser;