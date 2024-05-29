'use client'
import React from 'react'
import { View } from '../components/styled'

// -i- This is a regular react client component
// -i- Use this file for applying your universal root layout
// -i- It will be rendered by 'apps/expo' on mobile from the 'ExpoRootLayout' component
// -i- It will also be rendered by 'apps/next' on web from the 'Document' component

/* --- Types ----------------------------------------------------------------------------------- */

type UniversalRootLayoutProps = {
    children: React.ReactNode
}

/* --- <UniversalRootLayout/> ------------------------------------------------------------------ */

const UniversalRootLayout = ({ children }: UniversalRootLayoutProps) => (
    <View className="flex flex-1">
        {children}
    </View>
)

/* --- Exports --------------------------------------------------------------------------------- */
  
export default UniversalRootLayout
