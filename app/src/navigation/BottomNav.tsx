import { MessageCircle, Settings, User } from '@tamagui/lucide-icons';
import { Button, XStack } from 'tamagui';

type ScreenName = 'chat' | 'profile' | 'settings';

interface BottomNavProps {
	activeScreen: ScreenName;
	setActiveScreen: (screen: ScreenName) => void;
}

export default function BottomNav({
	activeScreen,
	setActiveScreen,
}: BottomNavProps) {
	return (
		<XStack
			width='100%'
			height='$6'
			borderTopWidth={1}
			borderColor='$borderColor'
			backgroundColor='$background'
			alignItems='center'
			justifyContent='space-around'
			position='fixed'
			bottom={15}
			left={0}
			right={0}
		>
			<NavButton
				icon={User}
				isActive={activeScreen === 'profile'}
				onPress={() => setActiveScreen('profile')}
			/>
			<NavButton
				icon={MessageCircle}
				isActive={activeScreen === 'chat'}
				onPress={() => setActiveScreen('chat')}
			/>
			<NavButton
				icon={Settings}
				isActive={activeScreen === 'settings'}
				onPress={() => setActiveScreen('settings')}
			/>
		</XStack>
	);
}

interface NavButtonProps {
	icon: any;
	isActive: boolean;
	onPress: () => void;
}

function NavButton({ icon, isActive, onPress }: NavButtonProps) {
	return (
		<Button
			chromeless
			icon={icon}
			circular
			size='$9'
			onPress={onPress}
			opacity={isActive ? 1 : 0.5}
		/>
	);
}
