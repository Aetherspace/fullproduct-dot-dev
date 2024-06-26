import { styled } from 'nativewind'
import { Text as RNText, View as RNView } from 'react-native'
import { Link as UniversalLink } from '@green-stack/core/navigation/Link'
import { Image as UniversalImage } from '@green-stack/core/components/Image'

/* --- Primitives ------------------------------------------------------------------------------ */

export const View = styled(RNView, '')
export const Text = styled(RNText, '')
export const Image = styled(UniversalImage, '')

/* --- Typography ------------------------------------------------------------------------------ */

export const H1 = styled(RNText, 'font-bold text-4xl text-white')
export const H2 = styled(RNText, 'font-bold text-3xl text-gray-300')
export const H3 = styled(RNText, 'font-bold text-lg text-gray-300')

export const P = styled(RNText, 'text-base')

/* --- Fix for Next Link ----------------------------------------------------------------------- */

export const Link = styled(UniversalLink, 'text-blue-500 underline')
export const LinkText = styled(RNText, 'text-blue-500 underline')
export const TextLink = (props: Omit<React.ComponentProps<typeof UniversalLink>, 'className'> & { className?: string }) => {
    const { className, style, children, ...universalLinkProps } = props
    return (
        <LinkText className={className} style={style}>
            <UniversalLink {...universalLinkProps}>
                {children}
            </UniversalLink>
        </LinkText>
    )
}
