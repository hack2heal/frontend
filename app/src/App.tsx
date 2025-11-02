import { tamaguiConfig } from '@/tamagui.config';
import { useState } from 'react';
import { TamaguiProvider, YStack } from 'tamagui';
import { ProfileScreen } from './features/profile/ProfileScreen';

import ChatScreen from './features/chat/ChatScreen';
import SettingsScreen from './features/settings/SettingsScreen';
import BottomNav from './navigation/BottomNav';

type ScreenName = 'chat' | 'profile' | 'settings';

export default function App() {
	const [activeScreen, setActiveScreen] = useState<ScreenName>('chat');

	const renderScreen = () => {
		switch (activeScreen) {
			case 'chat':
				return <ChatScreen />;
			case 'profile':
				return <ProfileScreen />;
			case 'settings':
				return <SettingsScreen />;
			default:
				return <ChatScreen />;
		}
	};

	return (
		<TamaguiProvider config={tamaguiConfig}>
			{/* Main App Container */}
			<YStack
				flex={1}
				alignItems='center'
				justifyContent='center'
				backgroundColor='$background'
			>
				{/* Screen Content Area */}
				<YStack flex={1} width='100%' maxWidth={600}>
					{renderScreen()}
				</YStack>

				{/* Navigation Bar */}
				<BottomNav
					activeScreen={activeScreen}
					setActiveScreen={setActiveScreen}
				/>
			</YStack>
		</TamaguiProvider>
	);
}
