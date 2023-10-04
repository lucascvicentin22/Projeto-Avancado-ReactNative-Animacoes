import React, { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

const Animacao03 = () => {
  const [largura, setLargura] = useState(new Animated.Value(150));
  const [altura, setAltura] = useState(new Animated.Value(35));
  const [opacidade, setOpacidade] = useState(new Animated.Value(0));

  const geraGrafico = () => {
    Animated.sequence([
      Animated.timing(opacidade, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(altura, {
        toValue: 300,
        duration: 1000,
      }),
    ]).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 80,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: "#4169E1",
        }}
      >
        <TouchableOpacity onPress={geraGrafico}>
          <Text style={{ fontSize: 25, color: "#FFFFFF" }}>
            Gerar Gráfico
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            width: largura,
            height: altura,
            backgroundColor: "red",
            justifyContent: "center",
            opacity: opacidade,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              backgroundColor: "red",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            R$150,00
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Animacao03;
