import { Appbar } from 'react-native-paper';

export default function TopBar() {
	return (
		<Appbar.Header>
			<Appbar.BackAction onPress={() => {}} />
			<Appbar.Content title='Title' />
		</Appbar.Header>
	);
}
