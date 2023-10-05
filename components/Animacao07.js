import { useRef } from "react"

const { View, Text, TouchableOpacity } = require("react-native")

const Animacao07 = () => {
    const minhaViewRef = useRef(null)

    const alteraCor = () => {
        if(minhaViewRef.current){// Validando se a referencia esta preenchida
            minhaViewRef.current.setNativeProps({ // Aplicando props Nativas
                style : {backgroundColor : "green"}
            })
        }
    }

    
    return(
        <View>
            <View 
            ref={minhaViewRef}
            style = {{
                width : 100,
                height : 100,
                backgroundColor : 'blue',
                justifyContent : 'center',
                alignItem : 'center'
            }}>
                <Text style = {{
                    color : 'white'
                }}>

                </Text>

            </View>
            <TouchableOpacity onPress={alteraCor}>
                <Text>Alterar Cor</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Animacao07