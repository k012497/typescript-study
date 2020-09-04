{
    // function ---------------------------------
    console.log("=================== *•.¸♡ FUNCTION ♡¸.•* ===================");
    const add = (a: number, b: number): number => { // 리턴 타입 생략 가능
        return a + b;
    }

    const sum: number = add(1, 2);
    console.log("sum:", sum);



    // Array ---------------------------------
    const array1: (string | number)[] = ['a', 1]; // : Array<string | number>
    const array2: any[] = ['1', 2, false, {}, []];

    interface User {
        name: string,
        age: number
    }

    const userArr: User[] = [ // 인터페이스나 커스텀 타입
        {
            name: 'sophie',
            age: 22
        }
    ];

    // 특정한 값으로 타입을 대신해 작성
    // let array3 = 10[];
    let array3 = [10];
    array3.push(10);
    array3.push(11);
    console.log("array3:", array3);

    // 읽기 전용 배열
    const readOnlyArr: readonly number[] = [1, 2, 3, 4]; // : ReadonlyArray<number>



    // Tuple ---------------------------------
    console.log("===================*•.¸♡ TUPLE ♡¸.•* ===================");
    let tuple: [string, number]; // 할당 시 고정된 길이 (push, splice 등 메소드 사용 가능)
    tuple = ['a', 1];
    let user: [number, string, boolean] = [123, 'haha', true];
    let users: [number, string][] = [[1, 'a'], [2, 'b'], [3, 'c']]; // 2차원 배열
    let a: readonly [string, number] = ['Hello', 123]; // 읽기 전용
    
    

    // Enum ---------------------------------
    console.log("===================*•.¸♡ ENUM ♡¸.•* ===================");
    // 숫자나 문자열 값 집합에 이름을 부여할 수 있는 타입
    // 숫자의 경우 0부터 시작하여 1씩 증가
    // 문자열의 경우 모두 초기화 필요
    enum Week { 
        Sun,
        Mon,
        Tue,
        Wed = 10, // 값 변경 시, 이후 이 값부터 1씩 증가
        Thu,
        Fri,
        Sat
    }

    console.log("Week:", Week);
    console.log("Week.Sun:", Week.Sun); // 0
    console.log("Week['Sun']", Week['Sun']); // 0
    console.log("Week[10]", Week[10]); // 'Sun'



    // Any ---------------------------------
    console.log("===================*•.¸♡ ANY ♡¸.•* ===================");
    // 타입을 단언할 수 없는 경우! 어떤 값도 할당가능한 타입
    // 컴파일 옵션 "noImplicitAny": true로 Any 사용 막을 수 있음
    
    const anyList: any[] = [1, true, 'anything!', 'everything!'];
    
    // Unknown ---------------------------------
    console.log("===================*•.¸♡ Unkonwn ♡¸.•* ===================");
    // 알 수 없는 타입
    // 어떤 값도 할당 가능하지만, any 제외 다른 타입에 할당 불가
    // 타입 단언(Assertions)이나 타입 가드(Guards)를 필요로 한다!?
    const unknownValue: unknown = 12;



    // Object ---------------------------------
    console.log("===================*•.¸♡ Object ♡¸.•* ===================");
    // typeof 연산자가 object로 반환하는 모든 타입을 포함 ( {}, [], function(){}, null 등)
    // strict모드일 경우 null은 제외
    let userA: { name: string, age: number } = { // property별 타입 지정
        name: 'HEROPY',
        age: 123
    };

    let userB: User = { // 반복적일 경우 interface나 type 사용
        name: 'test',
        age: 12
    };



    // Null, Undefined ---------------------------------
    console.log("===================*•.¸♡ Null, Undefined ♡¸.•* ===================");
    // 모든 타입의 하위 타입. 서로의 타입에도 할당 가능
    // "strictNullChecks": true



    // Void ---------------------------------
    console.log("===================*•.¸♡ Void ♡¸.•* ===================");
    // 반환 값이 없는 함수의 반환 타입 (실제로는 undefined 리턴)



    // Never ---------------------------------
    console.log("===================*•.¸♡ Never ♡¸.•* ===================");
    // 절대 발생하지 않을 값
    const error = (message: string): never => {
        throw new Error(message);
    }


    // Union ---------------------------------
    console.log("===================*•.¸♡ Union ♡¸.•* ===================");
    // 두 개 이상의 타입을 허용하는 경우. | == OR, ()는 해도 되고 안 해도 됨
    let union: (string | number);
    union = 'Hello type!';
    union = 123;
      


    // Intersection ---------------------------------
    console.log("===================*•.¸♡ Intersection ♡¸.•* ===================");
    // 1개 이상의 타입을 조합. & == AND, ()는 해도 되고 안 해도 됨
    interface IValidation {
        isValid: boolean
    }

    const sojin: User & IValidation = {
        name: 'sojin',
        age: 85,
        isValid: true
    };
    


    // Function ---------------------------------
    console.log("===================*•.¸♡ Function ♡¸.•* ===================");
    let myFunc: (num1: number, num2: number) => number; // 화살표 함수의 타입 선언
    let myFunc2: () => void;



    console.log("===================*•.¸♡ ETC ♡¸.•* ===================");
    
    // Type Inference / Type Assertions ---------------------------------
    const myFunc3 = (val: string | number, isNumber: boolean) => {
        // some logics
        if (isNumber) { // isNumber라는 이름만으로 val이 어떤 타입인지 타입스크립트는 추론 불가! >> 타입 단언
            
            // 1. 변수 as 타입
            (val as number).toFixed(2);

            // 2. <타입>변수
            // (<number>val).toFixed(2);
        }
    }



    // Non-null Assertion Operator ---------------------------------
    // !
    const myFunc4 = (x: number | null | undefined) => {
        return x!.toFixed(2);
    }

    // 컴파일 환경에서 체크하기 힘든 DOM 사용에 유용하다 
    document.querySelector('.menu-item')!.innerHTML;


    
}