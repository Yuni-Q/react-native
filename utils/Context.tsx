import React, {
	createContext,
	Dispatch, useContext, useReducer
} from 'react';

// 상태를 위한 타입
type State = {
	token: string;
};

// 모든 액션들을 위한 타입
type Action = { type: 'SET_TOKEN'; token: string };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type MyDispatch = Dispatch<Action>;

// Context 만들기
const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<MyDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		default:
			throw new Error('Unhandled action');
	}
}

export function Provider({ children }: { children: any }) {
	const [state, dispatch] = useReducer(reducer, {
		token: '',
	});

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useContextState() {
	const state = useContext(StateContext);
	if (!state) throw new Error('Cannot find ThemeProvider'); // 유효하지 않을땐 에러를 발생
	return state;
}

export function useContextDispatch() {
	const dispatch = useContext(DispatchContext);
	if (!dispatch) throw new Error('Cannot find ThemeProvider'); // 유효하지 않을땐 에러를 발생
	return dispatch;
}
