import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';

const FormularioScreen = ({ navigation }) => {
  const [texturaSolo, setTexturaSolo] = useState('');
  const [phSolo, setPhSolo] = useState('');
  const [nivelMateriaOrganica, setNivelMateriaOrganica] = useState('');
  const [drenagemSolo, setDrenagemSolo] = useState('');
  const [profundidadeSolo, setProfundidadeSolo] = useState('');
  const [compactacaoSolo, setCompactacaoSolo] = useState('');
  const [retencaoAgua, setRetencaoAgua] = useState('');
  const [presencaRochas, setPresencaRochas] = useState('');

  const handleSubmit = () => {
    if (!texturaSolo || !phSolo || !nivelMateriaOrganica || !drenagemSolo || !profundidadeSolo || !compactacaoSolo || !retencaoAgua || !presencaRochas) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
    } else {
      // Lógica de envio do formulário aqui
      // Limpar os campos após o envio
      setTexturaSolo('');
      setPhSolo('');
      setNivelMateriaOrganica('');
      setDrenagemSolo('');
      setProfundidadeSolo('');
      setCompactacaoSolo('');
      setRetencaoAgua('');
      setPresencaRochas('');
      // Navegar para a próxima tela ou mostrar mensagem de sucesso
      Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
      navigation.navigate('Home'); // Retorna para a tela inicial após enviar
    }
  };

  return (
    <ImageBackground source={require('../assets/agro32.png')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Formulário de Tipos de Solo</Text>
        <TextInput
          style={styles.input}
          placeholder="Textura do Solo"
          value={texturaSolo}
          onChangeText={text => setTexturaSolo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="pH do Solo"
          value={phSolo}
          onChangeText={text => setPhSolo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nível de Matéria Orgânica"
          value={nivelMateriaOrganica}
          onChangeText={text => setNivelMateriaOrganica(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Drenagem do Solo"
          value={drenagemSolo}
          onChangeText={text => setDrenagemSolo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Profundidade do Solo"
          value={profundidadeSolo}
          onChangeText={text => setProfundidadeSolo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Compactação do Solo"
          value={compactacaoSolo}
          onChangeText={text => setCompactacaoSolo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Capacidade de Retenção de Água"
          value={retencaoAgua}
          onChangeText={text => setRetencaoAgua(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Presença de Rochas"
          value={presencaRochas}
          onChangeText={text => setPresencaRochas(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 35,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#fff', // Cor da caixa de texto
  },
  submitButton: {
    backgroundColor: '#006400',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default FormularioScreen;
