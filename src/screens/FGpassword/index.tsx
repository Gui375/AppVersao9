import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity , Alert} from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService   from '../../services/UserService/UserService';


const FGpassword = () => {

   //Variavel que não pode ser excluida
   const navigation = useNavigation<StackTypes>();
   //

   
  //Declaração de variaveis
  const [login, setLogin] = useState<string>('');
  const [NewPassword, setNewPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState(false);

  const userService = new UserService();
 

  const handleLogin = async () => {

    if (!login) {
      setUsernameError(true);
      return;
    } else {
      setUsernameError(false);
    }

    const isValid = await userService.validateUser(login, NewPassword);
    alert(isValid);
    if (isValid) {
      alert('Usuário autenticado com sucesso'); 
      //Alert.alert('Sucesso', 'Usuário autenticado com sucesso');
      setLogin('');
      setNewPassword('');
    } else {
      alert('Usuário e/ou senha inválidos');
      //Alert.alert('Erro', 'Usuário e/ou senha inválidos');
    }
  };
//O que será mostrado no site
  return (
    
    <View style={styles.container}>

      <div style={styles.div}>
        {/* <Text style={styles.title}>Login</Text> */}
        <h1 style={styles.title}>Esqueci a senha</h1>
        <br />
        <br />
      <TextInput
        style={[styles.input, usernameError && styles.errorInput]} // Aplicar estilo de erro se usernameError for true
        placeholder="Login"
        onChangeText={setLogin}
        value={login}
      />
      <TextInput
        style={styles.input}
        textContentType='password'
        placeholder="Nova senha"
        secureTextEntry={true}
        onChangeText={setNewPassword}
        value={NewPassword}
      />


       <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.button} activeOpacity={0.1}>
      <Text style={styles.buttonText} id=''>Entrar</Text>
    </TouchableOpacity>
    </div>
    </View>
  );
};

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6495ED',
   
  },
  div:{
    backgroundColor : '#191970',
    position : 'absolute',
    padding : '1%',
    borderRadius : 16,
    alignItems: 'center',
  
  },
  title: {
    fontSize: 26, 
    marginBottom: 20,     
    color:'#FFFFFF',
    height: 10, 
    alignItems: 'center',      
    textAlign:'center'
  },
  FGTSenha:{
    fontSize: 15,
    marginBottom: 12,
    color:'white',
    alignItems: 'center',      
    textAlign:'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    color:'#FFFFFF',
    padding: '5%',
    textAlign:'center'
    
    
  },
  errorInput: {
    borderColor: 'red', // Alterar a cor da borda para vermelho se houver erro
  },
  button: {
      width: '100%',
      height: 40,
      borderRadius: 8,
      backgroundColor: '#836FFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#836FFF',
      color:'#836FFF',
    },
    buttonText: {
      color:'#FFFFFF',
      fontSize: 16,
    },
    corTextoIN:{
      color:'#FFFFFF',
    },
    corTextoOut:{
      color:'#FFFFFF',
    }
});
export default FGpassword;