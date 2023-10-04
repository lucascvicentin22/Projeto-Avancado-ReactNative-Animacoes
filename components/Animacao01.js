import { useState } from "react"
import { Animated, View } from "react-native"

const Animacao01 = () => {
    const [largura, setLargura] = useState(new Animated.Value(0))
    const [altura, setAltura] = useState(new Animated.Value(30))

    Animated.parallel([
        Animated.timing(
            largura, 
            {
                toValue : 420, 
                duration : 2000
            }
        ),
        Animated.timing(
            altura,
            {
                toValue : 500,
                duration : 1500
            }
        )
    ]).start()

    return (
        <View>
            <Animated.View style={{
                width : largura,
                height : altura,
                backgroundColor : '#222'
            }}>

            </Animated.View>
        </View>
    )
}

export default Animacao01