import { Stack, Tabs } from 'expo-router';

export default function TabLayout(){
    return (
        <Tabs>
            <Stack.Screen name="(Inicio)" options={{headerShown: false }} />
            <Stack.Screen name="+not-found" />
        </Tabs>
    );
}