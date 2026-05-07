import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.text}>
				Este aplicativo foi desenvolvido para demonstrar navegação entre telas
				em um projeto mobile.
			</Text>
			<Text style={styles.text}>
				Aqui você pode adicionar informações sobre o app, a equipe ou a
				disciplina.
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 24,
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 28,
		fontWeight: '700',
		marginBottom: 16,
		color: '#111827',
	},
	text: {
		fontSize: 16,
		lineHeight: 24,
		color: '#374151',
		marginBottom: 12,
	},
});
