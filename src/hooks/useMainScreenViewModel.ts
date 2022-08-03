import { useState } from "react"

export default useMainScreenViewModel = (showToastSideEffect: (count: number) => void) => {
    const [screenWithButtonState, updateScreenWithButtonState] = useState(
        {
            buttonClickCount: 0,
            clickStatus: {
                nameOfAuthor: 'Prasan Pani',
                flippingFlag: false
            }
        }
    )

    const incrementButtonClickCount = () => {

        const newButtonCount = screenWithButtonState.buttonClickCount + 1
        updateScreenWithButtonState({
            ...screenWithButtonState,
            buttonClickCount: newButtonCount,
        })
        showToastSideEffect(newButtonCount)
    }

    const flipSwitch = () => {
        updateScreenWithButtonState(
            {
                ...screenWithButtonState,
                clickStatus: {
                    ...screenWithButtonState.clickStatus,
                    flippingFlag: !screenWithButtonState.clickStatus.flippingFlag
                }
            }
        )
    }

    return { buttonStatus: screenWithButtonState, onButtonClick: incrementButtonClickCount, flipSwitch }
}