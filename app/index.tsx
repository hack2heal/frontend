import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import App from './src/App';

export default function Main() {
	return (
		<PaperProvider theme={{ version: 2 }}>
			<App />
		</PaperProvider>
	);
}

AppRegistry.registerComponent('Main', () => Main);
