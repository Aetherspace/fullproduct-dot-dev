import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import type { UniversalLinkProps } from './Link.types'
import { parseNativeWindStyles } from '../styles/parseNativeWindStyles'

/* --- <Link/> --------------------------------------------------------------------------------- */

export const Link = (props: UniversalLinkProps) => {
    // Props
    const {
        children,
        href,
        className,
        style,
        replace,
        onPress,
        target,
        scroll,
        shallow,
        passHref,
        prefetch,
        locale,
        as,
    } = props

    // -- Flags --

    const isText = typeof children === 'string'

    // -- Nativewind --

    const { nativeWindStyles, nativeWindClassName, restStyle } = parseNativeWindStyles(style)
    const finalStyle = { ...nativeWindStyles, ...restStyle } as React.CSSProperties
    const allClassNames = [className, nativeWindClassName].filter(Boolean).join(' ')

    const {
        positioningClassNames,
        wrapperClassNames,
    } = allClassNames.split(' ').reduce((acc, _className) => {
        // Positioning classnames
        const DISPLAY = ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'inline-grid', 'hidden']
        const FLEX = ['flex-', 'self-']
        const POSITIONING = ['static', 'fixed', 'absolute', 'relative', 'sticky', 'top', 'right', 'bottom', 'left']
        const DIMENSIONS = ['w-', 'h-']
        const MARGIN = ['m-', 'mt-', 'mr-', 'mb-', 'ml-']
        const POS_CLASSNAMES = [...DISPLAY, ...FLEX, ...POSITIONING, ...DIMENSIONS, ...MARGIN]
        // Sort className into right category
        if (POS_CLASSNAMES.includes(_className)) {
            acc.positioningClassNames = [acc.positioningClassNames, _className].filter(Boolean).join(' ')
        } else {
            acc.wrapperClassNames = [acc.wrapperClassNames, _className].filter(Boolean).join(' ')
        }
        return acc
    }, {
        positioningClassNames: '',
        wrapperClassNames: ''
    })

    const {
        // Positioning styles
        display,
        flex,
        flexDirection = 'row',
        alignSelf,
        top,
        right,
        bottom,
        left,
        width,
        height,
        position,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        // Inner wrapper styles
        ...wrapperStyles
     } = finalStyle as any

    // -- Render --

    return (
        <NextLink
            href={href}
            className={positioningClassNames}
            style={finalStyle as unknown as ComponentProps<typeof NextLink>['style']}
            onClick={onPress}
            target={target}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            passHref={passHref}
            prefetch={prefetch}
            locale={locale}
            as={as}
        >
            {isText ? (
                <span
                    className={wrapperClassNames}
                    style={{
                        ...wrapperStyles,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: flexDirection,
                        width,
                    }}
                >
                    {children}
                </span>
            ) : (
                <div
                    className={wrapperClassNames} 
                    style={{
                        ...wrapperStyles,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: flexDirection,
                        width,
                    }}
                >
                    {children}
                </div>
            )}
        </NextLink>
    )
}
