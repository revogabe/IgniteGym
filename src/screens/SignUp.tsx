import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base"
import { useNavigation } from "@react-navigation/native"

import LogoSvg from "@assets/logo.svg"
import BackgroundImage from "@assets/background.png"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp() {
  const navigation = useNavigation()

  function handlebBackToLogin() {
    navigation.goBack()
  }
  return (
    <ScrollView
      _contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={8} pb={8} justifyContent="space-between">
        <Image
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input placeholder="Name" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Password" secureTextEntry />

          <Button title="Create Account" />
        </Center>

        <Button
          title="Back to Login"
          variant="outline"
          mt={24}
          onPress={handlebBackToLogin}
        />
      </VStack>
    </ScrollView>
  )
}
