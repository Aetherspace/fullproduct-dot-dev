import React from 'react'
import { View, Link, Image, H1, H2, Text, P } from '../components/styled'
import { HydratedRouteProps } from '@green-stack/core/navigation/UniversalRouteScreen.helpers'
import GithubIcon from '../icons/GithubIcon'

/* --- <HomeScreen/> --------------------------------------------------------------------------- */

const HomeScreen = (props: HydratedRouteProps) => {
  // Props
  const { params, searchParams } = props

  // -- Render --

  return (
    <View className="flex flex-1 justify-center items-center px-2 bg-gray-800">
      <View className="max-w-[400px]">
        <Link href="https://github.com/Aetherspace" target="_blank">
          <Image src={require('../assets/green-stack-logo.png')} width={90} height={90} className="mb-3" />
        </Link>
        <H1>FullProduct.dev 🚀</H1>
        <View className="h-2" />
        <H2 className="md:px-0 text-primary-400">Universal App Starterkit</H2>
        <View className="h-2" />
        <P className="flex text-gray-400 flex-row">
          <Text>By </Text><Text className="font-bold">Thorr ⚡️ </Text>
          <Link className="font-bold" href="https://codinsonn.dev" target="_blank">
            codinsonn.dev
          </Link>
        </P>
        <View className="h-12" />
        <View className="flex-col md:flex-row">
          <Link
            className="w-full md:w-auto bg-slate-500 px-3 py-3 md:py-1 justify-center items-center md:justify-start rounded-md no-underline"
            href="https://github.com/Aetherspace/universal-app-router"
            target="_blank" 
          >
            <View className="flex-row w-full justify-center md:justify-start items-center">
              <GithubIcon size={18} fill="#fff" />
              <View className="w-2" />
              <Text className="text-xl md:text-lg text-gray-100">
                <Text className="font-bold">Star</Text> on GitHub
              </Text>
            </View>
          </Link>
          <View className="relative md:w-3 w-0 h-3 md:h-0" />
          <Link
            className="w-full md:w-auto bg-slate-500 px-3 py-3 md:py-1 justify-center items-center md:justify-start rounded-md no-underline"
            href="https://universal-base-starter-docs.vercel.app/"
            target="_blank" 
          >
            <Text className="w-full text-center text-xl md:text-lg text-gray-100">
              Preview <Text className="font-bold">Docs</Text>
            </Text>
          </Link>
        </View>
        <P className="mt-4 text-gray-400 italic">
          Coming to ProductHunt soon
        </P>
      </View>
    </View>
  )
}

/* --- Exports --------------------------------------------------------------------------------- */

export default HomeScreen
