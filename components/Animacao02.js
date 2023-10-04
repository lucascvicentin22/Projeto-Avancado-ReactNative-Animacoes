const { useState } = require("react")
const { Animated, View, Text } = require("react-native")

const Animacao02 = () => {
    const [largura, setLargura] = useState(new Animated.Value(150))
    const [altura, setAltura] = useState(new Animated.Value(35))

    Animated.loop(
        Animated.sequence([
            Animated.timing(
                largura,
                {
                    toValue : 350,
                    duration : 2000
                }
            ),
            Animated.timing(
                largura,
                {
                    toValue : 150,
                    duration : 2000
                }
            )
        ])
    ).start()

    return(
        <View style={{alignItem : 'center'}}>
            <Animated.View 
                style={{
                    width : largura,
                    height : altura,
                    backgroundColor : '#4169E1',
                    justifyContent : 'center',
                    borderRadius : 25
                }}
            >
                <Text style={{
                    color : '#FFFFFF',
                    fontSize : 20,
                    textAlign : 'center'
                }}>
                    Carregando...

                </Text>

            </Animated.View>

        </View>
    )
}

export default Animacao02