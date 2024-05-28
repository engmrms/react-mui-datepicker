import { create } from 'zustand'
import { Local_DTO } from '../Models/dto'
import DevtoolsMiddlewares from './middleware'

const CheckIfAllowedToIncreaseSize = ({ state }: { state: Local_DTO.AccessibilityToolsStore }) => {
    if (state.isDesktop && Number(state.fontSize?.substring(0, state.fontSize.length - 2)) < 12) {
        document.documentElement.style.setProperty('font-size', `calc(${state.fontSize} + 1px)`)
        state.fontSize = getComputedStyle(document.documentElement)?.getPropertyValue('font-size')
        state.isMax = Number(state.fontSize?.substring(0, state.fontSize.length - 2)) >= 12
        state.isMin = false
    }
    if (!state.isDesktop && Number(state.fontSize?.substring(0, state.fontSize.length - 2)) < 10.2) {
        document.documentElement.style.setProperty('font-size', `calc(${state.fontSize} + 0.7px)`)
        state.fontSize = getComputedStyle(document.documentElement)?.getPropertyValue('font-size')
        state.isMax = Number(state.fontSize?.substring(0, state.fontSize.length - 2)) >= 10.2
        state.isMin = false
    }
}

const CheckIfAllowedToDecreaseSize = ({ state }: { state: Local_DTO.AccessibilityToolsStore }) => {
    if (state.isDesktop && Number(state.fontSize?.substring(0, state.fontSize.length - 2)) > 8) {
        document.documentElement.style.setProperty('font-size', `calc(${state.fontSize} - 1px)`)
        state.fontSize = getComputedStyle(document.documentElement)?.getPropertyValue('font-size')
        state.isMin = Number(state.fontSize?.substring(0, state.fontSize.length - 2)) <= 8
        state.isMax = false
    }
    if (!state.isDesktop && Number(state.fontSize?.substring(0, state.fontSize.length - 2)) > 7.4) {
        document.documentElement.style.setProperty('font-size', `calc(${state.fontSize} - 0.7px)`)
        state.fontSize = getComputedStyle(document.documentElement)?.getPropertyValue('font-size')
        state.isMin = Number(state.fontSize?.substring(0, state.fontSize.length - 2)) <= 7.4
        state.isMax = false
    }
}

const accessibilityTools = create<Local_DTO.AccessibilityToolsStore>()(
    DevtoolsMiddlewares(
        set => ({
            isActive: !!localStorage.getItem('up_Colors'),
            toggleColors: () =>
                set(state => {
                    if (state.isActive) {
                        localStorage.removeItem('up_Colors')
                    } else {
                        localStorage.setItem('up_Colors', 'true')
                    }
                    return { isActive: !state.isActive }
                }),
            isDesktop: window.innerWidth >= 640 || false,
            fontSize: window.innerWidth >= 640 ? '10px' : '8.8px',
            isMax: false,
            isMin: false,
            increaseSize: () =>
                set(state => {
                    CheckIfAllowedToIncreaseSize({ state })
                }),
            decreaseSize: () =>
                set(state => {
                    CheckIfAllowedToDecreaseSize({ state })
                }),
            defaultSize: () =>
                set(state => {
                    if (state.isDesktop) {
                        document.documentElement.style.setProperty('font-size', '10px')
                    } else {
                        document.documentElement.style.setProperty('font-size', '8.8px')
                    }
                    state.fontSize = getComputedStyle(document.documentElement)?.getPropertyValue('font-size')
                    state.isMax = false
                    state.isMin = false
                }),
        }),
        { name: 'accessibilityTools' },
    ),
)

export default accessibilityTools
