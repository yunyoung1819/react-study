import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                onClick={() => {
                    // this.state를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                    // setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두번째 파라미터로 콜백 함수를 등록하여 작업을 처리할 수 있습니다.
                    this.setState(
                        {
                            number: number + 1
                        },
                        () => {
                            console.log('방금 setState가 호출되었습니다!');
                            console.log(this.state);
                        }
                    );
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;