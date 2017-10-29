import React, {Component} from 'react'
import{
	Dimensions,
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')

class Menu extends Component{
	
	renderItemsMenu(){
		const genres = ["Básica", "Avanzada", "Revistas", "Tesis y proyectos", "Películas", "Música", "Tema/Materia", "Autor"]
		const {itemSelectedValue} = this.props
		return genres.map((element, key) => (
			<TouchableHighlight 
				style = { element == itemSelectedValue ? [styles.items, styles.itemSelected]: styles.noSelectedItems}
				onPress = {() => this.props.itemSelected(element)}
			>
				<Text style = {styles.text}>{element}</Text>
			</TouchableHighlight>
		))
	}

	render(){
		return(
			<View style = {styles.menu}>
				<View style = {styles.ieContainer}>
					<View style = {styles.ieImage}>
						<Image
							style = {styles.ie}
							source = {require('../resources/logoeafit.png')}
						/>
					</View>
				</View>
				<ScrollView style = {styles.scrollContainer}>

					<View style = {styles.textWithIcon}>
						<View style = {styles.withIcon}>
							<Icon
								style = {styles.iconWithText}
								name = "search"
								color = "white"
								size = {28}
							/>
							<Text style = {styles.text}>Búsquedas</Text>
						</View>
						<Icon
							style = {styles.rightIcon}
							name = "angle-right"
							color = "white"
							size = {25}
						/>
					</View>

					{this.renderItemsMenu()}
					
					<View style = {styles.textWithIcon}>
						<View style = {styles.withIcon}>
							<Icon
								style = {styles.iconWithText}
								name = "download"
								color = "white"
								size = {28}
							/>
							<Text style = {styles.text}>Mis Búsquedas</Text>
						</View>
						<Icon
							style = {styles.rightIcon}
							name = "angle-right"
							color = "white"
							size = {25}
						/>
					</View>

					<View style = {styles.textWithIcon}>
						<View style = {styles.withIcon}>
							<Icon
								style = {styles.iconWithText}
								name = "book"
								color = "white"
								size = {28}
							/>
							<Text style = {styles.text}>Notificaciones</Text>
						</View>
						<Icon
							style = {styles.rightIcon}
							name = "angle-right"
							color = "white"
							size = {25}
						/>
					</View>
					
				</ScrollView>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	menu: {
		flex: 1,
		width: width / 2 + 60,
		height: height,
		backgroundColor: "#000066"
	},
	ieContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: width / 2 + 59,
		borderColor: 'white',
		borderBottomWidth: 3,
		paddingHorizontal: 20,
		paddingVertical: 20,
		//backgroundColor: '#0080FF'
	},
	ie: {
		width: 200,
		height: 90,
		marginRight: 60
	},
	ieImage: {
		flexDirection: 'row',
		alignItems: 'center'

	},
	text: {
		color: 'white',
		fontSize: 15
	},
	textWithIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		borderColor: 'white',
		borderBottomWidth: 3
	},
	withIcon: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	scrollContainer: {
		width: width / 2 + 59,
		backgroundColor: '#000066'
	},
	rightIcon: {
		paddingRight: 20
	},
	iconWithText: {
		marginRight: 18,
		paddingLeft: 20
	},
	items: {
		paddingVertical: 20,
		paddingLeft: 20,
		marginTop: 5
	},
	itemSelected: {
		borderLeftWidth: 5,
		borderColor: '#0080FF'

	},
	noSelectedItems: {
		paddingVertical: 15,
		paddingLeft: 25,
		marginTop: 5
	}
})

export default Menu