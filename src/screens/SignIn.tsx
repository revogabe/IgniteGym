import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base"
import { useNavigation } from "@react-navigation/native"

import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

import LogoSvg from "@assets/logo.svg"
import BackgroundImage from "@assets/background.png"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate("signUp")
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
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Password" secureTextEntry />

          <Button title="Login" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Não tem uma conta?
          </Text>
          <Button
            title="Create account"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
