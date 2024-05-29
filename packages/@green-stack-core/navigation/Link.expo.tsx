import { Link as ExpoLink } from 'expo-router'
import { View, Text } from 'react-native'
import { parseNativeWindStyles } from '../styles/parseNativeWindStyles'
import type { UniversalLinkProps } from './Link.types'

/* --- <Link/> --------------------------------------------------------------------------------- */

export const Link = (props: UniversalLinkProps) => {
    // Props
    const {
        children,
        href,
        style,
        replace,
        onPress,
        target,
        asChild,
        push,
        testID,
        nativeID,
        allowFontScaling,
        numberOfLines,
        maxFontSizeMultiplier
    } = props

    // -- Flags --

    const isText = typeof children === 'string'

    // -- Nativewind --

    const { nativeWindStyles, restStyle } = parseNativeWindStyles(style)
    const finalStyle = { ...nativeWindStyles, ...restStyle }

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
        <ExpoLink
            href={href}
            style={{
                display,
                flex,
                flexDirection,
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
            }}
            onPress={onPress}
            target={target}
            asChild={asChild}
            replace={replace}
            push={push}
            testID={testID}
            nativeID={nativeID}
            allowFontScaling={allowFontScaling}
            numberOfLines={numberOfLines}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
        >
            {isText ? (
                <Text style={{
                    ...wrapperStyles,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: flexDirection,
                    width,
                }}>
                    {children}
                </Text>
            ) : (
                <View style={{
                    ...wrapperStyles,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: flexDirection,
                }}>
                    {children}
                </View>
            )}
        </ExpoLink>
    )
}

