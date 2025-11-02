import { Send } from '@tamagui/lucide-icons';
import { Button, H2, Input, Paragraph, ScrollView, YStack } from 'tamagui';

export default function ChatScreen() {
	return (
		<YStack flex={1} padding='$4' gap='$3' paddingBlock='$10'>
			<H2 alignSelf='center' marginBlock='$4'>
				AI Chatbot
			</H2>

			{/* Chat Messages Area */}
			<ScrollView
				flex={1}
				backgroundColor='$backgroundSoft'
				padding='$3'
				borderRadius='$4'
			>
				{/* This is where you would map over your messages */}
				<MessageBubble sender='ai' text='Hi there! How can I help you today?' />
				<MessageBubble sender='user' text="What's the weather like?" />
				<MessageBubble
					sender='ai'
					text="I'm sorry, I can't check the weather."
				/>
			</ScrollView>

			{/* Input Area */}
			<YStack
				position='absolute'
				bottom='$7'
				left='$4'
				right='$4'
				flexDirection='row'
				alignItems='center'
				gap='$2'
			>
				<Input flex={1} placeholder='Type your message...' />
				<Button icon={Send} circular size='$3' />
			</YStack>
		</YStack>
	);
}

type MessageBubbleProps = {
	sender: 'ai' | 'user';
	text: string;
};

function MessageBubble({ sender, text }: MessageBubbleProps) {
	const isUser = sender === 'user';
	return (
		<YStack
			alignSelf={isUser ? 'flex-end' : 'flex-start'}
			backgroundColor={isUser ? '$blue5' : '$gray5'}
			padding='$3'
			borderRadius='$6'
			marginBlock='$2'
			maxWidth='80%'
		>
			<Paragraph color='$color'>{text}</Paragraph>
		</YStack>
	);
}
