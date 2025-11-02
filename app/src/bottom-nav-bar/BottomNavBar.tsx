import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const ProfileRoute = () => <Text>Profile</Text>;

const ChatRoute = () => <Text>AI Chat</Text>;

const SettingsRoute = () => <Text>Settings</Text>;

export default function MyComponent() {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{
			key: 'profile',
			title: 'Profile',
			focusedIcon: 'account',
			unfocusedIcon: 'account',
		},
		{ key: 'chat', title: 'AI Chat', focusedIcon: 'chat' },
		{ key: 'settings', title: 'Settings', focusedIcon: 'dots-horizontal' },
	]);

	const renderScene = BottomNavigation.SceneMap({
		profile: ProfileRoute,
		chat: ChatRoute,
		settings: SettingsRoute,
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	);
}
