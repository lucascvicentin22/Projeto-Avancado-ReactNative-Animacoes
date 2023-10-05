import { useEffect, useState } from "react"
import { Animated, StyleSheet, View} from "react-native"

const Animacao06 = () => {
    const [rotacao] = useState(new Animated.Value(0))
    const animacaoRotacao = () => {
        Animated.timing(
            rotacao,
            {
                toValue : 1,
                duration : 2000,
                useNativeDriver : false
            }
        ).start(() => {
            rotacao.setValue(0)
            requestAnimationFrame(animacaoRotacao)
        })

    }

    useEffect(() => {
        animacaoRotacao()
    }, []) // QUnado passado colchetes vazios dentro do useEffect, o método é chamado apenas

    const rotacaoGraus = rotacao.interpolate({
        inputRange : [0, 1],
        outputRange : ["0deg" , "360deg"]
    })
    
    const styles = StyleSheet.create({
        container : {
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center'
        },
        quadrado : {
            width : 50,
            height : 50,
            backgroundColor : 'blue'
        }
    
    })

    return(

        <View style={styles.container}>
            <Animated.View 
                style={[
                    styles.quadrado,
                    {transform : [{ rotate : rotacaoGraus}]}
                ]}
            />
        </View>    
    )
   
}


export default Animacao06