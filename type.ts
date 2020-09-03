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
    const unknownValue: unknown = 12;
 
}