export const dgaToken = {
    background: {
        DEFAULT: 'var(--background)',
        overlay: 'var(--overlay)',
        foreground: 'var(--background-foreground)',
        brand: 'var(--background-brand)',
        white: 'var(--background-white)',
        body: 'var(--background-body)',
        menu: 'var(--background-menu)',
        card: 'var(--background-card)',
        black: 'var(--background-black)',
        'surface-oncolor': 'var(--surface-oncolor)',
        'notification-white': 'var(--background-notification-white)',
        'nav-header': 'var(--background-nav-header)',
        neutral: {
            800: 'var(--background-neutral-800)',
            400: 'var(--background-neutral-400)',
            300: 'var(--background-neutral-300)',
            200: 'var(--background-neutral-200)',
            100: 'var(--background-neutral-100)',
            50: 'var(--background-neutral-50)',
            25: 'var(--background-neutral-25)',
        },
        primary: {
            DEFAULT: 'var(--background-primary)',
            400: 'var(--background-primary-400)',
            200: 'var(--background-primary-200)',
            50: 'var(--background-primary-50)',
            25: 'var(--background-primary-25)',
        },
        secondary: {
            DEFAULT: 'var(--background-secondary)',
            default: 'var(--background-secondary-default)',
            50: 'var(--background-secondary-50)',
            25: 'var(--background-secondary-25)',
        },
        tertiary: {
            DEFAULT: 'var(--background-tertiary)',
            50: 'var(--background-tertiary-50)',
            25: 'var(--background-tertiary-25)',
        },
        success: {
            DEFAULT: 'var(--background-success)',
            50: 'var(--background-success-50)',
            25: 'var(--background-success-25)',
        },
        info: {
            DEFAULT: 'var(--background-info)',
            50: 'var(--background-info-50)',
            25: 'var(--background-info-25)',
        },
        warning: {
            DEFAULT: 'var(--background-warning)',
            50: 'var(--background-warning-50)',
            25: 'var(--background-warning-25)',
        },
        error: {
            DEFAULT: 'var(--background-error)',
            50: 'var(--background-error-50)',
            25: 'var(--background-error-25)',
        },
        'SA-Flag': {
            DEFAULT: 'var(--background-SA-Flag)',
            50: 'var(--background-SA-Flag-50)',
            25: 'var(--background-SA-Flag-25)',
        },
    },

    border: {
        DEFAULT: 'var(--border)',
        // secondary: 'var(--border-secondary)',
        primary: {
            DEFAULT: 'var(--border-primary)',
            default: 'var(--border-primary-default)',
            light: 'var(--border-primary-light)',
        },
        secondary: {
            DEFAULT: 'var(--border-secondary)',
            default: 'var(--border-secondary-default)',
            light: 'var(--border-secondary-light)',
        },
        tertiary: {
            DEFAULT: 'var(--border-tertiary)',
            light: 'var(--border-tertiary-light)',
        },
        success: {
            DEFAULT: 'var(--border-success)',
            light: 'var(--border-success-light)',
        },
        info: {
            DEFAULT: 'var(--border-info)',
            light: 'var(--border-info-light)',
        },
        warning: {
            DEFAULT: 'var(--border-warning)',
            light: 'var(--border-warning-light)',
        },
        error: {
            DEFAULT: 'var(--border-error)',
            light: 'var(--border-error-light)',
        },
        neutral: {
            primary: 'var(--border-neutral-primary)',
            secondary: 'var(--border-neutral-secondary)',
            tertiary: 'var(--border-neutral-tertiary)',
        },
        background: {
            white: 'var(--border-background-white)',
            neutral: 'var(--border-background-neutral)',
        },
        white: 'var(--border-white)',
        'white-40': 'var(--border-white-40)',
        black: 'var(--border-black)',
        'oncolor-transparent-30': 'var(--border-oncolor-transparent-30)',
        'transparent-10': 'var(--border-transparent-10)',
        disabled: 'var(--border-disabled)',
    },
    text: {
        default: {
            DEFAULT: 'var(--text-default)',
            disabled: 'var(--text-default-disabled)',
            oncolor: { disabled: 'var(--text-default-oncolor-disabled)' },
        },
        primary: {
            DEFAULT: 'var(--text-primary)',
            light: 'var(--text-primary-light)',
            'sa-flag': 'var(--text-primary-sa-flag)',
        },
        secondary: { DEFAULT: 'var(--text-secondary)', light: 'var(--text-secondary-light)' },
        tertiary: { DEFAULT: 'var(--text-tertiary)', light: 'var(--text-tertiary-light)' },
        oncolor: {
            primary: 'var(--text-oncolor-primary)',
            secondary: 'var(--text-oncolor-secondary)',
            tertiary: 'var(--text-oncolor-tertiary)',
        },
        paragraph: {
            primary: 'var(--text-paragraph-primary)',
            secondary: 'var(--text-paragraph-secondary)',
        },
        display: 'var(--text-display)',
        info: 'var(--text-info)',
        success: 'var(--text-success)',
        warning: 'var(--text-warning)',
        error: 'var(--text-error)',
    },
    control: {
        primary: {
            DEFAULT: 'var(--control-primary)',
            checked: 'var(--control-primary-checked)',
            hovered: 'var(--control-primary-hovered)',
            pressed: 'var(--control-primary-pressed)',
            focused: 'var(--control-primary-focused)',
            '-readonly': 'var(--control-primary--readonly)',
        },
        neutral: {
            checked: 'var(--control-neutral-checked)',
            hovered: 'var(--control-neutral-hovered)',
            pressed: 'var(--control-neutral-pressed)',
            focused: 'var(--control-neutral-focused)',
        },
        icon: {
            hovered: 'var(--control-icon-hovered)',
            pressed: 'var(--control-icon-pressed)',
            disabled: 'var(--control-icon-disabled)',
        },
        border: {
            DEFAULT: 'var(--control-border)',
            disabled: 'var(--control-border-disabled)',
        },
        disabled: 'var(--control-disabled)',
        'ripple-effect': 'var(--control-ripple-effect)',
    },
    tag: {
        background: {
            'on-color': 'var(--tag-background-on-color)',
            neutral: {
                DEFAULT: 'var(--tag-background-neutral)',
                light: 'var(--tag-background-neutral-light)',
            },
            success: {
                DEFAULT: 'var(--tag-background-success)',
                light: 'var(--tag-background-success-light)',
            },
            info: {
                DEFAULT: 'var(--tag-background-info)',
                light: 'var(--tag-background-info-light)',
            },
            warning: {
                DEFAULT: 'var(--tag-background-warning)',
                light: 'var(--tag-background-warning-light)',
            },
            error: {
                DEFAULT: 'var(--tag-background-error)',
                light: 'var(--tag-background-error-light)',
            },
            primary: {
                DEFAULT: 'var(--tag-background-primary)',
                light: 'var(--tag-background-primary-light)',
            },
            secondary: {
                DEFAULT: 'var(--tag-background-secondary)',
                light: 'var(--tag-background-secondary-light)',
            },
            tertiary: {
                DEFAULT: 'var(--tag-background-tertiary)',
                light: 'var(--tag-background-tertiary-light)',
            },
        },
        border: {
            'on-color': 'var(--tag-border-on-color)',
            neutral: {
                DEFAULT: 'var(--tag-border-neutral)',
                light: 'var(--tag-border-neutral-light)',
            },
            success: {
                DEFAULT: 'var(--tag-border-success)',
                light: 'var(--tag-border-success-light)',
            },
            info: {
                DEFAULT: 'var(--tag-border-info)',
                light: 'var(--tag-border-info-light)',
            },
            warning: {
                DEFAULT: 'var(--tag-border-warning)',
                light: 'var(--tag-border-warning-light)',
            },
            error: {
                DEFAULT: 'var(--tag-border-error)',
                light: 'var(--tag-border-error-light)',
            },
            primary: {
                DEFAULT: 'var(--tag-border-primary)',
                light: 'var(--tag-border-primary-light)',
            },
            secondary: {
                DEFAULT: 'var(--tag-border-secondary)',
                light: 'var(--tag-border-secondary-light)',
            },
            tertiary: {
                DEFAULT: 'var(--tag-border-tertiary)',
                light: 'var(--tag-border-tertiary-light)',
            },
        },
        text: {
            neutral: 'var(--tag-text-neutral)',
            success: 'var(--tag-text-success)',
            info: 'var(--tag-text-info)',
            warning: 'var(--tag-text-warning)',
            primary: 'var(--tag-text-primary)',
            error: 'var(--tag-text-error)',
            secondary: 'var(--tag-text-secondary)',
            tertiary: 'var(--tag-text-tertiary)',
        },
        icon: {
            neutral: 'var(--tag-icon-neutral)',
            success: 'var(--tag-icon-success)',
            info: 'var(--tag-icon-info)',
            warning: 'var(--tag-icon-warning)',
            primary: 'var(--tag-icon-primary)',
            error: 'var(--tag-icon-error)',
            secondary: 'var(--tag-icon-secondary)',
            tertiary: 'var(--tag-icon-tertiary)',
        },
        dot: 'var(--tag-dot)',
    },
    icon: {
        oncolor: 'var(--icon-oncolor)',
        unselected: 'var(--unselected-tab-icon)',
        default: {
            DEFAULT: 'var(--icon-default)',
            400: 'var(--icon-default-500)',
            500: 'var(--icon-default-500)',
            disabled: 'var(--icon-default-disabled)',
            oncolor: { disabled: 'var(--icon-default-oncolor-disabled)' },
        },
        neutral: {
            DEFAULT: 'var(--icon-neutral)',
            light: 'var(--icon-neutral-light)',
        },
        success: {
            DEFAULT: 'var(--icon-success)',
            light: 'var(--icon-success-light)',
        },
        info: {
            DEFAULT: 'var(--icon-info)',
            light: 'var(--icon-info-light)',
        },
        warning: {
            DEFAULT: 'var(--icon-warning)',
            light: 'var(--icon-warning-light)',
        },
        error: {
            DEFAULT: 'var(--icon-error)',
            light: 'var(--icon-error-light)',
        },
        primary: {
            DEFAULT: 'var(--icon-primary)',
            light: 'var(--icon-primary-light)',
            400: 'var(--icon-primary-400)',
        },
        secondary: {
            DEFAULT: 'var(--icon-secondary)',
            light: 'var(--icon-secondary-light)',
        },
        tertiary: {
            DEFAULT: 'var(--icon-tertiary)',
            light: 'var(--icon-tertiary-light)',
        },

        background: {
            success: {
                light: 'var(--background-success-light)',
            },
            info: {
                light: 'var(--background-info-light)',
            },
            warning: {
                light: 'var(--background-warning-light)',
            },
            error: {
                light: 'var(--background-error-light)',
            },
            primary: {
                light: 'var(--background-primary-light)',
            },
        },
    },
    button: {
        background: {
            disabled: {
                oncolor: 'var(--background-disabled-oncolor)',
            },
            neutral: {
                DEFAULT: 'var(--background-neutral-default)',
                hovered: 'var(--background-neutral-hovered)',
                pressed: 'var(--background-neutral-pressed)',
                selected: 'var(--background-neutral-selected)',
                focused: 'var(--background-neutral-focused)',
            },
            black: {
                DEFAULT: 'var(--background-black-default)',
                hovered: 'var(--background-black-hovered)',
                pressed: 'var(--background-black-pressed)',
                selected: 'var(--background-black-selected)',
                focused: 'var(--background-black-focused)',
            },
            primary: {
                DEFAULT: 'var(--background-primary-default)',
                hovered: 'var(--background-primary-hovered)',
                pressed: 'var(--background-primary-pressed)',
                selected: 'var(--background-primary-selected)',
                focused: 'var(--background-primary-focused)',
                secondary: {
                    DEFAULT: 'var(--background-primary-secondary-default)',
                    hovered: 'var(--background-primary-secondary-hovered)',
                    pressed: 'var(--background-primary-secondary-pressed)',
                    selected: 'var(--background-primary-secondary-selected)',
                    focused: 'var(--background-primary-secondary-focused)',
                },
            },
            error: {
                DEFAULT: 'var(--background-error-default)',
                hovered: 'var(--background-error-hovered)',
                pressed: 'var(--background-error-pressed)',
                selected: 'var(--background-error-selected)',
                focused: 'var(--background-error-focused)',
                secondary: {
                    DEFAULT: 'var(--background-error-secondary-default)',
                    hovered: 'var(--background-error-secondary-hovered)',
                    pressed: 'var(--background-error-secondary-pressed)',
                    selected: 'var(--background-error-secondary-selected)',
                    focused: 'var(--background-error-secondary-focused)',
                },
            },
            oncolor: {
                DEFAULT: 'var(--background-oncolor-default)',
                hovered: 'var(--background-oncolor-hovered)',
                pressed: 'var(--background-oncolor-pressed)',
                selected: 'var(--background-oncolor-selected)',
                focused: 'var(--background-oncolor-focused)',
            },
            transparent: {
                DEFAULT: 'var(--background-transparent-default)',
                hovered: 'var(--background-transparent-hovered)',
                pressed: 'var(--background-transparent-pressed)',
                selected: 'var(--background-transparent-selected)',
                focused: 'var(--background-transparent-focused)',
            },
        },
        label: {
            error: {
                primary: {
                    oncolor: {
                        1: 'var(--label-error-primary-oncolor-1)',
                        2: 'var(--label-error-primary-oncolor-2)',
                        3: 'var(--label-error-primary-oncolor-3)',
                    },
                },
            },
            transparent: {
                hover: {
                    oncolor: 'var(--label-transparent-hover-oncolor)',
                },
                pressed: {
                    oncolor: 'var(--label-transparent-pressed-oncolor)',
                },
                selected: {
                    oncolor: 'var(--label-transparent-selected-oncolor)',
                },
            },
        },
        icon: {
            transparent: {
                hover: {
                    oncolor: 'var(--icon-transparent-hover-oncolor)',
                },
                pressed: {
                    oncolor: 'var(--icon-transparent-pressed-oncolor)',
                },
                selected: {
                    oncolor: 'var(--icon-transparent-selected-oncolor)',
                },
            },
        },
    },
}
