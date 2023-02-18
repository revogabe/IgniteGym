import { FlatList, HStack, VStack } from "native-base"
import { useState } from "react"

import { Group } from "@components/Group"
import { HomeHeader } from "@components/HomeHeader"
import { color } from "native-base/lib/typescript/theme/styled-system"

export function Home() {
  const [groups, setGroups] = useState(["Costa", "Biceps", "Triceps", "Ombro"])
  const [groupSelected, setGroupSelected] = useState("")

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 4 }}
        my={4}
        maxH={10}
      />
    </VStack>
  )
}
