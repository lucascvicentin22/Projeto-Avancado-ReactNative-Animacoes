const { Animated, View, TouchableOpacity, Text, StyleSheet } = require("react-native")

const Animacao04 = () => {
    const posicao = new Animated.Value(0)

    const corDeFundo = posicao.interpolate({
        inputRange : [0, 150],  //Valores de Entrada
        outputRange : ["blue", "red"]
    })

    const moveQuadrado = () => {
        Animated.loop (
            Animated.sequence([
                Animated.timing(
                    posicao,
                    {
                        toValue : 150,
                        duration : 1000,
                        useNativeDriver : false
                    }
                ),
                Animated.timing(
                    posicao,
                    {
                        toValue : 0,
                        duration : 1000,
                        useNativeDriver : false
                    }
                )
            ])
        )

        .start()
    }
    
    return(
        <View style = {styles.container}>
            <Animated.View style = {[
                styles.quadrado,
                {
                    backgroundColor : corDeFundo,
                    transform : [{ translateX : posicao }]
                }
            ]}>
                
            </Animated.View>
            <View>
                <TouchableOpacity style = {styles.botao} onPress={moveQuadrado}>
                    <Text>Mover Quadrado</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    quadrado : {
        width : 100,
        height : 100
    },
    botaoContainer : {
        marginTop : 20,

    },
    botao : {
        backgroundColor : 'lightgray',
        padding : 10,
        borderRadius : 5
    }
})

export default Animacao04