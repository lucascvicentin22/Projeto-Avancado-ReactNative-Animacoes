const { useState } = require("react")
const { View, Text, StyleSheet, Button, UIManager, LayoutAnimation } = require("react-native")

UIManager.setLayoutAnimationEnabledExperimental && 
UIManager.setLayoutAnimationEnabledExperimental (true)

const Animacao05 = () => {

    const [itens, setItens] = useState(["Item 1" , "Item 2" , "Item 3"])

    const adicionarItem = () => {
        const novosItens = [...itens, `Item ${itens.length + 1}`]
        setItens(novosItens)

        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        // O spring é um tipo de animação que simula um movimento elástico
    }

    const removerItem = () => {
        if(itens.length > 0) { // Se tiver algum item
            const novosItens = itens.slice(0, -1)
            setItens(novosItens)
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.titulo}> Lista de Itens</Text>

            {itens.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Text>
                        {item}
                    </Text>
                </View>
            ))}
            <View style = {styles.botoes}>

                <Button title="Adicionar Item" onPress={adicionarItem} />
                <Button title="Remover Item" onPress={removerItem} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20
        
    },
    titulo : {
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 10
    },
    item : {
        padding : 10,
        backgroundColor : '#EEE',
    marginBottom : 10   
    },
    botoes : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal: 16, // Espaçamento horizontal entre os botões
    }
})

export default Animacao05