import counterReducer from './features/counter/counterSlice'
import isShowColorReducer from './features/showColorSlice/ShowColorSlice'

export const reducer = {
    counter: counterReducer,
    showColor: isShowColorReducer,
}